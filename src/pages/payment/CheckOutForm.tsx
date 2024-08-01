import { removeCart } from "@/redux/feature/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/feature/checkout/checkOutApi";
import {
  useUpdateProductMutation,
  useUpdateProductQuantityMutation,
} from "@/redux/feature/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const cart = useAppSelector((state) => state.cart.products);
  const checkOutInfo = useAppSelector((state) => state.checkout);
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useAppDispatch();

  const cartId = cart.map((cart) => cart._id);

  const [updateProductQuantity] = useUpdateProductQuantityMutation();

  const price = cart.reduce(
    (total, item) => total + item.price! * item.selectedQuantity!,
    0
  );

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/payment/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price: price * 100 }), // Convert price to cents
          }
        );
        const data = await response.json();

        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, [price]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message || "An error occurred while creating the payment method.");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "testbro",
          },
        },
      });

    if (confirmError) {
      console.log("confirm er", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        toast.success(`$ ${price} payment successful`);
      }

      const productUpdates = cart.map((cart) => ({
        _id: cart._id,
        quantity: cart.quantity! - cart.selectedQuantity!,
      }));

      console.log(productUpdates);

      updateProductQuantity(productUpdates);

      dispatch(removeCart(cartId));
      createOrder({
        ...checkOutInfo,
        transictionId: paymentIntent.id,
        amount: paymentIntent.amount,
      });
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="p-3 border rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full py-3 px-6 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 disabled:bg-green-400"
        >
          Pay Now
        </button>
        {error && <p className="text-center text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
