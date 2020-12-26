import { createRouter, createWebHistory } from 'vue-router';
import BasicInfomation from './components/BasicInfomation.vue';
import QuestionsPage from './components/QuestionsPage.vue';
import ConsultationFormPage from './components/ConsultationFormPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: BasicInfomation },
        { path: "/questions", component: QuestionsPage },
        { path: "/consultation", component: ConsultationFormPage },
    ],
});

export default router;