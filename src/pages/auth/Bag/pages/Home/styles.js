import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import HeaderDefault from 'pages/auth/components/Header';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';

import Struct from 'pages/auth/Bag/components/Struct';

import List from 'components/List';
import Card from 'components/Card';
import { ButtonContained, ButtonClean } from 'components/Button';

export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const Bags = styled(List)`

`;

export const BagContainer = styled(Col)`
    padding: 0 15px 30px;
`;

export const BagCard = styled(Card)`
    position: relative;
    &:hover{
        box-shadow: 0 1px 3px #999;
    }
`;

export const BagButton = styled(ButtonContained)``;

export const BagButtonRemove = styled(ButtonClean)`
    padding: 0 !important;
    justify-content: flex-start;
    & > *{
        margin-right : 7px;
    }
    &:hover{
        background: transparent;
        color: ${({ theme }) => theme.colors.text_light} !important;
    }
`;

export const Line = styled(Row)`
    margin-top : 15px;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 0 15px 15px;
`;