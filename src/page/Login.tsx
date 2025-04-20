import { ChangeEvent, useState } from "react";
import Button from "../components/Button";
import BmiCalculate from "../components/BmiCalculate";

// Create function separately in a component name "BmiCalculate.tsx", then import it here
function Login() {
  return (
    <>
       <BmiCalculate></BmiCalculate> 
    </>
  );
}

export default Login;