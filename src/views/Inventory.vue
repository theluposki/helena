<template>
  <div class="inventory">
    <div class="header-inventory">
      <router-link to="/inventory/add">
        <i class="ai-plus"></i>
        Adicionar
      </router-link>
      <router-link to="/inventory/list">
        <i class="ai-clipboard"></i>
        Lista
      </router-link>
    </div>
    <div class="content-inventory">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.inventory {
  display: flex;
  flex-direction: column;
}

.header-inventory {
  height: 60px;
  display: flex;
}

.header-inventory a {
  height: 50px;
  padding: 0 20px;
  font-size: 1.2rem;

  display: flex;
  align-items: center;

  color: var(--color-gren-two);
  font-weight: 600;
}

.header-inventory a i {
  margin-right: 10px;
}


.header-inventory a.router-link-exact-active {
  color: var(--color-gren);
}

.content-inventory {
  padding: 1.2rem;
}
</style>
