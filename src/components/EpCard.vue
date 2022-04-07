<template>
<div>
    <div>
      <h3 class="h3-title" >Ultimos lançamentos</h3>
    </div>
    <div class="cards-box" >
      <div id="card">
        <div class="img-box">
          <img v-bind:src='this.rows.data.episodes[0].thumbnail' >
        </div>
        <div class="text-container" >
          <p class='ep-title' >{{rows.data.episodes[0].title}}</p>
          <p class='ep-members'>{{rows.data.episodes[0].members}}</p>
          <div class="info-box" >
            <div class="date-box" >
              <h6 class="date" >{{rows.data.episodes[0].published_at}}</h6>
              <h6 class='dot' >.</h6>
              <h6 class="time" >{{rows.data.episodes[0].file.duration}}</h6>
            </div>
            <div class="btn-play">
              <button @click="this.play()">
                <svg class="play-icon" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.833374 0.708344V15.2917L12.2917 8.00001L0.833374 0.708344Z" fill="#04D361"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>   
      <div id="card">
      <div class="img-box">
        <img v-bind:src='this.rows.data.episodes[1].thumbnail'>
      </div>
      <div class="text-container" >
        <p class='ep-title' >{{rows.data.episodes[1].title}}</p>
        <p class='ep-members'>{{rows.data.episodes[1].members}}</p>
        <div class="info-box" >
          <div class="date-box" >
            <h6 class="date" >{{rows.data.episodes[1].published_at}}</h6>
            <h6 class='dot' >.</h6>
            <h6 class="time" >{{rows.data.episodes[1].file.duration}}</h6>
          </div>
          <div class="btn-play">
            <button @click="this.play()">
              <svg class="play-icon" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.833374 0.708344V15.2917L12.2917 8.00001L0.833374 0.708344Z" fill="#04D361"/>
              </svg>
            </button> 
          </div>
        </div>
      </div>

    </div>     
    </div>

</div>
    
    
    
</template>

<script>
import {play} from '/home/paulotasso/desafio-codificar/src/components/AudioPlayer.vue';

  export default {
    name: 'EpCard',
    props: ['rows'],
    methods: {
      play
    }

  }
</script>

<style scoped>
  @import '/home/paulotasso/desafio-codificar/src/assets/styles/Cards/main.css';
</style>