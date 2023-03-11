import { createRouter } from "vue-router"
import { createWebHistory } from "vue-router"
import QuizesView from "../views/QuizesView.vue"
import Quiz from "../views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView

        },
        {
            path: "/quiz/:id",
            name: 'quiz',
            component: Quiz

        }
    ]
})
export default router
