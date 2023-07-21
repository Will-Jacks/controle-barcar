import { useState } from "react";
import { Buttons, ButtonsMQTT } from "../Buttons/Buttons";
import { client } from '../Connector/Connector';
import { topic } from "../Connector/Connector";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    margin-bottom:70px;
`
export function enviar(message) {
    client.publish(topic, message);
}

export function ButtonsBox() {

    return(
        <ButtonsContainer>
            <Buttons/>
        </ButtonsContainer>
    )
}

