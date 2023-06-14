import { useContext, useEffect, useState } from "react";
import Title from "../../../Shared/Title/Title";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import PayHistoryCard from "../PayHistoryCard/PayHistoryCard";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [enrollData, setEnrollData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/paymentHistory/${user?.email}`
      )
      .then((data) => {
        setEnrollData(data.data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Inkwell | Payment History</title>
      </Helmet>
      <Title
        topHeader={"Payment History"}
        bottomTitle={
          "This are the payment history of the classes you enrolled in."
        }
      ></Title>
      <div className="grid grid-cols-1 gap-4">
        {/* card */}
        {enrollData.map((data) => (
          <PayHistoryCard data={data} key={data._id}></PayHistoryCard>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
