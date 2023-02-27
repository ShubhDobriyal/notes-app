import { Airplane, LockClosed, Logo } from "../../assets/icons";
import "./auth.css";

const Auth = () => {
  return (
    <div className="auth-form">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password here"
          />
        </div>
        <div className="btn-group flex gap-1">
          <button type="submit" className="btn-primary flex-1">
            Login
          </button>
          <button type="button flex-1" className="btn-secondary">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
