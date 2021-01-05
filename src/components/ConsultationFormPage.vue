<template>
<div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP3</span>
        <h4>ご相談内容をご記入ください</h4>
      </div>

      <form class="consultation-content-input-form">
        <p>ご相談内容</p>
        <textarea rows="20" cols="80" @input="updateConsultationContent($event.target.value)"></textarea>
      </form>
    </div>

    <div class="page-transition-button">
      <router-link to="/questions" tag="button" id="back-btn" class="back-btn">前へ戻る</router-link>
      <router-link to="/lastpage" tag="button" id="next-btn" class="next-btn">次へ進む</router-link>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['updateConsultationContent'])
  }
}


</script>

<style scoped>
.questionnaire-box {
  width:43%;
  margin:50px auto;
  border:1px solid #00FFC0;
  border-radius:3px;
}

.questionnaire-box-header {
  display:flex;
  background-color:rgba(0,255,186,.3)
}

.questionnaire-box-header > span {
  width:11%;
  height:22px;
  line-height:22px;
  text-align:center;
  color:#fff;
  font-size:12px;
  background-color:#1798DA;
  border-radius:3px;
}

.questionnaire-box-header > h4 {
  width:45%;
  margin:0 auto;
  padding:10px;
  color:#565F5F;
  font-weight:normal;
}

.consultation-content-input-form {
  padding:0 10px;
  margin-bottom:15px;
}

.consultation-content-input-form > p {
  display:flex;
  align-items: center;
  font-size:14px;
  color:#4EAEE0;
}

.consultation-content-input-form > textarea {
    border-color:#ADB9B5;
    border-radius:3px;
}

.consultation-content-input-form > p::before,.consultation-content-input-form > p::after {
  content:"";
  width:5px;
  height:1px;
  background-color:#4EAEE0;
}

.consultation-content-input-form > p::before {
  margin-right: 4px;
}

.consultation-content-input-form > p::after {
  margin-left:4px;
}

.next-btn,
.back-btn {
  position: relative;
  display: block;
  text-align: center;
  text-decoration:none;
  margin-right: 25px;
  padding: 10px;
  width: 150px;
  color: #fff;
  background-color: #0fe7a2;
  border: none;
  border-radius: 3px;
  letter-spacing: 1px;
}

.next-btn::after,
.back-btn::after {
  content: "";
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  margin-top: -3.5px;
  height: 7px;
  width: 7px;
  position: absolute;
  top: 19px;
  left: 125px;
  transform: rotate(45deg);
}

.page-transition-button {
  display: flex;
  justify-content: center;
}

</style>

