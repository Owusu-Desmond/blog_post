import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>
        <div className='logo'>
            <NavLink to='/'>Blog post</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;