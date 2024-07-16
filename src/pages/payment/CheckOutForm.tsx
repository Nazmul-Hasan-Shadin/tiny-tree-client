import { removeCart } from "@/redux/feature/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/feature/checkout/checkOutApi";
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
  const [createOrder]=useCreateOrderMutation()
  const dispatch=useAppDispatch()

  const cartId=cart.map(cart=>cart._id)
  console.log(cartId);
  

  const price = cart.reduce((total, item) => total + item.price!, 0);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/payment/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price: price * 100 }), // Convert price to cents
        });
        const data = await response.json();
      
        
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret()
  }, [price]);

  

  const handleSubmit = async (event) => {
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
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

 
    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                name:'testbro'
            }
        }
    })

    if (confirmError) {
        console.log('confirm er',confirmError);
        
    }
    else{
        console.log(paymentIntent);
        if(paymentIntent.status==='succeeded'){
            toast.success(`$ ${price} payment successful`)
        }  
        
        dispatch(removeCart(cartId))  //here how to remove cart product from cart  after scucesufyl mpyament

        createOrder({...checkOutInfo, transictionId:paymentIntent.id,amount:paymentIntent.amount})



       



        
    }


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
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
        />

        <button  type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-reds-500"> {error} </p>
      </form>
    </div>
  );
};

export default CheckOutForm;
