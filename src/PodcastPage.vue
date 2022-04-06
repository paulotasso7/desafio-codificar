<template>
    <div class="row-box" >
        <div class='column-box' >
            <div class="pad-box">
                <NavBar/>
            </div>
            <div > 
                <EpCard />
                <ContentTable v-bind:items='items' v-bind:fields='fields' isloading="isLoading" />
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
            items: [],
            isLoading: ''
        }
    },

    methods: {
        podcastDataPush(item) {
            item.episodes.map((ep, i) => {
                this.items.push(
                    {
                    'podcast': ep[i].title,
                    'integrantes': ep[i].members,
                    'data': ep[i].published_at,
                    'duracao': ep[i]?.file?.duration
                    }
                )
            })
        },       

        fetchPodcastData() {
            fetch("https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json")
            .then(response => response.json())
            .then(data => {
                console.log('data from fetch', data)
                this.podcastDataPush(data)
            })
            .catch(console.log)
        }        
    },

    mounted() {
        if(this.items.length === 0) {
            console.log('before mount',this.items)
            return this.isLoading ='loading'
        }else{
            console.log('array ep',this.items)
            JSON.parse(JSON.stringify(this.fetchPodcastData()))
        }
   
       
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