import type { RequestHandler } from './__types/form-endpoint';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	console.log(body.get('anything'));
	return {
		status: 303,
		headers: {
			location: request.headers.get('referer') || '/'
		}
	};
};
