import { useContext } from 'react';
import type { VotesContextType } from '../utils/types';
import AddButton from '../common/addButton/AddButton';
import VotesList from './VotesList';
import { VotesContext } from '../context/VotesProvider';

export interface RowProps {
	rowNumber: number;
}

const Row = ({ rowNumber }: RowProps) => {
	const { votesRows, addVote } = useContext<VotesContextType>(VotesContext);

	return (
		<div className="row-container">
			<VotesList
				votes={votesRows[rowNumber]?.votes || []}
				isSelected={votesRows[rowNumber]?.isSelected}
				rowNumber={rowNumber}
			/>
			<AddButton addItem={() => addVote(rowNumber)} />
		</div>
	);
};

export default Row;
