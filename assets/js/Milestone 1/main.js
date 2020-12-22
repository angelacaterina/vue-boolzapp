// Milestone 1
//1. Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
let app = new Vue({
  el:'#app',
  data:{
    message: 'Ultimo accesso oggi alle',
    contacts: [
      {
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
        visible: true
      },
      {
        name: 'Fabio',
        avatar: './assets/img/avatar_2.jpg',
        visible: true
      },
      {
        name: 'Samuele',
        avatar: './assets/img/avatar_3.jpg',
        visible: true
      },
      {
        name: 'Franco',
        avatar: './assets/img/avatar_4.jpg',
        visible: true
      },
      {
        name: 'Antonio',
        avatar: './assets/img/avatar_5.jpg',
        visible: true
      },
      {
        name: 'Luisa',
        avatar: './assets/img/avatar_6.jpg',
        visible: true
      },
      {
        name: 'Marco',
        avatar: './assets/img/avatar_7.jpg',
        visible: true
      },
      {
        name: 'Andrea',
        avatar: './assets/img/avatar_8.jpg',
        visible: true
      }
    ]
  }
})
