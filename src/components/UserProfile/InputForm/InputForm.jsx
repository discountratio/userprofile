import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup.string().required(),
});

export default function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    // console.log({ data });
    reset();
  };

  if (errors) {
    // console.log(errors);

  }

  return <form onSubmit={handleSubmit(onSubmitHandler)}>
    <h2>New User</h2>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" {...register("name")} placeholder='Larry Bird'/>
    <p>{errors.name?.message}</p>


    <label htmlFor="email">Email</label>
    <input type="text" id="email" {...register("email")} placeholder='bird@celtics.com'/>
    <p>{errors.email?.message}</p>

    <label htmlFor="password">Password</label>
    <input type="password" id="password" {...register("password")} placeholder='8 - 32 characters' />
    <p>{errors.password?.message}</p>

    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" {...register("confirmPassword")} />
    <p>{errors.confirmPassword?.message}</p>


    <label htmlFor='user-about'>Tell us about yourself</label>
      <textarea
        name='user-about'
        id='user-about'
        cols='30'
        rows='10'></textarea>
        
  <button type="submit">Sign in</button>
  </form>
}
