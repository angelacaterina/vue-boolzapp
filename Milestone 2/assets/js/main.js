// Milestone 2
//1. Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
//2. Click sul contatto mostra la conversazione del contatto cliccato
let app = new Vue({
  el:'#app',
  data:{
    counter: 0,
    message: 'Ultimo accesso oggi alle',
    user:{
      name: 'Nome Utente',
      avatar: '_io',
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },

      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Franco',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Antonio',
        avatar: '_5',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Cosa fai sta sera?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Pensavo di restare a casa e guardami un film',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_6',
        visible: true,
        messages: [
          {
            date: '10/01/2019 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2019 15:50:00',
            text: 'Si, andiamo a mangiare una pizza sta sera?',
            status: 'received'
          },
          {
            date: '10/01/2019 15:30:55',
            text: 'Per me va bene, ci vediamo alla pizzeria alle 19:00?',
            status: 'sent'
          },
          {
            date: '10/01/2019 15:50:00',
            text: 'Perfetto, ci vediamo lì',
            status: 'received'
          },
        ],
      },
      {
        name: 'Marco',
        avatar: '_7',
        visible: true,
        messages: [
          {
            date: '1/01/2020 15:30:55',
            text: 'Buon anno, ci vediamo sta sera per festeggiare?',
            status: 'sent'
          },
          {
            date: '1/01/2020 15:50:00',
            text: 'Buon Anno anche a te. Si, ci vediamo nel bar in centro? Alle 21:00? ',
            status: 'received'
          },
          {
            date: '1/01/2020 15:30:55',
            text: 'Si, perfetto',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Andrea',
        avatar: '_8',
        visible: true,
        messages: [
          {
            date: '13/01/2020 15:30:55',
            text: 'Buon compleanno!!',
            status: 'sent'
          },
          {
            date: '13/01/2020 15:50:00',
            text: 'Grazie mille, se vuoi ci vediamo sta sera per bere qualcosa, saremo nel bar in centro.',
            status: 'received'
          }
        ],
      }
    ]
  },
  //2. Click sul contatto: mostra la conversazione del contatto
  methods: {
    contactIndex(index){
      console.log(index);
      this.counter = index;
    }
  }
})
