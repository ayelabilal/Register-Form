import React, { useState } from "react";
import style from "./form .module.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Form = () => {
  const [allArray, setAllArray] = useState([]);

  const [firstInput, setFirstInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organization: "",
    organizationSize: "",
    industry: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllArray((previousArray) => [...previousArray, firstInput]);
    setFirstInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      organization: "",
      organizationSize: "",
      industry: "",
    });
  };

  return (
    <>
      <div className={style.container}>
        <h2 className={style.register}>Registration Form</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label className={style.first} htmlFor="">
            First Name
          </label>
          <br />
          <input
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                firstName: e.target.value,
              }));
            }}
            className={style.firstname}
            type="text"
            placeholder="Enter your name"
          />
          <label className={style.last} htmlFor="">
            Last Name
          </label>
          <br />
          <br />
          <input
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                lastName: e.target.value,
              }));
            }}
            className={style.lastname}
            type="text"
            placeholder="Enter your last name"
          />
          <label className={style.email}> Work Email</label>
          <br />
          <p className={style.iconE}>
            <MdOutlineAlternateEmail />
          </p>
          <input
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                email: e.target.value,
              }));
            }}
            className={style.email1}
            type="text"
            placeholder="Enter your email "
          />
          <br /> <br />
          <br />
          <label className={style.password} htmlFor="">
            Password
          </label>{" "}
          <br />
          <input
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                password: e.target.value,
              }));
            }}
            className={style.pass}
            type="password"
            placeholder="password "
          />{" "}
          <p className={style.icon}>
            <RiLockPasswordLine />{" "}
          </p>
          <br /> <br />
          <br />
          <br />
          <label className={style.organization} htmlFor="">
            Organization Name
          </label>{" "}
          <br />
          <input
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                organization: e.target.value,
              }));
            }}
            className={style.organ}
            type="text"
            placeholder="Enter your ABC organization "
          />{" "}
          <br /> <br />
          <br />
          <br />
          <label className={style.size} for="cars">
            Organization Size
          </label>
          <br />
          <br />
          <select
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                organizationSize: e.target.value,
              }));
            }}
            className={style.option}
            name="cars"
          >
            <option value="volvo">--Select--</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <br />
          <br />
          <br />
          <label className={style.industry} for="cars">
            Industry
          </label>
          <br />
          <br />
          <select
            onChange={(e) => {
              setFirstInput((previousObj) => ({
                ...previousObj,
                industry: e.target.value,
              }));
            }}
            className={style.option}
            name="cars"
          >
            <option value="select">--Select--</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <br />
          <br />
          <p className={style.p1}>
            Formstack has upload our team of service effective july 15,2024. We
            encourage you to read the document in its entirely.
          </p>
          <br />
          <input type="checkbox" />
          <span className={style.span}>
            {" "}
            I understand and agree to the
          </span>{" "}
          <u className={style.u}>
            Formstack Privacy Public,Software Services Agreement and Acceptable
            Use Policy.
          </u>
          <br />
          <button
            type="submit"
            // onClick={(e) => {
            //   setAllArray((previousArray) => [...previousArray, firstInput]);
            // }}
            className={style.btn}
          >
            Register
          </button>
        </form>
      </div>
      <div className={style.second}>
        <h2>Submissions</h2>
        {allArray.map((submission, index) => (
          <div key={index} className={style.submission}>
            <p>First Name = {submission.firstName}</p>
            <br />
            <p>Last Name = {submission.lastName}</p>
            <br />
            <p> Email = {submission.email}</p> <br />
            <p>Password = {submission.password}</p> <br />
            <p>Organization Name = {submission.organization}</p> <br />
            <p> Organization Size = {submission.organizationSize}</p> <br />
            <p> Industry = {submission.industry}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
