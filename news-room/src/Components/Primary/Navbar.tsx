import './Styles/NavbarStyle.scss'
import logo from '../Images/logo.svg'

type Props = {}

export const Navbar = (props: Props) => {
	return (
		<nav className='main-nav'>
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