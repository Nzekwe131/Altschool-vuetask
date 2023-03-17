<template>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Contactpage">Contact</router-link>
        </li>
        <li>
         
          <router-link to="/repos">Repo</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <router-view></router-view> 
    </div>
  </template>
  
  
  <script>
  
  </script>
  
  
  <style scoped>
  nav {
    background-color:#3E54AC;
    color:  #ECF2FF;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  
  ul{
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  li a{
    list-style: none;
    text-decoration:none;
    display: flex;
    margin: 0;
    text-transform:uppercase;
    color: #fff;
    padding: 0;
  }
  
  li { 
    margin-left: 20px;
  }
  
  li:first-child {
    margin-left: 0;
  }
  
  @media (max-width: 600px) {
    nav {
      flex-direction: column;
      padding: 1rem;
    }
  
  
    li:first-child {
      margin-top: 0;
      margin-left:1rem;
      padding-right:0.6rem
    }
  
  }
  
  </style>