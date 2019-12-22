<template>
  <div class="home">
    <div class="home__greet">
      <div class="home__greet__navbar">
        <div class="logo">
          <span>PetProject</span>
        </div>
        <ul>
          <li>About</li>
          <li>Examples</li>
          <li>Lorem</li>
          <li>Ipsum</li>
        </ul>
      </div>
      <div class="home__greet__title">
        <h1>Welcome</h1>
        <h2>IDK what I should write here</h2>
      </div>
      <div class="home__greet__continuation">
        <p>See More</p>
        <figure>
          <img src="../assets/img/down-chevron.svg"
               width="30"
               height="30"
               alt="Go down">
        </figure>
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-image: linear-gradient(-135deg, rgb(10,10,10) 11.2%, rgb(20,20,20) 50.9%, rgba(40,40,40,1) 78.9%);
      background-size: 150% 150%;
      animation: backgroundAnimation 15s ease-in-out infinite;
      &__navbar{
        padding: 0 50px;
        display: flex;
        align-items: center;
        .logo{
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
        color: white;
        h1{
          font-family: 'Merriweather', sans-serif;
          font-size: 3rem;
        }
        h2{
          font-family: 'Exo', sans-serif;
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
          animation: chevronAnimation 2s ease-out infinite;
        }
      }
    }
  }

  @keyframes chevronAnimation {
    0%{
      transform: translateY(0);
      opacity: 0;
    }
    20%{
      opacity: 1;
    }
    100%{
      opacity: .1;
      transform: translateY(10px);
    }
  }
  @keyframes backgroundAnimation {
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