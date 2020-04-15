import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import CourseURL from 'routes/URLs/CourseURL';
import HomeURL from 'routes/URLs/HomeURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import CreateAccess from 'pages/auth/Course/pages/CreateAccess';
import Home from 'pages/auth/Course/pages/Home';
import Settings from 'pages/auth/Course/pages/Settings';
import Students from 'pages/auth/Course/pages/Students';
import Videos from 'pages/auth/Course/pages/Videos';

export function RouterCourse() {
    const ROUTER = CourseURL().ROUTER;
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
                path={ROUTER.CREATE_ACCESS.BASE}
                componentAuthenticated={CreateAccess}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.SETTINGS}
                componentAuthenticated={Settings}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.STUDENTS.BASE}
                componentAuthenticated={Students}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.VIDEOS.BASE}
                componentAuthenticated={Videos}
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

export default RouterCourse;