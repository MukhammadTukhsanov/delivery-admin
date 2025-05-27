import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import { motion } from 'motion/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectFilteredContactList, useGetContactsListQuery } from './ContactsApi';
import { resetSearchText, selectSearchText, setSearchText } from './contactsAppSlice';

/**
 * The contacts header.
 */
function ContactsHeader() {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectSearchText);
  const { data, isLoading } = useGetContactsListQuery();
  const [userType, setUserType] = useState('barchasi');

  const filteredData = useAppSelector(selectFilteredContactList(data));

  useEffect(() => {
    return () => {
      dispatch(resetSearchText());
    };
  }, [dispatch]);

  if (isLoading) {
    return null;
  }
  const handleChange = (event: React.MouseEvent<HTMLElement>, newUserType: string | null) => {
    if (newUserType !== null) {
      setUserType(newUserType);
    }
  };

  return (
    <div className='p-6 sm:p-8 w-full'>
      {/* <PageBreadcrumb className="mb-2" /> */}

      {/* <div className='d-flex flex-row justify-content-between items-center gap-2'> */}
      <Grid
        container
        direction={'row'}
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div>
          <motion.span initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }}>
            <Typography className='text-4xl font-extrabold leading-none tracking-tight'>
              Foydalanuvchilar
            </Typography>
          </motion.span>
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            <Typography
              component={motion.span}
              className='text-base font-medium ml-0.5'
              color='text.secondary'
            >
              {`${filteredData?.length} foydalanuvchi`}
            </Typography>
          </motion.span>
        </div>

        <ToggleButtonGroup
          value={userType}
          exclusive
          onChange={handleChange}
          aria-label='User Type'
          size='small'
        >
          <ToggleButton value='barchasi' aria-label='Barchasi'>
            <Typography variant='body2'>Barchasi</Typography>
          </ToggleButton>
          <ToggleButton value='sotuvchi' aria-label='Sotuvchi'>
            <Typography variant='body2'>Sotuvchi</Typography>
          </ToggleButton>
          <ToggleButton value='foydalanuvchi' aria-label='Foydalanuvchi'>
            <Typography variant='body2'>Foydalanuvchi</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>

      <div className='flex flex-1 items-center mt-4 space-x-2'>
        <Box
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className='flex flex-1 w-full sm:w-auto items-center px-3 border-1 rounded-lg h-9'
        >
          <FuseSvgIcon color='action'>heroicons-outline:magnifying-glass</FuseSvgIcon>

          <Input
            placeholder='Foydalanuvchi qidirish'
            className='flex flex-1'
            disableUnderline
            fullWidth
            value={searchText}
            slotProps={{
              input: {
                'aria-label': 'Search',
              },
            }}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(ev))}
          />
        </Box>
        <Button
          className=''
          variant='contained'
          color='secondary'
          component={NavLinkAdapter}
          to='/apps/contacts/new'
        >
          <FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
          <span className='hidden sm:flex mx-2'>Qo'shish</span>
        </Button>
      </div>
    </div>
  );
}

export default ContactsHeader;
