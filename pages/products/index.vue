<template>
    <div>

        <Head>
            <Title>Nuxt Dojo | Merch</Title>
        </Head>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
// This is for declare a custom layouts. digunakan semisal mau liat detail produk yang ada menggunakan parameter.
// Describe the layout: [namafile]
definePageMeta({
    layout: 'products',
})

// 1 Way : Override different title value using UseHead. 
// useHead({
//     title: 'Nuxt Dojo | Merch',
//     meta: [
//         { name: 'description', content: 'Nuxt 3 Merch' }
//     ]
// })
// Fetch produk
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped></style>