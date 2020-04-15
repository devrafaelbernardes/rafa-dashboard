import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import HeaderDefault from 'pages/auth/components/Header';
import Struct from 'pages/auth/Bag/components/Struct';

export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const Body = styled(Row)`
    padding: 0;
    padding-bottom: 50px;
`;