import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Elements/Button/Button";

function Detail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  return (
    <div className="flex justify-center items-center p-7">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-slate-800 font-bold text-center mb-12">
          Users Detail
        </h1>
        <div className="max-w-full p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="w-full">
            <div>
              <h3 className="text-xl text-slate-800 font-semibold">
                {data.name} | {data.username}
              </h3>
              <p className="text-blue-500 hover:underline cursor-pointer mt-2">
                {data.email}
              </p>
              <p className="text-slate-800 font-bold mt-6 mb-2">{data.phone}</p>
              <p className="text-slate-800 font-bold">{data.website}</p>
            </div>
            <div className="flex gap-2 mt-5">
              <Link to={`/update/${data.id}`}>
                <Button className="bg-blue-800">Edit</Button>
              </Link>
              <Link to="/">
                <Button className="bg-green-700">Back</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
