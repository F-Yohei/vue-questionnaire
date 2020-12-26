<template>
  <div id="app">
    <!-- <BasicInfomation></BasicInfomation>
    <QuestionsPage></QuestionsPage>
    <ConsultationPage></ConsultationPage> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import BasicInfomation from './components/BasicInfomation.vue';
// import QuestionsPage from './components/QuestionsPage.vue';
// import ConsultationPage from './components/ConsultationFormPage.vue';
import router from './router';

export default {
  name: 'App',
  components: {
    // BasicInfomation,
    // QuestionsPage,
    // ConsultationPage
  },
  router
}
</script>

<style>

</style>
