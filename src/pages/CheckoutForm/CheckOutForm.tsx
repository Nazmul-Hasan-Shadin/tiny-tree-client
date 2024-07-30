import { setCheckOutData } from "@/redux/feature/checkout/checkoutSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

type FormValues = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
};

const CheckOutForm: React.FC = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    dispatch(setCheckOutData(data));
    navigate('/payment')
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
          <p className="mt-4 text-gray-600">
            Please fill out the form below to complete your purchase.
          </p>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("customerName", { required: "Name is required" })}
              />
              {errors.customerName && (
                <p className="text-red-500 text-xs italic">
                  {errors.customerName.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                {...register("customerEmail", { required: "Email is required" })}
              />
              {errors.customerEmail && (
                <p className="text-red-500 text-xs italic">
                  {errors.customerEmail.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="text"
                placeholder="Phone number"
                {...register("customerPhone", {
                  required: "Phone number is required",
                })}
              />
              {errors.customerPhone && (
                <p className="text-red-500 text-xs italic">
                  {errors.customerPhone.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="Enter your address"
                {...register("customerAddress", { required: "Address is required" })}
              />
              {errors.customerAddress && (
                <p className="text-red-500 text-xs italic">
                  {errors.customerAddress.message}
                </p>
              )}
            </div>

           
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
