import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import UpArrow, { UpArrowProps } from '../src/common/upArrow/UpArrow';

const defaultProps: UpArrowProps = {
	isSelected: false,
	onSelectVote: vi.fn(),
};

const renderComponent = (props: Partial<UpArrowProps> = {}) =>
	render(<UpArrow {...defaultProps} {...props} />);

describe('<Uparrow>', () => {
	it('Should render the up arrow with a fill attribute indicating it is not selected, using the color #F4F6F8 by default.', () => {
		renderComponent();
		expect(screen.getByRole('img')).toHaveAttribute('fill', '#F4F6F8');
	});

	it('Should render the up arrow with a fill attribute indicating it is selected, using the color #E5E8FD by default.', () => {
		renderComponent({ isSelected: true });
		expect(screen.getByRole('img')).toHaveAttribute('fill', '#E5E8FD');
	});

	it('Should call onSelectVote when user clicks on the up-vote arrow', async () => {
		const onSelectVoteSpy = vi.fn();

		renderComponent({ onSelectVote: onSelectVoteSpy });

		userEvent.click(screen.getByRole('img'));

		await waitFor(() => expect(onSelectVoteSpy).toHaveBeenCalledTimes(1));
	});
});
