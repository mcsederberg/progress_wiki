<template>
  <div class="sidebar">
    <ul>
      <li><a href="#main-page">Main Page</a></li>
      <li><a href="#recent-changes">Recent Changes</a></li>
      <li><a href="#random-page">Random Page</a></li>
      <li><a href="#help">Help</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: calc(100vh - var(--header-height));
  /* background-color: #f8f9fa; */
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  text-decoration: none;
  /* color: #333; */
  font-weight: bold;
}

.sidebar ul li a:hover {
  color: #007bff;
}
</style>