<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product Thumbnail" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Detail</p>
        </NuxtLink>
    </div>
</template>

<script setup>
// definedprops dapat digunakan untuk mengambil properties dari pages lain. Usahakan nama const dengan defineprops sama.
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>