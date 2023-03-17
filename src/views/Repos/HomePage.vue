
<template>
    <main>
 

  <div class="container">

<div class="proj_description">

<div class="proj_item">
<h1>My name is <span>Nzekwe Michael</span> i am a passionate software developer</h1> 
 <p>Implementation of Api fetch with Vue.js that renders my Github repos and single 
    details of each api
 </p>
</div>
   <div>
    <button class="my-button btn" @click.prevent="$router.push('/repos')">Repos</button>
    <button class="my-button" @click.prevent="$router.push('/search')">Search</button>
   

 
   </div>

</div>
</div>
</main>
  
</template>



<script >
export default {

  }

</script>
<style scoped>

.container{
    width:95%;
    max-width:980px;
    margin:0 auto;
    height:100vh
}


.proj_description{
display:flex;
align-content:center;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:10em;
}

.my-button.btn{
    background-color:#ECF2FF;
    border:1px solid blue;
    color:#3E54AC;
}
.my-button {
  background-color:#3E54AC;
  border: none;
  color: #ECF2FF;
  border-radius:5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.home-btn{
  padding: 7px 16px;
  margin:1rem; 
}

.proj_item{
    width:30rem;
}

.proj_item p{
color:gray;
font-size:20px
}

.proj_item span{
 color:gray
}

@media (max-width: 768px) {
  .container{
   padding: 0 2em
}

}
</style>