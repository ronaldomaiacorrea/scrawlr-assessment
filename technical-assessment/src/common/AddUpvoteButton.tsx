import plusSvg from '../assets/plus.svg';

export interface AddUpVoteButtonProps {
	addVote: () => void;
}

const AddUpvoteButton = ({ addVote }: AddUpVoteButtonProps) => {
	return (
		<button className="add-button" onClick={addVote}>
			<img src={plusSvg} alt="Add vote button" />
		</button>
	);
};

export default AddUpvoteButton;
