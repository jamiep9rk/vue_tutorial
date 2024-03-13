<template>
  <div class="container">
    <div class="black-bg">
      <h1>I LOVE BEER</h1>
      <div class="blue-box"></div>
      <div class="pink-box">
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
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
  height: 700px;
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
.blue-box {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #051982;
  margin-bottom: 40px;
}
.pink-box {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #db0041;
}
</style>
