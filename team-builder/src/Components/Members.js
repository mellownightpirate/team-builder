import React from "react";

const Members = props => {

    return (
    <div className="members-list">
        {props.member.map(person => (
            <div className='member' key={person.id}>
                <h2>Name: {person.name}</h2>
                <p>Email: {person.email}</p>
                <p>Role: {person.role}</p>
                </div>
        ))}
    </div>
    );
}

export default Members;