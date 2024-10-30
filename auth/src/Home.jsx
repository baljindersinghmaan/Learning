import React,{useContext} from 'react'
import { useNavigate, Link } from "react-router-dom";
import AuthContext from './context/AuthProvider';

function Home() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/links');
    }

  return (

    <div>
        <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div onClick={logout} className="flexGrow">
                <button >Sign Out</button>
            </div>
    </div>
  )
}

export default Home