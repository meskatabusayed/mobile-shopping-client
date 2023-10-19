import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";


const SignUp = () => {

    const {createUser} =useContext(AuthContext);
    const navigate = useNavigate();

  const [signUpError, setSignUpError] = useState(" ");
  const [success , setSuccess] = useState('');
    

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( name ,email , password);

        if(password.length < 6){
            setSignUpError('Password should be at least 6 Characters or longer');
            return;
          }
          else if(!/[A-Z]/.test(password)){
            setSignUpError('do not have a capital letter');
            return;
          }
          else if(!/^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])/.test(password)){
            setSignUpError('do not have a special character');
            return;
          }
      
      
      
          setSignUpError('')




        // create user in firebase
        createUser(email , password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            setSuccess(swal("Good job!", "Login Successfully!", "success"));
            navigate("/");
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message);
    }
    )
    }



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignIn</button>
        </div>
      </form>
      {
          
          signUpError && <p className="text-red-800">{signUpError}</p>
          
          }
           {
            success && <p>{success}</p>
          }
      <p className="text-center p-2">Already Have An Account? Please<Link to='/signin'>
      <button className="btn btn-link">Sign In</button>
      </Link> </p>
    </div>
  </div>
</div>
    );
};

export default SignUp;