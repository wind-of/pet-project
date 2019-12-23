<template>
  <div class="home-header">
    <div class="home-header__navbar">
      <div class="logo">
        <transition name="logo"
                    appear
                    @after-enter="showNavbar()">
            <div>PetProject</div>
        </transition>
      </div>
      <transition-group tag="ul"
                        name="navbar"
                        @after-enter="ShowOtherElements()">
        <li v-if="showFirst"  key="111111">About</li>
        <li v-if="showSecond" key="111112">Examples</li>
        <li v-if="showThird"  key="111113">Lorem</li>
        <li v-if="showFourth" key="111114">Ipsum</li>
      </transition-group>
    </div>
    <transition name="title">
      <div class="home-header__title" v-if="showTitleAndContinuation">
        <h1>Welcome</h1>
        <h2>Welcome, welcome, welcome</h2>
      </div>
    </transition>
    <div class="home-header__continuation"
         @click="$emit('slideDown')"
         v-if="showTitleAndContinuation">
      <p>See More</p>
      <figure>
        <img src="../../assets/img/down-chevron.svg" width="30" height="30" alt="Go down">
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    data() {
      return {
        showFirst: false,
        showSecond: false,
        showThird: false,
        showFourth: false,
        showTitleAndContinuation: false
      }
    },
    methods: {
      showNavbar(){
        this.showFirst = true;
        setTimeout(() => this.showSecond = true, 200);
        setTimeout(() => this.showThird = true, 400);
        setTimeout(() => this.showFourth = true, 600);
      },
      ShowOtherElements(){
        this.showTitleAndContinuation = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-header{
    position: absolute;
    height: 100vh;
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(135deg, rgb(10,10,10) 11.2%, rgb(20,20,20) 50.9%, rgba(40,40,40,1) 78.9%);
    background-size: 300% 300%;
    animation: moveBackground 10s ease-in-out infinite;
    &__navbar{
      padding: 0 50px;
      display: flex;
      align-items: center;
      .logo{
        overflow: hidden;
        margin: 0 40px;
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        font-weight: 800;
        color: #F24837;
        cursor: default;
        user-select: none;
      }
      ul{
        font-family: 'Exo', sans-serif;
        font-weight: 500;
        display: flex;
        li{
          margin: 10px 30px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: .2s ease-in-out;
          &:hover{
            color: #ccc;
          }
        }
      }
    }
    &__title{
      font-family: 'Montserrat', sans-serif;
      color: white;
      animation: Blinking 15s ease-in-out infinite;
      h1{
        font-size: 3rem;
      }
      h2{
        font-size: 1.5rem;
        color: #eee;
      }
    }
    &__continuation{
      font-family: 'Exo', sans-serif;
      font-size: 1.1rem;
      color: #999;
      cursor: pointer;
      figure > img{
        animation: BlinkAndMoveUpAndDown 2s ease-out infinite;
      }
    }
  }

  .logo-enter-active, .logo-leave-active{
    transition: transform 1s ease-out;
  }
  .logo-enter, .logo-leave-to{
    transform: translateY(-100px);
  }



  .navbar-enter-active, .navbar-leave-active{
    transition: all 1s;
  }
  .navbar-enter, .navbar-leave-to{
    transform: scaleY(0);
    opacity: 0;
  }



  .title-enter-active, .title-leave-active{
    transition: opacity 2s;
  }
  .title-enter, .title-leave-to{
    opacity: 0;
  }

  @keyframes BlinkAndMoveUpAndDown {
    0%{
      transform: translateY(0);
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: .1;
      transform: translateY(10px);
    }
  }
  @keyframes moveBackground {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
</style>