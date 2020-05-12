import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    justify-content: center;
`;

export const Header = styled(Row)`
    justify-content: center;
    margin-bottom: 10px;
`;

export const Title = styled(Row)`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const Subtitle = styled(Row)`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const CountCourses = styled(Row)`
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    text-transform: lowercase;
    
    & > span{
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: bold;
        margin-right: 5px;
        line-height: 1;
        font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    }

    & > div{
        width: 100%;
        padding: 0;
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const ValidatedContainer = styled(Row)`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    font-weight: bold;

    & > span{
        padding: 4px 14px;
        color: ${({ theme }) => theme.colors.white};
        background:${({ color }) => color || 'transparent'};
        border-radius: ${({ theme }) => theme.sizes.border_radius};
    }
`;

export const Body = styled(Row)``;