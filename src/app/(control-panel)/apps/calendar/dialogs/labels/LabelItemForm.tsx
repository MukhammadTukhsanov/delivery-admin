import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect } from 'react';
import { useDebounce } from '@fuse/hooks';
import _ from 'lodash';
import FormLabel from '@mui/material/FormLabel';
import { closeDialog, openDialog } from '@fuse/core/FuseDialog/fuseDialogSlice';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useAppDispatch } from 'src/store/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Label, useDeleteCalendarLabelMutation, useUpdateCalendarLabelMutation } from '../../CalendarApi';

/**
 * Form Validation Schema
 */
const schema = z.object({
	id: z.string().optional(),
	title: z.string().nonempty('You must enter a label title'),
	color: z.string().optional()
});

type FormType = z.infer<typeof schema>;

type NewLabelFormProps = {
	label: Label;
	isLast: boolean;
};

/**
 * The new label form.
 */
function NewLabelForm(props: NewLabelFormProps) {
	const { label, isLast } = props;
	const dispatch = useAppDispatch();
	const [deleteLabel] = useDeleteCalendarLabelMutation();
	const [updateLabel] = useUpdateCalendarLabelMutation();

	const { control, formState, reset, watch } = useForm<FormType>({
		mode: 'onChange',
		defaultValues: label,
		resolver: zodResolver(schema)
	});

	const { errors } = formState;
	const form = watch();

	useEffect(() => {
		reset(label);
	}, [label, reset]);

	const debouncedUpdateLabel = useDebounce((_form: FormType) => {
		if (!_.isEqual(_form, label)) {
			const { title, color } = _form;
			updateLabel({ id: label.id, title, color });
		}
	}, 300);

	useEffect(() => {
		debouncedUpdateLabel(form);
	}, [debouncedUpdateLabel, form]);

	function handleOnRemove() {
		dispatch(
			openDialog({
				children: (
					<>
						<DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								All associated events will be removed.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={() => dispatch(closeDialog())}
								color="primary"
							>
								Disagree
							</Button>
							<Button
								onClick={async () => {
									await deleteLabel(label.id);

									dispatch(closeDialog());
								}}
								color="primary"
								autoFocus
							>
								Agree
							</Button>
						</DialogActions>
					</>
				)
			})
		);
	}

	return (
		<ListItem
			className="p-0 mb-4"
			dense
		>
			<Controller
				name="title"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className={clsx('flex flex-1')}
						error={!!errors.title}
						helperText={errors?.title?.message}
						placeholder="Create new label"
						variant="outlined"
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<Controller
											name="color"
											control={control}
											render={({ field: { onChange: _onChange, value: _value } }) => (
												<FormLabel
													className="w-4 h-4 shrink-0 rounded-full"
													sx={{ backgroundColor: _value }}
												>
													<Input
														value={_value}
														onChange={(ev) => {
															_onChange(ev.target.value);
														}}
														type="color"
														className="opacity-0"
													/>
												</FormLabel>
											)}
										/>
									</InputAdornment>
								),
								endAdornment: !isLast && (
									<InputAdornment position="end">
										<IconButton
											onClick={handleOnRemove}
											className="p-0"
											aria-label="Delete"
											size="small"
										>
											<FuseSvgIcon color="action">heroicons-outline:trash</FuseSvgIcon>
										</IconButton>
									</InputAdornment>
								)
							}
						}}
					/>
				)}
			/>
		</ListItem>
	);
}

export default NewLabelForm;
