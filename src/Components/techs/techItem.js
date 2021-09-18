import React from 'react'

function TechItem({tech}) {
    return (
        <li className="collection-item">
            <span>{`${tech.firstName} ${tech.lastName}`}</span>
            <span className="secondary-content">
                <a href="#!" className="material-icons">delete</a>
            </span>
        </li>
    )
}

export default TechItem
