<template>
  <div className="error__page container">
    <p>Seems as if you are lost in the cloud.</p>
    <h2>Error 404! This page doesn't exist.</h2>
    <button @click.prevent="$router.push('/')">Go Home</button>
  </div>
</template>


<style scoped>
.container{
    width:95%;
    max-width:980px;
    margin:0 auto;
    height:100vh
}

.error__page{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.error__page h2{
  color: red;
  margin-bottom: .6em;
}

.error__page p{
  color: grey;
  font-size: 20px;
}

button {
  background-color:#3E54AC;
  border: none;
  color: #ECF2FF;
  border-radius:5px;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>