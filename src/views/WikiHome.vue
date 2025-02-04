<template>
  <div class="wiki-home">
    <header>
      <h1>Welcome to the {{ universe }} Wiki</h1>
    </header>
    <main>
      <section class="introduction">
        <h2>Introduction</h2>
        <p>This wiki is a bit different than your average wiki. It's spoiler free. Please select all of the books and /
          or chapters that you have read, to correctly populate your wiki entries.</p>
      </section>
      <section class="categories">
        <h2>Categories</h2>
        <ul>
          <li v-for="book in books" :key="book.id">
            <div class="bookAndChapterWrapper">
              <div class="bookWrapper">
                <box-icon @click="book.open = !book.open" v-if="!book.open" name="caret-right" type="solid"></box-icon>
                <box-icon @click="book.open = !book.open" v-else name='caret-down'></box-icon>
                <label>
                  <input type="checkbox" v-model="book.selected" @click.stop />
                  {{ book.name }}
                </label>
              </div>
              <ul v-if="book.open">
                <li class="chapter" v-for="chapter of book.chapters"><label><input type="checkbox" v-model="chapter.selected" />{{ chapter.index }}. {{ chapter.name }}</label></li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import 'boxicons';

export default {
  name: 'WikiHome',
  props: {
    universe: String,
  },
  setup() {
    const route = useRoute();
    let params = route.params;

    const books = ref([
      {
        id: 1, name: 'Book 1', open: false,
        selected: false,
        chapters: [
          {
            index: 1,
            selected: false, name: 'Chapter 1'
          },
          {
            index: 2,
            selected: false, name: 'Chapter 2'
          },
          {
            index: 3,
            selected: false, name: 'Chapter 3'
          },
        ]
      },
      {
        id: 2, name: 'Book 2', open: false,
        selected: false,
        chapters: [
          {
            index: 1,
            selected: false, name: 'Chapter 1'
          },
          {
            index: 2,
            selected: false, name: 'Chapter 2'
          },
          {
            index: 3,
            selected: false, name: 'Chapter 3'
          },
        ]
      },
      {
        id: 3, name: 'Book 3', open: false,
        selected: false,
        chapters: [
          {
            index: 1,
            selected: false, name: 'Chapter 1'
          },
          {
            index: 2,
            selected: false, name: 'Chapter 2'
          },
          {
            index: 3,
            selected: false, name: 'Chapter 3'
          },
        ]
      },
      {
        id: 4, name: 'Book 4', open: false,
        selected: false,
        chapters: [
          {
            index: 1,
            selected: false, name: 'Chapter 1'
          },
          {
            index: 2,
            selected: false, name: 'Chapter 2'
          },
          {
            index: 3,
            selected: false, name: 'Chapter 3'
          },
        ],
      }
    ])
    return {
      params,
      books,
    };
  },
};
</script>

<style scoped>
.wiki-home {
  font-family: Arial, sans-serif;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.introduction {
  margin-bottom: 20px;
}

.categories ul {
  list-style-type: none;
  padding: 0;
}

.categories li {
  margin: 5px 0;
}

.bookAndChapterWrapper {
  display: flex;
  flex-direction: column;
}

.bookWrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.chapter {
  margin-left: 20px !important;
  font-size: 0.9em;
  color: #666;
}
</style>