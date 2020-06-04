import React, { useContext, useState, useEffect } from 'react';

import { Container, Header, Body, HeaderTitle, Line, OptionMenu, Icon, HeaderAvatar } from './styles';
import ContextApp from 'context/ContextApp';
import { ADMIN } from 'services/api/responseAPI';

import BagURL from 'routes/URLs/BagURL';
import CoursesURL from 'routes/URLs/CoursesURL';
import HomeURL from 'routes/URLs/HomeURL';
import MediaURL from 'routes/URLs/MediaURL';
import ProfileURL from 'routes/URLs/ProfileURL';
import SocialNetworkURL from 'routes/URLs/SocialNetworkURL';
import Texts from 'config/Texts';
import List from 'components/List';
import { HomeIcon, UserIcon, BagIcon, CourseIcon, MediaIcon, SocialNetworkIcon, LogoutIcon, UsersIcon, EmailIcon } from 'components/Icons';
import StudentsURL from 'routes/URLs/StudentsURL';
import EmailsURL from 'routes/URLs/EmailsURL';

export function Menu({ ...props }) {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    let { doLogout, currentyUser, currentyUserImage } = useContext(ContextApp);
    const TEXTS = Texts.MENU_PAGES_AUTH;

    useEffect(() => {
        if (currentyUser && currentyUser[ADMIN.FULL_NAME]) {
            setName(currentyUser[ADMIN.FULL_NAME]);
        }
    }, [currentyUser]);

    useEffect(() => {
        if (currentyUserImage) {
            setImage(currentyUserImage);
        }
    }, [currentyUserImage]);

    const options = [
        {
            text: TEXTS.BUTTON_HOME,
            exact: true,
            isNavLink: true,
            to: HomeURL().REDIRECT.BASE,
            icon : HomeIcon,
        },
        {
            text: TEXTS.BUTTON_PROFILE,
            exact: false,
            isNavLink: true,
            to: ProfileURL().REDIRECT.BASE,
            icon : UserIcon,
        },
        {
            text: TEXTS.BUTTON_STUDENTS,
            exact: false,
            isNavLink: true,
            to: StudentsURL().REDIRECT.BASE,
            icon : UsersIcon,
        },
        {
            text: TEXTS.BUTTON_BAG,
            exact: false,
            isNavLink: true,
            to: BagURL().REDIRECT.BASE,
            icon : BagIcon,
        },
        {
            text: TEXTS.BUTTON_COURSE,
            exact: false,
            isNavLink: true,
            to: CoursesURL().REDIRECT.BASE,
            icon : CourseIcon,
        },
        {
            text: TEXTS.BUTTON_EMAIL,
            exact: false,
            isNavLink: true,
            to: EmailsURL().REDIRECT.BASE,
            icon : EmailIcon,
        },
        {
            text: TEXTS.BUTTON_MEDIA,
            exact: false,
            isNavLink: true,
            to: MediaURL().REDIRECT.BASE,
            icon : MediaIcon,
        },
        {
            text: TEXTS.BUTTON_SOCIAL_NETWORK,
            exact: false,
            isNavLink: true,
            to: SocialNetworkURL().REDIRECT.BASE,
            icon : SocialNetworkIcon,
        },
        {
            text: TEXTS.BUTTON_LOGOUT,
            onClick: () => doLogout ? doLogout() : null,
            icon : LogoutIcon,
        },
    ];

    return (
        <Container {...props}>
            <Header>
                <Line>
                    <HeaderAvatar
                        size={80}
                        image={image}
                        title={name}
                    />
                </Line>
                <Line>
                    <HeaderTitle
                        to={ProfileURL().REDIRECT.BASE}
                    >
                        {name}
                    </HeaderTitle>
                </Line>
            </Header>
            <Body>
                <List
                    items={options}
                    renderItem={(item, key) => (
                        <OptionMenu
                            key={key}
                            exact={item.exact}
                            isNavLink={item.isNavLink}
                            to={item.to}
                            onClick={item.onClick}
                        >
                            {
                                item.icon && 
                                <Icon as={item.icon}/>
                            }
                            <span>
                                {item.text}
                            </span>
                        </OptionMenu>
                    )}
                />
            </Body>
        </Container>
    );
}
export default Menu;