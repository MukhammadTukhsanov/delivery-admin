import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import _ from 'lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import InputAdornment from '@mui/material/InputAdornment';
import { lighten } from '@mui/material/styles';
import { PartialDeep } from 'type-fest/source/partial-deep';
import Statuses from '../../components/Statuses';
import UserAvatar from '../../components/UserAvatar';
import { Profile, useGetMessengerUserProfileQuery, useUpdateMessengerUserProfileMutation } from '../../MessengerApi';
import MessengerAppContext from '@/app/(control-panel)/apps/messenger/contexts/MessengerAppContext';

/**
 * The user sidebar.
 */
function UserSidebar() {
	const { setUserSidebarOpen } = useContext(MessengerAppContext);

	const { data: user } = useGetMessengerUserProfileQuery();
	const [updateUserData] = useUpdateMessengerUserProfileMutation();

	const { control, handleSubmit, reset, formState, watch } = useForm({});
	const { isValid, dirtyFields, errors } = formState;

	useEffect(() => {
		if (user) {
			reset(user);
		}
	}, [reset, user]);

	function onSubmit(data: PartialDeep<Profile, object>) {
		updateUserData(data);
	}

	const formValues = watch();

	if (!user || _.isEmpty(formValues)) {
		return null;
	}

	return (
		<div className="flex flex-col flex-auto h-full">
			<Box
				sx={(theme) => ({
					backgroundColor: lighten(theme.palette.background.default, 0.02),
					...theme.applyStyles('light', {
						backgroundColor: lighten(theme.palette.background.default, 0.4)
					})
				})}
			>
				<Toolbar className="flex items-center px-6 border-b-1">
					<IconButton onClick={() => setUserSidebarOpen(false)}>
						<FuseSvgIcon>heroicons-outline:arrow-small-left</FuseSvgIcon>
					</IconButton>
					<Typography className="px-2 font-semibold text-2xl">Profile</Typography>
				</Toolbar>
			</Box>
			<div className="flex flex-col justify-center items-center py-8">
				<UserAvatar
					className="w-40 h-40 text-16"
					user={user}
				/>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="px-6"
			>
				<Controller
					control={control}
					name="name"
					render={({ field }) => (
						<TextField
							className="w-full"
							{...field}
							label="Name"
							placeholder="Name"
							id="name"
							error={!!errors.name}
							helperText={errors?.name?.message as string}
							variant="outlined"
							required
							fullWidth
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
										</InputAdornment>
									)
								}
							}}
						/>
					)}
				/>

				<Controller
					control={control}
					name="email"
					render={({ field }) => (
						<TextField
							{...field}
							className="mt-4 w-full"
							label="Email"
							placeholder="Email"
							variant="outlined"
							fullWidth
							error={!!errors.email}
							helperText={errors?.email?.message as string}
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<FuseSvgIcon size={20}>heroicons-solid:envelope</FuseSvgIcon>
										</InputAdornment>
									)
								}
							}}
						/>
					)}
				/>

				<Controller
					name="about"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label="About"
							className="mt-4 w-full"
							margin="normal"
							multiline
							variant="outlined"
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<FuseSvgIcon size={20}>heroicons-solid:identification</FuseSvgIcon>
										</InputAdornment>
									)
								}
							}}
						/>
					)}
				/>

				<FormControl
					component="fieldset"
					className="w-full mt-4"
				>
					<FormLabel component="legend">Status</FormLabel>
					<Controller
						name="status"
						control={control}
						render={({ field }) => (
							<RadioGroup
								{...field}
								aria-label="Status"
								name="status"
							>
								{Statuses.map((status) => (
									<FormControlLabel
										key={status.value}
										value={status.value}
										control={<Radio />}
										label={
											<div className="flex items-center">
												<Box
													className="w-2 h-2 rounded-full"
													sx={{ backgroundColor: status.color }}
												/>
												<span className="mx-2">{status.title}</span>
											</div>
										}
									/>
								))}
							</RadioGroup>
						)}
					/>
				</FormControl>
				<div className="flex items-center justify-end mt-8">
					<Button className="mx-2">Cancel</Button>
					<Button
						className="mx-2"
						variant="contained"
						color="secondary"
						disabled={_.isEmpty(dirtyFields) || !isValid}
						onClick={handleSubmit(onSubmit)}
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}

export default UserSidebar;
