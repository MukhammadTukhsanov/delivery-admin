import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

/**
 * The pricing tab.
 */
function PricingTab() {
	const methods = useFormContext();
	const { control } = methods;

	return (
		<div>
			<Controller
				name="priceTaxExcl"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mt-2 mb-4"
						label="Tax Excluded Price"
						id="priceTaxExcl"
						slotProps={{
							input: {
								startAdornment: <InputAdornment position="start">$</InputAdornment>
							}
						}}
						type="number"
						variant="outlined"
						autoFocus
						fullWidth
					/>
				)}
			/>

			<Controller
				name="priceTaxIncl"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mt-2 mb-4"
						label="Tax Included Price"
						id="priceTaxIncl"
						slotProps={{
							input: {
								startAdornment: <InputAdornment position="start">$</InputAdornment>
							}
						}}
						type="number"
						variant="outlined"
						fullWidth
					/>
				)}
			/>

			<Controller
				name="taxRate"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mt-2 mb-4"
						label="Tax Rate"
						id="taxRate"
						slotProps={{
							input: {
								startAdornment: <InputAdornment position="start">$</InputAdornment>
							}
						}}
						type="number"
						variant="outlined"
						fullWidth
					/>
				)}
			/>

			<Controller
				name="comparedPrice"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mt-2 mb-4"
						label="Compared Price"
						id="comparedPrice"
						slotProps={{
							input: {
								startAdornment: <InputAdornment position="start">$</InputAdornment>
							}
						}}
						type="number"
						variant="outlined"
						fullWidth
						helperText="Add a compare price to show next to the real price"
					/>
				)}
			/>
		</div>
	);
}

export default PricingTab;
