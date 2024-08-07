import ProjetoView from "@/Views/Projeto/ProjetoView.vue"
import TarefaView from "../Views/Tarefa/TarefaView.vue"
import { createWebHashHistory, createRouter, type RouteRecordRaw } from "vue-router"
import Lista from "@/Views/Projeto/Lista.vue"
import Formulario from "@/Views/Projeto/Formulario.vue"

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: TarefaView

},
{
    path: '/projetos',
    component: ProjetoView,
    children: [
        {
        path: '',
        name: 'Projetos',
        component: Lista
        },
        {
            path: 'novo',
            name: 'Novo projeto',
            component: Formulario
        },
        {
            path: ':id',
            name: 'Editar projeto',
            component: Formulario,
            props: true
        }
    ]
}
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador