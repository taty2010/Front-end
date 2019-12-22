import React, {useState} from 'react';


export const LoginPage = () => {
    const [user, setUser] = useState({email:'', password:''});
   
    const handleChange = (e) => {
       
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <>
            <h3>Enter email and password</h3>
            <form>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                    />
                </label>
                <button 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    LogIn
                </button>
            </form>
        </>
    );
}