
<template>
  <div>
    <router-view v-if="infoData"></router-view>
  </div>
</template>

<script>
import ajax from "js/ajax";
export default {
  data() {
    return {
      infoData: null
    };
  },
  methods: {
    getloginInfo() {
      this.infoData = {
        userName: "sxc"
      };
      window.infoData = this.infoData;
      /*
      ajax.get('af', {}, {loading: true}).then((data)=>{
        this.infoData = data
        window.infoData = data
      })
      */
    }
  },
  mounted() {
    this.getloginInfo();
  }
};
</script>

<style>
</style>