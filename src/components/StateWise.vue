<template>
  <div class="section">
    <h1 class="title is-size-4">Statewise Distribution</h1>
    <div class="columns">
      <div class="column">
        <b-table
          :data="statewise"
          :columns="columns"
          :loading="loading"
          bordered
          hoverable
        />
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <horizontal-bar-chart
              :chart-data="chartData"
              :options="chartOptions"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HorizontalBarChart from "./HorizontalBarChart";
export default {
  name: "StateWise",
  components: {
    HorizontalBarChart
  },
  computed: {
    ...mapState(["statewise", "loading"]),
    columns: function() {
      const cols = this.statewise.length ? Object.keys(this.statewise[0]) : [];
      return cols.map(m => ({ field: m, label: m }));
    },
    chartData: function() {
      const d = {
        labels: this.statewise.map(r => r.States),
        datasets: this.barLabels.map(col => {
          return {
            label: col.title,
            data: this.statewise.map(r => r[col.title]),
            backgroundColor: col.color
          };
        })
      };
      console.log(d);
      return d;
    }
  },
  data: function() {
    return {
      chartOptions: {
        responsive: true,
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }
      },
      barLabels: [
        { title: "Active", color: "#abcdef" },
        { title: "Recovered", color: "#87a96b" },
        { title: "Deaths", color: "#ff4040" }
      ]
    };
  }
};
</script>

<style></style>
