<template>
  <div>
    <div class="section">
      <p class="content has-text-centered">
        This Website relies upon publicly available data from multiple sources,
        both official and unofficial <br />
        Last updated - on 16.03.2020 at 4:30 PM
      </p>
    </div>

    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <aggregate-tiles :aggregates="aggregates" />
      <state-wise />
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { mapState } from "vuex";
import AggregateTiles from "../components/AggregateTiles";
import StateWise from "../components/StateWise";

export default {
  name: "Home",
  data: function() {
    return {
      aggregateColumns: [
        { title: "Confirmed", style: "primary" },
        { title: "Active", style: "info" },
        { title: "Deaths", style: "danger" },
        { title: "Recovered", style: "success" }
      ]
    };
  },
  components: {
    AggregateTiles,
    StateWise
  },
  computed: {
    ...mapState(["loading", "statewise"]),
    aggregates: function() {
      if (!this.statewise.length) return [];

      return this.aggregateColumns.map(col => {
        const count = d3.sum(this.statewise.map(s => parseInt(s[col.title])));
        return {
          label: col.title,
          value: count,
          style: col.style
        };
      });
    }
  },
  async created() {
    this.$store.dispatch("loadStateWiseData");
  },
  methods: {}
};
</script>
