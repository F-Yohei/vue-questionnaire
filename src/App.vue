<template>
  <div id="app">
    <BasicInfomation></BasicInfomation>
    <QuestionsPage></QuestionsPage>
  </div>
</template>

<script>
import BasicInfomation from './components/BasicInfomation.vue';
import QuestionsPage from './components/QuestionsPage';

export default {
  name: 'App',
  components: {
    BasicInfomation,
    QuestionsPage
  }
}
</script>

<style>

</style>
