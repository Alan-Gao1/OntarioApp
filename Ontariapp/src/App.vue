<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="../homepage/homepage.html">
                <img src="/images/logo.png">
                </a>
    
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item">Home</router-link>

<router-link to="/search" class="navbar-item">Search for Universities</router-link>
    
    
                </div>
    
                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-info" href="../signup.html">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button has-background-primary has-text-white" href="../login.html">
                        <strong>Log in</strong>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
  <RouterView />
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
</style>
