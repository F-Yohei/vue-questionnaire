<template>
  <div id="app">
    <BasicInfomation></BasicInfomation>
    <QuestionsPage></QuestionsPage>
    <ConsultationPage></ConsultationPage>
  </div>
</template>

<script>
import BasicInfomation from './components/BasicInfomation.vue';
import QuestionsPage from './components/QuestionsPage.vue';
import ConsultationPage from './components/ ConsultationFormPage.vue';

export default {
  name: 'App',
  components: {
    BasicInfomation,
    QuestionsPage,
    ConsultationPage
  }
}
</script>

<style>

</style>
