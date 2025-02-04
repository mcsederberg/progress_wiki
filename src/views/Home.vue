<template>
  <WikiEntry v-if="topic"></WikiEntry>
  <WikiHome :universe="universe" v-else-if="universe"></WikiHome>
  <div v-else class="home">
    <h1>Welcome to the Wiki</h1>
    <ul>
      <li><router-link to="/discworld">Discworld</router-link></li>
      <li><router-link to="/cosmere">Cosmere</router-link></li>
    </ul>
  </div>
</template>

<script>
import WikiEntry from '@/views/WikiEntry.vue'
import WikiHome from '@/views/WikiHome.vue'
import { ref, onUpdated, computed, } from 'vue'

import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Home',
  props: {
    universe: String,
    topic: String,
  },
  setup( props, {emit} ) {
    const route = useRoute();
    return {
    };

  },
  components: {
    WikiEntry,
    WikiHome,
  },
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #42b983;
  font-size: 20px;
}

a:hover {
  color: #35495e;
}
</style>