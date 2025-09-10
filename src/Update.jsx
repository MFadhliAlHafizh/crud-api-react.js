import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputContainer from "./Elements/Input/InputContainer";
import Button from "./Elements/Button/Button";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    name: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        // console.log(res);
        setValues(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/users/${id}`, values)
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
          Update User
        </h1>
        <div className="max-w-full p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <form onSubmit={handleUpdate}>
            <InputContainer
              label="Email"
              name="email"
              type="email"
              placeholder="email@example.com"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <InputContainer
              label="Name"
              name="name"
              type="text"
              placeholder="Jhon Doe"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <InputContainer
              label="Phone"
              name="phone"
              type="text"
              placeholder="0812345678910"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <div className="flex gap-2 mt-5">
              <Button type="submit" className="bg-blue-800">
                Update
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

export default Update;
