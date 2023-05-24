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
                <a href="#" class="card-footer-item">Apply</a>
                <a :href=site class="card-footer-item">Learn More</a>
            </footer>
        
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        icon: String,
        site: String,
    }
}
</script>