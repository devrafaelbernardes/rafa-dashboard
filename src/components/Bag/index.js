import React, { useEffect, useState, useContext, memo } from 'react';
import { Row } from 'react-bootstrap';
import Link from 'components/Link';
import Texts from 'config/Texts';
import { toMoney } from 'utils/convertValue';

import {
    Container,
    InfoContainer,
    Title,
    PriceContainer,
    TotalPrice,
    DiscoutPrice,
    Installments,
    Deposit,
    FirstImage,
    FirstImageContainer,
    SecondImageContainer,
    SecondImage,
    BoxLinkContainer,
    BoxLinkInfo,
} from './styles';

import { ThemeContext } from 'styled-components';

const TEXTS = Texts.BAG;

function Bag({ id, firstImage, secondImage, title, total, deposit, discount, installmentsPrice, installments, href, right, ...props }) {
    var [totalDecimal, setTotalDecimal] = useState(null);
    var [discountDecimal, setDiscountDecimal] = useState(null);
    var [priceInstallmentsDecimal, setPriceInstallmentsDecimal] = useState(null);
    var [depositDecimal, setDepositDecimal] = useState(null);
    const { colors } = useContext(ThemeContext);
    right = right === true;

    let styleRight = { justifyContent: right ? 'flex-end' : 'flex-start', textAlign: right ? 'right' : 'left' };
    let tam = secondImage ? 5 : 12;


    useEffect(() => {
        try {
            let t = total ? parseFloat(total, 10) : 0;
            let d = discount ? parseFloat(discount, 10) : 0;
            if ((t && !d) || (t === d)) {
                //console.log("NÃO TEM DESCONTO OU É IGUAL");
                addDecimal(t, setDiscountDecimal);
                addDecimal(null, setTotalDecimal);
            } else if (d && !t) {
                //console.log("NÃO TEM TOTAL");
                addDecimal(d, setDiscountDecimal);
                addDecimal(null, setTotalDecimal);
            } else if (t > d) {
                //console.log("TOTAL >>>>> DESCONTO");
                addDecimal(d, setDiscountDecimal);
                addDecimal(t, setTotalDecimal);
            } else {
                //console.log("TOTAL <<<<< DESCONTO");
                addDecimal(t, setDiscountDecimal);
                addDecimal(d, setTotalDecimal);
            }
        } catch (error) { }
    }, [discount, total]);

    useEffect(() => {
        addDecimal(installmentsPrice, setPriceInstallmentsDecimal);
    }, [installmentsPrice]);

    useEffect(() => {
        addDecimal(deposit, setDepositDecimal);
    }, [deposit]);

    const addDecimal = (value, callback) => {
        if (value) {
            value = (value + "").replace(',', '.');
            value = parseFloat(value, 10);
            callback(toMoney(value));
        } else {
            callback(null);
        }
    }

    return (
        <Container {...props} direction={right ? "row-reverse" : "row"}>
            <InfoContainer xs="12" sm="12" md={tam} lg={tam} style={secondImage ? (!right ? { paddingLeft: 0 } : { paddingRight: 0 }) : { padding: 0 }}>
                <Row>
                    <Title style={styleRight}>
                        {`${TEXTS.BAG} "${title || TEXTS.NO_NAME}"`}
                    </Title>
                    <PriceContainer style={styleRight}>
                        {
                            totalDecimal &&
                            <TotalPrice>{`${TEXTS.OF}: ${totalDecimal}`}</TotalPrice>
                        }
                        {
                            discountDecimal &&
                            <DiscoutPrice style={totalDecimal && { color: colors.red }}>{totalDecimal ? `${TEXTS.PER}: ${discountDecimal}` : discountDecimal}</DiscoutPrice>
                        }
                    </PriceContainer>
                    {
                        installmentsPrice && installments &&
                        <Installments style={styleRight}>
                            {installments} x {priceInstallmentsDecimal}
                        </Installments>
                    }
                    {
                        deposit > 0 &&
                        <Deposit style={styleRight}>
                            {TEXTS.OR} <span>{depositDecimal}</span> {TEXTS.ON_DEPOSIT}
                        </Deposit>
                    }
                    {
                        firstImage &&
                        <FirstImageContainer>
                            <Box href={href}>
                                <FirstImage
                                    fluid
                                    src={firstImage}
                                    alt="firstImage"
                                />
                            </Box>
                        </FirstImageContainer>
                    }
                </Row>
            </InfoContainer>
            {
                secondImage &&
                <SecondImageContainer xs="12" sm="12" md="7" lg="7" style={right ? { paddingLeft: 0 } : { paddingRight: 0 }}>
                    <Box href={href}>
                        <SecondImage
                            fluid
                            src={secondImage}
                            alt="secondImage"
                        />
                    </Box>
                </SecondImageContainer>
            }
        </Container>
    );
}

const Box = memo(({ children, href }) => {
    var [open, setOpen] = useState(false);
    return (
        <BoxLinkContainer onMouseOver={() => setOpen(true)}>
            {
                href &&
                <span onMouseOut={() => setOpen(false)}>
                    <Link
                        href={href}
                        style={{ display: !open ? 'none' : 'flex' }}
                    >
                        <BoxLinkInfo>
                            <Row>
                                <Row>
                                    {TEXTS.DO_YOU_WANT}
                                </Row>
                                <Row>
                                    {TEXTS.CLICK_HERE}
                                </Row>
                            </Row>
                        </BoxLinkInfo>
                    </Link>
                </span>
            }
            {children}
        </BoxLinkContainer>
    );
});

export { Bag };
export default Bag;