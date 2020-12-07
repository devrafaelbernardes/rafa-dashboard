import { ButtonClean, ButtonOutlined } from 'components/Button';
import Card from 'components/Card';
import List from 'components/List';
import HeaderDefault from 'pages/auth/components/Header';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';
import Struct from 'pages/auth/Modeling/components/Struct';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';




export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const Modelings = styled(List)``;

export const ModelingContainer = styled(Col)`
    padding: 0 15px 30px;
`;

export const ModelingCard = styled(Card)`
    position: relative;
    &:hover{
        box-shadow: 0 1px 3px #999;
    }
`;

export const ModelingButtonRemove = styled(ButtonClean)`
    padding: 0 !important;
    background: 0 !important;
    margin-bottom: 10px;

    & > *{
        margin-right: 7px;
    }
`;

export const SendEmailLink = styled(ButtonOutlined)`
    width: 100%;

    & > *{
        margin-right: 7px;
    }
`;

export const ModelingCardFooter = styled(Row)`
    padding: 15px 0 0;
    justify-content: space-between;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 0 15px 15px;
`;