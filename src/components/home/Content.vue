<template>
  <div class="content">
    <div class="content__about">
      <div class="title">
        <h1>About</h1>
        <h2>I am Frontend Developer</h2>
      </div>
    </div>
    <div class="content__examples">
      <div class="content__examples__title">
        <h1>There are no examples yet.</h1>
      </div>
    </div>
    <h1 @click="$emit('return')">Go back</h1>
  </div>
</template>

<script>
  export default {
    name: "Content"
  }
</script>

<style lang="scss" scoped>
  .content{
    height: 100vh;
    width: 100%;
    color: white
  }
</style>