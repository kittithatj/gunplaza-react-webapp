import './App.css';
import AppPost from './components/AppPost';
import AppHeader from './components/AppHeader';
import AppItem from './components/AppItem';
import gunplaList from './data/gunplaInfo';
import { useState } from 'react';
import AppSearch from './components/AppSearch';

function App() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchText, setsearchText] = useState('');

    function onCloseItem() {
        setSelectedItem(null)
    }

    let post = null;
    if (!!selectedItem) {
        post = <AppPost gunpla={selectedItem} closeItem={onCloseItem} />
    }
    const itemElements = gunplaList
        .filter((gunpla) => {
            return gunpla.name.toLowerCase().includes(searchText.toLowerCase());
        })
        .map((gunpla, index) => {
            return <AppItem key={index} gunpla={gunpla} openItem={setSelectedItem} />
        })
    return (
        <div className="app">
            <AppHeader />
            <section className='app-section'>
                <div className='app-container'>
                    <AppSearch value={searchText} onValueChange={setsearchText} />
                    <div className='app-grid'>
                        {itemElements}
                    </div>
                    {post}
                </div>
            </section>
        </div>
    );
}

export default App;
