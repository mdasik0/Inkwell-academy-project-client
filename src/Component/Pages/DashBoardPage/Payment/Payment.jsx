import { loadStripe } from "@stripe/stripe-js";
import Title from "../../../Shared/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// TODO: Provide key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);




const Payment = () => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClass/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPrice(data.price);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Title topHeader={"Payment"} bottomTitle={"Please proceed to payment"}></Title>
      <div className="w-full flex items-center justify-center">
        {loading ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          price !== null && (
            <Elements stripe={stripePromise}>
              <CheckoutForm price={price}></CheckoutForm>
            </Elements>
          )
        )}
      </div>
    </div>
  );
};

export default Payment;
