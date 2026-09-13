import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }
  setError("");
  console.log("Passwords match!");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Create an Account</h2>
        <p>Register to access your QR dashboard.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Enter your full name" required/>
          </div> 

          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input id="register-email" type="email" placeholder="Enter your email" required/>
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <div className="password-wrapper">
              <input
                 id="register-password" 
                 type={showPassword ? "text" : "password"}
                 placeholder="Enter your password" 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)} required/>
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"} >
                {showPassword ? ( <EyeOff size={20} strokeWidth={1.8} />) : (
                  <Eye size={20} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-wrapper">
              <input 
                 id="confirm-password" 
                 type={showConfirmPassword ? "text" : "password"} 
                 placeholder="Confirm your password"
                 value={confirmPassword} 
                 onChange={(e) => setConfirmPassword(e.target.value)} required/>
                 {error && <p className="form-error">{error}</p>}

              <button type="button" className="password-toggle" onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword) }
                aria-label={ showConfirmPassword ? "Hide confirm password" : "Show confirm password" }>
                {showConfirmPassword ? (
                  <EyeOff size={20} strokeWidth={1.8} />
                ) : (
                  <Eye size={20} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>
          <button type="submit" className="register-btn"> Create Account</button>
        </form>

        <div className="divider"> <span>OR</span></div>
        <button type="button" className="google-btn"> Continue with Google</button>

        <p className="register-text"> Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;