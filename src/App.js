import SignIn from "./components/LoginForm";
import SignUp from "./components/RegistrationForm";
import SellerSignUp from "./components/SellerSignUp";
import ChangePassword from "./components/ChangePasswordForm";
import ForgetPassword from "./components/ForgetPasswordForm";
import { Routes, Route} from "react-router-dom";
import DashBoard from "./components/DashBoard";
// import AddressForm from "./components/AddressForm";

function App() {
  return (
    <>
      {/* <AddressForm /> */}
      <DashBoard />
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<SignUp />}/>
        <Route path="/seller_register" element={<SellerSignUp />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/forget_password" element={<ForgetPassword />}/>
        <Route path="/change_password" element={<ChangePassword />}/>
      </Routes>
    </>
  );
}

export default App;
