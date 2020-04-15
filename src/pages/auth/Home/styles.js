import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import HeaderHome from './components/HeaderHome';
import CardInfo from './components/CardInfo';

export const Container = styled(Row)``;

export const Body = styled(Row)``;

export const Header = styled(HeaderHome)`
    padding: 15px;
`;

export const InfoContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4, 
})`
    padding: 15px;
`;

export const Info = styled(CardInfo)``;