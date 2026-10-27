import type { Handle } from '@sveltejs/kit';

const DEVELOPERS_HOST = 'developers.carthigan.com';

// Root-path routing for subdomains lives in the universal `reroute` hook
// (src/hooks.ts) so the server and the client resolve the same route.
export const handle: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname;

	// The developers section lives only on its subdomain. Any /developers
	// path redirects to the subdomain root, so the section exists in exactly
	// one place. No internal subrequest is involved, so there is no loop.
	if (pathname === '/developers' || pathname.startsWith('/developers/')) {
		return Response.redirect(`https://${DEVELOPERS_HOST}/`, 308);
	}

	return resolve(event);
};
