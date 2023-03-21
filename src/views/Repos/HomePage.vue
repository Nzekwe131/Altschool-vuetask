<template>
  <NavigationBar />
  <div class="container text-center mt-5 p-5">
    <div class="box p-5">
      <h1>My name is <span>Nzekwe Michael</span></h1>
      <h4>i am a passionate software developer</h4>
      <p class="mb-5">
        Implementation of Api fetch with Vue.js that renders my Github repos and
        single details of each api
      </p>
      <div class="buttons">
        <button class="btn my-button1" @click.prevent="$router.push('/repos')">
          Repos
        </button>
        <button class="my-button" @click.prevent="$router.push('/search')">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "HomePage",
  components: {
    NavigationBar,
  },
};
</script>
<style scoped>
p {
  color: gray;
  font-size: 20px;
}

h1 span {
  color: gray;
}
.my-button,
.my-button1 {
  background-color: #3e54ac;
  border: none;
  color: #ecf2ff;
  border-radius: 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.my-button1 {
  background-color: #ecf2ff;
  border: 1px solid blue;
  color: #3e54ac;
}
.buttons {
  align-content: center !important;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0px !important;
    margin-top: 0px !important;
  }
  .box {
    padding: 8px !important;
  }
  p {
    font-size: 15px !important;
  }
}
</style>
