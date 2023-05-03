import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import FormInput from '../FormInput';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  yourName: string;
  yourMobi: number;
  email: string;
}

const MainSection3 = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  return (
    <div className="sections section_form">
      <h2 className="section_title" style={{ textAlign: "center" }}>
        Subscribe to Our Newsletter
      </h2>
      <p className="section_desc" style={{ textAlign: "center" }}>
        Do not want to miss news, updates, note and any offer on our products,
        then please subscriber to our mailling list.
      </p>
      <form className="subscribe_form" action="" method="GET" style={{ display: "flex" }} onSubmit={handleSubmit(onSubmit)}>
        <FormInput  type='text' placeholder='Your name'  {...register("yourName", { required: true, minLength: 4 })}/>
        <FormInput  type='text' placeholder='Your Mobile phone' {...register("yourMobi", { required: true, minLength: 10,maxLength: 10})}/>
        <FormInput  type='text' placeholder='Your email address' classs='input' {...register("email", { pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i })}/>
        <button type="submit" className="button">
          <div className="icon">
            <FaRegEnvelope />
          </div>{" "}
          Subscribe email list
        </button>
      </form>
    </div>
  );
}

export default MainSection3