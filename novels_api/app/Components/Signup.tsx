'use client'
import React from "react";
import { useForm } from "react-hook-form";
//import "./styles.css";

const Signup=()=> {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit=(data:any)=>(
    console.log(data)
    );

    async function api(){
        const res=(await (fetch(`http://localhost:3000/api/hello`))).json();
        console.log(res);
        return res;
    }

  return(
    <div className=" h-[400px] flex items-center justify-center  bg-slate-500">
        <form className=" flex gap-x-10">
            <div className="flex flex-col gap-y-[10px]">
            <div>Email : </div>
            <div>Password : </div>
            </div>
            <div className=" flex flex-col gap-y-[10px]">
            <input name='email' placeholder="abc@gmail.com" type="email"/>
            <input name="password" placeholder="*****" type="password"/>
            <button onSubmit={api}>Submit</button>
            </div>
        </form>
    </div>
  )

}

export default Signup;