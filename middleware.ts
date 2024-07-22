import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// PUBLIC ROUTES FOR NEW USERS
const isPublicRoute = createRouteMatcher(['/', '/sign-in', 'sign-up']);

export default clerkMiddleware((auth, req) => {
    // ARE WE AUTH'D AND IS REQUEST A PUBLIC ROUTE
    if (auth().userId && isPublicRoute(req)) {
        let path = '/select-organisation';

        // WE HAVE AN ORGANISATION ID
        if (auth().orgId) {
            path = `/organisation/${auth().orgId}`;
        }

        const org = new URL(path, req.url);
        // REDIRECT TO URL BASED ON PATH CONDITION - SELECT ORG OR CURRENT ORG ID PAGES
        return NextResponse.redirect(org);
    }

    // WE ARE NOT AUTH'D AND THE ROUTE IS PUBLIC
    if (!auth().userId && isPublicRoute(req)) {
        return NextResponse.redirect('/');
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
