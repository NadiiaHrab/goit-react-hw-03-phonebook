
import PropTypes from 'prop-types';
import ContactItem from "../ContactItem";
import css from "./ContactList.module.css"

function ContactList({ contacts, onDeleteContact}) {
  return (
   <ul className={css.list}>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  )
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;