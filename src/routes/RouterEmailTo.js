import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';

import EmailsURL from 'routes/URLs/EmailsURL';
import HomeURL from 'routes/URLs/HomeURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import Home from 'pages/auth/Emails/pages/To/pages/Home';
import EmailAll from 'pages/auth/Emails/pages/To/pages/EmailAll';
import EmailNoCourse from 'pages/auth/Emails/pages/To/pages/EmailNoCourse';
import EmailCourse from 'pages/auth/Emails/pages/To/pages/EmailCourse';
import EmailSingle from 'pages/auth/Emails/pages/To/pages/EmailSingle';

export function RouterEmailTo() {
    const ROUTER = EmailsURL().ROUTER.SEND_TO;
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
                path={ROUTER.SEND_TO_ALL}
                componentAuthenticated={EmailAll}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.SEND_TO_COURSE}
                componentAuthenticated={EmailCourse}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.SEND_TO_NO_COURSE}
                componentAuthenticated={EmailNoCourse}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.SEND_TO_SINGLE}
                componentAuthenticated={EmailSingle}
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

export default RouterEmailTo;