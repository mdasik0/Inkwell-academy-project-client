import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure.post(`/create-payment-intent`,price)
    .then(res => {
      setClientSecret(res?.data?.clientSecret)
    });
  } , [price, axiosSecure])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("PaymentMethod", paymentMethod);
    }

    



  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          className="border-2 border-blue-300 p-2 w-[450px]"
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
        <button
          className={`px-4 py-2 text-blue-500 border-2 border-blue-500 my-6 hover:bg-blue-500 hover:text-white duration-500 text-sm font-semibold w-full`}
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-sm font-semibold text-red-500">{cardError}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
