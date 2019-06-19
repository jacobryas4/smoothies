<template>
    <div class="navbar">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">Ninja Smoothies</span>
                </router-link>
                <a href="" class="btn-large halfway-fab">
                    <router-link :to="{name: 'Login'}">
                        LOGIN
                    </router-link>
                </a>
                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <router-link :to="{ name: 'AddSmoothie' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
import Login from './Login.vue'

export default {
    name: 'Navbar',
    components: {
        'login': Login
    },
    data() {
        return{

        }
    }
}
</script>

<style>
.navbar nav {
    padding: 0 20px;
}
</style>

