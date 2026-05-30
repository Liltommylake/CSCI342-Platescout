import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="Navigation">
            <NavLink to="/login" className="stop">Log in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
        </nav>
    );
}

export default Navigation;
