<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img :src=icon>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-2">{{name}}</p>
                    </div>
                    </div>
                
                    <div class="content">
                    <p class="university-description">{{description}}</p>
                    <p class="uni-website">Visit <a :href=site>{{name}}'s website!</a></p>
                    <p class="subtitle">Popular Programs</p>
                    <div class="program-list">
                        <ul id="programlist">
                            <li v-for="program in programs" :key=program>
                                {{program}}
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        <div class="column is-flex is-vcentered">
            <img class="unimage" :src=image>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        icon: String,
        site: String,
        image: String,
        description: String,
        programs: Array
    }
}
</script>

<style scoped>
.unimage {
    object-fit: contain;
}
</style>