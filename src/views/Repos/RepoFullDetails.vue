<template>
  <NavigationBar />

  <section class="container mt-3 text-center">
    
  <div>
    <button class="home-btn" @click.prevent="$router.go(-1)">Go back</button>
   </div>

    <h1 class="text-center text-secondary">Repository Details</h1>
    <div class="row mt-3">
      <div class="col-6">
        <label>Name</label>
        <h1>{{ repo.name }}</h1>
      </div>

      <div class="col-6">
        <label>Branch</label>
        <h1>{{ repo.default_branch }}</h1>
      </div>

      <div class="col-6">
        <label>Visibility</label>
        <h1>{{ repo.visibility }}</h1>
      </div>

      <div class="col-6">
        <label>ID</label>
        <h1>{{ repo.id }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { useRoute } from "vue-router";
import { watchEffect, ref } from "vue";
export default {
  components: {
    NavigationBar,
  },
  setup() {
    const route = useRoute();
    const repo = ref([]);
    const name = route.params.name;
    watchEffect(async () => {
      const res = await fetch(`https://api.github.com/repos/Nzekwe131/${name}`);
      repo.value = await res.json();
      console.log(repo.value);
    });

    return {
      repo,
    };
  },
};
</script>

<style scoped>
label {
  font-size: 25px;
  background-color: #3e54ac;
  text-transform: uppercase;
  padding: 10px;
  width: 150px;
  color: #ecf2ff;
  border-radius: 10px;
  margin-bottom: 10px;
}

.col-6 {
  border-bottom: 1px solid #3e54ac;
  padding: 1.2em;
}


button{
  background-color:#3E54AC;
  border: none;
  color: #ECF2FF;
  border-radius:5px;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>
