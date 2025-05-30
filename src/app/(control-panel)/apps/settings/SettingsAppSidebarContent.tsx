import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import clsx from 'clsx';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import SettingsAppNavigation from './SettingsAppNavigation';

const Root = styled('div')(({ theme }) => ({
	'&  .navigation': {
		padding: `${0}!important`,
		borderTop: `1px solid ${theme.vars.palette.divider}`
	},
	'&  .fuse-list-item': {
		padding: '20px 32px',
		margin: 0,
		borderRadius: 0,
		alignItems: 'start',
		borderBottom: `1px solid ${theme.vars.palette.divider}`,
		'&.active': {
			backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`,
			'&  .fuse-list-item-icon': {
				color: `${theme.vars.palette.primary.main}!important`
			},
			'&  .fuse-list-item-text-primary': {
				color: `${theme.vars.palette.primary.main}!important`
			}
		}
	},
	'&  .fuse-list-item-text-primary': {
		fontSize: '13px!important',
		fontWeight: '500!important'
	},
	'&  .fuse-list-item-text-secondary': {
		fontSize: '12px!important',
		whiteSpace: 'normal!important',
		fontWeight: '400!important'
	}
}));

type SettingsAppSidebarContentProps = {
	className?: string;
	onSetSidebarOpen: (open: boolean) => void;
};

function SettingsAppSidebarContent(props: SettingsAppSidebarContentProps) {
	const { className, onSetSidebarOpen } = props;
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	return (
		<Root>
			<div className={clsx('m-8 mr-6 flex items-center justify-between sm:my-10', className)}>
				<Typography className="text-4xl font-extrabold leading-none tracking-tight"> Settings</Typography>
				{isMobile && (
					<IconButton
						onClick={() => onSetSidebarOpen(false)}
						aria-label="close left sidebar"
						size="small"
					>
						<FuseSvgIcon>heroicons-outline:x-mark</FuseSvgIcon>
					</IconButton>
				)}
			</div>
			<FuseNavigation navigation={SettingsAppNavigation.children} />
		</Root>
	);
}

export default SettingsAppSidebarContent;
