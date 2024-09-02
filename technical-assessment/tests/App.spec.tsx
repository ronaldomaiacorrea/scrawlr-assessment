import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { it, describe, vi, expect } from 'vitest';
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
	it('should render 1 row with add button', () => {
		renderComponent();

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should render 3 row with add button', () => {
		render(
			<VotesContext.Provider
				value={{ addVote: vi.fn(), votesRows: [], numberOfRows: 3 }}
			>
				<App />
			</VotesContext.Provider>
		);

		expect(screen.queryAllByRole('button')).toHaveLength(3);
	});
});
