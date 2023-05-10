<template>
  <div>
        <!-- nav -->
    

        <!-- search header + search bar -->
        <section class="section is-flex is-justify-content-space-center">
            <div>
                <h1 class="title mr-4">Search for Universities</h1>
            </div>
            <div class="field">
                <input class="input" type="text" placeholder="Ex. University of Toronto">
            </div>
        </section>

        <section class="section">
            <UniInfo/>
        </section>
  </div>
</template>

<script setup>
  import UniInfo from '../components/UniInfo.vue'
</script>
