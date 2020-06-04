import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import ProfileURL from 'routes/URLs/ProfileURL';
import HomeURL from 'routes/URLs/HomeURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import Home from 'pages/auth/Profile/pages/Home';
import UpdatePassword from 'pages/auth/Profile/pages/UpdatePassword';

export function RouterProfile() {
    const ROUTER = ProfileURL().ROUTER;
    const DESCONNECTED_LINK = HomeURL().REDIRECT.BASE;
    const ERROR_LINK = ErrorURL().REDIRECT.BASE;

    return (
        <Switch>
            { /* AUTH */}
            <ProtectedRoute
                exact
                path={ROUTER.BASE}
                componentAuthenticated={Home}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.UPDATE_PASSWORD}
                componentAuthenticated={UpdatePassword}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />

            { /* ANY */}
            <ProtectedRoute
                redirectAuthenticatedURL={ERROR_LINK}
                redirectNotAuthenticatedURL={ERROR_LINK}
            />
        </Switch>
    );
}

export default RouterProfile;