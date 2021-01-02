<template>
  <div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP4</span>
        <h4>以下の内容をご確認ください</h4>
      </div>

      <form class="gender-selection-box">
        <p>性別</p>
        <span class="answer">{{ gender }}</span>
      </form>

      <form class="birthday-box">
        <p>生年月日</p>
        <span class="answer">{{ year }}年{{ month }}月{{ day }}日</span>
      </form>

      <form class="question-box">
        <p>現在、生命保険に加入されていますか？</p>
        <span class="answer">{{ question1 }}</span>
      </form>

      <form class="question-box">
        <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <span class="answer">{{ question2 }}</span>

      </form>

      <form class="question-box">
        <p>過去５年以内に、病気やけがで、手術をうけたことまたは、継続して７日以上の入院をしたことがありますか？</p>
        <span class="answer">{{ question3 }}</span>
      </form>

      <form class="consultation-content-input-form">
        <p>ご相談内容</p>
        <span class="answer">{{ consultationContent }}</span>
      </form>
    </div>

<div class="page-transition-button">
    <router-link to="/consultation" tag="button" id="back-btn" class="back-btn">前へ戻る</router-link>
    <router-link to="/questions" tag="button" id="back-btn" class="back-btn">送信</router-link>
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['gender','year','month','day','question1','question2','question3','consultationContent'])
  }
};
</script>

<style scoped>
.questionnaire-box {
  width: 43%;
  margin: 50px auto;
  border: 1px solid #00ffc0;
  border-radius: 3px;
}

.questionnaire-box-header {
  display: flex;
  background-color: rgba(0, 255, 186, 0.3);
}

.questionnaire-box-header > span {
  width: 11%;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  background-color: #1798da;
  border-radius: 3px;
}

.questionnaire-box-header > h4 {
  width: 45%;
  margin: 0 auto;
  padding: 10px;
  color: #565f5f;
  font-weight: normal;
}

.gender-selection-box {
  padding: 0 10px;
}

.gender-selection-box > p {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #4eaee0;
}

.birthday-box {
  padding: 0 10px 0px 10px;
}

.birthday-box > p {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #4eaee0;
}

.question-box {
  padding: 0 10px;
}

.question-box > p {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #4eaee0;
}

.consultation-content-input-form {
  padding: 0 10px;
  margin-bottom:15px;
}

.consultation-content-input-form > p {
  display:flex;
  align-items: center;
  font-size:12px;
  color:#4EAEE0;
}

.answer {
  font-size:12px;
  padding-left:10px;
}

.page-transition-button {
  display: flex;
  justify-content: center;
}

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
</style>
