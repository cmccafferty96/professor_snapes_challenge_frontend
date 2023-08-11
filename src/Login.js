import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [house, setHouse] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const handleHouseChange = (event) => {
        // Allow setting house only if not set previously
        if (!house) {
            setHouse(event.target.value);
        }
    };

    const handleNewUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleChangeUsername = (event) => {
        event.preventDefault();

        if (newUsername.length < 1 || newUsername.length > 25) {
            setErrorMessage("New username must be between 1 and 25 characters.");
        } else {
            // Perform username change logic here
            // For now, just set a success message
            setSuccessMessage("Username changed successfully");
        }
    };

    const handleDeleteAccount = () => {
        // Perform delete account logic here
        // For now just set a success message
        setSuccessMessage("Account deleted successfully!")
    };

    const handleCreateAccount = (event) => {
        event.preventDefault();

        if (username.length < 1 || username.length > 25) {
            setErrorMessage("Username must be between 1 and 25 characters.")
        } else if (password.length < 1 || password.length > 25) {
            setErrorMessage("Password must be between 1 and 25 characters.")
        } else if (!house) {
            setErrorMessage("Please select a Hogwarts house.")
        } else {
            // Perform account creation logic here
            setSuccessMessage("Account created successfully!")
            fetch("http://127.0.0.1:5000/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })

            } )
        }
    };

    return (
        <div>
            <h2>Manage Account</h2>
            <div>
                <p>Current Username: {username}</p>
                <p>Current House: {house || "No house selected"}</p>
                <form>
                    <label>New Username:</label>
                    <input type="text" value={newUsername} onChange={handleNewUsernameChange} />
                    <button onClick={handleChangeUsername}>Change Username</button>
                </form>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
            <div>
                <h2>Create New Account</h2>
                <form>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} required />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                    <label>Select Hogwarts House:</label>
                    <select value={house} onChange={handleHouseChange} disabled={house}>
                        <option value="">Select House</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Slytherin">Slytherin</option>
                    </select>
                    <button onClick={handleCreateAccount}>Create Account</button>
                </form>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    )
}

export default Login;