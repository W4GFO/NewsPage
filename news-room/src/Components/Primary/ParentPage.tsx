import './Styles/ParentPageStyle.scss'
import { useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'

import {Navbar} from './Navbar'
import {NavbarFrame} from './NavbarFrame'

type ParentPageProps = {}

export const menuShowingContext = createContext<boolean>(false)

export const ParentPage = (props: ParentPageProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const showHideMenu = () => {
		//Here to show the true proper way to call a useState. 
		//This isn't really necessary for a boolean type, but
		//is here for reference.
		setShowMenu(current => {
			return !current
		})

		//Equivalent
		//setShowMenu(!showMenu)
	}

	return (
		<main>
			<menuShowingContext.Provider value={showMenu}>
				<NavbarFrame showHideMenu={showHideMenu}/>
				<Navbar />
			</menuShowingContext.Provider>

			<Outlet />
		</main>
	)
}