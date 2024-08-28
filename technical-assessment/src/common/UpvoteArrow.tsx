import { useState } from 'react';

const UpvoteArrow = () => {
	const [selected, setSelected] = useState(false);

	return (
		<button onClick={() => setSelected((previous) => !previous)}>
			{selected ? 'Selected' : 'Not selected'}
		</button>
	);
};

export default UpvoteArrow;
