// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicTimelineComponent from '../../components/timeline/BasicTimeline';
import BasicTimelineRaw from '../../components/timeline/BasicTimeline.tsx?raw';
import LeftPositionedTimelineComponent from '../../components/timeline/LeftPositionedTimeline';
import LeftPositionedTimelineRaw from '../../components/timeline/LeftPositionedTimeline.tsx?raw';
import AlternateTimelineComponent from '../../components/timeline/AlternateTimeline';
import AlternateTimelineRaw from '../../components/timeline/AlternateTimeline.tsx?raw';
import AlternateReverseTimelineComponent from '../../components/timeline/AlternateReverseTimeline';
import AlternateReverseTimelineRaw from '../../components/timeline/AlternateReverseTimeline.tsx?raw';
import ColorsTimelineComponent from '../../components/timeline/ColorsTimeline';
import ColorsTimelineRaw from '../../components/timeline/ColorsTimeline.tsx?raw';
import OutlinedTimelineComponent from '../../components/timeline/OutlinedTimeline';
import OutlinedTimelineRaw from '../../components/timeline/OutlinedTimeline.tsx?raw';
import OppositeContentTimelineComponent from '../../components/timeline/OppositeContentTimeline';
import OppositeContentTimelineRaw from '../../components/timeline/OppositeContentTimeline.tsx?raw';
import CustomizedTimelineComponent from '../../components/timeline/CustomizedTimeline';
import CustomizedTimelineRaw from '../../components/timeline/CustomizedTimeline.tsx?raw';
import LeftAlignedTimelineComponent from '../../components/timeline/LeftAlignedTimeline';
import LeftAlignedTimelineRaw from '../../components/timeline/LeftAlignedTimeline.tsx?raw';
import RightAlignedTimelineComponent from '../../components/timeline/RightAlignedTimeline';
import RightAlignedTimelineRaw from '../../components/timeline/RightAlignedTimeline.tsx?raw';
import NoOppositeContentComponent from '../../components/timeline/NoOppositeContent';
import NoOppositeContentRaw from '../../components/timeline/NoOppositeContent.tsx?raw';

function TimelineDoc(props) {
	return (
		<>
			<Button
				className="normal-case absolute right-0 not-prose"
				variant="contained"
				color="secondary"
				component="a"
				href="https://mui.com/components/timeline"
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
				Timeline
			</Typography>
			<Typography className="description">
				The timeline displays a list of events in chronological order.
			</Typography>

			<div className="border-1 p-4 rounded-xl my-3">
				<Typography
					className="text-base mb-8"
					component="div"
				>
					This component is not documented in the{' '}
					<a href="https://m2.material.io/">Material Design guidelines</a>, but it is available in
					Material UI.
				</Typography>
			</div>

			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Basic timeline
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				A basic timeline showing list of events.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="BasicTimeline.js"
					className="my-4"
					iframe={false}
					component={BasicTimelineComponent}
					raw={BasicTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Left-positioned timeline
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The main content of the timeline can be positioned on the left side relative to the time axis.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="LeftPositionedTimeline.js"
					className="my-4"
					iframe={false}
					component={LeftPositionedTimelineComponent}
					raw={LeftPositionedTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Alternating timeline
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The timeline can display the events on alternating sides.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="AlternateTimeline.js"
					className="my-4"
					iframe={false}
					component={AlternateTimelineComponent}
					raw={AlternateTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Reverse Alternating timeline
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The timeline can display the events on alternating sides in reverse order.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="AlternateReverseTimeline.js"
					className="my-4"
					iframe={false}
					component={AlternateReverseTimelineComponent}
					raw={AlternateReverseTimelineRaw}
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
				The <code>TimelineDot</code> can appear in different colors from theme palette.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="ColorsTimeline.js"
					className="my-4"
					iframe={false}
					component={ColorsTimelineComponent}
					raw={ColorsTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Outlined
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="OutlinedTimeline.js"
					className="my-4"
					iframe={false}
					component={OutlinedTimelineComponent}
					raw={OutlinedTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Opposite content
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The timeline can display content on opposite sides.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="OppositeContentTimeline.js"
					className="my-4"
					iframe={false}
					component={OppositeContentTimelineComponent}
					raw={OppositeContentTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Customization
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Here is an example of customizing the component. You can learn more about this in the{' '}
				<a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="CustomizedTimeline.js"
					className="my-4"
					iframe={false}
					component={CustomizedTimelineComponent}
					raw={CustomizedTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Alignment
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				There are different ways in which a Timeline can be placed within the container.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				You can do it by overriding the styles.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				A Timeline centers itself in the container by default.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The demos below show how to adjust the relative width of the left and right sides of a Timeline:
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Left-aligned
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="LeftAlignedTimeline.js"
					className="my-4"
					iframe={false}
					component={LeftAlignedTimelineComponent}
					raw={LeftAlignedTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Right-aligned
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="RightAlignedTimeline.js"
					className="my-4"
					iframe={false}
					component={RightAlignedTimelineComponent}
					raw={RightAlignedTimelineRaw}
				/>
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				Left-aligned with no opposite content
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="NoOppositeContent.js"
					className="my-4"
					iframe={false}
					component={NoOppositeContentComponent}
					raw={NoOppositeContentRaw}
				/>
			</Typography>
		</>
	);
}

export default TimelineDoc;
