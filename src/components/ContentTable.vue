<template>
  <div>
    <div>
    <p class="box-p"> Todos os episódios</p>     
    <p >{{isloading}}</p>
    </div>
    <div style="width: 80%; display: flex; justify-content: center;" items='items' fields="fields">
      <b-table  hover v-if='items.length>0' ></b-table>
    </div>
  </div>
</template>

<script>
import '/home/paulotasso/desafio-codificar/src/assets/styles/Player/fonts.css';
// import { podcastDataPush, fetchPodcastData} from '/home/paulotasso/desafio-codificar/src/PodcastPage.vue';

export default {
  name: 'ContentTable',
  props: ['items', 'fields', 'isloading'],
  // methods: {
  //   fetchPodcastData,
  //   podcastDataPush
  // },
  // data() {
  //   return {

  //   }
  // },

  // methods: {

  //   // podcastDataPush(item) {
  //   //   item.episodes.map((ep) => {
  //   //     this.items.push(
  //   //       {
  //   //         'podcast': ep.title,
  //   //         'integrantes': ep.members,
  //   //         'data': ep.published_at,
  //   //         'duracao': ep?.file?.duration
  //   //       }
  //   //     )
  //   //   })
  //   // },
    

  //   fetchPodcastData() {
  //     fetch("https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json")
  //     .then(response => response.json())
  //     .then(data => this.podcastDataPush(data))
  //     .catch(console.log)
  //   }
  // },
  // mounted() {
  //   console.log('mounted',this.fields,'ahaaa' ,JSON.parse(JSON.stringify(this.items)))}

}
</script>

<style>
  @import '/home/paulotasso/desafio-codificar/src/assets/styles/ContentTable/main.css';
</style>
