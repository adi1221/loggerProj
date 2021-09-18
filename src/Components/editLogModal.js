import React, {useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../actions/logActions';
import { connect } from 'react-redux';

const EditLog = ({current, updateLog}) => {
    //message, tech selection, need attention

    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, current)

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'please add a message'})
        }

        const updLog = {
            id: current.id,
            message,
            tech,
            attention,
            date: new Date()
        }

        updateLog(updLog);

        setMessage('');
        setTech('');
        setAttention(false);
    }


    return (
        <div className="modal" id="log-edit-modal">
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
                        <select name='tech' className="browser-default" value={tech} onChange={(e) => setTech(e.target.value)}>
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

const mapStateToProps = (state) => {
    return {
        current: state.log.current
    }
}

export default connect(mapStateToProps, { updateLog })(EditLog);
