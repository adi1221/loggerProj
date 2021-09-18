import React from 'react';
import {Fragment} from 'react';
import { deleteLog, setCurrent } from '../actions/logActions';
import { connect } from 'react-redux';

function LogItem({log, deleteLog, setCurrent}) {

    function deleteHandler(e) {
        deleteLog(log.id);
    }

    function editHandler() {
        setCurrent(log);
    }
    return (
        <li className="collection-item">
                <div>
                    <a href="#log-edit-modal" onClick={editHandler} className={`modal-trigger ${log.attention? 'red-text':'blue-text'}`}>
                    {log.message}
                    </a>
                </div>
                <div className="grey-text">
                    <span>
                        {`#${log.id} `}
                    </span>
                    <span className="grey-text text-darken-4">
                        {`last updated by ${log.tech} `}
                    </span>
                    <span className="black-text text-darken-1">
                        {`at ${log.date}`}
                    </span>
                    <a href="#" className='secondary-content' onClick={e => deleteHandler(e)}>
                        <i className='material-icons'>delete</i></a>
                </div>
        </li>
    )
}

export default connect(null, { deleteLog, setCurrent })(LogItem)
