import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import LinkDefault from 'components/Link';

export const Container = styled(Row)`
    
`;

const activeClassName = "option-active-link-menu";
const activeClassNameString = `.${activeClassName}`;

export const Link = styled(LinkDefault).attrs({activeClassName})`
    color: ${({ theme }) => theme.colors.text} !important;
    border-bottom: 2px solid transparent;
    padding: 5px 0;
    margin-right: 20px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.normal};

    &${activeClassNameString}, &:hover{
        border-color: ${({ theme }) => theme.colors.secondary};
    }

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        margin:0;
        margin-bottom: 5px;
        border-bottom: 0;
        border-left: 2px solid transparent;
        padding: 10px 15px;
        line-height: 1;

        &${activeClassNameString}, &:hover{
            border-color: transparent;
            background: ${({ theme }) => theme.colors.secondary};
            border-radius: ${({ theme }) => theme.sizes.border_radius};
        }
    }
`;