<template>
  <div>
    <div>
    <p class="box-p"> Todos os episódios</p>   
    <p></p> 
    </div>
    <div style="width: 90%; display: flex; justify-content: center; margin-left: 30px;" >
      <b-table v-if="loading"  hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>


import '/home/paulotasso/desafio-codificar/src/assets/styles/Player/fonts.css';

export default {
  name: 'ContentTable',
  props: ['rows', 'fields'],
  
  data() {
    return {
      items: [],
      loading: false
    }
  },

  methods: {
    pushToTable() {
      setTimeout(() => {
        this.loading = true;
        this.rows?.data?.episodes?.map((data)=> {
          this.items.push({
            'PODCAST': data.title,
            'INTEGRANTES': data?.members,
            'DATA': data?.published_at,
            'DURAÇÃO': data?.file?.duration
          })
        })
      },100);
      this.loading = false
    }
    

  },

  mounted() {
    
     this.pushToTable() 
  
  }

}
</script>

<style scoped>
  @import '/home/paulotasso/desafio-codificar/src/assets/styles/ContentTable/main.css';
</style>
