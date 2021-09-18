import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
    //message, tech selection, need attention

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({html: 'please add a full name'})
        }
        else {
            console.log('techs', firstName, lastName);
        }
    }


    return (
        <div className="modal" id="tech-modal">
            <div className="modal-content">
                <h4>add new technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="firstname" className='active'>add firstName</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className='active'>add firstName</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Enter</a>
                </div>
            </div>
        </div>
    )
}

export default AddTechModal;
