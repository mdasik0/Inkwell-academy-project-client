import Title from "../../../Shared/Title/Title";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import EnrollCard from "../EnrollCard/EnrollCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const MyEnrolledClass = () => {
  const { user } = useContext(AuthContext);

  const {
    data: enrollData = [],
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const data = await axios(
        `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/enrolledClasses/${user?.email}`
      );
      return data?.data;
    },
    queryKey: ["data"],
  });

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (error) return "An error has Occurred";

  return (
    <div className="flex items-center justify-center p-20 flex-col">
      <Helmet>
        <title>Inkwell | Enrolled Class</title>
      </Helmet>
      <Title
        topHeader={"Enrolled Classes"}
        bottomTitle={
          "This are the classes you enrolled successfully after the payment is done"
        }
      ></Title>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {enrollData.map((data) => (
          <EnrollCard key={data._id} data={data}></EnrollCard>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClass;
