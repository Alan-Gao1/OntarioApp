<template>
    <section class="section">
        <div class="columns is-multiline">
            <UniApplyCard v-for="university in filteredUnis" :key=university :icon=university.Logo :name=university.Name :site=university.WebsiteLink :uniId=university.UniversityID />
        </div>
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a v-bind:class="page<=0 ? 'pagination-previous is-disabled' : 'pagination-previous'" @click="page--">Previous</a>
            <a v-bind:class="page>=3 ? 'pagination-next is-disabled' : 'pagination-next'" @click="page++">Next page</a>
        </nav>
    </section>
</template>

<script>
export default {
    data() {
        return {
            universities: [],
            page: 0
        }
    },
    created() {
        let uri = 'https://ontarioapp-backend.onrender.com/universities';

        this.axios.get(uri).then(res => {
            this.universities = res.data.sort((a, b) => a.Name.localeCompare(b.Name));
        })
    },
    computed: {
        filteredUnis() {
            if (this.page < 0) this.page = 0
            else if (this.page > 3) this.page = 3;
            return this.universities.slice((this.page*8), (this.page*8)+8);
        }
    }
}
</script>

<script setup>
    import UniApplyCard from '../components/UniApplyCard.vue'
</script>   