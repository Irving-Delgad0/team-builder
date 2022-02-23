import React from "react";

const Form = (props) => {

    const onChange = evt => {
        const {name, value} = evt.target
        props.change(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit()
    }


    return (
        <form onSubmit={onSubmit}>
            <label> Name
            <input       
                placeholder="Enter Name"
                value={props.values.name}
                name="name"
                type="text"
                onChange={onChange}
            />
            </label>
            <label> Email
                <input 
                    placeholder="Enter Email"
                    value={props.values.email}
                    name="email"
                    type="email"
                    onChange={onChange}
                />
            </label>
            <label> Role
                <input 
                    placeholder="Enter your role"
                    value={props.values.role}
                    name="role"
                    type="text"
                    onChange={onChange}
                />
            </label>

            <div>
                <button>Add Team Member</button>
            </div>
        </form>
    )
}

export default Form;