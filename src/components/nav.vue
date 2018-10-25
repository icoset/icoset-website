<script>
  export default {

  }
</script>

<template>
  <div class="nav">
    <div class="container">
      <div class="nav__inner">
        <logo />
        <div class="link-group">
          <router-link to="/presets" class="nav-btn" active-class="nav-btn--active">
            Presets
          </router-link>
          <router-link to="/components" class="nav-btn" active-class="nav-btn--active">
            Components
          </router-link>
          <router-link to="/docs" class="nav-btn" active-class="nav-btn--active">
            Docs
          </router-link>
          <a href="https://github.com/icoset" class="nav-btn">
            Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .nav {
    height: 70px;
    display: flex;
    align-items: center;
    background-color: $color-primary;
    cursor: default;
  }

  .nav-btn {
    color: #fff;
    background-color: transparent;
    border: none;
    font-family: $base-font-family;
    font-size: $base-font-size;
    font-weight: 300;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    &.nav-btn--active::after {
      content: '';
      height: 2px;
      background-color: #fff;
      bottom: 4px;
      left: 10px;
      right: 10px;
      position: absolute;
      display: block;
      border-radius: 20px;
    }
  }

  .nav__inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>