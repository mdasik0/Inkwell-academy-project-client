import { loadStripe } from "@stripe/stripe-js";
import Title from "../../../Shared/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(null);
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/paymentToClass/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setPrice(data.price);
        setLoading(false);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <Title
        topHeader={"Payment"}
        bottomTitle={"Please proceed to payment"}
      ></Title>
      <div className="w-full flex items-center justify-center">
        {loading ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          price !== null && (
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} price={price}></CheckoutForm>
            </Elements>
          )
        )}
      </div>
    </div>
  );
};

export default Payment;
