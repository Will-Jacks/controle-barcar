import React, { useEffect, useState }from 'react';
import { client } from '../Connector/Connector';



export const StatusBox = () => {
    const [connectionStatus, setConnectionStatus] = useState('Desconectado');
    const[flashStatus, setFlashStatus] = useState('Desligado');

    const statusTopic = 'CARRINHO/status';

    useEffect(()=> {
        client.on('connect', ()=> {
            client.subscribe(statusTopic);
            client.publish(statusTopic, 'csb'); //conectado no status box
        });
    }, []);

    useEffect(() => {
        client.on('message', (topic, payload, packet) => {
          const message = ((payload.toString()));
          if(topic == 'CARRINHO/status') {
                if(message == 'Ligado') { //Flash ligado
                    setFlashStatus('Ligado');
                }

                if(message == 'Desligado') { // Flash desligado
                    setFlashStatus('Desligado');
                }
                if(message == 'Conectado') {
                    setConnectionStatus('Conectado');
                }
          }
        });
        
      }, []);

    return(
        
        <div>
            <h4>Status: { connectionStatus } </h4>
            <h4>Flash: { flashStatus } </h4>
        </div>
    );
} 

