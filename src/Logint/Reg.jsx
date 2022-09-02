import React from 'react'

const Reg = ({tolog,}) => {
    return (
        <div  className="justify-content-center d-flex ">
        <form className="col-md-9 fform  " >
        <div className="form-group " >
                <label for="enterfirstname">FirstName</label>
                <input type="text" className="form-control" id="enterfirstname" placeholder="Enter FirstName" />   
            </div>
            <div className="form-group " >
                <label for="enterlastname">LastName</label>
                <input type="text" className="form-control" id="enterlastname" placeholder="Enter LastName" />
            </div>
            <div className="form-group " >
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="btcon d-flex justify-content-center flex-column ">
            <button type="submit" className="btn btn-primary m-2">signUP</button>
            
            <div className="mt-2" >
                already Registered?
                <a onClick={tolog} className="mx-1 cursor-pointer logto" >signin </a>
            </div>
            
            

            </div>
            
        </form>
    </div>
    )
}

export default Reg

