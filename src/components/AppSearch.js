import './style/AppSearch.css';

function AppSearch(props) {
    const {value, onValueChange} = props;
    return (
        <div className='app-search'>
            <input className='app-search-input'
                type='text'
                placeholder='Gunpla Search'
                value={value}
                onChange={(event)=>onValueChange(event.target.value)}
            />
        </div>
    )
}

export default AppSearch;