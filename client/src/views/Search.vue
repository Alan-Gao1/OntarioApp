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
            <UniInfo name="University Name" icon='https://bvgsec.ca/static/Members/Alan%20Gao.webp'  image='https://www.bayviewglen.ca/wp-content/uploads/2023/01/image-17-1024x768.png' site='https://www.youtube.com/watch?v=dQw4w9WgXcQ' description="A couple of years ago, one night, I was about to propose to my girlfriend when my roommate Joseph barged into the room out of nowhere, tripped and fell over, breaking a glass table with his face. Totally ruined the mood. Now, I didn't know Joseph THAT well, don't even remember where he was from, but let' just say I put my plans on hold to help him through his injuries. Joseph had gotten big glass shard in his eye, making him completely blind in that eye. He was walking around with one of those cotton pads on his eye for a couple of months. Then suddenly, he disappeared, along with my girlfriend Apparently they'd bonded during the time after his injuries, and eloped together , left me behind without as much as a note. I tried to track them down, but never could. In conclusion, if it hadn't been for cotton eye Joe, I'd have been married a long time ago. Where did you come from, where did you go? Where did you come from, cotton eye Joe?" :programs="['alan', 'gao']"/>
        </section>
  </div>
</template>

<script setup>
  import UniInfo from '../components/UniInfo.vue'
</script>
