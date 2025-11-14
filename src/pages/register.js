import { Link } from "react-router-dom";
import './register.css'

const register = () => {
    return (
        <div class="d-flex justify-content-center align-items-center vh-100 register">
            <div class="card shadow p-4 register-card">
                <h2 class="text-center mb-4 fw-bold">Registration</h2>
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username:</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Id:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter a valid email address" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Confirm Password:</label>
                        <input type="password" class="form-control" id="confirmPassword" />
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-danger">Register</button>
                    </div>
                    <p class="mt-3 text-center">
                        Already User? <Link to="/login" class="text-danger">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default register;