<template>
  <div>
    <div>
      <div>
        <span>STEP1</span>
        <h4>お客様の情報を入力してください</h4>
      </div>

      <form>
        <p>性別</p>
        <input type="radio" name="gender" value="男">男
        <input type="radio" name="gender" value="女">女
      </form>

      <form>
        <p>生年月日</p>
        <select>
          <option>アイウエオ</option>
        </select>年
        
        <select>
          <option>アイウエオ</option>
        </select>月

        <select>
          <option>アイウエオ</option>
        </select>日
      </form>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
