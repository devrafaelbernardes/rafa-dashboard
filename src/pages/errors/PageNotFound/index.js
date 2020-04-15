import React from 'react';

import LogoImg from 'assets/images/logo.png';

import { Container, Header, HeaderImage, Title, BitTitle, Body, Footer, ButtonHome, ContainerButton } from './styles';
import Texts from 'config/Texts';
import Copyright from 'components/Copyright';
import HomeURL from 'routes/URLs/HomeURL';

export function PageNotFound() {
    const TEXTS = Texts.PAGE_NOT_FOUND;
    return (
        <Container>
            <Header>
                <HeaderImage
                    src={LogoImg}
                />
            </Header>
            <Body>
                <BitTitle>
                    {TEXTS.OOPS}
                </BitTitle>
                <Title>
                    {TEXTS.TITLE}
                </Title>
                <ContainerButton>
                    <ButtonHome
                        to={HomeURL().REDIRECT.BASE}
                    >
                        {TEXTS.BUTTON_HOME}
                    </ButtonHome>
                </ContainerButton>
            </Body>
            <Footer>
                <Copyright
                    center
                />
            </Footer>
        </Container>
    );
}
export default PageNotFound;