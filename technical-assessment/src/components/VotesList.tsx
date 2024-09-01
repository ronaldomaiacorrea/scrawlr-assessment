import React from 'react';
import { Vote } from '../utils/types';
import UpArrow from '../common/upArrow/UpArrow';

interface VotesListProps {
	votes: Vote[];
	isSelected: boolean;
}

const VotesList: React.FC<VotesListProps> = ({
	votes,
	isSelected,
}: VotesListProps) => {
	return (
		<div className="votes-list">
			{votes.map((vote) => (
				<UpArrow
					key={vote.id}
					isSelected={isSelected}
					onSelectVote={vote.onClick}
				/>
			))}
		</div>
	);
};

export default VotesList;
