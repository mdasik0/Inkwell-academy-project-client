import { useState } from "react";
import Title from "../../../Shared/Title/Title";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import EnrollCard from "../EnrollCard/EnrollCard";

const MyEnrolledClass = () => {
    const {user} = useContext(AuthContext)
    const[enrollData,setEnrollData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/enrolledClasses/${user?.email}`)
        .then(data => {
            setEnrollData(data.data)
        })
    },[])
    return (
        <div className="flex items-center justify-center p-20 flex-col">
            <Title topHeader={'Enrolled Classes'} bottomTitle={'This are the classes you enrolled successfully after the payment is done'}></Title>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {
                enrollData.map(data => <EnrollCard key={data._id} data={data}></EnrollCard>)
            }

            </div>
        </div>
    );
};

export default MyEnrolledClass;