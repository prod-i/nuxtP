<template>
    <section>
        <h1>{{pageTitle}}</h1>

        <!-- <ul>
            <li v-for='user of users' :key='user.id'>
                <a href="#" @click.prevent="openUser(user.id)">{{user.first_name}} {{user.last_name}}</a>
            </li>
        </ul> -->
        <ul>
            <li v-for='post in posts' :key='post.guid'>{{post.title}}</li>
        </ul>
    </section>
</template>

<script>
export default {

    // async fetch({store}){
    //     if(store.getters['users/users'].length === 0){
    //         await store.dispatch('users/fetch')
    //     }
    // },

    data: () => ({
        pageTitle: 'Users page',
        posts: [],
    }),
    methods:{
        async MocList(){
            const feed = 'https://www.mos.ru/rss';
            const response = await this.$axios.$get(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
            this.posts.push(...response.items)
            console.log(response.items);
        },
        async LentaList(){
            const feed = 'https://lenta.ru/rss/news';
            const response = await this.$axios.$get(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
            this.posts.push(...response.items)
        }
    },
    mounted(){
        this.MocList()
        this.LentaList()
    }

    // computed: {
    //     users() {
    //         return this.$store.getters['users/users'];
    //     }
    // },

    // methods: {
    //     openUser(id){
    //         this.$router.push('/users/' + id)
    //     }
    // }

}
</script>