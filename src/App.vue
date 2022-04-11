<template>
  <div id="app">
    <Header />
    <h3 class="section-heading">Featured Events</h3>
    <div class="g-d-flex g-d-flex-fe">
      <FeaturedEvent v-for="event in featuredEvents" :key="event.id" :event="event"/>
    </div>
    <h3 class="section-heading" v-if="events.length > 0">All Events</h3>
    <div class="g-d-flex">
        <Event v-for="event in events" :key="event.id" :event="event"/>
    </div>
    <div class="epmty-events mt-3" v-if="events.length === 0">No Events</div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import Header from './components/Header'
import FeaturedEvent from './components/FeaturedEvent'
import Event from './components/Event'
export default {
  name: 'App',
  components: {
    Header,
    FeaturedEvent,
    Event,
  },
  computed: {
      localComputed() {},
      ...mapState(['featuredEvents', 'events'])
  }
}
</script>

<style lang="scss">
@import 'animate.css';
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap');

@font-face {
  font-family: 'BR Firma';
  src: url('./assets/fonts/BRFirma-Regular.woff2') format('woff2');
  font-weight: lighter;
  font-style: normal;
}
@font-face {
  font-family: 'BR FirmaB';
  src: url('./assets/fonts/BRFirma-Black.woff2') format('woff2');
  font-weight: lighter;
  font-style: normal;
}
#app {
  font-family: BR Firma, sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
}
.section-heading {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: 42px;
}
.g-container {
  padding-left: 40px;
  padding-right: 40px;
}

.g-d-flex {
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  justify-content: space-between;
}

.g-card {
  border-radius: 10px;
  background: #ffffff;
  position: relative;
  p {
    margin-bottom: 8px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border: 1.375px solid #372aa4;
    box-sizing: border-box;
    border-radius: 8.25px;
    text-align: center;
    text-decoration: none;
    color: #372aa4;
    &:hover {
      color: #ffffff;
      background: #372aa4;
      opacity: 0.6;
    }
  }
}
.mb-5 {
  margin-bottom: 53px;
}
.g-semi-bold {
  font-size: 16px;
  font-weight: 600;
}
.g-event-name {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 14px;
}
.g-gray-text-card {
  color: #6c757d;
  margin-left: 13px;
}
.g-blue-text-card {
  font-weight: 600;
  font-size: 16px;
  color: #372aa4;
}
.g-width-7 {
  width: 60%;
  max-width: 100%;
}
.epmty-events {
  text-align: center;
  font-weight: 900;
  color: red;
  animation: rubberBand 1s backwards;
}
/* Media Queries */

@media (max-width: 1200px) {
  .g-container {
    padding-left: 1%;
    padding-right: 1%;
  }
}
@media (max-width: 768px) {
  #app {
    padding-left: 70px;
    padding-right: 70px;
  }
  .section-heading {
    margin-left: 8px;
  }
}

@media (max-width: 480px) {
  #app {
    padding-left: 30px;
    padding-right: 30px;
  }
  .section-heading {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
