import React, { useContext } from 'react';
import { Vote, VotesContextType } from '../utils/types';
import UpArrow from '../common/upArrow/UpArrow';
import { VotesContext } from '../context/VotesProvider';

interface VotesListProps {
	votes: Vote[];
	isSelected: boolean;
	rowNumber: number;
}

const VotesList: React.FC<VotesListProps> = ({
	votes,
	isSelected,
	rowNumber,
}: VotesListProps) => {
	const { updateVotes } = useContext<VotesContextType>(VotesContext);

	return (
		<div className="votes-list">
			{votes.map((vote) => (
				<UpArrow
					key={vote.id}
					isSelected={isSelected}
					handleVoteSelection={updateVotes}
					rowNumber={rowNumber}
				/>
			))}
		</div>
	);
};

export default VotesList;
