<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title" :class="'has-text-' + bg">{{ number }}</p>
      <p class="subtitle">{{ label }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "NumberTile",
  props: {
    number: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style></style>
