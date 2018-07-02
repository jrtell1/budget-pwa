<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    created() {
      this.initializeCategories();
    },

    methods: {
      initializeCategories() {
        const storedCategories = localStorage.getItem('categories');
        let categories = [];

        if (storedCategories) {
          categories = JSON.parse(storedCategories);
        }

        this.$store.commit('setCategories', categories);
      }
    }
  }
</script>