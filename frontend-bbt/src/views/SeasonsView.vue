<template>
    <div class="container" style="min-height: 40vw">
        <h1 class="display-5 text-center">Évadok</h1>
        <div class="row">
            <div class="col-3 text-center" v-for="s of seasons">
                <RouterLink :to="'/epizodok/' + s.season"><p>{{ s.season + ". évad" }}</p></RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getSeasons } from '@/services/dataService';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

let seasons = ref([]);
seasons.value = getSeasons()
    .then((res) => {
        seasons.value = res;
    })
    .catch((err) => {
        console.log(err);
    });

</script>

<style scoped></style>