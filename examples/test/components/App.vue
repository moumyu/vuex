<template>
  <div>
    <div>{{ first }}</div>
    <div>{{ getNextYearAge }}</div>
    <button @click="ok">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      first: '123'
    }
  },
  computed: mapGetters('bar', ['getNextYearAge']),
  methods: {
    ...mapActions({
      add: 'bar/setAgeIncreaseAsync'
    }),
    ok () {
      console.log(this.$store)
    }
  }
}
</script>
