<template>
  <v-snackbar v-model="configuration.show" :top="true" :right="true" :multi-line="true" :timeout="0" :color="configuration.color">
    {{ configuration.message }}
    <v-btn color="white" flat @click="close()">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import Config from '../services/Config'
export default {
  computed: {
    configuration() {
      //Avoid state manipulation in snackbar by creating a fresh object by passed in state
      return this.$store.state.globalSnackbarSettings
    }
  },
  methods: {
    close() {
      this.$store.commit(Config.mutations.global.HIDE_SNACKBAR)
    }
  }
}
</script>