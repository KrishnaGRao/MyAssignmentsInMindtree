import React, { useContext, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
import { BooksContext } from '../../Providers/books/books.provider';

const Sinup = () => {

    const { createUser } = useContext(BooksContext)
    const history = useHistory()
    const [user, setUser] = useState({
        email:"",
        username : "",
        password:""
    })

    const onInputChange = (e:any)=>{
        // console.log(e.target.value);
        setUser({...user ,[e.target.name] : e.target.value})        
    }

    // const onSubmit = async(e:any) => {
    //     e.preventDefault();

    //     // setBook({...book,id:uuidv4()})

    //     await axios.post("http://localhost:3003/register",user)
    //     .then(resp => {
    //         console.log(resp.data);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    //     history.push("/login")
    // }

    const onSubmit = (e:any) =>{
        e.preventDefault();
        createUser(user);

        history.push("/login");
    }

    return (<>
        <h2>Sinup Here :</h2>
        <form className="container">
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" name="username" onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={e => onInputChange(e)}/>
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={e=> onSubmit(e)}>Submit</button>
        </form>
    </>)
}

export default Sinup;