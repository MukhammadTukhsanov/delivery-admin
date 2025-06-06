// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimplePaperComponent from '../../components/paper/SimplePaper';
import SimplePaperRaw from '../../components/paper/SimplePaper.tsx?raw';
import ElevationComponent from '../../components/paper/Elevation';
import ElevationRaw from '../../components/paper/Elevation.tsx?raw';
import VariantsComponent from '../../components/paper/Variants';
import VariantsRaw from '../../components/paper/Variants.tsx?raw';
import SquareCornersComponent from '../../components/paper/SquareCorners';
import SquareCornersRaw from '../../components/paper/SquareCorners.tsx?raw';

function PaperDoc(props) {
	return (
		<>
			<Button
				className="normal-case absolute right-0 not-prose"
				variant="contained"
				color="secondary"
				component="a"
				href="https://mui.com/components/paper"
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
				Paper
			</Typography>
			<Typography className="description">
				The Paper component is a container for displaying content on an elevated surface.
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
				In Material Design, surface components and shadow styles are heavily influenced by their real-world
				physical counterparts.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Material UI implements this concept with the Paper component, a container-like surface that features the{' '}
				<a href="#elevation">
					<code>elevation</code>
				</a>{' '}
				prop for pulling box-shadow values from the theme.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				:::success The Paper component is ideally suited for designs that follow{' '}
				<a href="https://m2.material.io/design/environment/elevation.html#elevation-in-material-design">
					Material Design&#39;s elevation system
				</a>
				, which is meant to replicate how light casts shadows in the physical world.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				If you just need a generic container, you may prefer to use the{' '}
				<a href="/material-ui/react-box/">Box</a> or <a href="/material-ui/react-container/">Container</a>{' '}
				components. :::
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="SimplePaper.js"
					className="my-4"
					iframe={false}
					component={SimplePaperComponent}
					raw={SimplePaperRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Component
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
import Paper from '@mui/material/Paper';
`}
			</FuseHighlight>
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
				Elevation
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Use the <code>elevation</code> prop to establish hierarchy through the use of shadows. The Paper
				component&#39;s default elevation level is <code>1</code>. The prop accepts values from <code>0</code>{' '}
				to <code>24</code>. The higher the number, the further away the Paper appears to be from its background.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				In dark mode, increasing the elevation also makes the background color lighter. This is done by applying
				a semi-transparent gradient with the <code>background-image</code> CSS property.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				:::warning The aforementioned dark mode behavior can lead to confusion when overriding the Paper
				component, because changing the <code>background-color</code> property won&#39;t affect the lighter
				shading. To override it, you must either use a new background value, or customize the values for both{' '}
				<code>background-color</code> and <code>background-image</code>. :::
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="Elevation.js"
					className="my-4"
					iframe={false}
					component={ElevationComponent}
					raw={ElevationRaw}
				/>
			</Typography>
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
				Set the <code>variant</code> prop to <code>{`"outlined"`}</code> for a flat, outlined Paper with no
				shadows:
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="Variants.js"
					className="my-4"
					iframe={false}
					component={VariantsComponent}
					raw={VariantsRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Corners
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The Paper component features rounded corners by default. Add the <code>square</code> prop for square
				corners:
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="SquareCorners.js"
					className="my-4"
					iframe={false}
					component={SquareCornersComponent}
					raw={SquareCornersRaw}
				/>
			</Typography>
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
				The Paper component is composed of a single root <code>{`<div>`}</code> that wraps around its contents:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-html"
			>
				{` 
<div className="MuiPaper-root">
  
</div>
`}
			</FuseHighlight>
		</>
	);
}

export default PaperDoc;
