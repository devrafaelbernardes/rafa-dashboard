import React, { useContext } from 'react';

import { Container, Header, HeaderTitle, Menu, Body } from './styles';
import Struct from '../components/Struct';
import RouterProfile from 'routes/RouterProfile';
import ContextApp from 'context/ContextApp';
import ProfileURL from 'routes/URLs/ProfileURL';
import Texts from 'config/Texts';

export function Profile() {
    const { currentyUser } = useContext(ContextApp);

    const TEXTS = Texts.PAGE_AUTH_PROFILE;

    return (
        <Container>
            <Struct>
                {
                    currentyUser &&
                    <>
                        <Header>
                            <HeaderTitle>
                                {TEXTS.HEADER.TITLE}
                            </HeaderTitle>
                        </Header>
                        <Menu
                            items={[
                                {
                                    to: ProfileURL().REDIRECT.BASE,
                                    text: TEXTS.MENU.BUTTON_HOME,
                                },
                                {
                                    to: ProfileURL().REDIRECT.UPDATE_PASSWORD,
                                    text: TEXTS.MENU.BUTTON_UPDATE_PASSWORD,
                                },
                            ]}
                        />
                        <Body>
                            <RouterProfile />
                        </Body>
                    </>
                }
            </Struct>
        </Container>
    );
}
export default Profile;