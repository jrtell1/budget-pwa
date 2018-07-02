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
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-40">
                <md-field>
                  <label>Add a new category</label>
                  <md-input v-model="newCategory.name" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-60 md-size-40">
                <md-field>
                  <label for="type">Type</label>
                  <md-select v-model="newCategory.typeId" id="type">
                    <md-option v-for="categoryType in categoryTypes" :key="categoryType.id" :value="categoryType.id">{{ categoryType.name }}</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-40 md-size-20">
                <md-button class="md-success" :disabled="isFormInvalid" @click="addNewCategory">Add</md-button>
              </div>
            </div>

            <md-table>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Actions</md-table-head>
              </md-table-row>
              <md-table-row v-for="category in categories" :key="category.id">
                <md-table-cell>{{ category.name }}</md-table-cell>
                <md-table-cell>{{ getTypeName(category.typeId) }}</md-table-cell>
                <md-table-cell>
                  <md-button class="md-danger" @click="deleteCategory(category.id)">Remove</md-button>
                </md-table-cell>
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
        newCategory: {
          name: '',
          typeId: ''
        }
      }
    },

    computed: {
      categories() {
        return this.$store.state.categories;
      },

      categoryTypes() {
        return this.$store.state.categoryTypes;
      },

      isFormInvalid() {
        return this.newCategory.name === '' || this.newCategory.typeId === '';
      }
    },

    methods: {
      addNewCategory() {
        if (this.isFormInvalid) return;

        this.$store.commit('addCategory', {
          name: this.newCategory.name,
          typeId: this.newCategory.typeId
        });

        this.$notify({
          message: `<b>${this.newCategory.name}</b> - has been added!`,
          icon: 'add_alert',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: 'success'
        });
      },

      deleteCategory(id) {
        return this.$store.commit('removeCategory', id);
      },

      getTypeName(id) {
        return this.$store.getters.findCategoryTypeById(id).name;
      }
    }
  }
</script>
