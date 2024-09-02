import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import UpArrow from '../src/common/upArrow/UpArrow';
import type { UpArrowProps } from '../src/common/upArrow/UpArrow';
import userEvent from '@testing-library/user-event';

const defaultProps: UpArrowProps = {
	isSelected: false,
	handleVoteSelection: vi.fn(),
	rowNumber: 0,
};

const renderComponent = (props: Partial<UpArrowProps> = {}) =>
	render(<UpArrow {...defaultProps} {...props} />);

const getUpArrow = () => screen.getByRole('img');

describe('<UpArrow />', () => {
	it('Should render the up arrow with a fill attribute indicating it is not selected, using the color #F4F6F8 by default.', () => {
		renderComponent();
		expect(screen.getByRole('img')).toHaveAttribute('fill', '#F4F6F8');
	});

	it('Should render the up arrow with a fill attribute indicating it is selected, using the color #E5E8FD by default.', () => {
		renderComponent({ isSelected: true });
		expect(screen.getByRole('img')).toHaveAttribute('fill', '#E5E8FD');
	});
	it('should change up-vote arrow state when user clicks on arrow', async () => {
		const handleVoteSelectionSpy = vi.fn();
		const { rerender } = renderComponent({
			handleVoteSelection: handleVoteSelectionSpy,
		});

		expect(getUpArrow()).toHaveAttribute('fill', '#F4F6F8');

		userEvent.click(getUpArrow());

		await waitFor(() => expect(handleVoteSelectionSpy).toHaveBeenCalled());

		rerender(
			<UpArrow
				isSelected={true}
				handleVoteSelection={handleVoteSelectionSpy}
				rowNumber={0}
			/>
		);

		expect(getUpArrow()).toHaveAttribute('fill', '#E5E8FD');
	});
});
