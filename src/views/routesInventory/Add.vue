<template>
  <div class="add">
    <form>
      <h3>Adicionar produto</h3>

      <div class="form-controll">
        <label for="name">*Nome</label>
        <input
          tabindex="1"
          v-model="product.name"
          id="name"
          type="text"
          placeholder="digite o nome"
        />
      </div>

      <div class="form-controll">
        <label for="name">*Descrição</label>
        <textarea
          tabindex="2"
          v-model="product.description"
          id="description"
          type="text"
          placeholder="descreva o produto"
        >
        </textarea>
      </div>

      <div class="form-group">
        <div class="form-controll">
          <label for="amount">*Quantidade</label>
          <input
            tabindex="3"
            v-model.number="product.amount"
            min="0"
            id="amount"
            type="number"
            placeholder="digite a quantidade"
          />
        </div>

        <div class="form-controll">
          <label for="price">*Preço</label>
          <input
            tabindex="4"
            v-model.number="product.price"
            min="0"
            id="price"
            type="number"
            placeholder="digite o preço"
          />
        </div>
      </div>
      <!-- 


-->
      <div class="form-controll">
        <label for="category">*Categoria</label>
        <select
          tabindex="5"
          v-model="product.category"
          name="category"
          id="category"
        >
          <option value="null">-- Selecione a categoria --</option>
          <option
            v-for="(item, index) in categories"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <div class="form-controll">
          <label for="unity">*Unidade</label>
          <select tabindex="6" v-model="product.unity" name="unity" id="unity">
            <option value="null">-- Selecione a unidade --</option>
            <option v-for="(item, index) in unities" :key="index" :value="item">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="form-controll">
          <label for="unitValue">*Valor da unidade</label>
          <input
            tabindex="7"
            v-model.number="product.unitValue"
            min="0"
            id="unitValue"
            type="number"
            placeholder="digite o valor da unidade"
          />
        </div>
      </div>

      <div class="form-buttons">
        <button @click.prevent="clear">
          <span>Limpar</span>
          <i class="ai-backspace"></i>
        </button>

        <button @click.prevent="register" tabindex="8">
          <span>Registrar</span>
          <i class="ai-send"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: null,
        description: null,
        amount: null,
        price: null,
        category: null,
        unitValue: null,
        unity: null,
      },
      categories: ["Mercado", "Limpeza", "Destilados"],
      unities: ["KG", "LT", "G"],
    };
  },
  mounted() {
    this.focusName();
  },
  methods: {
    clear() {
      this.product = {
        name: null,
        description: null,
        amount: null,
        price: null,
        category: null,
        unitValue: null,
        unity: null,
      };
    },
    register() {
      console.log("Register");
    },
    focusName() {
      const name = document.getElementById("name");

      name.focus();
    },
  },
};
</script>

<style scoped>
.add {
  background: transparent;
}

form {
  display: flex;
  flex-direction: column;
}

form h3 {
  margin-bottom: 40px;
  color: var(--color-gren);
  font-size: 1.4rem;
  text-align: center;
}

.form-group {
  display: flex;
  gap: 5px;
}

.form-controll {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.form-controll label {
  padding: 0 10px;
  font-size: 1.2rem;
  color: var(--color-gren-two);
  margin-bottom: 10px;
  text-align: left;
  font-weight: 600;
}
.form-controll input,
select,
textarea {
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border-bottom: solid 2px var(--bg-two);
  background: transparent;
  color: var(--color-white);
  font-size: 1.2rem;
  caret-color: var(--color-gren);
  resize: none;
}

.form-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.form-buttons button {
  min-width: 150px;
  height: 40px;
  background: transparent;
  color: var(--color-gren);
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-buttons span {
  font-size: 22px;
  margin-right: 10px;
}

.form-buttons button i {
  font-size: 30px;
}

.form-buttons button:hover {
  transition: all ease 0.4s;
  border-right: solid 2px var(--color-gren);
  border-left: solid 2px var(--color-gren);
}

.form-buttons button:active {
  transition: all ease 0.1s;
  border-right: solid 2px var(--color-gren-two);
  border-left: solid 2px var(--color-gren-two);
  color: var(--color-gren-two);
}

.form-controll option {
  background: var(--bg-one);
  border: solid 1px var(--color-gren);
  border-radius: 5px;
}

.form-controll input:focus,
textarea:focus,
select:focus,
button:focus {
  background: var(--bg-two);
  transition: all ease-in-out 0.4s;
  border-bottom: solid 1px var(--color-gren);
}

.form-controll button {
  width: 50px;
}

@media (min-width: 340px) and (max-width: 600px) {
  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-buttons {
    margin-bottom: 40px;
  }
}
</style>