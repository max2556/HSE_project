//Появляющиеся буквы
import {display_on_load, element_chain_load } from "./modules/transition-load.js";
//Яндекс карты
import { createApp } from 'vue'
import App from './modules/yandex-map/App.vue'
import ymapPlugin from '../../../vue-yandex-maps';


//При загрузке страницы появляются буквы
document.addEventListener('DOMContentLoaded', display_on_load);
document.addEventListener('DOMContentLoaded', element_chain_load);

//Vue app
const app = createApp(App)

app.use(ymapPlugin)
app.mount('#app')


