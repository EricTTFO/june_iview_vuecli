<template>
  <div class="home">
    <!-- <router-link to="/">hi</router-link> -->
    <!-- <router-link to="/about">about</router-link> -->
    <TableView />
  </div>
</template>

<script>
// @ is an alias to /src
import TableView from '../components/TableView'
export default {
  name: 'Home',
  components: {
    TableView
  }
}
</script>
