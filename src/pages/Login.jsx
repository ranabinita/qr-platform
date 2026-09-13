import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => { e.preventDefault();};

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Welcome Back</h2>
        <p>Login to continue to your QR dashboard.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" required/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="password-wrapper">
              <input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" required/>

              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (
                  <EyeOff size={20} strokeWidth={1.8} />
                ) : (
                  <Eye size={20} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider"><span>OR</span></div>
        <button type="button" className="google-btn"> Continue with Google</button>

        <p className="register-text"> Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;