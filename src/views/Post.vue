<template>
    <div>
        <h1>{{event.title.rendered}}</h1>
        <p v-html="event.content.rendered"></p>
        
    </div>
</template>

<script>
import PostService from "@/services/PostService.js"
export default {
    props: ['id'],
    data (){
        return {
            event: {}
        }
    },
    created(){
        PostService.getPost(this.id)
            .then(response => {
                this.event = response.data
            })
    }
}
</script>

<style>

</style>
