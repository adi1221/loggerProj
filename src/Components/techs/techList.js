import React, {useEffect, useState} from 'react';
import TechItem from './techItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';


const TechList = ({techs, getTechListFromBackend}) => {

    // const [techs, setTechs] = useState([]);

    useEffect(() => {
        getTechListFromBackend()
    }, []);

    if (!techs) {
        console.log('here at !techs')
        return <div>No technicians Listed</div>
    } else {
        console.log('in else')
        return (
            <div className="modal" id="tech-list-modal">
                <div className="modal-content">
                    <h4>List of Technicians</h4>
                    <ul className="collection">
                        {techs.map((tech) => <TechItem key={tech.id} tech={tech}/>)}
                    </ul>
    
                </div>
    
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return {
        techs: state.tech.techList
    }
};

export default connect(mapStateToProps, { getTechListFromBackend: getTechs})(TechList) 
