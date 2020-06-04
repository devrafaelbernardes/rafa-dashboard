import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Body, Header } from './styles';

import Texts from 'config/Texts';
import FormUpdateBag from 'components/forms/FormUpdateBag';

export function Update() {
    let { id } = useParams();
    const TEXTS = Texts.PAGE_AUTH_BAG.UPDATE;
    
    return (
        <Container
            noItems
            title={TEXTS.TITLE}
            subtitle={TEXTS.SUBTITLE}
            componentHeader={Header}
        >
            <Body>
                <FormUpdateBag
                    id={id}
                />
            </Body>
        </Container>
    );
}
export default Update;