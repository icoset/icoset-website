<script>
  export default {
    props: {
      name: String,
      size: Number,
    },
    computed: {
      viewBox: function() {
        return 'this needs to be gotten somehow';
      },
      baseUrl: function() {
        let document = document || null;
        return  `${document && document.location.href || ''}#${this.name}`;
      }
    }
  };
</script>

<template>
  <svg class="icon"
       :style="size ? `height: ${size}px` : ''"
       x="0px" y="0px"
       xmlns="http://www.w3.org/2000/svg"
       preserveAspectRatio="xMidYMin"
       :viewBox="viewBox">
    <use :href="baseUrl" />
  </svg>
</template>

<style lang="scss">
  svg.icon {
    height: 20px;
    display: inline-block;
  }
</style>