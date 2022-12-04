import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLock, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return ( 
        <header className="Nav-Header">
            <div></div>
            <nav>
                <ul className="Nav-ulList">
                    <li className="Navbar-list">
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='text-link'><FontAwesomeIcon icon={faBookOpen} />Main</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Getting-started" style={{ textDecoration: 'none',  color: 'inherit'}}>Getting-Started</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Getting-started/frontend-test" style={{ textDecoration: 'none',  color: 'inherit'}}>FrontEnd Developer Test</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="Nav-Edit">
              <div className="nav-social-links">
                <p><FontAwesomeIcon icon={faLock} /> Editing </p> 
                {/* <FontAwesomeIcon icon="fa-light fa-lock" /> */}
              </div>
               <div className="vr"></div>
               <div className="nav-social-links">
                  <p>Publish Space <FontAwesomeIcon icon={faChevronDown} /></p>
                </div>
            </div>
            
        </header>
     );
}
 
export default Navigation;