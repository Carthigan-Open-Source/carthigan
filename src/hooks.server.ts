import type { Handle } from '@sveltejs/kit';

// Hosts that should serve a different route at root, keeping the URL as-is.
// The handle hook runs after SvelteKit's router has already matched the
// route, so instead of rewriting (which the router ignores) we fulfil the
// request with an internal subrequest to the target route.
const HOST_ROOT_ROUTES: Record<string, string> = {
	'education.carthigan.com': '/education',
	'developers.carthigan.com': '/developers'
};

const DEVELOPERS_HOST = 'developers.carthigan.com';

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.request.headers.get('host')?.split(':')[0] ?? '';
	const pathname = event.url.pathname;

	// The developers section lives only on its subdomain. Any /developers
	// path (on any host, including the subdomain itself) redirects to the
	// canonical root so the section exists in exactly one place.
	// Internal subrequests (event.fetch rewrites for subdomain roots) are
	// exempt, otherwise the subdomain root would redirect to itself forever.
	if (!event.isSubRequest && (pathname === '/developers' || pathname.startsWith('/developers/'))) {
		return Response.redirect(`https://${DEVELOPERS_HOST}/`, 308);
	}

	const target = HOST_ROOT_ROUTES[host];

	if (target && pathname === '/' && event.request.method === 'GET') {
		return await event.fetch(target);
	}

	return resolve(event);
};
