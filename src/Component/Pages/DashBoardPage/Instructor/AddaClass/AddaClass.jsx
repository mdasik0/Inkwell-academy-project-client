import { useContext} from "react";
import Title from "../../../../Shared/Title/Title";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddaClass = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const name = form.name.value;
      const price = form.price.value;
      const className = form.className.value;
      const classImg = form.classImg.value;
      const seats = parseInt(form.seats.value);
      const classObject = {className,classImg,name, email,Totalseats: seats,seats,enrollmentCount : 0,price,status: 'pending'}
      fetch(`http://localhost:5000/addClass`,{
        method:'POST',
        headers:{
          'content-type': 'application/json',
          Authorization : `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(classObject)
      })
      .then(res => res.json())
      .then((data) => {
        if(data.insertedId){
          
          Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class has Been Added Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
            }
        })
    }
  return (
    <div className="">
        <Title topHeader={'Add a class'} bottomTitle={'Add a class for the students status will be pending until the admin accepts it'}></Title>
        <div className="border-4  border-blue-500 rounded-xl p-10">

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <label className="rounded">
            <input
            required
              type="text" 
              name='className'
              placeholder="Class Name here"
              className="input w-[400px] input-bordered"
              />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <label className="rounded">
            <input
            required
              type="text" 
              name='classImg'
              placeholder="Class Image here"
              className="input w-[400px] input-bordered"
              />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="rounded">
            <input
              type="email" 
              name='email'
              readOnly
              defaultValue={user?.email}
              placeholder="Your email here"
              className="input w-[400px] input-bordered"
              />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="rounded">
            <input
              type="text" 
              name='name'
              readOnly
              defaultValue={user?.displayName}
              placeholder="YOur name here"
              className="input w-[400px] input-bordered"
              />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <label className="rounded">
            <input
            required
              type="text" 
              name='seats'
              placeholder="Seats available for class here"
              className="input w-[400px] input-bordered"
              />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="rounded">
            <input
            required
              type="text" 
              name='price'
              placeholder="Enroll Price here"
              className="input w-[400px] input-bordered"
              />
          </label>
        </div>
        <div>
            <input className="btn bg-blue-400 text-white" type="submit" value="Add Class" />
        </div>
      </form>
              </div>
    </div>
  );
};

export default AddaClass;
