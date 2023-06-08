<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
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
                    <router-link to="/dashboard" class="navbar-item is-tab" v-bind:class="{'is-hidden': !this.isAuth}">Dashboard</router-link>
                    <router-link to="/search" class="navbar-item is-tab">Search for Universities</router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons" id="login">
                            <!-- <router-link to="/signup" class="button is-info">
                                <strong>Sign up</strong>
                            </router-link> -->
                            <span @click="login" class="button has-background-primary has-text-white" v-bind:class="{'is-hidden': this.isAuth}">
                                <strong>Log in</strong>
                            </span>
                            <span @click="logout" class="button is-info has-text-white" v-bind:class="{'is-hidden': !this.isAuth}"> 
                                <strong>Logout</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            </nav>
  <RouterView />
  </div>
</template>

<script>
    export default {
        data() { 
            return {
                isOpen: false,
                isAuth: this.$auth0.isAuthenticated
            }
        },
        methods: { 
            login() {
                this.$auth0.loginWithRedirect();
            },
            logout() {
                sessionStorage.clear();
                this.$auth0.logout({
                    logoutParams: {
                        returnTo: 'http://127.0.0.1:5173'
                    }
                });
            }
        },
        created() {
            // console.log(this.user)
        }
    };
    
</script>


<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';

/**keeps the hamburger menu on the rightmost side of the page */
.navbar-brand, .navbar-tabs {
    justify-content: space-between;
  }
</style>
