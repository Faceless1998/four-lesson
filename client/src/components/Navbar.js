import {isLoggedIn} from "./../auth";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <Link to="/">Home</Link>

            {
                isLoggedIn() ? (
                    <button>Logout</button>
                ):(
                    <>
                        <Link to="/login">login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )
            }
        </>
    )
}