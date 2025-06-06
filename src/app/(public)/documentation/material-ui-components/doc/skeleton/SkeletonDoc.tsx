// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VariantsComponent from '../../components/skeleton/Variants';
import VariantsRaw from '../../components/skeleton/Variants.tsx?raw';
import AnimationsComponent from '../../components/skeleton/Animations';
import AnimationsRaw from '../../components/skeleton/Animations.tsx?raw';
import YouTubeComponent from '../../components/skeleton/YouTube';
import YouTubeRaw from '../../components/skeleton/YouTube.tsx?raw';
import FacebookComponent from '../../components/skeleton/Facebook';
import FacebookRaw from '../../components/skeleton/Facebook.tsx?raw';
import SkeletonTypographyComponent from '../../components/skeleton/SkeletonTypography';
import SkeletonTypographyRaw from '../../components/skeleton/SkeletonTypography.tsx?raw';
import SkeletonChildrenComponent from '../../components/skeleton/SkeletonChildren';
import SkeletonChildrenRaw from '../../components/skeleton/SkeletonChildren.tsx?raw';
import SkeletonColorComponent from '../../components/skeleton/SkeletonColor';
import SkeletonColorRaw from '../../components/skeleton/SkeletonColor.tsx?raw';

function SkeletonDoc(props) {
	return (
		<>
			<Button
				className="normal-case absolute right-0 not-prose"
				variant="contained"
				color="secondary"
				component="a"
				href="https://mui.com/components/skeleton"
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
				Skeleton
			</Typography>
			<Typography className="description">
				Display a placeholder preview of your content before the data gets loaded to reduce load-time
				frustration.
			</Typography>

			<Typography
				className="text-base mb-8"
				component="div"
			>
				The data for your components might not be immediately available. You can improve the perceived
				responsiveness of the page by using skeletons. It feels like things are happening immediately, then the
				information is incrementally displayed on the screen (Cf.{' '}
				<a href="https://www.lukew.com/ff/entry.asp?1797">Avoid The Spinner</a>).
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Usage
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The component is designed to be used <strong>directly in your components</strong>. For instance:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,
      
      alt={item.title}
      src={item.src}
    //>
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
}
`}
			</FuseHighlight>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Variants
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The component supports 4 shape variants:
			</Typography>
			<ul className="space-y-4">
				<li>
					<code>text</code> (default): represents a single line of text (you can adjust the height via font
					size).
				</li>
				<li>
					<code>circular</code>, <code>rectangular</code>, and <code>rounded</code>: come with different
					border radius to let you take control of the size.
				</li>
			</ul>
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
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Animations
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="Animations.js"
					className="my-4"
					iframe={false}
					component={AnimationsComponent}
					raw={AnimationsRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Pulsate example
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="YouTube.js"
					className="my-4"
					iframe={false}
					component={YouTubeComponent}
					raw={YouTubeRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Wave example
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="Facebook.js"
					className="my-4"
					iframe={false}
					component={FacebookComponent}
					raw={FacebookRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Inferring dimensions
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				In addition to accepting <code>width</code> and <code>height</code> props, the component can also infer
				the dimensions.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				It works well when it comes to typography as its height is set using <code>em</code> units.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
<Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
`}
			</FuseHighlight>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="SkeletonTypography.js"
					className="my-4"
					iframe={false}
					component={SkeletonTypographyComponent}
					raw={SkeletonTypographyRaw}
				/>
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				But when it comes to other components, you may not want to repeat the width and height. In these
				instances, you can pass <code>children</code> and it will infer its width and height from them.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
loading ? (
  <Skeleton variant="circular">
    <Avatar />
  </Skeleton>
) : (
  <Avatar src={data.avatar} />
);
`}
			</FuseHighlight>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="SkeletonChildren.js"
					className="my-4"
					iframe={false}
					component={SkeletonChildrenComponent}
					raw={SkeletonChildrenRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Color
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The color of the component can be customized by changing its <code>background-color</code> CSS property.
				This is especially useful when on a black background (as the skeleton will otherwise be invisible).
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="SkeletonColor.js"
					className="my-4"
					iframe={false}
					component={SkeletonColorComponent}
					raw={SkeletonColorRaw}
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
				Skeleton screens provide an alternative to the traditional spinner method. Rather than showing an
				abstract widget, skeleton screens create anticipation of what is to come and reduce cognitive load.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The background color of the skeleton uses the least amount of luminance to be visible in good conditions
				(good ambient light, good screen, no visual impairments).
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				ARIA
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				None.
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Keyboard
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The skeleton is not focusable.
			</Typography>
		</>
	);
}

export default SkeletonDoc;
