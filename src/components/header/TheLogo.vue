<template>
    <div id="logo">
        <router-link to="/" class="logo-link">
            <img alt="logo" src="@/assets/logo.svg" />
        </router-link>

    </div>
</template>


<style scoped>
#logo {
    height: auto;
}

#logo a.router-link-exact-active {
    background-color: rgb(29, 77, 77);
}
</style>
