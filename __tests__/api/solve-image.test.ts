import { POST } from '@/app/api/solve-image/route';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Mock the Gemini AI SDK
jest.mock('@google/generative-ai');

describe('/api/solve-image', () => {
    const mockEnv = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...mockEnv };
        jest.clearAllMocks();
    });

    afterEach(() => {
        process.env = mockEnv;
    });

    it('should return solution when API call succeeds', async () => {
        process.env.GEMINI_API_KEY = 'test-api-key';

        const mockGenerateContent = jest.fn().mockResolvedValue({
            response: {
                text: jest.fn().mockResolvedValue('This is a quadratic equation. Solution: x = 2 or x = -3')
            }
        });

        const mockGetGenerativeModel = jest.fn().mockReturnValue({
            generateContent: mockGenerateContent
        });

        (GoogleGenerativeAI as jest.MockedClass<typeof GoogleGenerativeAI>).mockImplementation(() => ({
            getGenerativeModel: mockGetGenerativeModel
        } as any));

        const request = new Request('http://localhost:3000/api/solve-image', {
            method: 'POST',
            body: JSON.stringify({
                image: 'base64encodedimage',
                prompt: 'Solve this problem'
            })
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.solution).toBe('This is a quadratic equation. Solution: x = 2 or x = -3');
        expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: 'gemini-1.5-flash' });
    });

    it('should return error when API key is missing', async () => {
        delete process.env.GEMINI_API_KEY;

        const request = new Request('http://localhost:3000/api/solve-image', {
            method: 'POST',
            body: JSON.stringify({
                image: 'base64encodedimage',
                prompt: 'Solve this problem'
            })
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(500);
        expect(data.error).toBe('Gemini API key is not configured');
    });

    it('should handle API errors gracefully', async () => {
        process.env.GEMINI_API_KEY = 'test-api-key';

        const mockGenerateContent = jest.fn().mockRejectedValue(new Error('API Error'));

        const mockGetGenerativeModel = jest.fn().mockReturnValue({
            generateContent: mockGenerateContent
        });

        (GoogleGenerativeAI as jest.MockedClass<typeof GoogleGenerativeAI>).mockImplementation(() => ({
            getGenerativeModel: mockGetGenerativeModel
        } as any));

        const request = new Request('http://localhost:3000/api/solve-image', {
            method: 'POST',
            body: JSON.stringify({
                image: 'base64encodedimage',
                prompt: 'Solve this problem'
            })
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(500);
        expect(data.error).toBe('Failed to process image. Please try again.');
    });

    it('should handle malformed request body', async () => {
        process.env.GEMINI_API_KEY = 'test-api-key';

        const request = new Request('http://localhost:3000/api/solve-image', {
            method: 'POST',
            body: 'invalid json'
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(500);
        expect(data.error).toBe('Failed to process image. Please try again.');
    });
});
