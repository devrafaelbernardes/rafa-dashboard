import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained, ButtonClean } from 'components/Button';

export const Container = styled(Row)``;

export const TryRemoveContainer = styled(Row)`
    height: 100%;
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    background: rgba(255,255,255,.9);
    align-items:center;
    justify-content: center;
    flex-direction: column;
    z-index: 5;
`;

export const Title = styled(Row)`
    margin-bottom: 10px;
    justify-content:center;
    text-align:center;
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    font-family: ${({ theme }) => theme.fonts.title};
    font-weight: bold; 
    line-height: 1.25;
`;

export const ContainerButtons = styled(Row)`
    margin-bottom: 10px;
    justify-content:center;
`;

export const RemoveButton = styled(ButtonContained)``;

export const CancelButton = styled(ButtonClean)`
    margin-right: 10px;
`;