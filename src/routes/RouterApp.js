import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import BagURL from 'routes/URLs/BagURL';
import CoursesURL from 'routes/URLs/CoursesURL';
import CourseURL from 'routes/URLs/CourseURL';
import HomeURL from 'routes/URLs/HomeURL';
import LogonURL from 'routes/URLs/LogonURL';
import MediaURL from 'routes/URLs/MediaURL';
import ProfileURL from 'routes/URLs/ProfileURL';
import StudentsURL from 'routes/URLs/StudentsURL';
import SocialNetworkURL from 'routes/URLs/SocialNetworkURL';

// ERROR PAGES
import PageNotFound from 'pages/errors/PageNotFound';

// PAGES AUTH
import Bag from 'pages/auth/Bag';
import Course from 'pages/auth/Course';
import Courses from 'pages/auth/Courses';
import HomeAuth from 'pages/auth/Home';
import Media from 'pages/auth/Media';
import Profile from 'pages/auth/Profile';
import Students from 'pages/auth/Students';
import SocialNetwork from 'pages/auth/SocialNetwork';

// PAGES DEFAULT
import HomeDefault from 'pages/default/Home';
import Logon from 'pages/default/Logon';

export function RouterApp() {
    const CONNECTED_LINK = HomeURL().REDIRECT.BASE;
    const DESCONNECTED_LINK = HomeURL().REDIRECT.BASE;

    return (
        <Switch>
            { /* DEFAULT */}
            <ProtectedRoute
                path={LogonURL().ROUTER.BASE}
                componentNotAuthenticated={Logon}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />

            { /* AUTH */}
            <ProtectedRoute
                exact
                path={HomeURL().ROUTER.BASE}
                componentAuthenticated={HomeAuth}
                componentNotAuthenticated={HomeDefault}
            />
            <ProtectedRoute
                path={BagURL().ROUTER.BASE}
                componentAuthenticated={Bag}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={CoursesURL().ROUTER.BASE}
                componentAuthenticated={Courses}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={CourseURL().ROUTER.BASE}
                componentAuthenticated={Course}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={MediaURL().ROUTER.BASE}
                componentAuthenticated={Media}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={ProfileURL().ROUTER.BASE}
                componentAuthenticated={Profile}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={SocialNetworkURL().ROUTER.BASE}
                componentAuthenticated={SocialNetwork}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={StudentsURL().ROUTER.BASE}
                componentAuthenticated={Students}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />

            { /* ANY */}
            <ProtectedRoute
                componentAuthenticated={PageNotFound}
                componentNotAuthenticated={PageNotFound}
            />
        </Switch>
    );
}

export default RouterApp;