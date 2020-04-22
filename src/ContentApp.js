import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import Global from 'styles/Global';
import ContextApp from 'context/ContextApp';
import RouterApp from 'routes/RouterApp';
import { isAuthenticated, setToken, clearToken } from 'storage';
import { GET_CURRENTY_USER, getImageUser } from 'services/api/query';
import { ADMIN } from 'services/api/responseAPI';
import objectSubscription, { ADMIN_UPDATED } from 'services/api/subscription';

const Container = styled(Row)`
	min-height: 100vh;
`;

function ContentApp() {
	const [authenticated, setAuthenticated] = useState(isAuthenticated());
	const [currentyUser, setCurrentyUser] = useState(null);
	const [currentyUserImage, setCurrentyUserImage] = useState(null);
	const { data, loading, refetch, error } = useQuery(GET_CURRENTY_USER);
	const { data : dataUpdateUser } = useSubscription(ADMIN_UPDATED, objectSubscription({ adminId : currentyUser && currentyUser[ADMIN.ID] }));

	const reloadPage = () => refetch();

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

	// AJEITAR ISSO
	useEffect(() => {
		(async() => {
			if(!data){
				if(error){
					await doLogout();
				}
				return;
			}
			
			if(data && data.response){
				const user = data.response;
				await setCurrentyUser(user);
				await setCurrentyUserImage(getImageUser(user[ADMIN.PROFILE_IMAGE]));
				await setAuthenticated(true);
			}else{
				await doLogout();
			}
		})()
	}, [data, error]);

	useEffect(() => {
		(async() => {
			if(dataUpdateUser && dataUpdateUser.response){
				const user = dataUpdateUser.response;
				setCurrentyUser(user);
				setCurrentyUserImage(getImageUser(user[ADMIN.PROFILE_IMAGE]));
			}
		})()
	}, [dataUpdateUser]);

	let values = {
		authenticated,
		currentyUser,
		currentyUserImage,
		loading,
		reloadPage,
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