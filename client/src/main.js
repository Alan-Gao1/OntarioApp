import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import VueAxios from 'vue-axios';
import axios from 'axios';

import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(VueAxios, axios);

app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH_DOMAIN,
        clientId: import.meta.env.VITE_AUTH_CID,
        authorizationParams: {
            redirect_uri: 'http://127.0.0.1:5173/dashboard'
        }
    })
);

app.use(router);

app.mount('#app');