import React, { useState } from 'react'
import axios from 'axios';

const PersonForm = () => {

    const [person, setPerson] = useState({
        firstName: "",
        lastName: ""
    })

    const { firstName, lastName } = person;

    const handleChange = (e) => { // This is a controlled form, so we need to handle the change event
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault(); // Prevents the page from refreshing

        // Make a post request to create a new person
        axios.post('http://localhost:8000/api/person', person)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // Reset the form
        setPerson({
            firstName: "",
            lastName: ""
        })
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input type="text" name='firstName' onChange={handleChange} value={firstName} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input type="text" name='lastName' onChange={handleChange} value={lastName} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm;