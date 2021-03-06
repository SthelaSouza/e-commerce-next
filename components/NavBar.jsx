import { useContext } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import { DataContext } from '../store/GlobalState'
import Link from 'next/link'

function NavBar() {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const handleLogout = () => {
    localStorage.removeItem('primeiroLogin')
  }

  const logout = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {auth.user.nome}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            {/* <a className="dropdown-item" href="#"> */}
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
            {/* </a> */}
          </li>
        </ul>
      </li>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">e-Commerce NextJS</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/car">
                <a className="nav-link active" aria-current="page">
                  <i className="fas fa-shopping-cart"></i> Carrinho
                </a>
              </Link>
            </li>

            {Object.keys(auth).length === 0 ? (
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link" href="#">
                    <i className="fas fa-user"></i> Login
                  </a>
                </Link>
              </li>
            ) : (
              logout()
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar