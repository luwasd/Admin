import React from 'react'

const PersonList = (props) => {
    return (
        <div>
            { props.person.map((person, idx) => {
                return <p key={idx}>{person.firstName} {person.lastName}</p>
            })
            }
        </div>
    )
}

export default PersonList