import React from 'react';
import './signup.css';
import { useForm, Controller } from 'react-hook-form';

export default function SignUpUser() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Check if password and password confirmation match
    if (data.password !== data.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    // All validations pass
    const customMessage = `
    Welcome to our platform, ${data.firstName}!

    You've successfully signed up with the following details:\n
    First Name: ${data.firstName}
    Last Name: ${data.lastName}
    Username: ${data.userName}
    Email: ${data.email}
    `;

    alert(customMessage); // Show a custom welcome message
    console.log(data);
  };

  return (
    <div className="centered-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First Name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Username:</label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: 'Username is required' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: 'Confirm Password is required' }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}