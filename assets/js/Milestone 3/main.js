// Milestone 3
//1. Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
//2. Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
let app = new Vue({
  el:'#app',
  data:{
    counter: 0,
    newMessage: '',
    message: 'Ultimo accesso oggi alle',
    contacts: [
      {
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
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
        avatar: './assets/img/avatar_2.jpg',
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
        avatar: './assets/img/avatar_3.jpg',
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
        avatar: './assets/img/avatar_4.jpg',
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
        avatar: './assets/img/avatar_5.jpg',
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
        avatar: './assets/img/avatar_6.jpg',
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
        avatar: './assets/img/avatar_7.jpg',
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
        avatar: './assets/img/avatar_8.jpg',
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
  methods: {
    contactIndex(index){
      console.log(index);
      this.counter = index;
    },
    //1. Aggiunta di un messaggio
    addMessage(){
      let newText = this.newMessage;
      if (newText.length >= 0){
        this.contacts[this.counter].messages.push({
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: newText,
          status: 'sent',
        });
        this.newMessage = '';
        // console.log(newText);
      };
      // risposta che apparirà dopo 1 secondo
      setTimeout(this.receivedMessage, 1000);
    },
    //2. Risposta dall’interlocutore (random)
    receivedMessage(){
      let receivedText = ["ok", "va bene", "perfetto!", "non ci sono problemi"];
      let textRnd = receivedText[Math.floor(Math.random() * receivedText.length)];
      this.contacts[this.counter].messages.push({
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: textRnd,
        status: 'received',
      });
      // console.log(receivedText);
    }
  }
})
