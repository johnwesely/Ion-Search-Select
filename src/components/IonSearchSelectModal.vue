<template>
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
</template>

<script>
    import { IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, modalController} from '@ionic/vue';
    import { computed, ref, toRef, defineComponent } from 'vue';

    export default defineComponent({
        name: 'IonSearchSelectModal',
        components: {
            IonButton,
            IonInput,
            IonContent,
            IonHeader,
            IonTitle,
            IonToolbar,
            IonItem,
            IonLabel,
        },
        props: {
            optionsProp: Array,
            selectedOptionProp: String,
            fieldNameProp: String,
        },

        setup(props) {
            let searchQuery = ref('');
            const options = toRef(props, 'optionsProp').value;
            let selectedOption = ref(props.selectedOptionProp);
            const fieldName = toRef(props, 'fieldNameProp').value;
            
            const searchOptions = (options, value) => {
                if (!value) return options;

                return options.filter((option) => {
                    return (option.toLowerCase().includes(value));
                });
            }

            const filterOptions = () => {
                let filteredOptions = searchOptions(options, searchQuery.value);

                return filteredOptions;
            }

            const submit = () => {
                return modalController.dismiss(selectedOption.value, '');
            }

            return {
                filteredOptions: computed(() => {
                    return filterOptions();
                }),
                searchQuery,
                selectedOption,
                fieldName,
                submit,
            }
        }
    })
</script>