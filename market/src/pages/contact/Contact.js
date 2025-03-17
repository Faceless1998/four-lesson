import React from "react";
import Counter from "./Counter";
import Todo from "./Todo";
import DigitalClock from "./DigitalClock";
//props(properties) and states

//props - კავშირს ორ JSX ფაილს შორის
//state - ცვლადი დამახასიათებელი მხოლოდ კონკრეტული ელემენტისთვის - Hook

 export const Contact = () =>{

    
     return (
     <>
        <Todo />

        <DigitalClock />

        <Counter initialCount={2} />
     </>
     )
 }