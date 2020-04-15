import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, NotFoundContainer, Button, BoxResult, BagPreviewContainer, ContainerInputFile } from './styles';

import Form from 'components/forms/Form';
import Bag from 'components/Bag';
import Input from 'components/Input';
import InputFile from 'components/InputFile';

import FirstImageSRC from 'assets/images/firstImage.png';
import SecondImageSRC from 'assets/images/secondImage.png';

import Texts from 'config/Texts';
import { BAG, IMAGE } from 'services/api/responseAPI';
import objectMutation, { UPDATE_BAG } from 'services/api/mutation';
import objectQuery, { GET_BAG } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormUpdateBag({ id = null, ...props }) {
    const [notFound, setNotFound] = useState(false);
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
    const TEXTS = Texts.FORM_UPDATE_BAG;

    const { data: dataGetBag, loading: loadingGetBag, error: errorGetBag } = useQuery(GET_BAG, objectQuery({ id }));

    const [submit, { data, error }] = useMutation(UPDATE_BAG, objectMutation({
        id,
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

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (errorGetBag && MOUNTED) {
                resetBag();
                setNotFound(true);
            } else if (dataGetBag) {
                if (dataGetBag.response && MOUNTED) {
                    const bag = dataGetBag.response;
                    setNotFound(false);
                    setName(bag[BAG.NAME]);
                    setTotal(bag[BAG.TOTAL_PRICE]);
                    setDiscount(bag[BAG.DISCOUNT_PRICE]);
                    setInstallmentsPrice(bag[BAG.INSTALLMENTS_PRICE]);
                    setInstallments(bag[BAG.INSTALLMENTS]);
                    setDeposit(bag[BAG.DEPOSIT]);
                    setLink(bag[BAG.LINK]);
                    let responseFirstImage = bag[BAG.FIRST_IMAGE] && bag[BAG.FIRST_IMAGE][IMAGE.URL];
                    let responseSecondImage = bag[BAG.SECOND_IMAGE] && bag[BAG.SECOND_IMAGE][IMAGE.URL];
                    
                    await setFirstImagePreview(responseFirstImage || FirstImageSRC);
                    await setSecondImagePreview(responseSecondImage || SecondImageSRC);
                } else {
                    setNotFound(true);
                    resetBag();
                }
            }
        })()

        return () => {
            MOUNTED = false;
        }
    }, [dataGetBag, errorGetBag]);

    useEffect(() => {
        let MOUNTED = true;
        (async () => {
            if (error && MOUNTED) {
                setResult(false);
            } else if (data) {
                if (data.response && MOUNTED) {
                    const bag = data.response;
                    let responseFirstImage = bag[BAG.FIRST_IMAGE] && bag[BAG.FIRST_IMAGE][IMAGE.URL];
                    let responseSecondImage = bag[BAG.SECOND_IMAGE] && bag[BAG.SECOND_IMAGE][IMAGE.URL];
                    await setFirstImagePreview(responseFirstImage || FirstImageSRC);
                    await setSecondImagePreview(responseSecondImage || SecondImageSRC);
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

    const getFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            return e.target.files[0];
        }
    }

    const resetBag = () => {
        setName(null);
        setTotal(null);
        setDiscount(null);
        setInstallmentsPrice(null);
        setInstallments(null);
        setDeposit(null);
        setLink(null);
        setFirstImage(null);
        setSecondImage(null);
        setFirstImagePreview(null)
        setSecondImagePreview(null);
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGetBag}>
                {
                    notFound ? (
                        <NotFoundContainer>
                            {TEXTS.NOT_FOUND}
                        </NotFoundContainer>
                    ) : (
                            <Form>
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
                                            name={"firstImage"}
                                            onChange={(e) => setFirstImage(getFile(e))}
                                        >
                                            {TEXTS.BUTTON_FIRST_IMAGE}
                                        </InputFile>
                                    </ContainerInputFile>
                                    <ContainerInputFile>
                                        <InputFile
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
                                        onChange={e => setLink(e.target.value)}
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
                                        onClick={() => submit()}
                                    >
                                        {TEXTS.BUTTON_SUBMIT}
                                    </Button>
                                </Line>
                            </Form>
                        )
                }
            </ComponentLoading>
        </Container>
    );
}

export default FormUpdateBag;