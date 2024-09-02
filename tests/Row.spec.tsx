import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import Row from '../src/components/Row';
import type { RowProps } from '../src/components/Row';
import userEvent from '@testing-library/user-event';
import type { RowVotes, VotesContextType } from '../src/utils/types';
import { VotesContext } from '../src/context/VotesProvider';

const defaultProps: RowProps = {
	rowNumber: 0,
};

const mockAddVote = vi.fn();
const mockUpdateVotes = vi.fn();
const mockVotesRows: RowVotes = {
	0: {
		votes: [{ id: 1 }],
		isSelected: false,
	},
};

const mockContextValue: VotesContextType = {
	votesRows: mockVotesRows,
	addVote: mockAddVote,
	numberOfRows: 1,
	updateVotes: mockUpdateVotes,
};

const renderComponent = (props: Partial<RowProps> = {}) =>
	render(
		<VotesContext.Provider value={mockContextValue}>
			<Row {...defaultProps} {...props} />
		</VotesContext.Provider>
	);

describe('<Row />', () => {
	it('should render row with add button and empty votes as default', () => {
		renderComponent();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should add a vote to the row when user clicks on add button', async () => {
		renderComponent();

		userEvent.click(screen.getByRole('button'));

		await waitFor(() =>
			expect(screen.getByRole('img')).toHaveAttribute('fill', '#F4F6F8')
		);
	});
});
