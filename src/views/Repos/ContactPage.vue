<template>
  
  <div>
    <button class="home-btn" @click.prevent="$router.push('/')">Go Home</button>
   </div>

  <div class="contact-page container">
  
    <h1>Contact Us</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline:none;
  margin-bottom: 20px;
}

button {
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

.container{
    width:95%;
    max-width:980px;
    margin:0 auto;
    height:100vh
}


button:hover {
  opacity: 0.7;
}
</style>
