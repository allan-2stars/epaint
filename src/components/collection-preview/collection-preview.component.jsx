import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return ( 
        <div className='collection-preview'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <div  className='preview'>
                    {/* below with performance concerns, due to every time the component rendered, the data will fetch */}
                    {items
                    .filter((item, idx) => idx < 4)
                    .map( item => (
                    <CollectionItem key={item.id} item={item} />
                    ))}
                </div>
        </div>
     );
}
 
export default CollectionPreview;