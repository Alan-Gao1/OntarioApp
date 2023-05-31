<template>
    <div class="column is-one-quarter">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img :src=icon alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <p class="title is-4">{{name}}</p>
            </div>
            <footer class="card-footer">
                <a :href=application class="card-footer-item">Apply</a>
                <a :href=site class="card-footer-item">Learn More</a>
            </footer>
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            application: '/application'
        }
    },
    props: {
        name: String,
        icon: String,
        site: String,
        uniId: String
    },
    created() {
        this.application = this.application + `?id=${this.uniId}`
    }
}
</script>