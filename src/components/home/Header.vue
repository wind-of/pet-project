<template>
  <div class="header">
    <div class="header__navbar">
      <div class="logo">
        <transition name="logo"
                    @after-enter="ShowNavbar"
                    appear>
            <div>PetProject</div>
        </transition>
      </div>
      <transition-group tag="ul"
                        name="navbar"
                        @after-enter="ShowOtherElements">
        <li v-for="listItem of navigationListItems"
            :key="listItem"
            @click="$emit('continue')">
          {{ listItem }}
        </li>
      </transition-group>
    </div>
    <transition name="title">
      <div class="header__title" v-if="showOther">
        <h1>Welcome</h1>
        <h2>Welcome, welcome, welcome</h2>
      </div>
    </transition>
    <transition>
      <div class="header__continuation"
           @click="$emit('continue')"
           v-if="showOther">
        <p>Continue</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    data() {
      return {
				navigationListItems: [],
        showOther: false,
      }
    },
    methods: {
      ShowNavbar(){
      	['About', 'Examples', 'Lorem', 'Ipsum'].forEach((listItem, index) => {
      		  const timeout = index * 200;
            setTimeout(() => this.navigationListItems.push(listItem), timeout)
        });
      },
      ShowOtherElements(){
        this.showOther = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header{
    height: 100vh;
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      font-size: 1rem;
      color: #ccc;
      cursor: pointer;
      animation: BlinkingText 3s ease-out infinite;
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
</style>