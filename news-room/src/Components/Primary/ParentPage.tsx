import './Styles/ParentPageStyle.scss'
import { Outlet } from 'react-router-dom'

import {Navbar} from './Navbar'
import {NavbarFrame} from './NavbarFrame'

type ParentPageProps = {}

export const ParentPage = (props: ParentPageProps) => {
	return (
		<main>
			<NavbarFrame />
			<Navbar />

			<Outlet />
		</main>
	)
}