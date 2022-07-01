<template>
  <div class="header">
    <h1>
      <i v-if="active" @click="off" class="ai-cross"></i>
      <i v-else @click="on" class="ai-three-line-horizontal"></i>
    </h1>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Header",
  computed: mapState(["active"]),
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['on', 'off'])
  }
};
</script>

<style scoped>
.header {
  height: 60px;
  background: var(--bg-two);
  display: flex;
  align-items: center;
  border-left: solid 2px var(--bg-one);
  padding: 0 20px;
  border-radius: 3px;
  cursor: pointer;
}

@media (min-width: 340px) and (max-width: 600px) {
  .header {
    min-height: 70px;
  }

  i {
    font-size: 50px;
  }
}
</style>
