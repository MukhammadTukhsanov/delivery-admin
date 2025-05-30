// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IntroDividerComponent from '../../components/dividers/IntroDivider';
import IntroDividerRaw from '../../components/dividers/IntroDivider.tsx?raw';
import DividerVariantsComponent from '../../components/dividers/DividerVariants';
import DividerVariantsRaw from '../../components/dividers/DividerVariants.tsx?raw';
import VerticalDividersComponent from '../../components/dividers/VerticalDividers';
import VerticalDividersRaw from '../../components/dividers/VerticalDividers.tsx?raw';
import FlexDividerComponent from '../../components/dividers/FlexDivider';
import FlexDividerRaw from '../../components/dividers/FlexDivider.tsx?raw';
import DividerTextComponent from '../../components/dividers/DividerText';
import DividerTextRaw from '../../components/dividers/DividerText.tsx?raw';
import ListDividersComponent from '../../components/dividers/ListDividers';
import ListDividersRaw from '../../components/dividers/ListDividers.tsx?raw';
import VerticalDividerMiddleComponent from '../../components/dividers/VerticalDividerMiddle';
import VerticalDividerMiddleRaw from '../../components/dividers/VerticalDividerMiddle.tsx?raw';

function DividersDoc(props) {
	return (
		<>
			<Button
				className="normal-case absolute right-0 not-prose"
				variant="contained"
				color="secondary"
				component="a"
				href="https://mui.com/components/dividers"
				target="_blank"
				role="button"
				size="small"
				startIcon={<FuseSvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</FuseSvgIcon>}
			>
				Reference
			</Button>
			<Typography
				className="text-5xl my-4 font-bold"
				component="h1"
			>
				Divider
			</Typography>
			<Typography className="description">
				The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual
				hierarchy.
			</Typography>

			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Introduction
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The Material UI Divider component renders as a dark gray <code>{`<hr>`}</code> by default, and features
				several useful props for quick style adjustments.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="IntroDivider.js"
					className="my-4"
					iframe={false}
					component={IntroDividerComponent}
					raw={IntroDividerRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Basics
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
import Divider from '@mui/material/Divider';
`}
			</FuseHighlight>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Variants
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The Divider component supports three variants: <code>fullWidth</code> (default), <code>inset</code>, and{' '}
				<code>middle</code>.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="DividerVariants.js"
					className="my-4"
					iframe={false}
					component={DividerVariantsComponent}
					raw={DividerVariantsRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Orientation
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Use the <code>orientation</code> prop to change the Divider from horizontal to vertical. When using
				vertical orientation, the Divider renders a <code>{`<div>`}</code> with the corresponding accessibility
				attributes instead of <code>{`<hr>`}</code> to adhere to the WAI-ARIA{' '}
				<a href="https://www.w3.org/TR/wai-aria-1.2/#separator">spec</a>.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="VerticalDividers.js"
					className="my-4"
					iframe={false}
					component={VerticalDividersComponent}
					raw={VerticalDividersRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Flex item
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Use the <code>flexItem</code> prop to display the Divider when it&#39;s being used in a flex container.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="FlexDivider.js"
					className="my-4"
					iframe={false}
					component={FlexDividerComponent}
					raw={FlexDividerRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				With children
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Use the <code>textAlign</code> prop to align elements that are wrapped by the Divider.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="DividerText.js"
					className="my-4"
					iframe={false}
					component={DividerTextComponent}
					raw={DividerTextRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Customization
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Use with a List
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				When using the Divider to separate items in a List, use the <code>component</code> prop to render it as
				an <code>{`<li>`}</code>—otherwise it won&#39;t be a valid HTML element.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="ListDividers.js"
					className="my-4"
					iframe={false}
					component={ListDividersComponent}
					raw={ListDividersRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Icon grouping
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The demo below shows how to combine the props <code>{`variant="middle"`}</code> and{' '}
				<code>{`orientation="vertical"`}</code>.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="VerticalDividerMiddle.js"
					className="my-4"
					iframe={false}
					component={VerticalDividerMiddleComponent}
					raw={VerticalDividerMiddleRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Accessibility
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Due to its implicit role of <code>separator</code>, the Divider, which is a <code>{`<hr>`}</code>{' '}
				element, will be announced by screen readers as a &quot;Horziontal Splitter&quot; (or vertical, if
				you&#39;re using the <code>orientation</code> prop).
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				If you&#39;re using it as a purely stylistic element, we recommend setting{' '}
				<code>{`aria-hidden="true"`}</code> which will make screen readers bypass it.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-js"
			>
				{` 
<Divider aria-hidden="true" />
`}
			</FuseHighlight>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				If you&#39;re using the Divider to wrap other elements, such as text or chips, we recommend changing its
				rendered element to a plain <code>{`<div>`}</code> using the <code>component</code> prop, and setting{' '}
				<code>{`role="presentation"`}</code>. This ensures that it&#39;s not announced by screen readers while
				still preserving the semantics of the elements inside it.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-js"
			>
				{` 
<Divider component="div" role="presentation">
  <Typography>Text element</Typography>
</Divider>
`}
			</FuseHighlight>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Anatomy
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The Divider component is composed of a root <code>{`<hr>`}</code>.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-html"
			>
				{` 
<hr className="MuiDivider-root">
  
</hr>
`}
			</FuseHighlight>
		</>
	);
}

export default DividersDoc;
