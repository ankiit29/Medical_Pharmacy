import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CLogin(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    files:[],
    price:Number,
    confirm:Boolean
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    
  };

  const navigate = useNavigate();

  const login = (event) => {
    localStorage.setItem("user", JSON.stringify(user));

    event.preventDefault();
    if (user.email === "abc@gmail.com" && user.password === "abc123") {
      console.log("clicked");
      if(props.name==="Customer"){
        navigate("/PUpload");
      }
      else 
      navigate("/VUpload");
    } else alert("Enter Correct Email and Password");
  };


  return (
    <>
      <div className="my-3 text-center">
        <h3>Login As {props.name}</h3>
      </div>
      <div className="container-fluid w-50 my-5">
        <form className="row g-3" onSubmit={submit}>
          <div className="col-md-12">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputname"
              value={user.name}
              onChange={handleInputs}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              value={user.email}
              onChange={handleInputs}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
              autoComplete="true"
              value={user.password}
              onChange={handleInputs}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address1"
              className="form-control"
              id="inputAddress"
              value={user.address1}
              onChange={handleInputs}
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              className="form-control"
              id="inputAddress2"
              value={user.address2}
              onChange={handleInputs}
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="inputCity"
              value={user.city}
              onChange={handleInputs}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
              name="state"
              className="form-select"
              value={user.state}
              onChange={handleInputs}
            >
              <option>Choose...</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
              <option>Chandigarh</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              name="zip"
              className="form-control"
              id="inputZip"
              value={user.zip}
              onChange={handleInputs}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              name="submit"
              className="btn btn-primary"
              onClick={login}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CLogin;
