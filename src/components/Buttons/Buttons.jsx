import React, {useState}from 'react';
import styled from "styled-components";
import { enviar } from '../ButtonsBox/ButtonsBox';

export const ButtonsMQTT = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    width:150px;
    height:100px;
    margin:10px;
`

export const Buttons = () => {

    const [ledStatus, setLedStatus] = useState('Liga led');

    const handleButtonPress = (message) => {
        enviar(message);
    };

    const handleButtonRelease = (message) => {
        enviar(message);
    };

    const handleTouchStart = (message) => {
        enviar(message);
    };

    const handleTouchEnd = (message) => {
        enviar(message);
    };

    const handleClickLed = ()=> {
        let novoStatus, mensagem;
        if (ledStatus === 'Liga led') {
          novoStatus = 'Desliga led';
          mensagem = 'l';
        } else {
          novoStatus = 'Liga led';
          mensagem = 'd';
        }
        setLedStatus(novoStatus);
        enviar(mensagem);
      };

    return (
        <div>
            <ButtonsMQTT
                onMouseDown={() => handleButtonPress('Cima')}
                onMouseUp={() => handleButtonRelease('Parar')}
                onTouchStart={() => handleTouchStart('Cima')}
                onTouchEnd={() => handleTouchEnd('Parar')}
                style={{ userSelect: 'none' }}
            >
                Frente
            </ButtonsMQTT>

            <div>
                <ButtonsMQTT
                    onMouseDown={() => handleButtonPress('Esquerda')}
                    onMouseUp={() => handleButtonRelease('Parar')}
                    onTouchStart={() => handleTouchStart('Esquerda')}
                    onTouchEnd={() => handleTouchEnd('Parar')}
                    style={{ userSelect: 'none' }}>
                    Esquerda
                </ButtonsMQTT>

                <ButtonsMQTT
                    onMouseDown={() => handleButtonPress('Direita')}
                    onMouseUp={() => handleButtonRelease('Parar')}
                    onTouchStart={() => handleTouchStart('Direita')}
                    onTouchEnd={() => handleTouchEnd('Parar')}
                    style={{ userSelect: 'none' }}>
                    Direita
                </ButtonsMQTT>

            </div>
            <ButtonsMQTT
                onMouseDown={() => handleButtonPress('Tras')}
                onMouseUp={() => handleButtonRelease('Parar')}
                onTouchStart={() => handleTouchStart('Tras')}
                onTouchEnd={() => handleTouchEnd('Parar')}
                style={{ userSelect: 'none' }}>
                Tras
            </ButtonsMQTT>

            <div>
                <ButtonsMQTT onClick={() => enviar('Parar')}>Parar</ButtonsMQTT>
                <ButtonsMQTT onClick={handleClickLed}>{ledStatus}</ButtonsMQTT>
            </div>
            <ButtonsMQTT onClick={() => enviar("255")}>Rápido</ButtonsMQTT>
            <ButtonsMQTT onClick={() => enviar("150")}>Lento</ButtonsMQTT>
        </div>
    )
}