import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {

    const {creatUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
      
        console.log(name, photoURL, email, password);

           // password validation 

           if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;

        }

        // else if (!/[A-Z]/.test(password)) {
        //     toast.error('Your password should have at least one upper case characters.')
        //     return;
        // }
        // else if (!/[^A-Za-z0-9]/.test(password)) {
        //     toast.error('Your password should have at least one special character.');
        //     return;
        // }
        

        // Creat user by passing email and password
        creatUser(email, password)

            .then(res => {
                console.log(res.user)
                toast.success('Registration successfully');

                // update profile
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => console.log('profile updated'))
                    .catch()



            })
            .catch(error => {

                toast.error('Registration failed: ' + error.message);

            })


    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Already have an account? <Link to='/login'>Please Login</Link> </a>
                                </label>
                            </div>
                            <div className="form-control mt-5">
                                <button type='submit' className="btn md:w-[320px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;