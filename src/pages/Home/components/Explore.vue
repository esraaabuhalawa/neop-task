<template>
    <div>
        <Heading :headingcontent="heading" :explore="true" />
        <div class="container">
           <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" v-for="i in 3" :key="i">
                 <VillCard />
            </div>
           </div>
        </div>
    </div>
</template>
<script setup>
import Heading from '../common/Heading.vue';
import VillCard from '../common/VillCard.vue';
import { ref } from 'vue';
const heading = ref({
    title: 'New Listings',
    desc: 'Explore latest and featured properties for sale, rent & mortgage.'
})

</script>