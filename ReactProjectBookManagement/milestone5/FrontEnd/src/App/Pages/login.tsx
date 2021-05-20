import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
import { BooksContext } from '../../Providers/books/books.provider';
import { checkLogin } from '../../services/api-calls'
import firebase from '../../firebase';

const Login = () => {
    const history = useHistory()

    const { authUser, dispatch } = useContext(BooksContext);

    const [showErr, setShowErr] = useState(false);
    const [otpAuthenticated, setOtpAuthenticated] = useState(false)

    const [user, setUser] = useState({
        username: "",
        password: "",
        moNo: ""
    })

    const onInputChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const onSubmit = async (e: any) => {
    //     e.preventDefault();

    //     const result = await axios.post("http://localhost:3003/login", user)
    //         .then(resp => {
    //             console.log(resp.data);
    //             console.log("token is : "+resp.data.token)
    //             localStorage.setItem('token', resp.data.token)
    //         }).catch(error => {
    //             console.log(error);
    //         });
    //     history.push("/")
    // }

    const handleOnClick = (e: any) => {
        e.preventDefault();
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        let number = `+91${user.moNo}`;
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            let code = prompt('enter the OTP here ', '')
            if (code === null) return;
            e.confirm(code).then((result) => {
                console.log('result while otp : ', result.user);
                if (result.user) {
                    setOtpAuthenticated(true)
                }
            })
        }).catch(() => {
            console.log("error in otp velidation");
        })
    }

    let count = 0;
    const onSubmit = (e: any) => {
        e.preventDefault();
        checkLogin(user, dispatch);
        console.log("authUser ", authUser);
        authUser ? count++ : (setShowErr(true))
    }

    useEffect(() => {
        authUser ? (history.push("/")) : count++
    }, [authUser])

    return (<>
        <h2> Login </h2>
        {showErr ? <p className="text-danger"> User not matched / Plese try again with correct username and password</p> : <p></p>}
        <form className="container">
            {
                otpAuthenticated ?
                    <>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" name="username" onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="password" onChange={e => onInputChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2" onClick={e => onSubmit(e)}>Login</button>
                    </>
                    :
                    <>
                        <div className="form-group">
                            <label>Enter Mobile Number without Country Code </label>
                            <input type="number" className="form-control" placeholder="Enter Mobile Number" name="moNo" onChange={e => onInputChange(e)} />
                        </div>
                        <div id="recaptcha-container"></div>
                        <button className="btn btn-primary" onClick={handleOnClick}>Verify Mobile Number</button> <br />
                    </>
            }
        </form>
    </>)
}

export default Login;