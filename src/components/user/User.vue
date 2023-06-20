<script setup>

import {ref} from "vue";
import axios from "axios";

let loading = true;

let user = ref('nope')

axios
    .get('/v1/chuckit/user/1')
    .then((res) => user.value = res.data)

</script>

<template>

  <header>Hello {{ user.name }}</header>

  <main>
    {{ user }}
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>