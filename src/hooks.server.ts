import type { Handle } from '@sveltejs/kit';

// Map subdomain hosts to the route they should serve at root.
// Add future subdomains here (e.g. 'studio.carthigan.com': '/studio').
const HOST_ROUTES: Record<string, string> = {
	'education.carthigan.com': '/education'
};

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.request.headers.get('host')?.split(':')[0] ?? '';
	const target = HOST_ROUTES[host];

	if (target && event.url.pathname === '/') {
		event.url.pathname = target;
	}

	return resolve(event);
};
