<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nuxt SSR</a>
            
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" active-class='active' aria-current="page" to="/" no-prefetch exact>
                            Home
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" active-class='active' aria-current="page" to="/users" no-prefetch exact>
                            Users
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" active-class='active' aria-current="page" to="/about" no-prefetch exact>
                            About
                        </nuxt-link>
                    </li>
                    <li class="nav-item" v-if='!hasToken'>
                        <nuxt-link class="nav-link" active-class='active' aria-current="page" to="/login" no-prefetch exact>
                            Login
                        </nuxt-link>
                    </li>
                    <li class="nav-item" v-else>
                        <a @click.prevent='logout' class="nav-link" href='#'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        hasToken(){
            return this.$store.getters.hasToken
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
}
</script>