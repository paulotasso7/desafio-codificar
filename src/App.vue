<template>
    <!-- <div class="row-box" >
      <div class='column-box' >
        <div class="pad-box">
          <NavBar/>
        </div>
        <div  > 
          <EpCard />
          <ContentTable />
        </div>
      </div>
      <div >
        <div>
          <AudioPlayer />
        </div>
      </div>
    </div> -->
    <div>
      <PodcastPage/>
    </div>
</template>

<script>
// import ContentTable from '../src/components/ContentTable.vue'
// import AudioPlayer from './components/AudioPlayer.vue'
// import NavBar from './components/NavBar.vue'
// import EpCard from './components/EpCard.vue'
import PodcastPage from './PodcastPage.vue'

export default {
  name: 'App',
  components: {
    // ContentTable,
    // AudioPlayer,
    // NavBar,
    // EpCard,
    PodcastPage
}
} 
//   data() {
//     return { 
//         fields : ['podcast', 'integrantes', 'data', 'duração'],
//         items: [],
//     }
//   },
//   methods: {
//     podcastDataPush(item) {
//       item.episodes.map((ep) => {
//         console.log('ep',ep)
//         this.items.push(
//           {
//             'podcast': ep.title,
//             'integrantes': ep.members,
//             'data': ep.published_at,
//             'duracao': ep?.file?.duration,
//             'url': ep?.file?.url
//           }
//         )
//       })
//     },
    
//     fetchPodcastData() {
//       fetch("https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json")
//       .then(response => response.json())
//       .then(data => this.podcastDataPush(data))
//       .catch(console.log)
//     }

//   },

//   mounted() {
//     this.items.orderBy(this.fetchPodcastData(), 'data')
//   }
// }
</script>

<style scoped>
  /* .row-box {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    height: 100%;
    width: 100%; 
    background-color: rgba(230, 232, 235, 1);
  }

  .column-box {
    display: flex; 
    flex-direction: column;
    width:100% ;
  }

  .pad-box {
    padding-bottom: 32px;
    width:100%;
  } */

</style>
