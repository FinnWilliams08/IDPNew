import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import axios from "axios";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { SignUp } from "./SignUp"; // Import the SignUp component

export const LogIn = () => {
  const [ , , setToken] = useContext(CurrentUserContext);
  const [isLogInVisible, setLogInVisibility] = useState(false); // State for LogIn pop-up
  const [isSignUpVisible, setSignUpVisibility] = useState(false); // State for SignUp pop-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      {/* Log In Button */}
      {!isLogInVisible && !isSignUpVisible && (
        <button onClick={() => setLogInVisibility(true)}>Log In</button>
      )}

      {/* Log In Modal */}
      {isLogInVisible && (
        <Modal setVisibility={setLogInVisibility}>
          <InputField label="Email:" setValue={setEmail} value={email} />
          <InputField label="Password:" setValue={setPassword} value={password} type="password" />
          
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}
          
          <button onClick={async () => {
            try {
              const response = await axios.post("http://localhost:8080/api/sign-in", {
                email,
                password,
              });
              setToken(response.data.token);
              setLogInVisibility(false);
            } catch (error) {
              if (error.response && error.response.status === 404) {
                setErrorMessage("Account does not exist. Please sign up.");
              } else {
                setErrorMessage("An error occurred. Please try again.");
              }
            }
          }}>
            Log In
          </button>
          
          <p>
            Don't have an account?{" "}
            <button
              onClick={() => {
                setLogInVisibility(false); // Close LogIn modal
                setSignUpVisibility(true); // Open SignUp modal
              }}
            >
              Sign Up
            </button>
          </p>
        </Modal>
      )}

      {/* Sign Up Modal */}
      {isSignUpVisible && (
        <Modal setVisibility={setSignUpVisibility}>
          <SignUp setVisibility={setSignUpVisibility} />
        </Modal>
      )}
    </>
  );
};