<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">Email Statistics</h4>
          <span slot="subTitle"> Last campaign performance</span>
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">2015 Sales</h4>
          <span slot="subTitle"> All products including Taxes</span>
          <span slot="footer">
            <i class="ti-check"></i> Data information certified</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>

    </div>

    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="card">
          <paper-table :title="table2.title" :sub-title="table2.subTitle" :data="table2.data" :columns="table2.columns">

          </paper-table>
        </div>
      </div>
    </div>

  </div>


</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'

  const tableColumns = ['Location', 'Name', 'Price', 'SQM', 'Floor']
  const tableData = [
    {location: 'XX',
      name: 'AA',
      price: 1000,
      sqm: 1000,
      floor: 1},
    {location: 'YY',
      name: 'BB',
      price: 2000,
      sqm: 400,
      floor: 5},
    {location: 'ZZ',
      name: 'CC',
      price: 4000,
      sqm: 2000,
      floor: 7}
  ]

  export default {
    components: {
      StatsCard,
      ChartCard,
      PaperTable
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        statsCards: [
          {
            type: 'info',
            icon: 'ti-stats-up',
            title: 'Highest Price',
            value: 'xxxxx원',
            footerText: '<<search period>>'
          },
          {
            type: 'info',
            icon: 'ti-stats-down',
            title: 'Lowest Price',
            value: 'xxxxx원',
            footerText: '<<search period>>'
          },
          {
            type: 'info',
            icon: 'ti-pencil-alt',
            title: 'Transaction',
            value: 'xxxxx건',
            footerText: '<<search period>>'
          },
          {
            type: 'info',
            icon: 'ti-user',
            title: 'Population',
            value: 'xxxxx명',
            footerText: '<<search period>>'
          }
        ],
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        },
        table1: {
          title: 'TOP 5 Apartments',
          subTitle: 'the most expensive apartments in the selected area',
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          title: 'Lowest 5 Apartment',
          subTitle: 'the cheapest apartments in the selected area',
          columns: [...tableColumns],
          data: [...tableData]
        }

      }
    }
  }

</script>
<style>

</style>
