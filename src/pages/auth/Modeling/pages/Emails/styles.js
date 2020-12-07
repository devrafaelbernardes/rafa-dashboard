import HeaderDefault from 'pages/auth/components/Header';
import Struct from 'pages/auth/Modeling/components/Struct';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';


export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const Body = styled(Row)`
    padding: 15px;
    padding-bottom: 50px;
`;