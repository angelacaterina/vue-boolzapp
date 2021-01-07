// Milestone 1
//1. Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
let app = new Vue({
  el:'#app',
  data:{
    message: 'Ultimo accesso oggi alle',
    user:{
      name: 'Nome Utente',
      avatar: '_io',
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true
      },
      {
        name: 'Franco',
        avatar: '_4',
        visible: true
      },
      {
        name: 'Antonio',
        avatar: '_5',
        visible: true
      },
      {
        name: 'Luisa',
        avatar: '_6',
        visible: true
      },
      {
        name: 'Marco',
        avatar: '_7',
        visible: true
      },
      {
        name: 'Andrea',
        avatar: '_8',
        visible: true
      }
    ]
  }
})
