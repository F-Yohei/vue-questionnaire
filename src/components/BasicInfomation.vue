<template>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP1</span>
        <h4>お客様の情報を入力してください</h4>
      </div>

      <form class="gender-selection-box">
        <p>性別</p>
        <input type="radio" name="gender" value="男" id="men" v-on:click="createBirthdayYear">
        <label for="men">男</label>
        <input type="radio" name="gender" value="女" id="women">
        <label for="women">女</label>
      </form>

      <form class="birthday-box">
        <p>生年月日</p>

        <select id="birthday-year">
          <option v-for="nengo in years" :key="nengo.year" :value="nengo.label">{{ nengo.label }}</option>
        </select>年

        <select id="birthday-month"></select>月

        <select id="birthday-day"></select>日

      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      years:[]
    }
  },
  methods: {
    createOption() {
      const years = [];
      for(let y = 2020; y > 1929; y--) {
        if(y > 2018) {
          years.push({"label": `${y} (令和${y-2018}年)`});
        } else if (y > 1988) {
          years.push({"label": `${y} (平成${y-1988}年)`});
        } else if (y > 1925) {
          years.push( {"label": `${y} (昭和${y-1925}年)`} );
        } else if (y > 1911) {
          years.push( {"label": `${y} (大正${y-1911}年)`} );
        }
      }
      console.log(years);
      return years;
    }
  },
  mounted:function() {
    // this.createOption();
    // for(let i = 1930, j = 5; i <= 1989; i++,j++) {
    //   const userBirthdayYear = document.getElementById('birthday-year');
    //   const op = document.createElement('option');
    //   op.textContent = `${i}年（昭和${j}）` ;
    //   userBirthdayYear.appendChild(op);
    // }
    // for(let i = 1990, j = 1; i <= 2020; i++,j++) {
    //   const userBirthdayYear = document.getElementById('birthday-year');
    //   const op = document.createElement('option');
    //   op.textContent = `${i}年（平成${j}）` ;
    //   userBirthdayYear.appendChild(op);
    // }
    for(let i = 1; i <= 12; i++) {
      const userBirthdayMonth = document.getElementById('birthday-month');
      const op = document.createElement('option');
      op.textContent = `${i}`;
      userBirthdayMonth.appendChild(op);
    }
    for(let i = 1; i <= 31; i++) {
      const userBirthdayDay = document.getElementById('birthday-day');
      const op = document.createElement('option');
      op.textContent = `${i}`;
      userBirthdayDay.appendChild(op);
    }
  }
}


</script>

<style scoped>
.questionnaire-box {
  width:50%;
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
  width:50%;
  margin:0 auto;
  padding:10px;
  color:#565F5F;
  font-weight:normal;
}

.gender-selection-box {
  padding:0 10px;
}

.gender-selection-box > p {
  display:flex;
  align-items: center;
  font-size:14px;
  color:#4EAEE0;
}

.gender-selection-box > p::before,.gender-selection-box > p::after {
  content:"";
  width:5px;
  height:1px;
  background-color:#4EAEE0;
}

.gender-selection-box > p::before {
  margin-right: 4px;
}

.gender-selection-box > p::after {
  margin-left:4px;
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

</style>
