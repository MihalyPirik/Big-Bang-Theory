<template>
    <div class="container" style="min-height: 40vw">
        <div class="row">
            <div v-for="e of episodes" class="col-md-4" id="card">
                <EpisodeCard :episode="e" />
            </div>
        </div>
    </div>
</template>

<script setup>
import EpisodeCard from '@/components/EpisodeCard.vue';
import { getEpisodes } from '@/services/dataService';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let episodes = ref([]);
episodes.value = getEpisodes(useRoute().params.id)
    .then((res) => {
        episodes.value = res;
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<style scoped>
#card {
    margin-bottom: 20px;
}
</style>