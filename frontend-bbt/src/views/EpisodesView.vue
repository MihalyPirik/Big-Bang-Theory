<template>
    <div class="container">
        <div v-for="e of episodes" class="col-12 col-md-4 col-lg-6">
            {{ e }}
            <EpisodeCard :episode="e" />
        </div>
    </div>
</template>

<script setup>
import EpisodeCard from '@/components/EpisodeCard.vue';
import { getEpisodes } from '@/services/dataService';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let episodes = ref([]);
episodes.value = getEpisodes()
.then((res) => {
    console.log(useRoute().path);
    episodes.value = res;
});
</script>

<style scoped></style>