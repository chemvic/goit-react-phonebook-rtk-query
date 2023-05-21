import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";
import css from "./App.module.css";

const App =()=> {
 
   

      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm />
     
     <div className={css.contactsTitle}>
     <h2 className="title">Contacts</h2>
      </div>    

    

      <Filter />    
         <ContactList/>
     
      
    </div>
  ); 

};
export default App;