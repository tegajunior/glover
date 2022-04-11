<template>
  <div class="g-container mb-5">
    <div :class="`g-card g-fe _${event.id}`">
      <img :src="event.image" alt="Featured Event" class="featured-event-img"/>
      <p class="g-event-name">{{event.name}}</p>
      <div class="d-flex g-width-7 justify-content-between">
        <p>
          <img src="../assets/images/g-location.png" alt="Location" />
          <span class="g-gray-text-card">{{event.location}}</span>
        </p>
        <p>
          <img src="../assets/images/g-calendar.png" alt="Date" />
          <span class="g-gray-text-card">{{event.date}}</span>
        </p>
      </div>
      <p>
        <img src="../assets/images/g-money.png" alt="Amount" />
        <span class="g-gray-text-card">Starting from</span
        ><span class="g-blue-text-card">&nbsp; &#x20A6;15,000</span>
      </p>
      <a target="_blank" :href="event.url">Buy Ticket</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedEvent',
  data() {
      return {
          k: '../assets/images/g-featured2.png'
      }
  },
  props: {
    event: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.g-card.g-fe {
  width: 524;
  height: 320px;
  padding: 16px;
  animation: fadeInLeft 1s backwards;
 

  a {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 125.12px;
    height: 44px;
    font-size: 16px;
  }
}
 @for $i from 1 to 2 {
    .g-card.g-fe._#{$i} {
        animation-delay: #{$i / 10}s;
    }
}

@media (max-width: 768px) {
  
  .g-card.g-fe {
    width: 100%;
    padding: 2%;

    img {
      max-width: 100%;
    }
  }
}
@media (max-width: 612px) {
  .g-card.g-fe {
    div {
      flex-direction: column;
      width: 100%;
    }
  }
}
@media (max-width: 480px) {
  .g-card.g-fe {
    width: 100%;
    padding: 2%;
    height: 348px;
    a {
      width: 80px;
      font-size: 10px;
      height: 30px;
      right: initial;
      bottom: 5%;
    }
  }
}
</style>
