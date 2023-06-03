<template>
    <section class="section">
        <div class="columns is-multiline">
            <UniApplyCard v-for="university in universities" :key=university :icon=university.Logo :name=university.Name :site=university.WebsiteLink :uniId=university.UniversityID />
        </div>
    </section>
</template>

<script>
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