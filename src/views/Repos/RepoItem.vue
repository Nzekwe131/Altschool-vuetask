<template>
  <main class="container">

    <div class="row mx-5">
      <div  class="col-7 text-start">
      <h1>{{ repo?.name }}</h1>
    </div>
    
    <div class="col-5">
      <button @click="$router.push('/repos/' + repo?.name)" >
        View full details
      </button>
    </div>

    </div>
     

  </main>
</template>
<script>
export default {
  name: "RepoItem",
  props: ["repo",'name'],
};

</script>


<style scoped>

button {
  background-color:#3E54AC;
  border: none;
  color: #ECF2FF;
  border-radius:5px;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .row h1{
    font-size: 20px !important;
  }
  .row button{
    font-size: 12px !important;
    padding: 5px 10px !important;
  }
}


</style>
