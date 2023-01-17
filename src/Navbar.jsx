import './Navbar.css'

import { Link } from "react-router-dom";

function Navbar(){
    return(
            <div className = "navbar">
                <h1 className = "myName">
                    Tsai-Sui 簡彩繐
                </h1>
                <Link to='/' className='selfIntroLink'>
                    <p className="selfIntroLinkText">About Me</p>
                </Link>
                <Link to='/contact-info' className='contactInfoLink'>
                    <p className="contactInfoLinkText">Contact Me</p>
                </Link>
            </div>
    )
}

export default Navbar