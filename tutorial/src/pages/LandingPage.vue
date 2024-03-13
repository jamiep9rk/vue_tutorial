<template>
  <div class="container">
    <div class="black-bg">
      <h1>I LOVE BEER</h1>
      <button @click="goAboutMain">시작하기</button>
      <!-- <router-link to="/main"> 시작하기 </router-link> -->
    </div>
    <!-- <nav> -->
    <!-- </nav> -->
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const goAboutMain = () => router.push("/main");
// export default {
//   name: "LandingPage",
//   props: {
//     msg: String,
//   },
// };
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
</style>
