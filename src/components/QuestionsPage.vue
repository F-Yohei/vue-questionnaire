<template>
<div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP2</span>
        <h4>以下にお答えください</h4>
      </div>

      <form class="question-box">
        <p>現在、生命保険に加入されていますか？</p>
        <input type="radio" name="question" value="ok" id="a" v-on:click="createBirthdayYear">
        <label for="a">はい</label>
        <input type="radio" name="question" value="no" id="b">
        <label for="b">いいえ</label>
      </form>

      <form class="question-box">
        <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <input type="radio" name="question" value="ok" id="c" v-on:click="createBirthdayYear">
        <label for="c">はい</label>
        <input type="radio" name="question" value="no" id="d">
        <label for="d">いいえ</label>
      </form>

      <form class="question-box">
        <p>過去５年以内に、病気やけがで、手術をうけたことまたは、継続して７日以上の入院をしたことがありますか？</p>
        <input type="radio" name="question" value="ok" id="e" v-on:click="createBirthdayYear">
        <label for="e">はい</label>
        <input type="radio" name="question" value="no" id="f">
        <label for="f">いいえ</label>
      </form>
    </div>


    <div class="test">
      <button id="back-btn" class="back-btn">前へ戻る</button>
      <button id="next-btn" class="next-btn">次へ進む</button>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
}


</script>

<style scoped>
.questionnaire-box {
  width:50%;
  margin:50px auto;
  border:1px solid #00FFC0;
  border-radius:3px;
}

.question-box:nth-child(4) {
    margin-bottom:20px;
}

.questionnaire-box-header {
  display:flex;
  background-color:rgba(0,255,186,.3);
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
  width:37%;
  margin:0 auto;
  padding:10px;
  color:#565F5F;
  font-weight:normal;
}

.question-box {
  padding:0 10px;
}

.question-box > p {
  display:flex;
  align-items: center;
  font-size:14px;
  color:#4EAEE0;
}


.birthday-box {
  padding:0 10px 25px 10px;
}

.birthday-box > p {
  display:flex;
  align-items: center;
  font-size:14px;
  color:#4EAEE0;
}

.birthday-box > p::before,.birthday-box > p::after {
  content:"";
  width:5px;
  height:1px;
  background-color:#4EAEE0;
}

.birthday-box > p::before {
  margin-right: 4px;
}

.birthday-box > p::after {
  margin-left:4px;
}

.birthday-box > select > option{
  background-color:#00FFC0;
}

.birthday-box > select:nth-child(2)  {
  width:25%;
  padding:8px;
  margin-right:10px;
}

.birthday-box > select:nth-child(3),
.birthday-box > select:nth-child(4) {
  width:15%;
  padding:8px;
  margin:0 10px 0 10px;
}

.next-btn,
.back-btn {
  position:relative;
  display:block;
  text-align: center;
  margin-right:25PX;
  padding:10px;
  width:150px;
  color:#fff;
  background-color:#0FE7A2;
  border:none;
  border-radius:3px;
  letter-spacing:1px;
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

.test {
    display:flex;
    justify-content: center;
}

</style>
