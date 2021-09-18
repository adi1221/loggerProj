import React from 'react';
import {useEffect, useState, Fragment} from 'react';
import LogItem from './logItem';
import { getLogs } from '../actions/logActions';
import { connect } from 'react-redux';

function Logs({log: {logs = [], loading} = {}, getLogs}) {

    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        getLogs();
        console.log('logs', logs);
        console.log('loading', loading);
    }, []);

    if(loading || logs === null) {
        return (<div className="progress">
        <div className="indeterminate"></div>
    </div>)
    }

    return (
       <ul className="collection with-header">
           <li className="collection-header">
                <h3 className="center">System logs</h3>
           </li>
           {!loading && logs.length === 0 ?
            (<li>No logs</li>) :
            (logs.map((log) => <LogItem log={log} key={log.id}/>))
           }
       </ul>
    );
}

const mapStateToProps = ({log}) => {
    return {
        log: log
    };
}

// mapDispatchToProps = (dispatch) => {
//     return {
//         getLogsFromBack = (dispatch) => dispatch(getLogs);
//     }
// }

export default connect(mapStateToProps, {getLogs})(Logs);
