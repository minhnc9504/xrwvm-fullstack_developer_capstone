// Một phần quan trọng trong file Register.jsx
return (
    <div className="register_container">
        <form onSubmit={register}>
            <h2>Sign Up</h2>
            <div className="input_group">
                <label>Username:</label>
                <input type="text" name="username" placeholder="Username" required />
            </div>
            <div className="input_group">
                <label>First Name:</label>
                <input type="text" name="first_name" placeholder="First Name" required />
            </div>
            <div className="input_group">
                <label>Last Name:</label>
                <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="input_group">
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input_group">
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit" className="register_button">Register</button>
        </form>
    </div>
);