<template>
    <div class="card mt-5">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img class="is-rounded" :src=icon alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-3"><a href="#">{{name}}</a></p>
                    <p class="subtitle is-6">{{response}}</p>
                </div>
                <button class="delete"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            response: ''
        }
    },
    props: {
        name: String,
        icon: String,
        isodate: String
    },
    created() {
        let responseDate = new Date(this.isodate);
        let now = new Date();
        now.setHours(0,0,0,0);

        if (responseDate < now) {
            // console.log("Selected date is in the past");
            this.response = "Results have been released to your registered email account.";
        }
    }
}
</script>