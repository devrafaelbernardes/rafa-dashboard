import React, { useState, useEffect } from 'react';

import { Container, NotFoundContainer } from './styles';
import Texts from 'config/Texts';

export function List({ items = [], renderItem, ...props }) {
    const [itemsList, setItemsList] = useState([]);
    const TEXTS = Texts.LIST;
    useEffect(() => {
        setItemsList(items);        
    }, [items]);
    return (
        <Container {...props}>
            {
                itemsList && itemsList.length > 0 ? (
                    itemsList.map((item, key, array) => renderItem(item, key, array))
                ) : (
                    <NotFoundContainer>
                        {TEXTS.NOT_FOUND}
                    </NotFoundContainer>
                )
            }
        </Container>
    );
}
export default List;