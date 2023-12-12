<template>
    <div class="card h-100" id="card">
        <img :src="episode.imagemedium" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ episode.name }}</h5>
            <p class="card-text">{{ episode.summary.toString().replace('<p>', '').replace('</p>', '') }}</p>
        </div>
        <p class="card-text text-end">{{ episode.airdate }}</p>
    </div>
</template>

<script setup>
defineProps(['episode'])

</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}

#card {
    padding: 5vh;
}
</style>