<template>
    <section>
        <h1>{{user.first_name}} {{user.last_name}}</h1>
        <img :src='user.avatar' alt="">
        <hr>
        <h4>e-mail: {{user.email}}</h4>
    </section>
</template>

<script>
export default {
    validate({params}){
        console.log();
        return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}){
        const response = await $axios.$get('https://reqres.in/api/users/' + params.id)
        const user = response.data
        return {user}
    },
}
</script>