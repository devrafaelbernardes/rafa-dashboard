import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import HeaderDefault from 'pages/auth/components/Header';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';

import Struct from 'pages/auth/SocialNetwork/components/Struct';

import List from 'components/List';
import Card from 'components/Card';
import { ButtonContained } from 'components/Button';

export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const SocialNetworks = styled(List)``;

export const SocialNetworkContainer = styled(Col)`
    padding: 0 15px 30px;
`;

export const SocialNetworkCard = styled(Card)`
    position: relative;
    &:hover{
        box-shadow: 0 1px 3px #999;
    }
`;

export const SocialNetworkButtonRemove = styled(ButtonContained)`
    & > *{
        margin-right: 7px;
    }
`;

export const SocialNetworkCardFooter = styled(Row)`
    padding: 15px 0 0;
    justify-content: flex-end;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 0 15px 15px;
`;