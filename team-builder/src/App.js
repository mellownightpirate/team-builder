import React, { useState } from 'react';
import './App.css';
import MemberForm from './Components/Form'
import Members from './Components/Members'

function App() {
  const [member, setMember] = useState([
    {
      name: 'Amin',
      email: 'a@lambdaschool.com',
      role: 'Frontend Engineer'
      },
      {
        name: 'Maryam',
        email: 'maryam@lambdaschool.com',
        role: 'Backend Engineer'
      },
      {
        name: 'Hasan',
        email: 'hasan@lambdaschool.com',
        role: 'Designer'
      }
    ]);

  const addNewMember = person => {
    const newMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setMember([...member, newMember]);
  }

  return (
    <div className="App">
     <h1>Team Sign Up Sheet</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members member={member} />
    </div>
  );
}

export default App;
