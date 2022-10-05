<template>
    <div @click="openModal" id="open-modal" style="display: flex; align-items: center">
        <h4 style="font-size: 16px" v-if="selectedOption">
            To: {{ selectedOption }}
        </h4>
        <h4 style="font-size: 16px" v-else>
            Select {{ fieldName }}
        </h4>
        <ion-icon 
            name="caret-down-outline"
            style="margin-left: 8px; font-size: 14px; color: grey; padding-top: 8px"
        ></ion-icon>

        <ion-modal :is-open="isOpen" @did-dismiss="submit">
            <ion-header>
                <ion-toolbar>
                    <ion-title>
                        Select {{ fieldName }} {{ selectedOption ? selectedOption : '' }} 
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-item>
                    <ion-label>
                        Search
                    </ion-label>
                    <ion-input v-model="searchQuery" placeholder="Search"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-button color="secondary" @click="submit()">Submit</ion-button>
                </ion-item>
                <ion-item
                    v-for="option of filteredOptions" 
                    :key="option"
                    @click="selectedOption = option"
                    :color="selectedOption == option ? 'success' : ''">
                    <ion-label>{{ option }}</ion-label>
                </ion-item>
            </ion-content>
        </ion-modal>

    </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, ref } from "vue";
import { IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonModal, IonIcon } from '@ionic/vue';
import { caretDownOutline } from "ionicons/icons";
import { addIcons } from "ionicons";
import { useModelWrapper } from "../modelWrapper.js";

addIcons({
    "caret-down-outline": caretDownOutline 
});

export default defineComponent({
    name: 'SearchSelect',
    components: {
        IonHeader,
        IonTitle,
        IonToolbar,
        IonItem,
        IonLabel,
        IonButton,
        IonInput,
        IonContent,
        IonIcon,
        IonModal
    },
    props: {
        optionsProp: Array,
        fieldNameProp: String,
        modelValue: String
    },
    setup(props: any, { emit }) {
        const options = toRef(props, 'optionsProp').value;
        const fieldName = toRef(props, 'fieldNameProp').value;
        let selectedOption =  useModelWrapper(props, emit, 'modelValue');
        let isOpen = ref(false);
        let searchQuery = ref('');

        const openModal = () => {
            isOpen.value = true;
        }

        const submit = () => {
            isOpen.value = false;
        }
                    
        const searchOptions = (options: string[], value: string) => {
            if (!value) return options;
            
            return options.filter((option: string) => {
                return (option.toLowerCase().includes(value));
            });
        }
        
        const filterOptions = () => {
            let filteredOptions = searchOptions(options, searchQuery.value);

            return filteredOptions;
        }

        return {
            filteredOptions: computed(() => {
                return filterOptions();
            }),

            options,
            selectedOption,
            fieldName,
            isOpen,
            searchQuery,

            openModal,
            submit,

            caretDownOutline
        };
    }
});
</script>