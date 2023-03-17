<template>
  
  <div>
    <button class="home-btn" @click.prevent="$router.go('-1')">Go back</button>
   </div>

  <section class="container wrapper">

    <div class="wrapper-item">
      <label>Name</label>
     <h1>{{ repo?.name}}</h1>
    </div>

    <div class="wrapper-item">
      <label>Branch</label>
     <h1>{{ repo?.default_branch}}</h1>
    </div>

    <div class="wrapper-item">
      <label>Visibility</label>
     <h1>{{ repo?.visibility}}</h1>
    </div>

    <div class="wrapper-item">
      <label>ID</label>
      <h5>{{ repo?.id }}</h5>
    </div>

 
  </section>
</template>


<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const id = route.params.id;
    const getAllRepos = computed(() => store.getters.getAllRepos);
    const repo = computed(() =>
      getAllRepos.value.find((repo) => {
        return repo.newId === +id;
      })
    );
    return { repo };
  },
};
</script>


<style scoped>

.container{
    width:95%;
    max-width:980px;
    margin:0 auto;
    height:100vh
}

.wrapper{
  display: flex;
  justify-content: center;
  align-items: space-between;
  align-content: center;
  flex-direction: column;
}

button {
  background-color:#3E54AC;
  border: none;
  color: #ECF2FF;
  border-radius:5px;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1em;
  cursor: pointer;
}


.wrapper-item label{
  font-size: 25px;
background-color: #3E54AC;
padding: 3px 7px;
color: #ECF2FF;
border-radius: 7px;
}

.wrapper-item{

  border-bottom: 1px solid #3E54AC;;
  padding: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
</style>