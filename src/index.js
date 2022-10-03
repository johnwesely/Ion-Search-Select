import IonSearchSelect from './IonSearchSelect.vue';
import IonSearchSelectModal from './IonSearchSelectModal.vue'

export default {
    install(Vue, options) {
        Vue.component('ion-search-select', IonSearchSelect);
        Vue.component('ion-search-select-modal', IonSearchSelectModal);
    }
};