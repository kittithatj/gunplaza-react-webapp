import './style/AppItem.css';
function AppItem(props) {
    const {gunpla, openItem} = props;
    return (
        <div className='app-grid-item'>
            <img src={gunpla.image} onClick={()=> openItem(gunpla)}/>
            <h4 onClick={()=> openItem(gunpla)}>{gunpla.name}</h4>
        </div>
    )
}

export default AppItem;