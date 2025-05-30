import _ from 'lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { Draggable } from '@hello-pangea/dnd';
import { useAppDispatch } from 'src/store/hooks';
import { AvatarGroup } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { MouseEvent } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import { openCardDialog } from '../../../scrumboardSlice';
import BoardCardLabel from './BoardCardLabel';
import BoardCardDueDate from './BoardCardDueDate';
import BoardCardCheckItems from './BoardCardCheckItems';
import {
	ScrumboardCard,
	useGetScrumboardBoardCardsQuery,
	useGetScrumboardBoardQuery,
	useGetScrumboardMembersQuery
} from '../../../ScrumboardApi';

const StyledCard = styled(Card)(({ theme }) => ({
	'& ': {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	}
}));

type BoardCardProps = {
	cardId: string;
	index: number;
	boardId: string;
};

/**
 * The board card component.
 */
function BoardCard(props: BoardCardProps) {
	const { cardId, index, boardId } = props;
	const dispatch = useAppDispatch();

	const { data: board, isLoading: isBoardLoading } = useGetScrumboardBoardQuery(boardId);
	const { data: cards, isLoading: isCardsLoading } = useGetScrumboardBoardCardsQuery(boardId);
	const { data: members, isLoading: isMembersLoading } = useGetScrumboardMembersQuery();

	const card = _.find(cards, { id: cardId });

	function handleCardClick(ev: MouseEvent<HTMLDivElement>, _card: ScrumboardCard) {
		ev.preventDefault();

		dispatch(openCardDialog(_card));
	}

	if (isBoardLoading || isCardsLoading || isMembersLoading) {
		return <FuseLoading />;
	}

	if (!card) {
		return null;
	}

	function getCommentsCount(_card: ScrumboardCard) {
		return _.sum(_card?.activities.map((x) => (x.type === 'comment' ? 1 : 0)));
	}

	const commentsCount = getCommentsCount(card);

	const cardCoverImage = _.find(card?.attachments, { id: card?.attachmentCoverId });

	return (
		<Draggable
			draggableId={cardId}
			index={index}
		>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<StyledCard
						className={clsx(
							snapshot.isDragging ? 'shadow-lg' : 'shadow-sm',
							'w-full mb-3 rounded-lg cursor-pointer'
						)}
						onClick={(ev) => handleCardClick(ev, card)}
					>
						{board?.settings?.cardCoverImages && cardCoverImage && (
							<img
								className="block"
								src={cardCoverImage.src}
								alt="card cover"
							/>
						)}

						<div className="p-4 pb-0">
							{card.labels.length > 0 && (
								<div className="flex flex-wrap mb-2 -mx-1">
									{card.labels.map((id) => (
										<BoardCardLabel
											boardId={boardId}
											id={id}
											key={id}
										/>
									))}
								</div>
							)}

							<Typography className="font-medium mb-3">{card?.title}</Typography>

							{(card.dueDate || card.checklists.length > 0) && (
								<div className="flex items-center mb-3 -mx-1">
									<BoardCardDueDate dueDate={card.dueDate} />

									<BoardCardCheckItems card={card} />
								</div>
							)}
						</div>

						<div className="flex justify-between h-12 px-4">
							<div className="flex items-center space-x-1.5">
								{card?.subscribed && (
									<FuseSvgIcon
										size={16}
										color="action"
									>
										heroicons-outline:eye
									</FuseSvgIcon>
								)}

								{card.description !== '' && (
									<FuseSvgIcon
										size={16}
										color="action"
									>
										heroicons-outline:document-text
									</FuseSvgIcon>
								)}

								{card.attachments && (
									<span className="flex items-center space-x-0.5">
										<FuseSvgIcon
											size={16}
											color="action"
										>
											heroicons-outline:paper-clip
										</FuseSvgIcon>
										<Typography color="text.secondary">{card.attachments.length}</Typography>
									</span>
								)}
								{commentsCount > 0 && (
									<span className="flex items-center space-x-0.5">
										<FuseSvgIcon
											size={16}
											color="action"
										>
											heroicons-outline:chat-bubble-left-right
										</FuseSvgIcon>

										<Typography color="text.secondary">{commentsCount}</Typography>
									</span>
								)}
							</div>

							<div className="flex items-center justify-end space-x-3">
								{card.memberIds.length > 0 && (
									<div className="flex justify-start">
										<AvatarGroup
											max={3}
											classes={{ avatar: 'w-6 h-6 text-md' }}
										>
											{card.memberIds.map((id) => {
												const member = _.find(members, { id });
												return (
													<Tooltip
														title={member?.name}
														key={id}
													>
														<Avatar
															key={index}
															alt="member"
															src={member?.avatar}
														/>
													</Tooltip>
												);
											})}
										</AvatarGroup>
									</div>
								)}
							</div>
						</div>
					</StyledCard>
				</div>
			)}
		</Draggable>
	);
}

export default BoardCard;
