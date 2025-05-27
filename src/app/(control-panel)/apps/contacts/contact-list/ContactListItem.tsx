import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Contact } from '../ContactsApi';

type ContactListItemPropsType = {
  contact: Contact;
};

/**
 * The contact list item.
 */
function ContactListItem(props: ContactListItemPropsType) {
  const { contact } = props;

  return (
    <>
      <ListItemButton
        className='px-8 py-4'
        sx={{ bgcolor: 'background.paper' }}
        component={NavLinkAdapter}
        to={`/apps/contacts/${contact.id}`}
      >
        <ListItemAvatar>
          <Avatar alt={contact.name} src={contact.avatar} />
        </ListItemAvatar>
        <ListItemText
          classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
          primary={contact.name}
          secondary={<Chip className='mr-2' size={'small'} label={'Sotuvchi'}></Chip>}
        />
      </ListItemButton>
      <Divider />
    </>
  );
}

export default ContactListItem;
