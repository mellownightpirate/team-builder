import React, { useState } from 'react';

const MemberForm = props => {

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    }

    const SubmitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name:"", email:"", role:""});
    };

    return (
    <div className='form-container'>
        <br /><br />
        <form onSubmit={SubmitForm}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                type='text'
                placeholder='Name'
                name='name'
                onChange={changeHandler}
                value={member.name}
            />
            <br /><br />
            <label htmlFor='email'>Email: </label>
            <input
                id='email'
                type='text'
                placeholder='Email'
                name='email'
                onChange={changeHandler}
                value={member.email}
                />
                <br /><br />
            <label htmlFor='role'>Role: </label>
            <input
                id='role'
                type='text'
                placeholder='Job Role'
                name='role'
                onChange={changeHandler}
                value={member.role}
                />
                <br /><br />
                <button type='submit'>Sign up</button>
        </form>    
        </div>
    )
}

export default MemberForm;