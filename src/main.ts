import {createApp} from 'vue';
import App from './App.vue';
import '@/assets/scss/style.scss';
import 'normalize.css';
import router from './router';

const app = createApp(App);

app.use(router).mount('#app');
