import './Styles/NavbarStyle.scss'
import {useContext} from 'react'
import {menuShowingContext} from './ParentPage'

type Props = {}

export const Navbar = (props: Props) => {
	const menuShow:boolean = useContext(menuShowingContext)

	const mainNavClassName:string = 'main-nav' + ((menuShow === true) ? ' show-main-nav' : '' )

	return (
		<nav className={mainNavClassName}>
			<div className='main-nav-element'>
					<span className='main-nav-element-content-container'>
						<span>Home</span>
					</span>
			</div>
			<div className='main-nav-element'>
					<span className='main-nav-element-content-container'>
						<span>New</span>
					</span>
			</div>
			<div className='main-nav-element'>
					<span className='main-nav-element-content-container'>
						<span>Popular</span>
					</span>
			</div>
			<div className='main-nav-element'>
					<span className='main-nav-element-content-container'>
						<span>Trending</span>
					</span>
			</div>
			<div className='main-nav-element'>
					<span className='main-nav-element-content-container'>
						<span>Categories</span>
					</span>
			</div>
		</nav>
	)
}