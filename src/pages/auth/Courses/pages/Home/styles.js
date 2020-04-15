import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import HeaderDefault from 'pages/auth/components/Header';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';

import Struct from 'pages/auth/Courses/components/Struct';

import List from 'components/List';
import Card from 'components/Card';
import { ButtonContained, ButtonOutlined } from 'components/Button';

export const Container = styled(Struct)``;

export const Header = styled(HeaderDefault)`
    padding: 15px;
`;

export const HeaderSubtitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    & > span{
        font-weight: bold;
        margin-left: 8px;
    }
`;

export const Courses = styled(List)``;

export const CourseContainer = styled(Col)`
    padding: 0 15px 30px;
`;

export const CourseCard = styled(Card)`
    position: relative;
    &:hover{
        box-shadow: 0 1px 3px #999;
    }
`;

export const CourseButton = styled(ButtonContained)`
    margin-top: 10px;
`;

export const RemoveButton = styled(ButtonContained)`
    width: 100%;
    justify-content:flex-start;
    padding: 0 !important;
    & > *{
        margin-right: 8px;
    }
`;

export const CourseCardBody = styled(Row)`
    padding: 0;
`;

export const CourseCardFooter = styled(Row)`
    padding: 15px 0 0;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 0 15px 15px;
`;

export const Footer = styled(Row)`
    padding: 15px;
    margin-bottom:50px;
    justify-content: center;
`;

export const LoadMoreButton = styled(ButtonOutlined)`
    & > *{
        margin-right : 8px;
    }
`;