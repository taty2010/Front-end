import React from 'react';

export class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            location: ''    
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        }) 
          
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        document.getElementById('signUpForm').reset();
    }

    render(){
        return (
            <>
                <h1>SignUp To Post Your Favorite Recipes</h1>
                <form id='signUpForm' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>
                        USERNAME:
                        <input 
                            type="username" 
                            name="username"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor='password'>
                        PASSWORD:
                        <input 
                            type="password" 
                            name="password"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor='location'>
                        LOCATION:
                        <input 
                            type="location" 
                            name="location"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type='submit'>SignUp</button>
                </form>
            </>
        );
    }
}