"use client"
import { FC } from "react";
import Button from "../btn";
import Link from "next/link";

const LoginForm: FC = () => {
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">user name or Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          remember me
        </label>
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

export default LoginForm;
