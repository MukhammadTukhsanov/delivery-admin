import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect } from 'react';
import { useDebounce } from '@fuse/hooks';
import _ from 'lodash';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
	NotesLabel,
	useDeleteNotesLabelMutation,
	useGetNotesLabelsQuery,
	useUpdateNotesLabelMutation
} from '../../NotesApi';
import LabelModel from '../../models/LabelModel';

type LabelFormProps = {
	label: NotesLabel;
};

/**
 * The new label form.
 */
function NewLabelForm(props: LabelFormProps) {
	const { label } = props;
	const { data: labels } = useGetNotesLabelsQuery();

	const [updateLabel] = useUpdateNotesLabelMutation();
	const [removeLabel] = useDeleteNotesLabelMutation();

	/**
	 * Form Validation Schema
	 */
	const schema = z.object({
		id: z.string().nonempty(),
		title: z
			.string()
			.nonempty('You must enter a label title')
			.refine(
				(title) => {
					// Check if title exists in labelListArray
					return !labels.some((label) => label.title === title);
				},
				{
					message: 'This label title already exists'
				}
			)
	});

	type FormType = z.infer<typeof schema>;

	const { control, formState, reset, watch } = useForm<FormType>({
		mode: 'onChange',
		defaultValues: label,
		resolver: zodResolver(schema)
	});

	const { errors, dirtyFields, isValid } = formState;
	const watchedLabelForm = watch();

	useEffect(() => {
		reset(label);
	}, [label, reset]);

	/**
	 * On Change Handler
	 */
	const handleOnChange = useDebounce((_label: FormType) => {
		updateLabel(LabelModel({ ..._label, id: label.id }));
	}, 600);

	/**
	 * Update Note
	 */
	useEffect(() => {
		if (isValid && !_.isEmpty(dirtyFields) && !_.isEqual(label, watchedLabelForm)) {
			handleOnChange(watchedLabelForm);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [watchedLabelForm, label, handleOnChange, dirtyFields]);

	function handleOnRemove() {
		removeLabel(label.id);
	}

	return (
		<ListItem
			className="p-0 mb-3"
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
										<FuseSvgIcon
											color="action"
											size={16}
										>
											heroicons-outline:tag
										</FuseSvgIcon>
									</InputAdornment>
								),
								endAdornment: (
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
