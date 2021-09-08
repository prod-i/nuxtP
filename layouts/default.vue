<template>
    <div class="">
        <Navbar />

        <main>
            <div class="container">
                <nuxt />
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
    components:{
        Navbar
    }
}
</script>


<style>
main{
    padding-top: 1rem;
}
</style>