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
		// Rewrite the request itself: SvelteKit's router reads the path
		// from event.request, not event.url, so mutating event.url alone
		// has no effect on routing.
		event.request = new Request(new URL(target, event.url), event.request);
	}

	return resolve(event);
};
