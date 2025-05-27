import FuseLoading from '@fuse/core/FuseLoading';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import { useAppSelector } from 'src/store/hooks';
import {
  Contact,
  GroupedContacts,
  selectFilteredContactList,
  selectGroupedFilteredContacts,
  useGetContactsListQuery,
} from '../ContactsApi';
import ContactListItem from './ContactListItem';

/**
 * The contacts list.
 */
function ContactsList() {
  const { data, isLoading } = useGetContactsListQuery();
  const filteredData = useAppSelector(selectFilteredContactList(data));
  const groupedFilteredContacts = useAppSelector(selectGroupedFilteredContacts(filteredData));

  if (isLoading) {
    return <FuseLoading />;
  }

  if (filteredData.length === 0) {
    return (
      <div className='flex flex-1 items-center justify-center h-full'>
        <Typography color='text.secondary' variant='h5'>
          Foydalanuvchi yo'q!
        </Typography>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className='flex flex-col flex-auto w-full max-h-full border-x-1'
    >
      {Object.entries(groupedFilteredContacts).map(([key, group]: [string, GroupedContacts]) => {
        return (
          <div key={key} className='relative'>
            <Typography color='text.secondary' className='px-8 py-1 text-base font-medium'>
              {key}
            </Typography>
            <Divider />
            <List className='w-full m-0 p-0'>
              {group?.children?.map((item: Contact) => (
                <ContactListItem key={item.id} contact={item} />
              ))}
            </List>
          </div>
        );
      })}
    </motion.div>
  );
}

export default ContactsList;
