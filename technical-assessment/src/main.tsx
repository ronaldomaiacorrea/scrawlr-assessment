import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import VotesProvider from './context/VotesProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<VotesProvider>
			<App />
		</VotesProvider>
	</StrictMode>
);
