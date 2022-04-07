<template>
  <div>
    <div>
    <p class="box-p"> Todos os episódios</p>   
    <p>{{items}}</p> 
    </div>
    <div style="width: 90%; display: flex; justify-content: center; margin-left: 30px;" >
      <b-table  hover striped :items="items" :fields="fields"></b-table>
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
      isloading: false
    }
  },

  methods: {
    // async 
    pushToTable() {
      this.isloading = true
      // try {
        // await 
        this.rows?.data?.episodes?.map((data)=> {
          this.items.push({
            'podcast': data.title,
            'integrantes': data.members,
            'data': data.published_at,
            'duracao': data?.file?.duration,
            'thumbnail': data.thumbnail
          })
        })
        this.isloading = false 
      // } 
      // catch(e) {
      //   console.log(e)
      //   this.isloading = false 
      // }

      
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
