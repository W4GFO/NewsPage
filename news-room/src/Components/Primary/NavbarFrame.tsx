import './Styles/NavbarFrameStyle.scss'
import {useContext} from 'react'
import logo from '../Images/logo.svg'
import hamburger from '../Images/icon-menu.svg'
import closeX from '../Images/icon-menu-close.svg'
import {menuShowingContext} from './ParentPage'

type Props = {
	showHideMenu:() => void
}

export const NavbarFrame = ({showHideMenu}: Props) => {

	const menuShowingState:boolean = useContext<boolean>(menuShowingContext)

	const imageFile:string = (menuShowingState === false) ? hamburger : closeX

	return (
		<div className='nav-frame-container'>
			<div className='nav-frame-element nav-frame-element-logo'>
				<img src={logo} alt='Brand logo' />
			</div>
			<div className='nav-frame-element nav-frame-element-hamburger' onClick={() => {showHideMenu()}}>
				<img src={imageFile} alt='hamburger close menu button' />
			</div>
		</div>
	)
}