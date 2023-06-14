import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUserRole = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        if (user && user?.email) {
          const response = await fetch(
            `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/users/${user?.email}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            }
          );
          if (response.ok) {
            const text = await response.text();
            const data = JSON.parse(text);
            if (data && data?.role) {
              setUserData(data?.role);
            } else {
              setUserData("");
            }
          } else {
            setUserData("");
          }
        }
      } catch (error) {
        setUserData("");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return [userData, loading];
};

export default useUserRole;
