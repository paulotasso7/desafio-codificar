<template>

    <main class='dp-flex' >
      <div class="d-row">
        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.55874 12H4.33474C2.62541 12 1.35741 13.5867 1.73341 15.2533L2.63608 19.2533C2.91074 20.4693 3.99074 21.3333 5.23741 21.3333H6.83208C7.26008 21.3333 7.57608 20.9373 7.48274 20.52L5.76008 12.892C4.42274 6.968 8.92674 1.33333 15.0001 1.33333V1.33333V1.33333C21.0734 1.33333 25.5774 6.968 24.2401 12.892L22.5187 20.52C22.4241 20.9373 22.7414 21.3333 23.1681 21.3333H24.7627C26.0094 21.3333 27.0894 20.4693 27.3641 19.2533L28.2667 15.2533C28.6427 13.5867 27.3747 12 25.6654 12H24.4414" stroke="#04D361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg id='fone' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.708 4.03467H9.62399C9.32666 4.03467 9.05466 4.20267 8.92266 4.468L7.92133 6.47067C7.77733 6.76 7.36399 6.76 7.21999 6.47067L4.77066 1.57067C4.62799 1.28667 4.22533 1.28 4.07466 1.56L2.95999 3.62267C2.82266 3.876 2.55733 4.03467 2.26933 4.03467H1.29199" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p id="status">Tocando</p>
      </div>
      <section class="player">
        <div class="cover-wrapper">
          <img v-bind:class="coverObject" :src="current.thumbnail" />
        </div>
        <div class="song-details">
          <h2 class="song-title">{{ current.title }}</h2>
          <p class="artist">{{ current.members }}</p>
          <KProgress
            :show-text="false"
            :line-height="4"
            class="progress-bar-wrapper"
            v-bind:percent="current.percent"
          />
          <div class="timer">
            <p class="start">{{ currentlyTimer }}</p>
            <p class="end">{{ current.totalTimer }}</p>
          </div>
        </div>
        <div class="controls">
			<!-- <button class="suffle" @click="suffle" >
				<font-awesome-icon icon="shuffle" />
			</button> -->
          <button class="prev" @click="prev" v-if="songs.length > 1">
            <font-awesome-icon icon="step-backward" />
          </button>
          <button class="play" v-if="!isPlaying" @click="play">
            <font-awesome-icon icon="play" />
          </button>
          <button class="pause" v-else @click="pause">
            <font-awesome-icon icon="pause" />
          </button>
          <button class="next" @click="next" v-if="songs.length > 1">
            <font-awesome-icon icon="step-forward" />
          </button>
        </div>
      </section>
    </main>
</template>

<script>
import KProgress from "k-progress";
import { formatTimer } from "/home/paulotasso/desafio-codificar/src/helpers/timer.js";
import { deleteElement, threatSongs, shuffleArray} from "/home/paulotasso/desafio-codificar/src/helpers/utils.js";
import songs from "/home/paulotasso/desafio-codificar/src/mocks/songs.js";


export default {
  components: { KProgress },
  name: "App",
  data() {
    return {
      current: {},
      coverObject: { cover: true, animated: false },
      index: 0,
      isPlaying: false,
      currentlyTimer: "00:00",
      songs: shuffleArray(songs),
      player: new Audio()

    }
  },

  methods: {
    listenersWhenPlay() {
      this.player.addEventListener("timeupdate", () => {
        var playerTimer = this.player.currentTime;
        this.currentlyTimer = formatTimer(playerTimer);
        this.current.percent = (playerTimer * 100) / (this?.current?.file?.duration);
        this.current.isPlaying = true;
      });
      this.player.addEventListener(
        "ended",
        function() {
          this.next();
        }.bind(this)
      );
    },
    setCover() {
      this.coverObject.animated = true;

      setTimeout(() => {
        this.coverObject.animated = false;
      }, 1000);
    },
    setCurrentSong() {
      this.current = this.songs[this.index];
      this.play(this.current);
      this.setCover();
    },
    play(song) {
      if (typeof song?.file?.url !== "undefined") {
        this.isPlaying = false;
        this.index = this.songs.indexOf(this.current);
        this.current = song;
        this.player.src = this.current.file.url;
      }
      this.player.play();
      this.isPlaying = true;
      this.setCover();
      this.listenersWhenPlay();
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.setCurrentSong();
    },
    prev() {
      this.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.setCurrentSong();
    },
    removeSongFromPlaylist(song) {
      if (this.songs.length > 1) {
        if (this.index > 0) {
          this.index--;
        }
        this.current.isPlaying = false;
        this.songs = deleteElement(this.songs, song);
        this.setCurrentSong();
      }
    }
    
  },
  
  mounted() {
    this.songs = threatSongs(this.songs);
    this.current = this.songs[this.index];
    this.player.src = this?.current?.file?.url;
  }
};
</script>

<style scoped>
	@import "/home/paulotasso/desafio-codificar/src/assets/styles/Player/main.css";
</style>