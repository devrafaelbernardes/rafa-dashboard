import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Image from 'components/Image';

export const Container = styled(Row)`
    justify-content: space-between;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
    flex-direction: ${({ direction }) => direction || "row"};
`;

export const InfoContainer = styled(Col)`
    align-items: flex-end;
    display: flex;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        padding: 0 !important;
    }
`;

export const Title = styled(Row)`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
    text-transform: uppercase;
`;

export const PriceContainer = styled(Row)`
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const TotalPrice = styled.span`
    font-size: 18px;
    padding: 0;
    margin-right: 10px;
`;

export const DiscoutPrice = styled.span`
    font-size: 24px;
`;

export const Installments = styled(Row)`
    font-size: 18px;
    color: #5e655efc;
`;

export const Deposit = styled(Row)`
    font-size: 16px;
    color: #5e655efc;
    text-transform: lowercase;

    & > span{
        color: #5e655efc;
        text-transform: uppercase;
        margin: 0 5px;
    }
`;

export const FirstImageContainer = styled(Row)`
    padding: 10px 0 0;
    position: relative;
`;

export const FirstImage = styled(Image)`
    width: 100%;
`;

export const SecondImageContainer = styled(Col)`
    max-width: 55% !important;
    padding: 0 40px;
    align-items: flex-end;
    display: flex;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        max-width: 100% !important;
        padding: 15px 0 0;
    }
`;

export const SecondImage = styled(Image)`
    width: 100%;
`;

export const BoxLinkContainer = styled(Row)`
    position: relative;
`;

export const BoxLinkInfo = styled(Row)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,255,255,.7);
    align-items: center;
    font-size: 25px;

    & *{
        justify-content: center;
        color: ${({ theme }) => theme.colors.red};
        text-transform: uppercase;
    }
`;