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

  useEffect(() => {
    if (paymentInitial === true) {
      console.log("Calling Axios Request");
  
      axios.post('http://192.168.1.3:5002/api/v1/stripe/create-customer', {
        amount: "1000",
        currency: 'usd'
      })
      .then((response) => {
        console.log(response);
        if(response){
          setSession(response.data.data.session)
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        console.log("Request completed");
      });
    }  
  } , [paymentInitial])

  const onChangeValueName = (event) => {
    setName(event.target.value);
  };

  const onChangeValueEmail = (event) => {
    setEmail(event.target.value)
  }

  const onSubmit = () => {
    let state = paymentInitial ? false : true
    axios.post(`http://192.168.1.3:5002/api/v1/stripe/create-customer?email=${email}`, {
        amount: "1000",
        currency: 'usd'
    })
    .then((response) => {
        console.log(response);
        if(response){
            setSession(response.data.data.session)
        }
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("Request completed");
        setPayment(state)
    });
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
