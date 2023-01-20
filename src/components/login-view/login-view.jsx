
import React from 'react'
import { useState } from 'react'

export const LoginView = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        };

        fetch ('https://myflixdb1.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }).then ((response) => response.json())
            .then((data) => {
                console.log('Login response: ', data);
                if (data.user) {
                    onLoggedin(data.user, data.token);
                } else {
                    alert('No such User');
                }
            if(response.ok){
                onLoggedin(username);
            } else {
                alert('Login failed');
            }
        })
        .catch((e) => {
            alert('Something went wrong')
        });
    };

    // if (data.user) {
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     localStorage.setItem("token", data.token);
    //     onLoggedIn(data.user, data.token);
    //   } else {
    //     alert("No such user");
    //   }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input type = 'text' value = {username} onChange = {(e) => setUsername(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type = 'text' value = {username} onChange = {(e) => setPassword(e.target.value)} required />
            </label>
            <button type = 'Submit'>Submit</button>
        </form>
    );
};

