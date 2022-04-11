<template>
  <div class="g-container mb-5">
    <div class="mb-5 g-header-con">
      <span class="page-header">Events</span>
      <div
        class="user-profile d-flex justify-content-between align-items-center g-user-profile-con"
      >
        <img src="../assets/images/g-user.png" alt="user" />
        <span class="ml-2">Bernice</span>
        <div class="g-arr-down-con text-center">
          <img src="../assets/images/g-arrow-down.png" alt="arrow-down" />
        </div>
      </div>
    </div>
    <div class="g-search-con">
      <font-awesome-icon icon="search" />
      <input
        type="text"
        placeholder="Search"
        v-model.trim="eventName"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      eventName: '',
    }
  },
  watch: {
      eventName(val) {
          this.search()
      }
  },
  methods: {
    ...mapMutations(['filterEvents']),
    search() {
      const payload = {
        searchTerm: this.eventName,
      }
      this.filterEvents(payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.g-header-con {
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 28px;
    line-height: 22px;
  }
  .g-user-profile-con {
    width: 150px;
    span {
      font-size: 15px;
    }
  }
  .g-arr-down-con {
    background: #eaedf7;
    width: 20px;
    border-radius: 8px;
  }
}
.g-search-con {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  width: 423px;
  max-width: 70%;
  height: 41px;
  position: relative;
  padding-left: 48px;
  padding-right: 10px;

  svg {
    color: #e8e8e8;
    font-weight: 200;
    position: absolute;
    left: 18px;
    top: 12px;
  }

  input[type='text'] {
    border: 0;
    outline: 0;
    width: 100%;
    height: 100%;
  }
}
/* Media Queries */
@media (max-width: 370px) {
  .g-header-con {
    display: block;
    width: 100%;
    .page-header {
      display: block;
      margin-bottom: 30px;
    }
  }
}
</style>
