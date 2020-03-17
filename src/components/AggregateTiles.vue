<template>
  <div class="tile is-ancestor has-text-centered">
    <number-tile
      v-for="metric in aggregates"
      :key="metric.label"
      :number="metric.value"
      :label="metric.label"
      :bg="metric.style"
    />
  </div>
</template>

<script>
import NumberTile from "./NumberTile";
export default {
  name: "AggregateTiles",
  props: {
    aggregates: Array,
    default: () => []
  },
  components: {
    NumberTile
  }
};
</script>

<style></style>
