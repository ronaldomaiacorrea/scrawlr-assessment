import React from 'react';
import UpArrow from '../common/upArrow/UpArrow';
import type { Arrow } from '../utils/types';

interface VotesListProps {
	votesList: Arrow[];
	onSelect: () => void;
}

const VotesList: React.FC<VotesListProps> = ({
	votesList,
	onSelect,
}: VotesListProps) => {
	return (
		<div className="votes-list">
			{votesList.map((vote) => (
				<UpArrow selected={vote.selected} onSelect={onSelect} key={vote.id} />
			))}
		</div>
	);
};

export default VotesList;
