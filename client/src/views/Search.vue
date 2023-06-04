<template>
  <div>
        <!-- nav -->
    

        <!-- search header + search bar -->
        <section class="section is-flex is-justify-content-space-center">
            <div>
                <h1 class="title mr-4">Search for Universities</h1>
            </div>
            <div class="field">
                <input class="input" type="text" placeholder="Ex. University of Toronto" v-model="search">
            </div>
        </section>

        <section class="section">
            <UniInfo v-for="university in filteredUnis" :key=university :name=university.Name :icon=university.Logo :image=university.Image :site=university.WebsiteLink :description=university.Description :programs=university.Programs />
        </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            universities: [],
            search: ''
        }
    },
    created() {
        let uri = 'http://127.0.0.1:8000/universities';

        this.axios.get(uri).then(res => {
          this.universities = res.data;
        })
    },
    computed: {
        filteredUnis() {
            return this.universities.filter(uni => {
                return uni.Name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
  }
}
</script>


<script setup>
  import UniInfo from '../components/UniInfo.vue'
</script>
