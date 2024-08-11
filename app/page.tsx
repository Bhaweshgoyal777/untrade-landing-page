"use client"; // This is a client component 👈🏽
import axios from "axios";
import * as ReactComponent  from  "react";
import FormDetails from "./formpage";
export default function Home() {
  const [paymentInitial , setPaymentInitial] = ReactComponent.useState(false)
  const handleClick = () => {
      let state = paymentInitial ? false : true ; 
      setPaymentInitial(state)
  }
  return (
    !paymentInitial ? <div className="Untrade-landing-page">
    <h1 className="Heading">Untrade.io</h1>
    <div className="paymentDiv"> 
    <button className="initiaPayment" onClick = {handleClick} >Create Payment</button>
    </div>
  </div>: 
  //  <div>
      <FormDetails/>
  //  </div>
  );
}
