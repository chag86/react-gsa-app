import React from "react";
import { Figure, Row } from "react-bootstrap";
import imageFile from '../resource/download.png';

const image = {
    src: imageFile,
    alt: 'img logo',
};


const Cabecalho = ({ children }) => {
    return (
        <Figure>
            <Row>
                <Figure.Image
                    width={171}
                    height={180}
                    src={image.src}
                    alt={image.alt} ></Figure.Image>
                <Figure.Caption>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1><p nameClass="text-right">Busca de Jurisprudência</p></h1>
                </Figure.Caption>
            </Row>
        </Figure>
    );
};

export default Cabecalho;