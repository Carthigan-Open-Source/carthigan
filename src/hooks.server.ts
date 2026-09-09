import type { Handle } from '@sveltejs/kit';

// Hosts that should serve a different route at root, keeping the URL as-is.
// The handle hook runs after SvelteKit's router has already matched the
// route, so instead of rewriting (which the router ignores) we fulfil the
// request with an internal subrequest to the target route.
const HOST_ROOT_ROUTES: Record<string, string> = {
	'education.carthigan.com': '/education'
};

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.request.headers.get('host')?.split(':')[0] ?? '';
	const target = HOST_ROOT_ROUTES[host];

	if (target && event.url.pathname === '/' && event.request.method === 'GET') {
		return await event.fetch(target);
	}

	return resolve(event);
};
