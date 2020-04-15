import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)``;

export const General = styled(Row)`
    width: 100%;
    border: 1px solid #999;
    outline: 0;
    font-size: 15px;
    padding: 0 15px;
    border-radius: ${({ theme }) => theme.sizes.border_radius};
    background: ${({ theme }) => theme.colors.white};

    &:hover{
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Label = styled(Row)`
    font-weight: bold;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-bottom: 3px;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    & > span{
        color: ${({ theme }) => theme.colors.text_light};
        font-weight: normal;
        margin-left: 5px;
        font-size: ${({ theme }) => theme.sizes.fonts.normal};
    }
`;

export const Message = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-top: 3px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex:1;
`;

export const InputBox = styled.input`
    width: 100%;
    min-height: 40px;
    border: 0;
    outline: 0;
`;

export const IconLeft = styled.div`
    display: flex;
    flex:initial;
    padding-right: 10px;
    justify-content: center;
    align-items:center;
    font-size: 17px;
`;

export const IconRight = styled.div`
    display: flex;
    flex:initial;
    padding-left: 10px;
    justify-content: center;
    align-items:center;
    font-size: 17px;
`;