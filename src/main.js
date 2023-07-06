import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

/* font awesome icons */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

/* bootstrap CSS, JS */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

/* style CSS */
import "./assets/css/style.css";

createApp(App).use(router).mount('#app')


/*import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');*/

