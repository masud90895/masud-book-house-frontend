import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import useAuthCheck from "./Hook/userAuthCheck";

function App() {
  const userAuthCheck = useAuthCheck();
  return (
    <div>
      {!userAuthCheck ? (
        "Loading..."
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
