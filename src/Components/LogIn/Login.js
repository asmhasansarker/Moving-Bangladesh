
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

function Login() {
    const [user, setUser] = useContext(UserContext)
    // const [newUser, setNewUser] = useState(false)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: '',
    //     photo: '',
    //     error: '',
    //     success: false
    // })
    const provider = new firebase.auth.FacebookAuthProvider();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;

                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL

                }

                setUser(signedInUser)
                history.replace(from)
            }).catch((error) => {

                console.log(error)
            });
    }

    const handleFacebookSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;

                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL

                }

                setUser(signedInUser)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser)

            }).catch((error) => {
                console.log(error)
            });
    }
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)

        }
        if (event.target.name === 'password') {

            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber
        }

        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (event) => {

        if (user.newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUserName(user.name)

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        if (!user.newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = "";
                    newUserInfo.isSignedIn = true;
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    console.log(user);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        event.preventDefault();
    }

    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    const login = () =>{
        const newUserInfo = { ...user }
        newUserInfo.newUser = false;
        setUser(newUserInfo)
    }
    const createAccount = () =>{
        const newUserInfo = { ...user }
        newUserInfo.newUser = true;
        setUser(newUserInfo)
    }


    return (
        <div className="text-center">



            <div className="border p-3 w-50 mx-auto mt-5 bg-white">
                {
                    user.isSignedIn && <div>
                        <h3>Welcome, {user.name}</h3>
                    </div>
                }



                <form onSubmit={handleSubmit}>

                    {
                        user.newUser ?
                            <div className="w-75 mx-auto my-3"><h3 className="text-left">Create an account</h3></div> :
                            <div className="w-75 mx-auto my-3"><h3 className="text-left">Login</h3></div>
                    }

                    {
                        user.newUser &&
                        <div className="w-75 mx-auto ">
                            <input className="form-control" type="text" name="name" id="" placeholder="name" onBlur={handleBlur} />
                        </div>

                    }
                    <br />

                    <div className="w-75 mx-auto">
                        <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder= { user.newUser ? 'Username or Email' : 'Email'} required />
                    </div>
                    <br />
                    <div className="w-75 mx-auto mb-3">
                        <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="Password " required />
                    </div>

                    {
                        user.newUser && <div className="w-75 mx-auto mb-3">
                            <input className="form-control" type="password" name="confirm_password" onBlur={handleBlur} placeholder="Confirm Password " required />
                        </div>
                    }



                    <input className="btn btn-warning w-75 mb-3" type="submit" value={user.newUser ? 'Create an account' : 'LogIn'} />

                    {user.newUser ?
                        <h6>Already have an account? <span style={{ cursor: 'pointer' }} onClick={login}>Login</span></h6> :
                        <h6>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={createAccount}>Create an account</span></h6>
                    }


                </form>
            </div>



            <br />


            <h3 className="text-center">Or</h3>



            <div>
                <button className="btn btn-outline-primary w-25" onClick={handleFacebookSignIn}>Continue with Facebook</button>
                <br />
                <button className="btn btn-outline-primary mt-3 w-25" onClick={handleGoogleSignIn}>Continue with Google</button>

            </div>

            <button className="btn btn-outline-primary mt-3" onClick={handleSignOut}>Sign Out</button>

            <br />
            {/* {
        user.isSignedIn ? <button className="btn btn-outline-primary" onClick={handleSignOut}>Sign Out</button> :
          <button className="btn btn-outline-primary mt-3" onClick={handleGoogleSignIn}>Continue with Google</button>
      }
      <br /> */}

            {/* <div>
        <button className="btn btn-outline-primary" onClick={handleFacebookSignIn}>Continue with Facebook</button>

        <button className="btn btn-outline-primary mt-3" onClick={handleGoogleSignIn}>Continue with Google</button>

      </div> */}



            {
                user.success ? <h3 style={{ color: 'green' }}>User {user.newUser ? 'created' : 'Logged In'} successfully</h3> :
                    <h3 style={{ color: 'red' }}>{user.error}</h3>
            }





        </div>
    );
}

export default Login;
