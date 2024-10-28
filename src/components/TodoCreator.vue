<template>
  <div class="input-wrap" :class="invalidValue ? 'input-err' : ''">
    <input type="text" v-model="inputValue" />
    <button @click="createTodo">Create</button>
  </div>
  <p class="err-msg" v-show="invalidValue">{{ errorMsg }}</p>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["createTodo"]);

const inputValue = ref("");
const invalidValue = ref(null);
const errorMsg = ref("");

// Another Way to be more clear is using reactive instead of 3 diffrent refs but i ll stick with the refs
// And put the other solution Here  NOTE : You should import reactive from vue in orther for this to work
// const todoState = reactive({})

const createTodo = () => {
  invalidValue.value = null;
  if (inputValue.value !== "") {
    emit("createTodo", inputValue.value);
    inputValue.value = "";
    return;
  }
  invalidValue.value = true;
  errorMsg.value = "Todo Value Can not be empty";
};
</script>

<style scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;
}
.input-wrap:focus-within {
  box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);
}
.input-err {
  border-color: red;
}

input {
  width: 100%;
  padding: 8px 6px;
  border: none;
}
input:focus {
  outline: none;
}

button {
  padding: 8px 16px;
  border: none;
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
