import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        React UI Exercise
      </Link>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link to='/'className='nav-link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
