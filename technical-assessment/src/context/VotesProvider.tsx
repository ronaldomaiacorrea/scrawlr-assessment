import React, { createContext, useState } from 'react';
import { NUMBER_OF_ROWS } from './constants';
import type { RowVotes, Vote, VotesContextType } from '../utils/types';

interface VotesProviderProps {
	children: React.ReactNode;
}

export const VotesContext = createContext<VotesContextType>({
	numberOfRows: NUMBER_OF_ROWS,
	votesRows: {},
	addVote: () => {},
});

const VotesProvider = ({ children }: VotesProviderProps) => {
	const [votesRows, setVotes] = useState<RowVotes>({});

	const addVote = (row: number) => {
		setVotes((prevVotes) => {
			const isSelected = prevVotes[row]?.isSelected ?? false;

			const newVote: Vote = {
				id: prevVotes[row]?.votes?.length || 0,
				onClick: () => updateVotes(row),
			};

			return {
				...prevVotes,
				[row]: {
					...prevVotes[row],
					votes: [...(prevVotes[row]?.votes || []), newVote],
					isSelected,
				},
			};
		});
	};

	const updateVotes = (row: number) => {
		setVotes((prevVotes) => {
			const isSelected = !prevVotes[row]?.isSelected;

			return {
				...prevVotes,
				[row]: {
					votes: prevVotes[row].votes.map((vote) => ({
						...vote,
					})),
					isSelected,
				},
			};
		});
	};

	return (
		<VotesContext.Provider
			value={{
				addVote,
				votesRows,
				numberOfRows: NUMBER_OF_ROWS,
			}}
		>
			{children}
		</VotesContext.Provider>
	);
};

export default VotesProvider;
