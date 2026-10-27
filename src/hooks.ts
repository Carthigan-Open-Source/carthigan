import type { Reroute } from '@sveltejs/kit';

// Subdomains that serve a section of the site at their root.
// `reroute` runs on both the server and the client, so the URL in the
// address bar stays as-is while both sides resolve the same route. Using
// a server-only rewrite here would make the SSR HTML and the hydrated
// client disagree (the browser would swap in the homepage).
const HOST_ROOT_ROUTES: Record<string, string> = {
	'education.carthigan.com': '/education',
	'developers.carthigan.com': '/developers'
};

// Clean short paths on a subdomain that resolve to a full route.
const HOST_PATH_ALIASES: Record<string, Record<string, string>> = {
	'education.carthigan.com': {
		'/assembly-book': '/education/assembly-book'
	}
};

export const reroute: Reroute = ({ url }) => {
	if (url.pathname === '/') {
		return HOST_ROOT_ROUTES[url.hostname];
	}

	const alias = HOST_PATH_ALIASES[url.hostname]?.[url.pathname];
	if (alias) {
		return alias;
	}
};
