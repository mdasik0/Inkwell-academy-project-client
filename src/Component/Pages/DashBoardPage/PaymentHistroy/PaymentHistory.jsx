import { useContext, useEffect, useState } from "react";
import Title from "../../../Shared/Title/Title";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const[enrollData,setEnrollData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/enrolledClasses/${user?.email}`)
        .then(data => {
            setEnrollData(data.data)
        })
    },[])
    return (
        <div>
            <Title topHeader={'Payment History'} bottomTitle={'This are the payment history of the classes you enrolled in.'}></Title>
            <div>
                {enrollData.length}
            </div>
        </div>
    );
};

export default PaymentHistory;