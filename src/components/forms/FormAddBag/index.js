import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Button, BoxResult, BagPreviewContainer, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Bag from 'components/Bag';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import FirstImageSRC from 'assets/images/firstImage.png';
import SecondImageSRC from 'assets/images/secondImage.png';

import Texts from 'config/Texts';
import { BAG, IMAGE } from 'services/api/responseAPI';
import objectMutation, { CREATE_BAG } from 'services/api/mutation';

export function FormAddBag({ ...props }) {
    const [name, setName] = useState(null);
    const [total, setTotal] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [installmentsPrice, setInstallmentsPrice] = useState(null);
    const [installments, setInstallments] = useState(null);
    const [deposit, setDeposit] = useState(null);
    const [link, setLink] = useState(null);
    const [firstImage, setFirstImage] = useState(null);
    const [secondImage, setSecondImage] = useState(null);
    const [firstImagePreview, setFirstImagePreview] = useState(null);
    const [secondImagePreview, setSecondImagePreview] = useState(null);
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const TEXTS = Texts.FORM_ADD_BAG;

    const [submit, { data, loading, error }] = useMutation(CREATE_BAG, objectMutation({
        name,
        total,
        discount,
        installmentsPrice,
        installments,
        deposit,
        link,
    }, {
        firstImage,
        secondImage
    }));

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const bag = data.response;
                    setFirstImagePreview(bag[BAG.FIRST_IMAGE] && bag[BAG.FIRST_IMAGE][IMAGE.URL]);
                    setSecondImagePreview(bag[BAG.SECOND_IMAGE] && bag[BAG.SECOND_IMAGE][IMAGE.URL]);
                    setResult(true);
                } else {
                    setResult(false);
                }
            }
        })()
        return () => {
            MOUNTED = false;
        }
    }, [data, error]);

    useEffect(() => {
        if (result !== "") {
            let MOUNTED = true;
            const timeout = setTimeout(() => {
                if (MOUNTED) {
                    setResult("");
                }
            }, 2000);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    useEffect(() => {
        if (firstImage) {
            try {
                setFirstImagePreview(URL.createObjectURL(firstImage));
            } catch (error) { }
        } else {
            setFirstImagePreview(FirstImageSRC);
        }
    }, [firstImage]);

    useEffect(() => {
        if (secondImage) {
            try {
                setSecondImagePreview(URL.createObjectURL(secondImage));
            } catch (error) { }
        } else {
            setSecondImagePreview(SecondImageSRC);
        }
    }, [secondImage]);

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    return (
        <Container {...props}>
            <Form
                onSubmit={() => submit()}
            >
                <BagPreviewContainer>
                    <Bag
                        title={name}
                        total={total}
                        discount={discount}
                        installmentsPrice={installmentsPrice}
                        installments={installments}
                        deposit={deposit}
                        link={link}
                        firstImage={firstImagePreview}
                        secondImage={secondImagePreview}
                    />
                </BagPreviewContainer>
                <Line>
                    <ContainerInputFile>
                        <InputFile
                            id="formAddBag1"
                            name={"firstImage"}
                            onChange={(e) => setFirstImage(getFile(e))}
                        >
                            {TEXTS.BUTTON_FIRST_IMAGE}
                        </InputFile>
                    </ContainerInputFile>
                    <ContainerInputFile>
                        <InputFile
                            id="formAddBag2"
                            name={"secondImage"}
                            onChange={(e) => setSecondImage(getFile(e))}
                        >
                            {TEXTS.BUTTON_SECOND_IMAGE}
                        </InputFile>
                    </ContainerInputFile>
                </Line>
                <Line>
                    <Input
                        required
                        name={"name"}
                        value={name}
                        label={TEXTS.NAME}
                        placeholder={TEXTS.NAME}
                        onChange={e => setName(e.target.value)}
                    />
                </Line>
                <Line>
                    <Input
                        required
                        name={"total"}
                        value={total}
                        label={TEXTS.TOTAL_PRICE}
                        type="number"
                        placeholder={TEXTS.TOTAL_PRICE}
                        onChange={e => setTotal(parseFloat(e.target.value))}
                    />
                </Line>
                <Line>
                    <Input
                        name={"discount"}
                        value={discount}
                        type="number"
                        label={TEXTS.DISCOUNT_PRICE}
                        placeholder={TEXTS.DISCOUNT_PRICE}
                        onChange={e => setDiscount(parseFloat(e.target.value))}
                    />
                </Line>
                <Line>
                    <Input
                        required
                        name={"installments"}
                        value={installments}
                        type="number"
                        label={TEXTS.INSTALLMENTS}
                        placeholder={TEXTS.INSTALLMENTS}
                        onChange={e => setInstallments(parseInt(e.target.value))}
                    />
                </Line>
                <Line>
                    <Input
                        required
                        name={"installmentsPrice"}
                        value={installmentsPrice}
                        type="number"
                        label={TEXTS.INSTALLMENTS_PRICE}
                        placeholder={TEXTS.INSTALLMENTS_PRICE}
                        onChange={e => setInstallmentsPrice(parseFloat(e.target.value))}
                    />
                </Line>
                <Line>
                    <Input
                        name={"deposit"}
                        value={deposit}
                        type="number"
                        label={TEXTS.DEPOSIT}
                        placeholder={TEXTS.DEPOSIT}
                        onChange={e => setDeposit(parseFloat(e.target.value))}
                    />
                </Line>
                <Line>
                    <Input
                        required
                        name={"link"}
                        value={link}
                        label={TEXTS.LINK}
                        placeholder={TEXTS.LINK}
                        onChange={e => setLink(String(e.target.value))}
                    />
                </Line>
                {
                    (result === true) &&
                    <BoxResult color={colors.success}>
                        {TEXTS.SUCCESS_UPDATE}
                    </BoxResult>
                }
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.ERROR_UPDATE}
                    </BoxResult>
                }
                <Line>
                    <Button
                        type={"submit"}
                        loading={loading}
                    >
                        {TEXTS.BUTTON_SUBMIT}
                    </Button>
                </Line>
            </Form>
        </Container>
    );
}

export default FormAddBag;