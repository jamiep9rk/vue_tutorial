<script setup>
import { useRoute, useRouter } from 'vue-router';
// eslint-disable-next-line no-unused-vars
import { Button } from '@mui/material';
</script>
<script>
const router = useRouter();
// eslint-disable-next-line no-unused-vars
const route = useRoute();
// eslint-disable-next-line no-unused-vars
const goAboutMain = () => router.push('/main');

export default {
  name: 'LandingPage',
  components: {},
  //   props: {
  //     msg: String,
  //   },
};
</script>

<template>
  <div class="container">
    <div class="black-bg">
      <h1>I LOVE BEER</h1>
      <router-link to="/main" class="start-btn"> 시작하기 </router-link>
      <!-- <button @click="goAboutMain">시작하기</button> -->
      <!-- <Button @click="goAboutMain" variant="outlined" size="large"
        >시작하기</Button
      > -->
    </div>
  </div>
</template>

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
.start-btn {
  width: 100px;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  color: #000;
  text-decoration: none;
}
</style>
