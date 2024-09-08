"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import Checkout from "./checkout";
import axios from "axios";

function FormDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit , setSubmit] = useState(false);
  const [paymentInitial , setPayment] = useState(false)
  const [session , setSession] = useState(null)

  const handleClick = () => {
      let state = paymentInitial ? false : true
      setPayment(state)
  }

  const onChangeValueName = (event) => {
    setName(event.target.value);
  };

  const onChangeValueEmail = (event) => {
    setEmail(event.target.value)
  }

  const onSubmit = () => {
    let state = paymentInitial ? false : true
    axios.post(`http://localhost:5002/api/v1/stripe/create-checkout-session?email=${email}`, {
        amount: "150",
        currency: 'usd',
        phone : '1234567890'
    })
    .then((response) => {
        console.log(response);
        if(response){
            setSession(response.data.data)
            setPayment(state)

        }
    })
    .catch((error) => {
        console.log(error.message);
    })
}

return (
    paymentInitial ? <Checkout sessionId={session}/> : <div className="topDiv">
    <p style={{display : "flex" , justifyContent  :'center' , fontSize : "900" , fontWeight : "bolder" , fontFamily : "cursive" , marginTop : "10%"}}>Please fill the form</p>
    <br />
    <div className="form-div">
      <span>Please Enter Your Name</span>
      <input
      className="name-input"
        placeholder="Full-Name"
        onChange={onChangeValueName}
        value={name}
      />
    </div>
    <div className="form-div">
      <span>Please Enter Your Email</span>
      <input
      className="name-input"
        placeholder="E-mail"
        onChange={onChangeValueEmail}
        value={email}
      />
    </div>
  <div className="outerDiv">
    <div className="submit-btn">
      <button style={{fontWeight : "900" , color : "Green"}} onClick={onSubmit}>Submit</button>
    </div>
  </div>
  </div>
  );
}

export default FormDetails;
