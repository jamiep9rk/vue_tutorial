<script setup></script>

<template>
  <div>
    <router-view />
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink
      ><RouterLink to="/main">Main</RouterLink>
    </nav> -->
    <!-- <main><RouterView></RouterView></main>
    <LandingPage /> -->

    <!-- <MainPage /> -->
    <!-- <div class="black-bg" v-if="modalOpen">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button @click="modalOpen = !modalOpen">닫기</button>
      </div>
    </div>
    <div>
      <div class="menu">
        <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
      </div>
      <img alt="Vue logo" src="./assets/logo.png" />

      <div class="rooms">
        <div class="room" v-for="(room, i) in 원룸들" :key="i">
          <img :src="room.image" />
          <h4 @click="modalOpen = !modalOpen">
            {{ room.title }}
          </h4>
          <p>{{ room.price.toLocaleString() }} 만원</p>
          <p>{{ room.content }}</p>
          <button @click="increase">허위매물신고</button>
          <span>신고수 : {{ reportNum[i] }}</span>
        </div>
        <div class="room" v-for="(room, i) in products" :key="i">
          <img src="./assets/room1.jpg" />
          <h4 @click="modalOpen = !modalOpen">
            {{ room.name }}
          </h4>
          <p>{{ room.price }}만원</p>
          <button @click="increase">허위매물신고</button>
          <span>신고수 : {{ reportNum[i] }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

//
<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import LandingPage from './pages/LandingPage.vue';
// import MainPage from "./pages/MainPage.vue";
// import LandingPage from '.pages/LandingPage.vue';
// import oneroomData from "./assets/oneroom.js";

export default {
  name: 'App',
  //   data() {
  //     return {
  //       modalOpen: false,
  //       reportNum: [0, 0, 0],
  //       menus: ["Home", "Shop", "About"],
  //       products: [
  //         { name: "역삼동 원룸", price: "90" },
  //         { name: "천호동 원룸", price: "60" },
  //         { name: "마포구 원룸", price: "85" },
  //       ],
  //       원룸들: oneroomData,
  //     };
  //   },
  //   methods: {
  //     increase() {
  //       this.reportNum += 1;
  //     },
  //   },
  //   computed: {},
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // LandingPage,
    //     MainPage,
    //     HelloWorld,
  },
};
//
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 30px;
}
.menu a {
  color: white;
  padding: 10px;
  font-weight: 600;
}
.rooms {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rooms h4 {
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.room img {
  width: 400px;
}
.room {
  width: fit-content;
  border: 1px solid #9a9a9a;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>
