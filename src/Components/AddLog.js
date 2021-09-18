import React, {useState} from 'react';
import { connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../actions/logActions';

const AddLog = (props) => {
    //message, tech selection, need attention

    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('message in addlog', message);
        console.log('tech in add log', tech)
        if (message === '' || tech === '') {
            M.toast({html: 'please add a message'})
        } else {
            const log = {
                message: message,
                tech: tech,
                attention: attention,
                date: new Date()
            }
            console.log('here');
            console.log('log', log)
            props.addLog(log);
        }
    }


    return (
        <div className="modal" id="add-log-modal">
            <div className="modal-content">
                <h4>add Log Message</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label htmlFor="message" className='active'>add Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name='tech' className="browser-default" onChange={(e) => setTech(e.target.value)}>
                            <option value="anu">anu</option>
                            <option value="adi">adi</option>
                        </select>
                        <label htmlFor="attention" className='active'>select tech</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={(e) => setAttention(!attention)} />
                                <span>Needs attention</span>
                            </label>
                        </p>
                        
                        
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Enter</a>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { addLog })(AddLog)
