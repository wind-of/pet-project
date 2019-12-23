<template>
  <div class="home">
    <HomeHeader/>
    <div class="home__content">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script>
  import HomeHeader from '@/components/main/Header'
  export default {
    name: 'home',
    components: {
        HomeHeader
    }
  }
</script>