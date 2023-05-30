<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item"><img src="/images/logo.png"></router-link>

                <nav class="navbar is-light navbar-end" role="navigation" aria-label="main navigation">
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </nav>
            </div>
    
            <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item is-tab">Home</router-link>
                    <router-link to="/search" class="navbar-item is-tab">Search for Universities</router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons" id="login">
                            <router-link to="/signup" class="button is-info">
                                <strong>Sign up</strong>
                            </router-link>
                            <router-link to="/login" class="button has-background-primary has-text-white">
                                <strong>Log in</strong>
                            </router-link>
                            <router-link to="/" class="button is-info has-text-white is-hidden"> 
                                <strong>Logout</strong>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            </nav>
  <RouterView />
</template>

<script>
    export default {
        data() { 
            return {
                isOpen: false
            }
        },
        methods: { 
            onload() {
                
            }
        },
        beforeMount() {
            this.onload()
        }
    };
    
</script>


<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
.navbar-brand, .navbar-tabs {
    justify-content: space-between;
  }
</style>
