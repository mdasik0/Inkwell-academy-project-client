import { useQuery } from "@tanstack/react-query";
import Title from "../../../../../Shared/Title/Title";

const ManageClasses = () => {
  const { data: classes = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  return (
    <div>
      <Title
        topHeader={"Manage Classes"}
        bottomTitle={
          "In here we see all the classes added by Instructors. Admin Approve and deny the classes here and also he can give reviews"
        }
      ></Title>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* row 1 */}
        {classes.map((clas) => (
          <div key={clas._id} className="card md:w-96 w-full bg-base-100 shadow-xl">
            <figure className="h-[250px]">
              <img
            src={clas.classImg}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{clas.className}</h2>
              <div className="text-sm font-semibold">
              <h4>Instructor: {clas.name}</h4>
              <h4>Email: {clas.email}</h4>
              <h4>Seats: {clas.seats}</h4>
              <h4>Price: ${clas.price}</h4>
              <h4>Status: <span className={
                    clas.status === "pending"
                      ? `text-yellow-500`
                      : clas.status === "approved"
                      ? `text-green-600`
                      : `text-red-500`
                  }>{clas.status}</span></h4>
              
              </div>
              <div className="card-actions justify-between">
                
                <button className={clas.status === 'approved' || clas.status === 'denied' ? 'btn-disabled px-4 py-2 text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white duration-500 text-sm font-semibold w-full ' : `px-4 py-2 text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white duration-500 text-sm font-semibold w-full `}>Approve</button>
                <button className={clas.status === 'denied'? `btn-disabled px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white duration-500 text-sm font-semibold w-full` : `px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white duration-500 text-sm font-semibold w-full`}>Deny</button>
                <button className="px-4 py-2 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-500 text-sm font-semibold w-full">Review</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
