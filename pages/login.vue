<template>
    <section>
        <div v-if='$route.query.message' class="alert alert-danger mb-3">
            Need login first
        </div>
        <form @submit.prevent='onSubmit'>
            <h1>Login page</h1>
            <div>
                <input type="text" class="form-control">
            </div>

            <p>
                <nuxt-link to='/'>To home page</nuxt-link>
            </p>

            <button class="btn btn-primary" type="submit">Login</button>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'empty',

    methods: {
        onSubmit(){
            this.$store.dispatch('login')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
section{
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}
*{
    margin-bottom: 20px;
}
h1{
    margin-bottom: 40px;
}
</style>