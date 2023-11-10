import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../userContext';

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  const username = userInfo?.username

  useEffect(() => {
    fetch('http://localhost:8080/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  }, [])

  const logout = () => {
    fetch('http://localhost:8080/logout', {
      method: "POST",
      credentials: 'include'
    })
    setUserInfo(null)
  }

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
                  <button onClick={logout}>Logout</button>
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