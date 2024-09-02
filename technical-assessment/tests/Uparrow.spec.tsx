import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import UpArrow from '../src/common/upArrow/UpArrow';
import type { UpArrowProps } from '../src/common/upArrow/UpArrow';
import userEvent from '@testing-library/user-event';

const defaultProps: UpArrowProps = {
	isSelected: false,
	onSelectVote: vi.fn(),
};

const renderComponent = (props: Partial<UpArrowProps> = {}) =>
	render(<UpArrow {...defaultProps} {...props} />);

const getUpArrow = () => screen.getByRole('img');

describe('<UpArrow />', () => {
	it('should change up-vote arrow state when user clicks on arrow', async () => {
		const onSelectVoteSpy = vi.fn();
		const { rerender } = renderComponent({ onSelectVote: onSelectVoteSpy });

		expect(getUpArrow()).toHaveAttribute('fill', '#F4F6F8');

		userEvent.click(getUpArrow());

		await waitFor(() => expect(onSelectVoteSpy).toHaveBeenCalled());

		rerender(<UpArrow isSelected={true} onSelectVote={onSelectVoteSpy} />);

		expect(getUpArrow()).toHaveAttribute('fill', '#E5E8FD');
	});
});
