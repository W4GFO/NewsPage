import { useState } from 'react'
import './Styles/NavbarFrameStyle.scss'
import logo from '../Images/logo.svg'
import hamburger from '../Images/icon-menu.svg'
import closeX from '../Images/icon-menu-close.svg'

type Props = {}

export const NavbarFrame = (props: Props) => {
	const [menueShowing, setMenuShowing] = useState<boolean>(true)

	const onShowingMenuChange = (show:boolean) => {

		//Here to show the true proper way to call a useState. 
		//This isn't really necessary for a boolean type, but
		//is here for reference.
		setMenuShowing(current => {
			return !current
		})
	}

	return (
		<div className='nav-frame-container'>
			<div className='nav-frame-element nav-frame-element-logo'>
				<img src={logo} alt='Brand logo' />
			</div>
			<div className='nav-frame-element nav-frame-element-hamburger'>
				<img src={hamburger} alt='hamburger close menu button' />
			</div>
		</div>
	)
}