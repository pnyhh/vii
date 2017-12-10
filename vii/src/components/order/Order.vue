<template>
  <div>
    <mt-header fixed v-bind:title="title"></mt-header>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            title: this.$t('tab.order')
          }
        }
    }
</script>

<style scoped>

</style>
