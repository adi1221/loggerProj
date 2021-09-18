import React from 'react';
import { useState, useEffect } from 'react';
import { searchLogs } from '../actions/logActions';
import { connect } from 'react-redux'

function Searchbar({searchLogs}) {

  const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        const text = e.target.value;
        if (text) {
            setSearchText(prevtext => prevtext.trim() === text? null: text);
        
        }
    

    }

    useEffect(() => searchLogs(searchText), [searchText]);

    return (
        <nav style={{marginBottom: '30px'}} className='blue'>
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                <input id="search" type="search" value={searchText} onChange={e => handleSearch(e)} />
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
    )
}

export default connect(null, { searchLogs })(Searchbar);
