import { useEffect, useState } from "react";


import "./styles/App.css";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  const [list, setList] = useState([]);
  const [orgUserList, setOrgUserList] = useState("");

  const [modalClicked, setModalClicked] = useState(false);

  const [loading,setLoading] =useState(true) 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/users?limit=9");
        const allUserData = await response.json();
        setOrgUserList(allUserData.users);

        setList(allUserData.users);
        setLoading(false)
        console.log(orgUserList, "originallist");
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const handleSearched = (searchedText) => {
    setList(
      orgUserList.filter((item) =>
        item.firstName.toLowerCase().includes(searchedText)
      )
    );
  };

  const handleResetSearched = () => {
    setList(orgUserList);
  };

  //handle submitted userdata from modal
  const handleSubmittedData = (userData) => {
    setModalClicked(false);

    setOrgUserList((prevOrgUserList) => [userData, ...prevOrgUserList]);
    setList((prevList) => [userData, ...prevList]);

    //reset newUser
    setNewUser({ firstName: "", email: "", phone: "", id: "" });
  };

  //function passed to Modal.jsx
  const closeModel = () => {
    setModalClicked(false);
  };

  return (
    <main>
      <div className="app-container">
        <Sidebar />

        {/* content-box */}
        <div className="content-box ">
          <Topbar
            handleSearched={handleSearched}
            handleResetSearched={handleResetSearched}
          /> 

          <div className="border-b-2 mt-4 mb-6"></div>

          {/* main-table */}
          <div className="flex justify-between">
            <div className="customer-list">Customer List</div>
            <div
              className="add-btn"
              onClick={() => {
                setModalClicked(true);
              }}
            >
              Add Customer
            </div>
          </div>
          

       
{/* table-card */}
 {loading ? (
  <div className="fixed z-50 text-2xl">loading...</div>
) : (
  <div className="overflow-x-auto rounded-lg">
    <table className="min-w-full divide-y divide-SlateGray">
     <thead className="font-semibold  text-black">
        <tr>
          <th scope="col" className="table-head">User ID</th>
          <th scope="col" className="table-head">First Name</th>
          <th scope="col" className="table-head">Phone</th>
          <th scope="col" className="table-head">Email</th>
        </tr>
      </thead> 
      
      <tbody className=" divide-y-8 divide-gray-200 rounded-full">
        
        {list.map((item) => (
          
          <tr key={item.id} /* className="bg-white" */ >
           
            <td className="table-td ">{item.id}</td>
            <td className="table-td">{item.firstName}</td>
            <td className="table-td">{item.phone}</td>
            <td className="table-td">{item.email}</td>
     
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
)}  



        </div>
      </div>

      {/* modal */}
      {modalClicked && (
        <Modal
          closeModel={closeModel}
          handleSubmittedData={handleSubmittedData}
        />
      )}
    </main>
  );
}

export default App;
