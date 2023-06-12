import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false)
  const [TransactionId, setTransationId] = useState('')
  const {user} = useContext(AuthContext);

  const priceInt = parseInt(price)

  useEffect(() => {
    if (priceInt > 0) {
      axios
        .post("http://localhost:5000/create-payment-intent", { price: priceInt }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log("Error creating payment intent:", error);
        });
    }
  }, [priceInt]);
  


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
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'unknown',
            email: user?.email || 'unknown',
          },
        },
      }
    );

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false)
      if(paymentIntent.status === 'succeeded'){

        setTransationId(paymentIntent.id);
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-sm font-semibold text-red-500">{cardError}</p>
        )}
        {
          TransactionId && <p className="text-sm font-semibold text-green-500">Transation Complete with transactionId : {TransactionId}</p>
        }
    </div>
  );
};

export default CheckoutForm;
