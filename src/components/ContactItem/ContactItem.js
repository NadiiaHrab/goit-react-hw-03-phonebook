import css from "./ContactItem.module.css";

function ContactItem({contact, onDeleteContact}) {
    return (
       <li className={css.item} key={contact.id}>
        <span className={css.name}>{contact.name}: </span>
        <span className={css.number}>{contact.number}</span>
        
        <button
          className={css.btn}
          type="button"
          onClick={() => onDeleteContact(contact.id)} 
        >
          Delete
        </button>
      </li>
   ) 
}

export default ContactItem;