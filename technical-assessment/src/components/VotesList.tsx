import React from 'react';

interface VotesListProps {
	votesList: React.ReactNode[];
}

const VotesList: React.FC<VotesListProps> = ({ votesList }) => {
	return (
		<div className="votes-list">
			{votesList.map((vote, index) => (
				<div key={index} className="">
					{vote}
				</div>
			))}
		</div>
	);
};

export default VotesList;
