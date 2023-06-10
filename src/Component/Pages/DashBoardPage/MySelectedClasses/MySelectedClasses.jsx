import { FaMoneyCheckAlt, FaRegTrashAlt } from "react-icons/fa";
import Title from "../../../Shared/Title/Title";

const MySelectedClasses = () => {
    return (
        <div className="mb-10">
        <Title topHeader={'My Selected Classes'} bottomTitle={'All the selected Classes.Pending for payment or get Deleted'}></Title>
      <div className="overflow-x-auto">
        <table className="table rounded-md table-zebra bg-blue-100">
          {/* head */}
          <thead>
            <tr>
              <th>no.</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Course Name</td>
              <td>Stephen Bauman</td>
              <td>$90</td>
              <td>
                <button className="btn btn-circle text-xl bg-green-400 btn-sm"><FaMoneyCheckAlt></FaMoneyCheckAlt></button>
              </td>
              <td>
                <button className="btn btn-circle text-xl bg-red-400 btn-sm"><FaRegTrashAlt></FaRegTrashAlt></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MySelectedClasses;