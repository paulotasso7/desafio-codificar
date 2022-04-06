<template>
  <div>
    <div>
    <p class="box-p"> Todos os episódios</p>     
    <p >caraiso</p>
    </div>
    <div style="width: 80%; display: flex; justify-content: center;">
      <b-table  hover items='items' fields="fields">{{items[0].member}}</b-table>
    </div>
  </div>
</template>

<script>
import '/home/paulotasso/desafio-codificar/src/assets/styles/Player/fonts.css';

export default {
  name: 'ContentTable',
  props: ['items', 'fields']
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
  //   this.items
  // }

}
</script>

<style>
  @import '/home/paulotasso/desafio-codificar/src/assets/styles/ContentTable/main.css';
</style>
