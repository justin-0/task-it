import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// PUBLIC ROUTES FOR NEW USERS
const isPublicRoute = createRouteMatcher(['/', '/sign-in', 'sign-up']);

export default clerkMiddleware((auth, req) => {
    // If authenticated and on a public route (except root)
    if (auth().userId && isPublicRoute(req)) {
        let path = '/select-organisation';

        // We have an organisation ID
        if (auth().orgId) {
            path = `/organisation/${auth().orgId}`;
        }

        const org = new URL(path, req.url);
        // Redirect to URL based on path condition - select org or current org ID pages
        return NextResponse.redirect(org);
    }

    // If not authenticated and not on a public route
    if (!auth().userId && !isPublicRoute(req)) {
        return auth().redirectToSignIn({ returnBackUrl: req.url });
    }

    // If authenticated but no org ID
    if (auth().userId && !auth().orgId) {
        return NextResponse.redirect(new URL('/select-organisation', req.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
