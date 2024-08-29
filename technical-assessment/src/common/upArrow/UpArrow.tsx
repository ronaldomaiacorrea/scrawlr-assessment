import { useState } from 'react';
// import arrowSvg from '@assets/arrow-up.svg';
import './upArrow.css';

const UpArrow = () => {
	const [selected, setSelected] = useState(false);

	return (
		<svg
			onClick={() => setSelected((previous) => !previous)}
			width="30"
			height="30"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-svg"
		>
			<rect width="30" height="30" fill={selected ? '#E5E8FD' : '#F4F6F8'} />
			<path
				d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z"
				fill={selected ? '#253CF2' : '#343A40'}
			/>
		</svg>
	);
};

export default UpArrow;
