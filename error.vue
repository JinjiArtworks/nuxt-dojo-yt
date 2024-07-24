<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oops!</p>
        <p class="mt-7 ">{{ error.message }}</p>
        <div class="btn my-6" @click="handleClearError()"> Go back home :x </div>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped></style>