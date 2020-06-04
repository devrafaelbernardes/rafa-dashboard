import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';

import EmailsURL from 'routes/URLs/EmailsURL';
import HomeURL from 'routes/URLs/HomeURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import Home from 'pages/auth/Emails/pages/Home';
import To from 'pages/auth/Emails/pages/To';

export function RouterEmails() {
    const ROUTER = EmailsURL().ROUTER;
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
                path={ROUTER.SEND_TO.BASE}
                componentAuthenticated={To}
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

export default RouterEmails;