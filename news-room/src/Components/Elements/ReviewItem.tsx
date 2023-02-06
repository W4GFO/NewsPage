import './Styles/ReviewItemStyle.scss'

type ReviewItemProps = {
	index:number
	title:string
	message:string
	imgName:string
}

export const ReviewItem = ({index, title, message, imgName}: ReviewItemProps) => {
	return (
		<div className='reviewitem-container'>
			<div className='reviewitem-image-frame'>
				<img className='reviewitem-image' src={imgName} alt='review item' />
			</div>

			<div className='reviewitem-index-frame'>
				<div className='reviewitem-index-text'>0{index}</div>
			</div>
			<div className='reviewitem-title-frame'>
				<div className='reviewitem-title-text'>{title}</div>
			</div>
			<div className='reviewitem-message-frame'>
				<div className='reviewitem-message-text'>{message}</div>
			</div>
		</div>	
	)
}