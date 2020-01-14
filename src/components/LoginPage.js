import React, {useState} from 'react';
import styled from "styled-components";

const LoginPage = () => {

    const Wrapper = styled.div `
        background-image: url("https://images.pexels.com/photos/3338541/pexels-photo-3338541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        width: 100%;
        height: 500px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 17% 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      `;

      const Button = styled.button`
        width: 20vw;
        margin: 0 auto;


      `

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
        <Wrapper>
            <form>
            <h2>Enter email and password!</h2>
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
                <Button 
                    className="registerSubmit"
                    type="submit" 
                    onClick={handleSubmit}
                >
                    LogIn
                </Button>
            </form>
        </Wrapper>
    );
}

export default LoginPage