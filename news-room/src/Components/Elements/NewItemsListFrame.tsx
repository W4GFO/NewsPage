import './Styles/NewItemsListFrameStyle.scss'
import {NewItemCell} from './NewItemCell'

type NewItemsListFrameProps = {}

export const NewItemsListFrame = (props: NewItemsListFrameProps) => {
	return (
		<div className='newitems-list-from-container'>
			<header className='newitems-header'>
				<div className='newitems-header-text'>New</div>
			</header>

			<NewItemCell title='Hydrogen VS Electric Cars' oneliner='Will hydrogen-fueled cars ever catch up to EVs?' />
			<NewItemCell title='The Downsides of AI Artistry' oneliner='What are the possible adverse effects of on-demand AI image generation?' />
			<NewItemCell title='Is VC Funding Drying Up?' oneliner='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
		</div>
	)
}