<template>
  <div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP1</span>
        <h4>お客様の情報を入力してください</h4>
      </div>

      <form class="gender-selection-box">
        <p>性別</p>
        <input type="radio" name="gender" value="男" id="men" @input="updateGender"/>
        <label for="men">男</label>
        <input type="radio" name="gender" value="女" id="women" @input="updateGender"/>
        <label for="women">女</label>
      </form>

      <form class="birthday-box">
        <p>生年月日</p>
        <select id="birthday-year" :value="year" @input="updateYear">
          <option v-for="yearnumber in years" :key="yearnumber.year">{{ yearnumber.label }}</option>
        </select>年
        <select id="birthday-month" :value="month" @input="updateMonth">
          <option v-for="monthnumber in months" :key="monthnumber.id">{{ monthnumber }}</option>
        </select>月
        <select id="birthday-day" :value="day" @input="updateDay">
          <option v-for="daynumber in days" :key="daynumber.id">{{ daynumber }}</option>
        </select>日
      </form>
    </div>

    <router-link to="/questions" tag="button" id="next-btn" class="next-btn">次へ進む</router-link>

  </div>
</template>


<script>
import { years, months, days } from "../definition";

export default {
  data() {
    return {
      years,
      months,
      days
    };
  },
  computed: {

  },
  methods: {
    updateGender(e) {
      this.$store.dispatch('updateGender', e.target.value);
    },
    updateYear(e) {
      this.$store.dispatch('updateYear', e.target.value);
    },
    updateMonth(e) {
      this.$store.dispatch('updateMonth', e.target.value);
    },
    updateDay(e) {
      this.$store.dispatch('updateDay', e.target.value);
    }
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
  font-size: 14px;
  color: #4eaee0;
}
.gender-selection-box > p::before,
.gender-selection-box > p::after {
  content: "";
  width: 5px;
  height: 1px;
  background-color: #4eaee0;
}
.gender-selection-box > p::before {
  margin-right: 4px;
}
.gender-selection-box > p::after {
  margin-left: 4px;
}
.birthday-box {
  padding: 0 10px 25px 10px;
}
.birthday-box > p {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4eaee0;
}
.birthday-box > p::before,
.birthday-box > p::after {
  content: "";
  width: 5px;
  height: 1px;
  background-color: #4eaee0;
}
.birthday-box > p::before {
  margin-right: 4px;
}
.birthday-box > p::after {
  margin-left: 4px;
}
.birthday-box > select > option {
  background-color: #00ffc0;
}
.birthday-box > select:nth-child(2) {
  width: 25%;
  padding: 8px;
  margin-right: 10px;
}
.birthday-box > select:nth-child(3),
.birthday-box > select:nth-child(4) {
  width: 15%;
  padding: 8px;
  margin: 0 10px 0 10px;
}
.next-btn {
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  width: 150px;
  color: #fff;
  background-color: #0fe7a2;
  border: none;
  border-radius: 3px;
  letter-spacing: 1px;
}
.next-btn::after {
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