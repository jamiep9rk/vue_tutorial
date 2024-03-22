<template>
  <div class="container">
    <div class="black-bg">
      <h1>BEER</h1>
      <div class="blue-section"></div>
      <div class="pink-section">
        <div class="left-box">
          <div class="left-icon" />
          <div class="left-txt">
            <p>추천 맥주가 궁금할땐</p>
            <p>아이럽비어가 추천해드려요!</p>
          </div>
        </div>
        <div class="right-box">
          <p>추천받기</p>
          <img src="../assets/chevron_right.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    // msg: String,
  },
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.black-bg {
  width: 375px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
}
h1 {
  font-size: 25px;
  font-weight: 600;
  color: #fff;
}
.blue-section {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #051982;
  margin-bottom: 40px;
}
.pink-section {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #db0041;
  padding: 0 12px;
}
.pink-section .left-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.left-box .left-icon {
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 15px;
}
.left-txt :first-child {
  font-size: 14px;
  font-weight: 500;
  color: #f8cdd9;
  text-align: left;
}
.left-txt :last-child {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: left;
}
.pink-section .right-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right-box p {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
.right-box img {
  width: 20px;
  height: 20px;
  margin-bottom: 1px;
}
</style>
