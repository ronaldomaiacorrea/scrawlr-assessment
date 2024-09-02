import { useContext } from 'react';
import './App.css';
import { VotesContext } from './context/VotesProvider';
import { VotesContextType } from './utils/types';
import Row from './components/Row';

function App() {
	const { numberOfRows } = useContext<VotesContextType>(VotesContext);

	return (
		<div className="card-container">
			{[...Array(numberOfRows)].map((_, index) => (
				<div key={index}>
					<Row rowNumber={index} />
				</div>
			))}
		</div>
	);
}

export default App;
