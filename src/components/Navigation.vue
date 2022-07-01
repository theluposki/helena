<template>
  <transition name="fade">
    <div v-if="active" class="navigation">
      <div class="profile">
        <img src="https://i.pravatar.cc/150?img=1" alt="imagem de perfil" />
        <h3>Helena</h3>
      </div>
      <router-link to="/">
        <i class="ai-home"></i>
        Visão geral
      </router-link>
      <router-link to="/inventory">
        <i class="ai-grid"></i>
        Estoque
      </router-link>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navigation",
  computed: mapState(["active"]),
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity ease 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  transition: all ease-in-out 0.4s;
  opacity: 0;
}

.navigation {
  width: 260px;
  max-width: 260px;
  min-height: 100vh;
  background: var(--bg-two);

  display: flex;
  flex-direction: column;
  transition: all ease-in 0.2s;
}

.navigation .profile {
  display: flex;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
  gap: 10px;
}

.profile h3 {
  font-size: 26px;
  color: var(--color-gren);
  text-transform: uppercase;
}

.navigation .profile img {
  width: 75px;
  height: 75px;
  border-radius: 5px;
}

.navigation a {
  height: 50px;
  padding: 0 20px;
  font-size: 22px;

  display: flex;
  align-items: center;

  color: var(--color-gren-two);
  font-weight: 600;
}

.navigation a i {
  margin-right: 10px;
}

.navigation a.router-link-exact-active {
  color: var(--color-gren);
}

@media (min-width: 340px) and (max-width: 600px) {
  .navigation {
    position: absolute;
    top: 70px;
    left: 0;
    min-width: 300px;
    max-width: 300px;
    background: var(--bg-two);

    display: flex;
    flex-direction: column;
    transition: all ease-in 0.2s;
  }
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile h3 {
    margin-top: 20px;
  }
}
</style>
