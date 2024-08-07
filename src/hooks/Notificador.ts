import type { Tipo } from "@/interfaces/INotificacao"
import {store} from '@/store'
type Notificador = {
    notificar(tipo: Tipo, titulo: string, message: string) : void;
};

const useNotificador = () : Notificador => {
    const notificar = (tipo: Tipo, titulo: string, message: string) : void => {
        store.commit('NOTIFICAR', {
            titulo: titulo,
            message: message,
            tipo: tipo
        });
    };

    return { notificar };
};

export default useNotificador;