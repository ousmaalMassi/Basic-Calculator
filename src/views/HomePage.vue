<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { arrowBack } from "ionicons/icons";
import { ref } from "vue";

const input = ref("" as string)
const result = ref(null as number | null)
const basicOperations = ['*', '/', '+', '-']
let isNewOperation = false

const print = (char: string) => {
  if (!isNewOperation) {
    input.value+=char
    return
  }
  if (basicOperations.includes(char)) {
    input.value = result.value?.toString() ?? ''
    result.value = null
  } else 
    clear()
  
  isNewOperation = false
  input.value+=char
}
const del = () => input.value = input.value.slice(0, -1)
const clear = () => {
  input.value = ""
  result.value = null
}
const calculate = () => {
  try {
    result.value = Math.round(eval(input.value) * 1e8 ) / 1e8
  } catch (error) {
    input.value = "ERROR"
  }
  isNewOperation = true
}
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div class="calculator-output">
          <p style="font-size: 2em;">{{ input }}</p>
          <span style="font-size: 3.5em;">{{ result }}</span>
        </div>
        <div class="calculator-buttons">
          <ion-button color="danger" shape="round" size="large" class="span-2" @click="clear()">C</ion-button>
          <ion-button color="light" shape="round" @click="del()">
            <ion-icon :icon="arrowBack" size="small"></ion-icon>
          </ion-button>
          <ion-button color="warning" shape="round" size="large" @click="print('/')">&divide;</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('7')">7</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('8')">8</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('9')">9</ion-button>
          <ion-button color="warning" shape="round" size="large" @click="print('*')">*</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('4')">4</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('5')">5</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('6')">6</ion-button>
          <ion-button color="warning" shape="round" size="large" @click="print('-')">-</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('1')">1</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('2')">2</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('3')">3</ion-button>
          <ion-button color="warning" shape="round" size="large" @click="print('+')">+</ion-button>
          <ion-button color="light" shape="round" size="large" class="span-2" @click="print('0')">0</ion-button>
          <ion-button color="light" shape="round" size="large" @click="print('.')">.</ion-button>
          <ion-button color="warning" shape="round" size="large" @click="calculate()">=</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
  ion-button {
    font-size: x-large;
    --box-shadow: 0 0 0 rgb(0, 0, 0)
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .calculator-output {
    flex-grow: 1;
    font-family: monospace;
    padding: 2em;
    text-align: right;
  }
  .calculator-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
  }
  .span-2 {
    grid-column: span 2;
  }
</style>