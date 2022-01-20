import styled from 'styled-components';

import HeaderDefault from 'pages/auth/components/Header';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';

import Struct from 'pages/auth/LandingPage/components/Struct';

export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 0 15px 15px;
`;