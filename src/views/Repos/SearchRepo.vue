<template>

<div>
    <button class="home-btn" @click.prevent="$router.push('/')">Go Home</button>
   </div>

  <main class="container">
    <h1 class="headinng">GitHub Username Finder</h1>

    <div class="search-section">
      <input type="text" v-model="searchQuery" placeholder="Enter Github Username"/>
    <button @click="searchUser">Search</button>
    </div>
    
    <div v-if="loading" class="loading">
     <p>loading........</p>
   </div>

     <div v-if="user" class="user-details">

      <div class="img-section">
        <img :src="user.avatar_url" :alt="user.name">
      </div>

      <div class="user-sect">
       <h2>{{ user.login }}</h2>
      <p>{{ user.id }}</p>
      </div>
     
    </div>
  
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      user: null,
      loading:false
    };
  },


  methods: {
    searchUser() {
      this.loading = true
      fetch(`https://api.github.com/users/${this.searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
          this.loading = false
        })


        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

h1{
  text-align:center;
}
.search-section{
  display: flex;
  gap:2rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction:column;
  margin-top:8em;
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



.search-section input{
  border: 1px solid #3E54AC;
  outline: none;
  padding: 1rem 5rem;
  border-radius:6px
}

.container{
    width:95%;
    max-width:980px;
    margin:0 auto;
    height:150vh
}

.user-details{
  display:flex;
  margin-top: 4em;
  justify-content:space-around;
  align-items:center;
  align-content:center;
  margin-bottom:5em
}

.img-section img{
       display: block; 
       width: 70%;
       height: auto; 
      border-radius: 10%; 
}

input[type="text"]::placeholder {
  color:#3E54AC;
  font-weight: bolder;
}

.user-sect{
  padding:2em;
  margin:1rem;
  color:#fff; 
  color:#3E54AC
}

.loading{
  text-align: center;
  font-size: large;
 }

 .home-btn{
  padding: 7px 16px;
  margin:1rem; 
}
</style>