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

      
      
 /*  useEffect(() => {
    const unsubscribeAndResubscribe = () => {
      client.unsubscribe(statusTopic, (err) => {
        if (err) {
          console.error('Erro ao se desinscrever do tópico:', err);
        } else {
          console.log('Desinscrito do tópico');
          client.subscribe(statusTopic, (err) => {
            if (err) {
              console.error('Erro ao se inscrever no tópico:', err);
            } else {
              console.log('Reinscrito no tópico');
            }
          });
        }
      });
    };

    const intervalId = setInterval(unsubscribeAndResubscribe, 5000);

    return () => {
      clearInterval(intervalId);
      client.end(); // Lembre-se de encerrar a conexão com o cliente MQTT quando o componente é desmontado
    };
  }, []); */


    return(
        
        <div>
            <h4>Status: { connectionStatus } </h4>
            <h4>Flash: { flashStatus } </h4>
        </div>
    );
} 

