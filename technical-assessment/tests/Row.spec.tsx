import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import Row from '../src/components/Row';
import type { RowProps } from '../src/components/Row';

const defaultProps: RowProps = {
	rowNumber: 0,
};

const renderComponent = (props: Partial<RowProps> = {}) =>
	render(<Row {...defaultProps} {...props} />);

describe('<Row />', () => {
	it('should render row with add button and empty votes as default', () => {
		renderComponent();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
