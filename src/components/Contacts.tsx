import React, { useState } from 'react';
import Contact from './Contact';



interface IContact{
 
    address: string;
    name: string;
    email: string;
}



    const Contacts = () => {
        const [contact, setContact] = useState<IContact>({
 
            address:"",
            name: "",
            email: ""
        });
        const [contactList, setContactList] = useState<IContact[]>([])
    
        const onClick = () => {
            setContactList([...contactList, contact])
            setContact({
             
                address:"",
                name: "",
                email: ""
            })
        }
    
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
            setContact({ ...contact, [e.target.name]:  e.target.value})
        }
        
        const handleRemove = (email: string) => {
            const newContactList = contactList.filter(c => c.email !== email)
            setContactList(newContactList)
        }
        

    return (
        <div>
        <span className=' text-dark bg-secondary'> <h1>Personal NoteBook</h1></span>
       <div className="container bg-light">
       <div className="form input-group input-group-sm mb-3 ">
        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
            <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                value={contact.name}
                onChange={onChange}
                name="name"
                placeholder="Contact Name"
                type="text" 
            />
            
            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
            <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                value={contact.address}
                onChange={onChange}
                name="address"
                placeholder="Contact Address"
                type="text" 
            />
             
                <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
             <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                value={contact.email}
                onChange={onChange}
                name="email"
                placeholder="Contact Email"
                type="email" 
            />
            <button className="btn btn-primary" onClick={onClick}>Add</button>
        </div>
       </div>
        {
            contactList.map((con) => <Contact key={con.name}  address={con.address}  name={con.name} email={con.email} handleRemove={handleRemove}  />)
        }
        
     
    </div>
    );
};

export default Contacts;