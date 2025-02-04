<template>
  <div class="wiki-entry">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'WikiEntry',
  data() {
    return {
      title: 'Sample Wiki Entry',
      content: 'This is a sample content for the wiki entry.'
    };
  }
};
</script>

<style scoped>
.wiki-entry {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>