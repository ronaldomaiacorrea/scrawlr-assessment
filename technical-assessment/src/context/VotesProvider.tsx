import React, { createContext, useState } from 'react';
import { NUMBER_OF_ROWS, VOTES_ROWS_KEY } from '../config/constants';
import type { RowVotes, Vote, VotesContextType } from '../utils/types';

interface VotesProviderProps {
	children: React.ReactNode;
}

export const VotesContext = createContext<VotesContextType>({
	numberOfRows: NUMBER_OF_ROWS,
	votesRows: {},
	addVote: () => {},
	updateVotes: () => {},
});

const VotesProvider = ({ children }: VotesProviderProps) => {
	const [votesRows, setVotes] = useState<RowVotes>(() => {
		const storedVotes = localStorage.getItem(VOTES_ROWS_KEY);
		if (!storedVotes) {
			return {};
		}
		return JSON.parse(storedVotes);
	});

	const addVote = (row: number) => {
		setVotes((prevVotes) => {
			const isSelected = prevVotes[row]?.isSelected ?? false;

			const newVote: Vote = {
				id: prevVotes[row]?.votes?.length || 0,
			};

			const updatedVotes = {
				...prevVotes,
				[row]: {
					...prevVotes[row],
					votes: [...(prevVotes[row]?.votes || []), newVote],
					isSelected,
				},
			};

			localStorage.setItem(VOTES_ROWS_KEY, JSON.stringify(updatedVotes));

			return updatedVotes;
		});
	};

	const updateVotes = (row: number) => {
		setVotes((prevVotes) => {
			const isSelected = !prevVotes[row]?.isSelected;

			const updatedVotes = {
				...prevVotes,
				[row]: {
					votes: prevVotes[row].votes.map((vote) => ({
						...vote,
					})),
					isSelected,
				},
			};

			localStorage.setItem(VOTES_ROWS_KEY, JSON.stringify(updatedVotes));

			return updatedVotes;
		});
	};

	return (
		<VotesContext.Provider
			value={{
				addVote,
				updateVotes,
				votesRows,
				numberOfRows: NUMBER_OF_ROWS,
			}}
		>
			{children}
		</VotesContext.Provider>
	);
};

export default VotesProvider;
