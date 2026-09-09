import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const host = request.headers.get('host')?.split(':')[0] ?? '';

	if (host === 'education.carthigan.com') {
		throw redirect(307, '/education');
	}

	return {};
};
