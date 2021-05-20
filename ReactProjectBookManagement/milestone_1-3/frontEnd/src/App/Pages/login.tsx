import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const onInputChange = (e: any) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();

        // setBook({...book,id:uuidv4()})

        const result = await axios.post("http://localhost:3003/login", user)
            .then(resp => {
                console.log(resp.data);
                console.log("token is : "+resp.data.token)
                localStorage.setItem('token', resp.data.token)
            }).catch(error => {
                console.log(error);
            });

            
        history.push("/")

    }

    return (<>
        <h2> Login :</h2>
        <form className="container">
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" name="username" onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={e => onInputChange(e)} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Login</button>
        </form>
    </>)
}

export default Login;