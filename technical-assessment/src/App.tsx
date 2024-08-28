import './App.css';
import UpvotesList from './components/UpvotesList';
import ContextProvider from './context/ContextProvider';

function App() {
	return (
		<>
			<ContextProvider>
				<UpvotesList />
			</ContextProvider>
		</>
	);
}

export default App;
