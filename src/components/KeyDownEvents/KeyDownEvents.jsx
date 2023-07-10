import { enviar } from "../Send/send";
import { topic } from "../Connector/connect";

export default function KeyDownEvents() {
    let farolAux = 0;
    const handleKeyDown = (e)=> {
        if(e.code == "KeyW") {
            enviar("Cima");
        }
        if(e.code == "KeyS") {
            enviar("Tras");
        }
        if(e.code == "KeyA") {
            enviar("Esquerda");
        }
        if(e.code == "KeyD") {
            enviar("Direita");
        }
        if(e.code == "Space") {
            enviar("Parar");
        }
        if(e.code == "KeyR") {
            enviar("255");
        }
        if(e.code == "KeyL") {
            enviar("150");
        }

        if(farolAux == 0) {
            if(e.code == "KeyG") {
                enviar("Liga led");
            }
            farolAux += 1;
        }
        else if(farolAux >= 1) {
            if(e.code == "KeyG") {
                enviar("Desliga led");
            }
            farolAux = 0;
        }
    }

    const handleKeyUp = (e)=> {
        if(e.code == "KeyW") {
            enviar("Parar");
        }
        if(e.code == "KeyS") {
            enviar("Parar");
        }
        if(e.code == "KeyA") {
            enviar("Parar");
        }
        if(e.code == "KeyD") {
            enviar("Parar");
        }
        if(e.code == "Space") {
            enviar("Parar");
        }
    }

    addEventListener("keydown", (e)=> handleKeyDown(e),true);
    addEventListener("keyup", (e)=> handleKeyUp(e), true);
}

