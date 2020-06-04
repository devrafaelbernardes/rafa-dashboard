import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import CourseURL from 'routes/URLs/CourseURL';
import HomeURL from 'routes/URLs/HomeURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import Add from 'pages/auth/Course/pages/Students/pages/Add';
import Home from 'pages/auth/Course/pages/Students/pages/Home';

export function RouterCourseStudents() {
    const ROUTER = CourseURL().ROUTER.STUDENTS;
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

            { /* ANY */}
            <ProtectedRoute
                redirectAuthenticatedURL={ERROR_LINK}
                redirectNotAuthenticatedURL={ERROR_LINK}
            />
        </Switch>
    );
}

export default RouterCourseStudents;