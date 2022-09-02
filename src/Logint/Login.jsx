import React from 'react'

const Login = ({toreg,}) => {
    return (
        <div  className="justify-content-center d-flex py-1">
            <form className="col-md-9 fform  my-1" >
                <div className="form-group " >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="btcon d-flex justify-content-center flex-column">
                <button type="submit" className="btn btn-primary m-3">signin</button>
                <div className="mt-2" >
                new user? Signup
                <a onClick={toreg} className="mx-1 cursor-pointer logto" > here</a>
            </div>

                </div>
                
            </form>
        </div>
    );
};

export default Login;
