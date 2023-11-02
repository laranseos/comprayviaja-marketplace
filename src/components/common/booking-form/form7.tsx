"use client"
import { EmailAddress, FullName, Password } from "@/constant/constant";
import Button from "../btn";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
      <div className="form-group">
        <label htmlFor="name">{FullName}</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{EmailAddress}</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email address" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">{Password}</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="button-bottom">
      <Link href="/en/pages/other-pages/register"><Button btnClass="w-100 btn btn-solid" name="create account" /></Link>
        <div className="divider">
          <h6>or</h6>
        </div>
        <Link href="/pages/other-pages/login"><Button btnClass="w-100 btn btn-solid btn-outline" name="login" /></Link>
      </div>
    </form>
  );
};

export default RegisterForm;
