<template>
    <div @click="openModal" style="display: flex; align-items: center">
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
    </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import { modalController, IonIcon } from '@ionic/vue';
import SearchSelectModal from "./IonSearchSelectModal.vue";
import { caretDownOutline } from "ionicons/icons";
import { addIcons } from "ionicons";
import { useModelWrapper } from "./modelWrapper";

addIcons({
    "caret-down-outline": caretDownOutline 
});

export default defineComponent({
    name: 'IonSearchSelect',
    components: {
        IonIcon
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

        const openModal = async () => {
            const modal = await modalController.create({
                component: SearchSelectModal,
                componentProps: { 
                    optionsProp: options,
                    selectedOptionProp: selectedOption.value,
                    fieldNameProp: fieldName,
                }
            });

            modal.present();

            const { data } = await modal.onWillDismiss();

            if (data) selectedOption.value = data;
        }

        return {
            options,
            selectedOption,
            fieldName,

            openModal,

            caretDownOutline
        };
    }
});
</script>