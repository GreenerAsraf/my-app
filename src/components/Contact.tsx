import React from 'react';


interface IProps{
    
    address:string;
    name: string;
    email?: string;
   
    handleRemove: (email: string) => void
}

const Contact = ({address, name, email = "N/A", handleRemove}: IProps) => {
    return (
        <div className="card rounded container bg-success">
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <p>
                <strong>Address:</strong> {address}
            </p>
           
            <button className='btn btn-danger'  onClick={() => handleRemove(email)}>Remove</button>
        </div>
    );
};

export default Contact;