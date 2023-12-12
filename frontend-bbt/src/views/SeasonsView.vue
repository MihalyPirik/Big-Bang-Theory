<template>
    <ul>
        <li v-for="s of seasons">
            <RouterLink :to="'/epizodok/' + s.season">{{ s }}</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { getSeasons } from '@/services/dataService';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

let seasons = ref([]);
seasons.value = getSeasons()
.then((res) => {
    seasons.value = res;
});

</script>

<style scoped></style>