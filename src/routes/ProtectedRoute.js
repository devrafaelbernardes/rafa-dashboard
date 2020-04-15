import React, { useContext } from "react";
import { Redirect, Route } from 'react-router-dom';
import ContextApp from "context/ContextApp";

export const ProtectedRoute = ({ redirectAuthenticatedURL, redirectNotAuthenticatedURL, componentNotAuthenticated: ComponentNotAuthenticated, componentAuthenticated: ComponentAuthenticated, ...props }) => {
    let { authenticated } = useContext(ContextApp);
    
    redirectAuthenticatedURL = redirectAuthenticatedURL || "";
    redirectNotAuthenticatedURL = redirectNotAuthenticatedURL || "";
    authenticated = authenticated === true;

    return (
        <Route
            {...props}
            render={routeProps => (
                authenticated ? (
                    ComponentAuthenticated ? (
                        <ComponentAuthenticated/>
                    ) : (
                            <Redirect to={redirectAuthenticatedURL} />
                        )
                ) : (
                        ComponentNotAuthenticated ? (
                            <ComponentNotAuthenticated />
                        ) : (
                                <Redirect to={redirectNotAuthenticatedURL} />
                            )
                    )
            )}
        />
    );
};

export default ProtectedRoute;