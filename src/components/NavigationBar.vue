<template>
  <router-view></router-view>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">

      <h4 @click.prevent="$router.push('/')" class="navbar-brand">Michael</h4>
      <!-- <router-link class="navbar-brand" to="/"> Michael</router-link> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contactpage">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/repos">Repo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
.navbar-toggler {
  background-color: #fff !important;
}

.navbar{
  background-color:#3E54AC !important;
  color: #fff !important;
}

.nav-link{
  text-transform:uppercase!important;
  color: #fff !important;
}

.navbar-brand{
  text-transform:uppercase!important;
  color: #fff !important;
  cursor:pointer;
}

.router-link-exact-active{
color:crimson !important
}

</style>
