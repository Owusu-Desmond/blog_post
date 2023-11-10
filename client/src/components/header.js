import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Header = () => {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/profile', {
      credentials: 'include'
    }).then(response => {
      console.log(response);
      response.json().then(userInfo => {
        setUsername(userInfo.username)
      })
    })
  }, [])

    return (
        <header>
        <div className='logo'>
            <NavLink to='/'>Blog post</NavLink>
        </div>
        <nav>
          <ul>
            { (username) ? (
              <>
                <li>
                  <NavLink to='/create_post'>Create New Post</NavLink>
                </li>
                <li>
                  <NavLink to='/profile'>{username}</NavLink>
                </li>
                <li>
                  <NavLink to='/logout'>Logout</NavLink>
                </li>
              </>
            ) : (
            <>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
              <li>
                <NavLink to='/register'>Register</NavLink>
              </li>
            </>
            )
            }
            
          </ul>
        </nav>
      </header>
    )
}

export default Header;