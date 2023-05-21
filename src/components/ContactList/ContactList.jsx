import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import { getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactsApi';


const ContactList=()=>{

  const { data, isFetching, isSuccess, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);  

  const filteredContacts = (contactsData, filterValue) =>{
    if(!filter){
     return data;
    }
     return data
       .filter(({name, phone}) =>
        name.toLowerCase().includes(filter.toLowerCase())
        ||phone.includes(filter));    
      } 
      const contacts=filteredContacts(data, filter);
     
    return(
             <ul className={css.contacts}>
                  {error&&<p style={{
        fontSize:32,          
        color: 'red'
      }}>{error}</p>} 
              {isFetching&&<Loader visible={true}/>}
               {isSuccess&&contacts.length>0 ? !isFetching&&contacts
			.map(({name, phone, id}) => (
      <Contact key={id} name={name} number={phone}
       id={id}/>
            ))
      :<p>There is no contacts by query</p>}   
              
       
       </ul>
    )
}

export default ContactList;