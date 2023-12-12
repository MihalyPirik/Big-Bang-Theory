<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <span class="navbar-brand">BBT</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Főoldal</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/evadok">Évadok</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script setup></script>
  
<style scoped>
nav {
  margin-bottom: 20px;
}
</style>