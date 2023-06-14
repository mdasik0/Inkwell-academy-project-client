import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [TransactionId, setTransationId] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const priceInt = parseInt(price);
  console.log(data);

  useEffect(() => {
    if (priceInt > 0) {
      axios
        .post(
          "https://b7a12-summer-camp-server-side-mdasik0.vercel.app/create-payment-intent",
          { price: priceInt },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
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
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransationId(paymentIntent.id);
      const payment = {
        email: user?.email,
        TransactionId: paymentIntent.id,
        price,
        date: new Date(),
        enrollStatus: "pending",
        classId: data?.classId,
        selectedItem: data?._id,
        className: data?.className,
        classImg: data?.classImg,
      };

      axiosSecure
        .post("/payment", payment, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        })
        .then((res) => {
          if (res.data) {
            Swal.fire(
              "Payment Successful",
              "You have successfully completed the payment!",
              "success"
            );
            navigate("/dashboard/selectedClasses");
          } else {
            Swal.fire(
              "Payment Failed",
              "Failed to save payment information.",
              "error"
            );
            navigate("/dashboard/selectedClasses");
          }
        })
        .catch((error) => {
          console.log("Error saving payment:", error);
          Swal.fire(
            "Payment Failed",
            "An error occurred while saving payment information.",
            "error"
          );
        });
      axios
        .patch(
          `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/updateData/${data?.classId}`
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            console.log("Data updated successfully");
          } else {
            console.log("Data update failed");
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          className="border-2 border-blue-300 p-2 w-96"
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
      {TransactionId && (
        <p className="text-sm font-semibold text-green-500">
          Transation Complete with transactionId : {TransactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
