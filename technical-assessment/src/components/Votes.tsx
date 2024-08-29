import { useState } from 'react';
import type { Arrow } from '../utils/types';
import AddButton from '../common/addButton/AddButton';
import VotesList from './VotesList';

const Votes = () => {
	const [arrowList, setArrowList] = useState<Arrow[]>([]);
	const [arrow, setArrow] = useState<Arrow>({ selected: false, id: 0 });

	const onClickVote = () => {
		const lastArrow = arrowList[arrowList.length - 1];
		const newArrow = {
			...arrow,
			selected: lastArrow ? lastArrow.selected : arrow.selected,
			id: arrowList.length,
		};
		setArrow(newArrow);
		setArrowList([...arrowList, newArrow]);
	};

	const toggleVote = () => {
		const updatedArrows = arrowList.map((arrow) => ({
			...arrow,
			selected: !arrow.selected,
		}));

		setArrowList(updatedArrows);
	};

	return (
		<div className="votes-container">
			<VotesList votesList={arrowList} onSelect={toggleVote} />
			<AddButton addItem={onClickVote} />
		</div>
	);
};

export default Votes;
