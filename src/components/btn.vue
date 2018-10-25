<script>
  export default {
    props: {
      type: String,
      icon: String,
      large: Boolean,
      active: Boolean,
    },
  }
</script>

<template>
  <button
    :class="`btn btn__${type} ${large ? 'btn--lg' : ''} ${active ? 'active' : ''}`"
    v-on="$listeners"
  >
    <span>
      <icon v-if="icon" :name="icon" />
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
  .btn {
    border-radius: 100px;
    background-color: $color-grey-25;
    color: $color-grey-600;
    outline: none;
    font-family: $base-font-family;
    font-size: $base-font-size;
    padding: .282rem .9rem;
    border: solid 2px transparent;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 200ms ease, color 200ms ease, border 200ms ease;
    position: relative;

    > span {
      display: flex;
      align-items: center;
      transition: fill 200ms ease;
    }

    .icon {
      margin-left: -.1rem;
      margin-right: .5rem;
      fill: #fff;
    }

    &:hover, &:focus {
      outline: none;
      box-shadow: none;
      background-color: $color-grey-50;
    }

    &.active {
      background-color: $color-primary;
      color: #fff;
    }

    &.btn--lg {
      padding: .4688rem 1.2rem;
      font-size: 18px;
    }

    &.btn__primary {
      color: #fff;
      background-color: $color-primary;

      &:hover, &:focus {
        background-color: $color-primary;
      }

      &:focus {
        border-color: $color-primary;
      }

    }

    &.btn__primary {
      background-color: transparent;
      color: $color-primary;
      .icon {
        fill: $color-primary;
      }

      &:hover, &:focus, &.active {
        border-color: $color-primary;
        background-color: transparent;
        .icon {
          fill: #fff;
        }
      }
    }
  }
</style>