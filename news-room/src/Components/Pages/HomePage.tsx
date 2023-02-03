import './Styles/HomePageStyle.scss'
import {NewItemsListFrame} from '../Elements/NewItemsListFrame'
import mobileImg from '../Images/image-web-3-mobile.jpg'
import desktopImg from '../Images/image-web-3-desktop.jpg'

type Props = {}

export const HomePage = (props: Props) => {
	return (
		<div className='home-page'>
			<div className='home-page-container'>
				<div className='home-page-primary-graphic-container'>
					<picture>
						<source media="(max-width:600px)" srcSet={mobileImg}/>
						<source media="(min-width:600px) and (max-width:1024px)" srcSet={desktopImg}/>
						<img className ='home-page-primary-image' src={desktopImg} alt='Tmp Pic' />
					</picture>
				</div>

				<section className='home-page-primary-message'>
					<div className='home-page-message-frame'>The Bright Future of Web 3.0?</div>
				</section>

				<section className='home-page-primary-preview'>
					<div className='home-page-preview-frame'>
						<span>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</span>
						<button className='home-page-preview-btn'>READ MORE</button>
					</div>
				</section>

				<aside className='home-page-new-items-list'>
					<NewItemsListFrame />
				</aside>
			</div>

			<div className='home-page-review-items'>

			</div>
		</div>
	)
}

/*
<picture>
<source media="(max-width:600px)" srcSet={mobileImg}/>
<source media="(min-width:600px) and (max-width:1024px)" srcSet={desktopImg}/>
<img className ='home-page-primary-image' src={desktopImg} alt='Tmp Pic' />
</picture>
*/