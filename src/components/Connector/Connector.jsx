import React from 'react';
import mqtt from 'mqtt/dist/mqtt';
import { useEffect } from 'react';

export const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
export const topic = 'CARRINHO/barco';

export default function Connector() {
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  
  useEffect(() => {
    
    client.on('connect', () => {
        setConnectionStatus(true);
        client.subscribe(topic);
        client.publish(topic, 'cs'); // conectado com sucesso
      });
  }, []);
};
