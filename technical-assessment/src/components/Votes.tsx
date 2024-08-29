import React, { useState } from 'react';
import AddButton from '../common/addButton/AddButton';
import UpArrow from '../common/upArrow/UpArrow';
import VotesList from './VotesList';

interface VotesProps {
	rowNumber: number;
}

const Votes = ({ rowNumber }: VotesProps) => {
	const [votesList, setVotesList] = useState<React.ReactNode[]>([]);

	const onClickVote = () => {
		setVotesList([...votesList, <UpArrow key={votesList.length} />]);
	};

	return (
		<div className="votes-container">
			<VotesList votesList={votesList} />
			<AddButton addItem={onClickVote} />
		</div>
	);
};

export default Votes;
