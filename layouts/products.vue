<!--  Layouts to apply into products pages.  -->
<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
            </nav>
        </header>
        <!-- Output the page content -->
        <div class="container mx-auto p-4">
            <!-- Slot adalah built in component yang bisa merender component yg didalem folder pages  -->
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* how to create a active nav */
.router-link-exact-active {
    color: #12b488;
}
</style>