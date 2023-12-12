<template>
    <div class="card">
        <img src="#" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ episode.name }}</h5>
            <p class="card-text">{{ episode.summary.toString().replace('<p>', '').replace('</p>', '') }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps(['episode'])

</script>

<style scoped></style>