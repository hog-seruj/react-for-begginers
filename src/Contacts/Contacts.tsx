import './Contacts.css';

type contactsProps = {
  name: string;
  biography: string;
  contacts: {
    address: string,
    phone: string,
    email: string
  };
}

const Contacts: React.FC<contactsProps> = ({name, biography, contacts}) => {
  return (
    <div className="contacts">
      <h3 className="contacts_name">{name}</h3>
      <div className="biography">{biography}</div>
      <ul className="contacts_list">
        <li className="contacts_list-item">{contacts.address}</li>
        <li className="contacts_list-item">
          <a href="tel:{contacts.phone}">{contacts.phone}</a>
        </li>
        <li className="contacts_list-item">
          <a href="{contacts.email}">{contacts.email}</a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts;
