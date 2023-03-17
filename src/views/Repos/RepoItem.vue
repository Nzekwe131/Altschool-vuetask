<template>
  <main class="container">

    <div class="item-wrapper">
      <div  class="item">
      <h1>{{ repo?.name }}</h1>
    </div>
    

    <div class="item">
      <button @click="$router.push('/repos/' + repo.newId)" >
        View full details
      </button>
    </div>

    </div>
     

  </main>
</template>
<script>
export default {
  name: "RepoItem",
  props: ["repo"],
};

</script>


<style scoped>
.container{
    width:95%;
    max-width:980px;
    margin:0 auto;
}

.item-wrapper{
  display: flex;
  align-items: center; 
  justify-content: space-between;
   align-content: center;
}

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

@media (max-width: 768px) {
  button {
  padding: 7px 15px;
}

.item{
  font-size: 14px;
}
}


</style>
