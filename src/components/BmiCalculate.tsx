import { ChangeEvent, useState } from "react"; 
 import Button from "./Button"; 

 function BmiCalculate() { 
   // Use "state" as a place to keep height & weight value 
   const [height, setHeight] = useState<number>(0); 
   const [weight, setWeight] = useState<number>(0); 
   const [bmi, setBmi] = useState<string>(""); 
    
   // EX 2. Create onChangeHeight function 
     // add + to set value as number instead of string 
     // Use "React Hook Form" to help in coding in case the form has many onChangeXX function ex. username, pwd, email, address, etc. 
   const onChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => { 
     setHeight(+event.target.value); 
     console.log(height); 
   }; 
   const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => { 
     setWeight(+event.target.value) 
     console.log(weight); 
   };  

   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
     event.preventDefault(); 
     const bmi = weight / (height / 100) ** 2; // นน. / ส่วนสูงยกกำลังสอง 
     const bmi_tofixed = bmi.toFixed(2); // set as 2 decimal place value 
     console.log(`BMI: ${bmi}`); 
     setBmi(bmi_tofixed) 
   }; 
   // structure 
   // const obj = { 
   //   event: { 
   //     target: { 
   //       value: "", 
   //     }, 
   //   }, 
   // }; 

   // commnd to reach out the "value" above 
   // obj.event.target.value 

   return ( 
     <> 
         <h2>{bmi}</h2> 
         <form onSubmit={onSubmit}> 
             <div> 
                 <label htmlFor="height">Height:</label> 
                 <input  
                   type="text"  
                   id="height"  
                   name="height"  
                   // EX 2. add Event (see line 9) 
                   onChange={onChangeHeight} 
                 /> 
             </div> 
             <div> 
                 <label htmlFor="weight">Weight:</label> 
                 <input  
                   type="text"  
                   id="weight"  
                   name="weight"  
                   onChange={onChangeWeight}/> 
             </div> 
             {/* Import "Button" component */} 
             <Button /> 
         </form> 
     </> 
   ); 
 } 

 export default BmiCalculate 
