import type { RequestHandler } from './__types/form-endpoint';

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.formData();
		console.log(body.get('anything'));
		return {
			status: 303,
			headers: {
				location: request.headers.get('referer') || '/'
			}
		};
	} catch (error) {
		console.error(error);
		return {
			status: 500,
			body: error instanceof Error ? error.message : 'Server error'
		};
	}
};
