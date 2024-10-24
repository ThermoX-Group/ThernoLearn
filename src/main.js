import { createApp } from 'vue'
import router from "./router.js"
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')

// document.body.addEventListener("keydown", e => {
//     e.preventDefault()
// })
// document.addEventListener("contextmenu", e => {
//     e.preventDefault()
// })