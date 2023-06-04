<template>
    <section class="section">
        <div class="columns is-multiline">
            <!-- <UniApplyCard v-for="university in universities" :key=university :icon=university.Logo :name=university.Name :site=university.WebsiteLink :uniId=university.UniversityID /> -->
            <UniApplyCard v-for="i in 4" :key=universities[i-1] :icon=universities[i-1].Logo :name=universities[i-1].Name :site=universities[i-1].WebsiteLink :uniId=universities[i-1].UniversityID />
        </div>
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" onclick="iterate(-4, i)">Previous</a>
            <a class="pagination-next" onclick="iterate(4, i)">Next page</a>
        </nav>
    </section>
</template>

<script>
function iterate(num, i){
    i = i+num;
}
export default {
    data() {
        return {
            universities: []
        }
    },
    created() {
        let uri = 'http://127.0.0.1:8000/universities';

        this.axios.get(uri).then(res => {
          this.universities = res.data;
        })
    }
}
</script>

<script setup>
    import UniApplyCard from '../components/UniApplyCard.vue'
</script>   