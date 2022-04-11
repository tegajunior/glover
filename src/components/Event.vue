<template>
  <div class="g-container">
    <div :class="`g-card g-e _${event.id}`">
      <h3 class="g-event-name-img" v-if="event.marker">{{ event.name }}</h3>
      <img :src="event.image" alt="Event" class="event-image" />
      <p class="g-event-name">{{ event.name }}</p>
      <p>
        <img src="../assets/images/g-location.png" alt="Location" />
        <span class="g-gray-text-card">{{ event.location }}</span>
      </p>
      <p>
        <img src="../assets/images/g-money.png" alt="Amount" />
        <span class="g-gray-text-card">Starting from</span
        ><span class="g-blue-text-card">&nbsp; &#x20A6;15,000</span>
      </p>
      <a target="_blank" :href="event.url">Buy Ticket</a>
      <div class="event-date-con">{{ event.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    event: {
      type: Object,
    },
  },
}
</script>
<style lang="scss" scoped>
.g-card {
  .g-event-name-img {
    color: #ffffff;
    position: absolute;
    top: 70px;
    left: 50px;
    font-weight: 900;
    font-size: 26px;
    font-family: 'Merriweather', serif;
    line-height: 32px;
    width: 100%;
  }
}
.g-card.g-e {
  position: relative;
  width: 250px;
  min-width: 100%;
  height: 301px;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.02);
  padding: 12px;
  animation: fadeInUp 1s backwards;
  .g-gray-text-card {
    font-size: 12px;
  }
  .g-blue-text-card {
    font-size: 14px;
  }
  a {
    width: 91px;
    height: 32px;
    border-radius: 6px;
    font-size: 12px;
  }
  .event-date-con {
    width: 50px;
    height: 30px;
    background: rgba(255, 106, 44, 0.08);
    color: #ff6a2c;
    border-radius: 6px;
    position: absolute;
    top: 55%;
    right: 20px;
    font-size: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@for $i from 1 to 8 {
  .g-card.g-e._#{$i} {
    animation-delay: #{$i / 10}s;
  }
}
@media (max-width: 480px) {
  .g-card.g-e {
    left: 44px;
  }
}
</style>
