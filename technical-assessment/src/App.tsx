import './App.css';
import Votes from './components/Votes';
import ContextProvider from './context/ContextProvider';

function App() {
	return (
		<div className="card-container">
			<ContextProvider>
				<Votes rowNumber={0} />
				<Votes rowNumber={1} />
				<Votes rowNumber={2} />
			</ContextProvider>
		</div>
	);
}

export default App;
