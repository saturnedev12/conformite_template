<template>
    <v-card height="600" elevation="2" outlined class="ma-2">
        <h4>VISIONNEUSE</h4>
        <v-divider></v-divider>

        <!-- directive -->
        <div class="images"  v-viewer.rebuild="{inline: true}">
            <img width="400"  :src="images[0]" style="visibility:none;">
        </div>
        <!-- component 
        <viewer :images="images">
            <img v-for="src in images" :key="src" :src="src">
        </viewer> -->
        <!-- api 
        <button type="button" @click="show">Click to show</button> --> 
    </v-card>
</template>

<style>
    .images{
        display: flex; 
        align-items: center; 
        justify-content: center;
        overflow: hidden;
    }
    .images img{
        display: flex;
        flex:1;
        cursor:pointer;
    }
</style>

<script>
    import 'viewerjs/dist/viewer.css'
    import VueViewer from 'v-viewer'
    import Vue from 'vue'
    Vue.use(VueViewer)

    export default {
        name:"Visionneuse",
        data() {
            return {
                images: [
                "https://picsum.photos/500/500",
                "https://picsum.photos/400/400",
                ]
            };
        },
        methods: {
        show() {
            this.$viewerApi({
            images: this.images,
            })
        },
        },
    }
</script>