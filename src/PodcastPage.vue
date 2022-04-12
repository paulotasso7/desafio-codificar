<template>
    <div class="row-box" >
        <div class='column-box' >
            <div class="pad-box">
                <NavBar/>
            </div>
            <div > 
                <EpCard v-bind:rows='rows'/>
                <ContentTable v-bind:rows='rows' v-bind:fields='fields' />
            </div>
        </div>
        <div >
            <div>
                <AudioPlayer  v-bind:rows='rows'/>
            </div>
        </div>
    </div>
</template>

<script>
import AudioPlayer from './components/AudioPlayer.vue';
import ContentTable from './components/ContentTable.vue';
import NavBar from './components/NavBar.vue'
import EpCard from  './components/EpCard.vue'

import axios from 'axios';


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
            fields: ['PODCAST', 'INTEGRANTES', 'DATA', 'DURAÇÃO'],
            rows: []
        }
    },

    methods: {
        usingAxios ( ) {
            axios.get('https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json')
            .then(res => this.rows = res)
            .catch(console.log)
        }
    },
    
    mounted() {
        this.usingAxios()
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