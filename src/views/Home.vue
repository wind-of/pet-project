<template>
  <div class="home">
    <div class="home__greet">
      <div class="home__greet__navbar">
        <ul>
          <li>About</li>
          <li>Examples</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div class="home__greet__title">
        <h1>Welcome</h1>
        <h2>Sit amet consectetur</h2>
      </div>
      <div class="home__greet__continuation">
        <p>More</p>
        <span>
          <img src="../assets/img/down-chevron.svg"
               width="30"
               height="30"
               alt="Go down">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
.home{
  &__greet{
    height: 100vh;
    padding: 30px 0;
    background: rgb(20,20,20);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &__navbar{
      display: inline-block;
      ul{
        display: flex;
        li{
          margin: 10px 30px;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
          transition: .2s ease-in-out;
          &:hover{
            color: #bbb;
          }
        }
      }
    }
    &__title{
      color: white;
      h1{
        font-size: 2.5rem;
      }
      h2{
        font-size: 2rem;
      }
    }
    &__continuation{
      cursor: pointer;
      color: #999;
      font-size: 1.1rem;
      span > img{
        animation: chevronAnimation 2s ease-in-out infinite;
      }
    }
  }
}

  @keyframes chevronAnimation {
    0%{
      transform: translateY(0);
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translateY(15px);
    }
  }
</style>