<template>
  <div class="home">
    <transition :name="animationType" mode="out-in">
      <HomeHeader  v-if="showHeader"
                   @continue="ChangeView('forward')"/>
      <HomeContent v-else
                   @return="ChangeView('backward')"/>
    </transition>
  </div>
</template>

<script>
  import HomeHeader from '@/components/home/Header'

  export default {
    name: 'home',
    data() {
      return{
        showHeader: true,
        showContent: false,
        animationType: 'forward'
      }
    },
    methods: {
      SetAnimationType(type) {
        this.animationType = type;
      },
      ToggleHeaderAndContent() {
        this.showHeader = !this.showHeader;
				this.showContent = !this.showContent;
      },
      ChangeView(animationType) {
        this.SetAnimationType(animationType);
				this.ToggleHeaderAndContent();
      },
    },
    components: {
      HomeHeader,
      HomeContent: () => import(/* webpackChunkName: "home-content" */"@/components/home/Content")
    }
  }
</script>

<style lang="scss">
  .home{
    background-image: linear-gradient(135deg, rgb(10,10,10) 11.2%, rgb(20,20,20) 50.9%, rgba(40,40,40,1) 78.9%);
    background-size: 300% 300%;
    animation: moveBackground 10s ease-in-out infinite;
    text-align: center;
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
  @keyframes BlinkingText {
    0%{
      opacity: .5;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: .5;
    }
  }

  .forward-enter-active,
  .forward-leave-active,
  .backward-enter-active,
  .backward-leave-active{
    transition: all .5s ease;
  }
  .forward-leave-to,
  .backward-enter{
    transform: translateY(-100%);
    opacity: 0;
  }
  .forward-enter,
  .backward-leave-to{
    transform: translateY(100%);
    opacity: 0;
  }
</style>