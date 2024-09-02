export interface Vote {
	id: number;
	// onClick: () => void;
}

export interface RowVotes {
	[row: number]: {
		votes: Vote[];
		isSelected: boolean;
	};
}

export type VotesContextType = {
	numberOfRows: number;
	votesRows: RowVotes;
	addVote: (row: number) => void;
	updateVotes: (row: number) => void;
};
