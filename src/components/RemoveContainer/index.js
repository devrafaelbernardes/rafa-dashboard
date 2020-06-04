import React from 'react';

import { Container, TryRemoveContainer, RemoveButton, CancelButton, Title, ContainerButtons } from './styles';
import Texts from 'config/Texts';

export function RemoveContainer({ children, tryRemove = false, onCancel, onRemove, ...props }) {
    const TEXTS = Texts.REMOVE_CONTAINER;
    const remove = async () => {
        // CLOSE REMOVE, THEN REMOVE
        if (onCancel) {
            await onCancel();
        }
        if (onRemove) {
            onRemove();
        }
    }

    return (
        <Container {...props}>
            {
                tryRemove && (
                    <TryRemoveContainer>
                        <Title>
                            {TEXTS.TITLE}
                        </Title>
                        <ContainerButtons>
                            <CancelButton
                                onClick={() => onCancel ? onCancel() : null}
                            >
                                {TEXTS.CANCEL}
                            </CancelButton>
                            <RemoveButton
                                onClick={() => remove()}
                            >
                                {TEXTS.REMOVE}
                            </RemoveButton>
                        </ContainerButtons>
                    </TryRemoveContainer>
                ) 
            }
            {children}
        </Container>
    );
}
export default RemoveContainer;