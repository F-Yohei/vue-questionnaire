<template>
  <div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP2</span>
        <h4>以下にお答えください</h4>
      </div>

      <form class="question-box">
        <p>現在、生命保険に加入されていますか？</p>
        <input type="radio" name="question" value="ok" id="a" v-on:click="changeShow" />
        <label for="a">はい</label>
        <input type="radio" name="question" value="no" id="b" v-on:click="changeShow" />
        <label for="b">いいえ</label>
      </form>

      <transition name="fade">
        <form class="question-box" v-if="show">
          <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <input type="radio" name="question" value="ok" id="c" v-on:click="changeisOK"/>
          <label for="c">はい</label>
          <input type="radio" name="question" value="no" id="d" v-on:click="changeisOK"/>
          <label for="d">いいえ</label>
        </form>
      </transition>

      <transition name="fade">
        <form class="question-box" v-if="isOK">
          <p>過去５年以内に、病気やけがで、手術をうけたことまたは、継続して７日以上の入院をしたことがありますか？</p>
          <input type="radio" name="question" value="ok" id="e" />
          <label for="e">はい</label>
          <input type="radio" name="question" value="no" id="f" />
          <label for="f">いいえ</label>
        </form>
      </transition>
    </div>

    <div class="page-transition-button">
      <router-link to="/" tag="button" id="back-btn" class="back-btn">前へ戻る</router-link>
      <router-link to="/consultation" tag="button" id="next-btn" class="next-btn">次へ進む</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isOK:false
    }
  },
  methods: {
    changeShow: function() {
      this.show = true;
    },
    changeisOK:function() {
      this.isOK = true;
    }
  }
};
</script>

<style scoped>

.questionnaire-box {
  width: 50%;
  margin: 50px auto;
  border: 1px solid #00ffc0;
  border-radius: 3px;
}

.question-box:nth-child(4) {
  margin-bottom: 20px;
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
  width: 37%;
  margin: 0 auto;
  padding: 10px;
  color: #565f5f;
  font-weight: normal;
}

.question-box {
  padding: 0 10px;
}

.question-box > p {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4eaee0;
}

.fade-enter-from {
    opacity:0;
    transform: translateY(2px);
}

.fade-enter-active {
    transition:1s;
}

.fade-enter-to {
    transform:translateY(0);
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
