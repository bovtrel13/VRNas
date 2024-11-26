import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const app = createApp(App);
app.use(router);

AOS.init({once: true});

router.afterEach(() => {

  AOS.refresh(); 
});


app.mount('#app');