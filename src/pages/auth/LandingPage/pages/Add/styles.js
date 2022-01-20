import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import HeaderDefault from 'pages/auth/components/Header';
import Struct from 'pages/auth/LandingPage/components/Struct';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';

export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 0 15px 15px;
`;

export const Body = styled(Row)`
    padding: 15px;
    padding-bottom: 50px;
`;