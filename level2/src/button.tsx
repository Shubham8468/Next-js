"use client"
import React, { useState,useRef } from "react";

type buttonProps={
    data:string,
    action:()=>void // ak function hai jo void type return krta hai
}

function Button({data,action}:buttonProps){
    const [count,setCount]=useState<number>();
    const input=useRef<HTMLInputElement>(null);
    console.log(input.current?.value);

    const handleClick=(e:React.MouseEvent)=>{
      e.preventDefault();

    }
   const handelChange=(e:React.ChangeEvent)=>{
      e.preventDefault();
      e.target
   }



    return (
        <div>
            <button onClick={handleClick}>
            </button>
            <input type="text" ref={input} className="border "  onChange={handelChange} ></input>

        </div>
    )
}
export default Button;