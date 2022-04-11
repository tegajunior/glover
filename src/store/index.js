import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let FEATURED_EVENTS = [
  {
    id: 1,
    name: 'Wizkid in Warri',
    location: 'Abuja',
    url: '',
    date: '8th December, 2021',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649668423/g-featured1_rhfisb.png',
  },
  {
    id: 2,
    name: 'Movie X: Halloween',
    location: 'Lagos',
    url: '',
    date: '31st Oct, 2021',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649668470/g-featured2_hrubag.png',
  },
]
let EVENTS = [
  {
    id: 1,
    name: 'Cool Event',
    location: 'Lagos',
    date: '31 Oct',
    url: '',
    marker: true,
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649669376/g-no-name-event_mnexud.png',
  },
  {
    id: 2,
    name: 'Steve Harvey',
    location: 'Ogun',
    date: '25 Nov',
    url: '',
    marker: true,
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649669376/g-no-name-event_mnexud.png',
  },
  {
    id: 3,
    name: 'APC Rally',
    location: 'Abuja',
    date: '19 May',
    url: '',
    marker: true,
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649669376/g-no-name-event_mnexud.png',
  },
  {
    id: 4,
    name: 'London Show',
    location: 'Lagos',
    date: '12 Aug',
    url: '',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649669522/g-event1_xzwduv.png',
  },
  {
    id: 5,
    name: 'Movies X: Halloween',
    location: 'Uyo',
    date: '31 Oct',
    url: '',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649669888/g-event2_narvzb.png',
  },
  {
    id: 6,
    name: 'Tech Fest',
    location: 'Lagos',
    date: '31 Oct',
    url: '',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649669999/g-event3_wtihmi.png',
  },
  {
    id: 7,
    name: 'Open JS',
    location: 'Abuja',
    date: '31 Oct',
    url: '',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649670393/g-event4_wetzdz.png',
  },
  {
    id: 8,
    name: 'Hackerton',
    location: 'Enugu',
    date: '21 Dec',
    url: '',
    image:
      'https://res.cloudinary.com/chidieberewaaw/image/upload/v1649670511/g-event5_mfbg4w.png',
  },
]

axios
  .get(
    'https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe'
  )
  .then((res) => {
    FEATURED_EVENTS.forEach((e) => (e.url = res.data[0].offers[0].url))
    EVENTS.forEach((e) => (e.url = res.data[0].offers[0].url))
  })
  .catch((err) => {
    console.log(err)
  })
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    featuredEvents: FEATURED_EVENTS,
    events: EVENTS,
  },
  getters: {},
  mutations: {
    filterEvents(state, payload) {
      console.log(payload.searchTerm);
      if (payload.searchTerm === '') {
        state.events = EVENTS
      } else {
        const updatedEvents = EVENTS.filter((e) =>
          e.name.toLowerCase().includes(payload.searchTerm.toLowerCase())
        )
        state.events = updatedEvents
      }
    },
  },
})
