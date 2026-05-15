"use client"
import Button from "@/button";
import  React,  {useState} from "react"
const Page=()=>{
  const[count,setCount]=useState<number>(0); // here we defaind Only type of state
   function fn():void{
      console.log(`This fuction pass thought props`)
    }



  return (
   
    <div className="flex justify-center mt-20 text-3xl w-full h-full">
      <h1>Hello use props to pass value</h1>
      
      <Button data="shubham" action={fn}/>
    </div>
  )
}

export default Page;