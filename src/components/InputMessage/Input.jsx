import styled from 'styled-components';
import { ButtonsMQTT } from '../Buttons/Buttons';
import { useState } from 'react';
import { client } from '../Connector/Connector';
import { topic } from "../Connector/Connector";

const InputMQTT = styled.input`
    width:300px;
    height:50px;
    text-align:center;
    border-radius:10px;
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
`

const ButtonInput = styled(ButtonsMQTT)`
    height:50px;
`

export const InputMessage = ()=> {

    const [input, setInput] = useState({
        message: ''
    });


    function mandaInput (message){
        client.publish(topic,message);
    };

    return (
        <ContainerInput>
            <h2>Envie sua própria mensagem</h2>
            <InputMQTT 
            type="text" 
            placeholder="Digite sua mensagem" 
            onChange={evento => setInput(evento.target.value)}
            />
            <ButtonInput onClick={()=> mandaInput(input)}>Enviar</ButtonInput>
        </ContainerInput>
    );
};