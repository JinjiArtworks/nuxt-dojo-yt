<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dozjo</NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- Output the page content -->
        <div class="container mx-auto p-4">
            <!-- Slot adalah built in component yang bisa merender component yg didalem folder pages  -->
            <slot />
            <!-- <NuxtPage></NuxtPage> -->
        </div>
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