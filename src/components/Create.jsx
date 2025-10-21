import { useState } from "react";
import InputContainer from "../Elements/Input/InputContainer";
import Button from "../Elements/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const handleCreate = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center p-7">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-slate-800 font-bold text-center mb-12">
          Input User
        </h1>
        <div className="max-w-full p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <form onSubmit={handleCreate}>
            <InputContainer
              label="Email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <InputContainer
              label="Name"
              name="name"
              type="text"
              placeholder="Jhon Doe"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <InputContainer
              label="Phone"
              name="phone"
              type="text"
              placeholder="0812345678910"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <div className="flex gap-2 mt-5">
              <Button type="submit" className="bg-blue-800">
                Submit
              </Button>
              <Link to="/">
                <Button className="bg-green-700">
                  Back
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
