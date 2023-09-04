<template>
  <AppHeader/>
  <main>  
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
#app{
  position: relative;
}
</style>
