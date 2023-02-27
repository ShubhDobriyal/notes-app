import { useState } from "react";
import Logo from "../../components/Navbar/Logo";
import highlightImage from "./../../assets/images/man-developing-website-on-desk.svg";
import "./auth.css";

const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const fetchUserData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1l_5wGohDwm44WZ6NN0U3du0ebgvDFCo",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           email: formData.email,
  //           password: formData.password,
  //           returnSecureToken: true,
  //         }),
  //       }
  //     );

  //     const responseData = await response.json();

  //     response.then((res) => {
  //         const response = res.json();
  //         if (!res.ok) {
  //           throw new Error(response.error);
  //         }
  //         return response;
  //       })
  //       .then((data) => console.log(data));
  //   } catch (error) {
  //     if (error.message === "EMAIL_NOT_FOUND") {
  //       setError("User not found!");
  //     } else if (error.message === "INVALID_PASSWORD") {
  //       setError("Incorrect password!");
  //     } else {
  //       setError(error.message);
  //     }
  //   }
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      setError("Please fill all fields!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please add a valid email address!");
      return;
    }

    setError("");

    // fetchUserData();
  };

  return (
    <div className="flex h-100">
      <div className="highlight-content flex-1 h-100">
        <div className="top">
          <Logo />
          <h3>Just Another Notes App</h3>
          <p>
            A markdown based notes taking app that lets you save your notes to a
            firebase backend.
          </p>
        </div>
        <img src={highlightImage} alt="" />
      </div>
      <div className="auth-form flex-1 h-100 flex align-items-center justify-center">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email here"
              value={formData.email}
              onChange={handleFormData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password here"
              value={formData.password}
              onChange={handleFormData}
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
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Auth;
