import { useEffect, useState } from 'react';
import React from 'react';


import { client } from '../Connector/Connector';

export default function Message() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        client.on('message', (topic, payload, packet) => {
          if(topic == "CARRINHO/barco") {
            setMessages(messages.concat(payload.toString()));
          }
        });
      }, []);

    return (
        <div>
            <h3>{messages}</h3>
        </div>
    )
}