import React from 'react';

import { Container, LeftContainer, RightContainer, Header, HeaderImage, Body, Footer, BoxImageRight, ImageRight } from './styles';
import LogoImg from 'assets/images/logo.png';
import Copyright from 'components/Copyright';
import FormLogon from 'components/forms/FormLogon';
//import Texts from 'config/Texts';

export function Logon() {
    //const TEXTS = Texts.PAGE_LOGON;
    return (
        <Container>
            <LeftContainer>
                <Header>
                    <HeaderImage
                        src={LogoImg}
                    />
                </Header>
                <Body>
                    <FormLogon />
                </Body>
                <Footer>
                    <Copyright
                        center
                    />
                </Footer>
            </LeftContainer>
            <RightContainer>
                <BoxImageRight>
                    <ImageRight
                        src={LogoImg}
                    />
                </BoxImageRight>
            </RightContainer>
        </Container>
    );
}
export default Logon;