import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import SocialNetworkURL from 'routes/URLs/SocialNetworkURL';
import HomeURL from 'routes/URLs/HomeURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import Home from 'pages/auth/SocialNetwork/pages/Home';
import Add from 'pages/auth/SocialNetwork/pages/Add';
import UpdatePosition from 'pages/auth/SocialNetwork/pages/UpdatePosition';

export function RouterSocialNetwork() {
    const ROUTER = SocialNetworkURL().ROUTER;
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
                path={ROUTER.ADD}
                componentAuthenticated={Add}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.UPDATE_POSITION}
                componentAuthenticated={UpdatePosition}
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

export default RouterSocialNetwork;