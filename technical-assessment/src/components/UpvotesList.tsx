import { useState } from 'react';
import AddUpdateButton from '../common/AddUpvoteButton';
import UpvoteArrow from '../common/UpvoteArrow';

const UpvotesList = () => {
	const [votesList, setVotesList] = useState<JSX.Element[]>([]);

	const onClickVote = () => {
		setVotesList([...votesList, <UpvoteArrow key={votesList.length} />]);
	};

	return (
		<div className="card-container">
			<AddUpdateButton addVote={onClickVote} />
			{votesList.map((vote, index) => (
				<div key={index}>{vote}</div>
			))}
		</div>
	);
};

export default UpvotesList;
