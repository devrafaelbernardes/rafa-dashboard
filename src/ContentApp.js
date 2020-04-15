import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import Global from 'styles/Global';
import ContextApp from 'context/ContextApp';
import RouterApp from 'routes/RouterApp';
import { isAuthenticated, setToken, clearToken } from 'storage';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { GET_CURRENTY_USER, getImageUser } from 'services/api/query';
import { ADMIN } from 'services/api/responseAPI';
import objectSubscription, { ADMIN_UPDATED } from 'services/api/subscription';

const Container = styled(Row)`
	min-height: 100vh;
`;

function ContentApp() {
	const [authenticated, setAuthenticated] = useState(isAuthenticated());
	const [loading, setLoading] = useState(true);
	const [reloading, setReloading] = useState(false);
	const [currentyUser, setCurrentyUser] = useState(null);
	const [currentyUserImage, setCurrentyUserImage] = useState(null);
	const { data, refetch } = useQuery(GET_CURRENTY_USER);
	const { data : dataUpdateUser } = useSubscription(ADMIN_UPDATED, objectSubscription({ adminId : currentyUser && currentyUser[ADMIN.ID] }));
	// AJEITAR ISSO
	useEffect(() => {
		(async() => {
			if(data && data.response){
				const user = data.response;
				setCurrentyUser(user);
				setCurrentyUserImage(getImageUser(user[ADMIN.PROFILE_IMAGE]));
			}
		})()
	}, [reloading, data]);

	useEffect(() => {
		(async() => {
			if(dataUpdateUser && dataUpdateUser.response){
				const user = dataUpdateUser.response;
				setCurrentyUser(user);
				setCurrentyUserImage(getImageUser(user[ADMIN.PROFILE_IMAGE]));
			}
		})()
	}, [dataUpdateUser]);

	const reloadPage = () => setReloading(prev => !prev);
	const startLoading = () => setLoading(true);
	const stopLoading = () => setLoading(false);

	const doLogin = async(token) => {
		if(token){
			setAuthenticated(true);
			await setToken(token);
			await refetch();
		}
	}

	const doLogout = async() => {
		await clearToken();
		await setAuthenticated(false);
	}

	let values = {
		authenticated,
		currentyUser,
		currentyUserImage,
		loading,
		reloading,
		reloadPage,
		startLoading,
		stopLoading,
		doLogin,
		doLogout,
	};

	return (
		<ContextApp.Provider value={values}>
			<Container>
				<Global />
				<RouterApp />
			</Container>
		</ContextApp.Provider>
	);
}

export default ContentApp;