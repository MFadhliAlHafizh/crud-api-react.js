import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Input/Input";

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:5000/users/${id}`)
        .then(() => {
          setData(data.filter((item) => item.id !== id));
          // console.log(res);
          // location.reload();
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex items-center flex-col p-7">
      <h1 className="text-3xl text-slate-800 font-bold text-center mb-12">
        Users Data
      </h1>
      <div className="w-full max-w-4xl">
        <div className="flex justify-between gap-3 mb-3">
          <Input
            type="search"
            name="search"
            placeholder="Search..."
            className="max-w-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/create">
            <Button className="whitespace-nowrap bg-green-700">Add +</Button>
          </Link>
        </div>
        <div className="overflow-auto p-4 bg-white shadow-[0px_3px_6px_3px_rgba(0,_0,_0,_0.1)]">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-500 text-sm text-slate-800 font-semibold tracking-wide whitespace-nowrap">
                <th className="p-4 text-start">No</th>
                <th className="p-4 text-start">Email</th>
                <th className="p-4 text-start">Name</th>
                <th className="p-4 text-start">Phone</th>
                <th className="p-4 text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-400 text-sm text-slate-800 whitespace-nowrap"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{item.email}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.phone}</td>
                    <td className="p-4 flex gap-1">
                      <>
                        <Link to={`/detail/${item.id}`}>
                          <Button className="bg-blue-500">Detail</Button>
                        </Link>
                      </>
                      <>
                        <Link to={`/update/${item.id}`}>
                          <Button className="bg-blue-800">Edit</Button>
                        </Link>
                      </>
                      <>
                        <Button
                          className="bg-red-600"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center pt-8 pb-4 text-slate-500">
                    {search ? "No matching users found." : "No users available."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
