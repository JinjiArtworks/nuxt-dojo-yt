<template>
    <div>
        <!-- Second way to override the title / head . This is the SEO part things :-)-->
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" /> 
        </Head>
        <ProductDetail :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params // id is based on file name and cannot be wrong. .params is getting parameter from route
const uri = 'https://fakestoreapi.com/products/' + id
// Fetch the uri
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found Homie',
        fatal: true // force application to show this error pages
    })
}
definePageMeta({
    layout: 'products',
})
</script>

<style scoped></style>