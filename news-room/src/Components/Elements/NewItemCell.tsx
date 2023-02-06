import './Styles/NewItemCellStyle.scss'

type NewItemsProps = {
	title:string
	oneliner:string
}

export const NewItemCell = ({title, oneliner}: NewItemsProps) => {
	return (
		<div className='newitem-cell-container'>
			<div className='newitem-cell-title'>{title}</div>
			<div className='newitem-cell-oneliner'>{oneliner}</div>
		</div>
	)
}