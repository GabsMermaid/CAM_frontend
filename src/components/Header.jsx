import React from 'react'
import ReactDOM from 'react-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>CAM app</Link>
			</div>
			<ul>
				<li>
					<Link to ='/Login'>
						<FaSignInAlt /> Login
					</Link>
				</li>
				<li>
					<Link to ='/register'>
						<FaUser /> Register
					</Link>
				</li>
			</ul>
		</header>
	)
}
export default Header
