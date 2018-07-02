<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Categories</h4>
            <p class="category">Here you can add and remove different categories.</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="categories" :table-header-color="tableHeaderColor">
              <md-table-row slot="md-table-row" slot-scope="{ category }">
                <md-table-cell md-label="Name">{{ category.name }}</md-table-cell>
                <md-table-cell md-label="Country">{{ category.country }}</md-table-cell>
                <md-table-cell md-label="City">{{ category.city }}</md-table-cell>
                <md-table-cell md-label="Salary">{{ category.salary }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    SimpleTable
  } from '@/components'

  export default {
    components: {
      SimpleTable
    },

    data() {
      return {
        categories: []
      }
    }
  }
</script>
