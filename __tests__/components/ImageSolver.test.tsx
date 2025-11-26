import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImageSolver } from '@/components/ImageSolver';

// Mock fetch
global.fetch = jest.fn();

// Mock FileReader
class MockFileReader {
    result: string | ArrayBuffer | null = null;
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null = null;

    readAsDataURL(file: Blob) {
        this.result = 'data:image/png;base64,mockbase64data';
        if (this.onloadend) {
            this.onloadend({} as ProgressEvent<FileReader>);
        }
    }
}

global.FileReader = MockFileReader as any;

describe('ImageSolver Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders upload area initially', () => {
        render(<ImageSolver />);

        expect(screen.getByText(/Click to upload or drag & drop/i)).toBeInTheDocument();
        expect(screen.getByText(/Upload a math problem or science diagram/i)).toBeInTheDocument();
    });

    it('renders AI Problem Solver header', () => {
        render(<ImageSolver />);

        expect(screen.getByText(/AI Problem Solver/i)).toBeInTheDocument();
    });

    it('has file input element', () => {
        render(<ImageSolver />);

        const fileInput = document.querySelector('input[type="file"]');
        expect(fileInput).toBeInTheDocument();
        expect(fileInput).toHaveAttribute('accept', 'image/*');
    });

    it('displays solve button after image upload', async () => {
        render(<ImageSolver />);

        const file = new File(['dummy content'], 'test.png', { type: 'image/png' });
        const input = document.querySelector('input[type="file"]') as HTMLInputElement;

        Object.defineProperty(input, 'files', {
            value: [file],
            writable: false,
            configurable: true
        });

        fireEvent.change(input);

        await waitFor(() => {
            expect(screen.getByRole('button', { name: /Solve/i })).toBeInTheDocument();
        });
    });

    it('shows error for large files', async () => {
        render(<ImageSolver />);

        // Create a file larger than 5MB
        const largeFile = new File(['x'.repeat(6 * 1024 * 1024)], 'large.png', { type: 'image/png' });
        const input = document.querySelector('input[type="file"]') as HTMLInputElement;

        Object.defineProperty(input, 'files', {
            value: [largeFile],
            writable: false,
            configurable: true
        });

        fireEvent.change(input);

        await waitFor(() => {
            expect(screen.getByText(/Image size should be less than 5MB/i)).toBeInTheDocument();
        });
    });
});
