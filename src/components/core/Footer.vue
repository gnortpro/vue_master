<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>{{title}} &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
export default {
    data()
    {
        return {
            title: "X3English"
        }     
    }
}
</script>