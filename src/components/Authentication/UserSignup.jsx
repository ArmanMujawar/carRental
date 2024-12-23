import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';

import { auth, db } from './Firebase';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !password || !number) {
      alert("All fields are required!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user, "Signup successful!");

      // firestore
        if(user){
            await setDoc(doc(db,"Users",user.uid),{
              email:user.email,
              firstname:fname,
              Lastname:lname,
              MobileNo:number,
            });
        }

    

      alert("Signup successful!");
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="book-container">
        <h1>Signup Form</h1>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile No:</label>
          <input
            type="number"
            placeholder="Enter Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="book-button">Submit</button>
        <div><p>Already have a Account <Link to={"/Login"}><span>Login</span></Link></p></div>
      </form>
    </>
  );
};

export default UserSignup;
