import {useState} from 'react';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/contactsApi';
import css from "./ContactForm.module.css";


const ContactForm =()=>{
const[name,setName]=useState('');
const[number,setNumber]=useState('');

const handleInputChange=({ target: { name, value } }) => {
  
    switch(name){
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
};
const [addNewContact] = useAddContactMutation();
const { data } = useGetContactsQuery();
const handleSubmit = (event) => {   
		  event.preventDefault();     
     
      const newContact={
        name,
        phone: number,
     }; 
      if(data.find(({name, number}) => name.toLowerCase()===(newContact.name.toLowerCase())
              ||number===newContact.phone)){
                alert(`${newContact.name} is already in contacts.`);
                reset();
                return;
              } 
   addNewContact(newContact);
       reset();
}

const reset=()=>{
setName('');
setNumber('');
}
 
    return (
  <div> 
 
    <form className={css.form} onSubmit={handleSubmit}>
       <label className={css.form_lable}>
       <span>Name</span>
       <input className={css.form_input}
type="text"
name="name"
value={name}
onChange={handleInputChange}
placeholder='Enter name...'
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters,
 apostrophe, dash and spaces.
  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
/>
    </label>
    <label className={css.form_lable}>
    <span>Number</span>
    <input className={css.form_input}
type="tel"
name="number"
value={number}
onChange={handleInputChange}
placeholder='Enter phone number...'
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
    </label>
    
    <button type="submit" className={css.button}>Add contact</button>
    </form>
      
  </div>
);
}
export default ContactForm;