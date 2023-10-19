import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

//, signInWithGoogle

const SignIn = () => {

    const {signInUser , signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

  const [loginError, setLoginError] = useState(" ");
  const [success , setSuccess] = useState('');

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);
        setLoginError('')

        signInUser(email , password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            setSuccess(swal("Good job!", "Login Successfully!", "success"));
            navigate('/');
        })
        .catch(error => {
            console.log(error)
            setLoginError(error.message);
        })


        
        
    }

    const handleGoogleSignIn = () => {
            signInWithGoogle()
            .then(result => {
              console.log(result.user)
              setSuccess(swal("Good job!", "Login Successfully!", "success"));
              navigate('/');
            })
            .catch(error => {
              console.log(error)
            })
          }




    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">SignIn now!</h1>

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
          
          loginError && <p className="text-red-800">{loginError}</p>
          
          }

          {
            success && <p>{success}</p>
          }

      <p className="text-center">New To please<Link to='/signup'>
      <button className="btn btn-link">Sign Up</button>
      </Link> </p>
      <p className="text-center mb-2"><button onClick={handleGoogleSignIn} className="btn btn-ghost">Login With Google</button></p>
    </div>
  </div>
</div>
    );
};

export default SignIn;