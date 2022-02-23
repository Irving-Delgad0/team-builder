
import './App.css';
import React, {useState} from "react";
import Form from './Components/Form'

const initialValues = {
  name:"",
  email:"",
  role:""
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [values, setValues] = useState(initialValues)

  const onSubmit = () => {
    setTeamMembers([values, ...teamMembers]);
    setValues(initialValues)
  }

  const onChange = (name,value) => {
    setValues({...values, [name]: value})
  }

  return (
    <div className="App">
      <h1>Team builder</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
      />

      {teamMembers.map((member, index) => {
        return (
          <div key={index}>
            {`Name: ${member.name} Email: ${member.email} Role: ${member.role}`}
          </div>
        )
      })}
    </div>
  );
}

export default App;
