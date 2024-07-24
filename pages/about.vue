<template>
    <div>
        <p>This is About pages</p>
        {{ data }}
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
// const { data } = await useFetch('/api/ninja')
// const { data } = await useFetch('/api/ninja?name=jinji', {
//     method: 'post',
//     body: { age: 30 }
// })
</script>

<style scoped></style>