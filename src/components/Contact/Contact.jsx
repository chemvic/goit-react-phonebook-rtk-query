import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import css from "./Contact.module.css";

const Contact=({name, number, id})=>{

const[deleteContact]=useDeleteContactMutation();
    return(       
        <li className={css.contact_item}>{name}: {number}
        <button type="button" className={css.button}
        onClick={()=>deleteContact(id)}>Delete</button>
        </li>        						   
    )
}

Contact.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Contact;