<template>
    <div class="row-box" >
        <div class='column-box' >
            <div class="pad-box">
                <NavBar/>
            </div>
            <div > 
                <EpCard />
                <ContentTable items='items' fields='fields'/>
            </div>
        </div>
        <div >
            <div>
                <AudioPlayer />
            </div>
        </div>
    </div>
</template>

<script>
import AudioPlayer from './components/AudioPlayer.vue';
import ContentTable from './components/ContentTable.vue';
import NavBar from './components/NavBar.vue'
import EpCard from  './components/EpCard.vue'




export default{
    name: 'PodcastPage',
    components: {
        AudioPlayer,
        ContentTable,
        NavBar,
        EpCard
    },

    data() {
        return {
            fields: ['podcast', 'integrantes', 'data', 'duração'],
            items: []
        }
    },

    methods: {
        podcastDataPush(item) {
            item.episodes.map((ep) => {
                this.items.push(
                    {
                    'podcast': ep.title,
                    'integrantes': ep.members,
                    'data': ep.published_at,
                    'duracao': ep?.file?.duration
                    }
                )
            })
        },       

        fetchPodcastData() {
        fetch("https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json")
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.log)
        }        
    },

    mounted() {
        this.podcastDataPush(this.fetchPodcastData())   
    }
    
}


</script>

<style scoped>
    
  .row-box {
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
  }

</style>