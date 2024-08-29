import './App.css';
import Votes from './components/Votes';
import ContextProvider from './context/ContextProvider';

function App() {
	return (
		<div className="card-container">
			<ContextProvider>
				<Votes />
				<Votes />
				<Votes />
			</ContextProvider>
		</div>
	);
}

export default App;
