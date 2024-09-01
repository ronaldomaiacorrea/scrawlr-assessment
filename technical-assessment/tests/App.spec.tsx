import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import App from '../src/App';
import { VotesContext } from '../src/context/VotesProvider';

const renderComponent = () =>
	render(
		<VotesContext.Provider
			value={{ addVote: vi.fn(), votesRows: [], numberOfRows: 1 }}
		>
			<App />
		</VotesContext.Provider>
	);

describe('<App />', () => {
	it('should render the app component', () => {
		renderComponent();
	});
});
