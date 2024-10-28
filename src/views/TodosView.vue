<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo" />
    <ul class="todo-list" v-if="todoList.length > 0">
      <todo-item
        v-for="(todo, index) in todoList"
        :key="index"
        :data="todo"
        :index="index"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p class="todos-msg" v-else>
      <Icon icon="noto:sad-but-relieved-face" width="22px" height="22px" />
      <span>You have no todo's to complete ! Add one !</span>
    </p>
    <p v-if="todoCompleted && todoList.length > 0" class="todos-msg">
      <Icon icon="noto:party-popper" width="22px" height="22px" />
      <span>Good Job ! You have completed all of your tasks</span>
    </p>
  </main>
</template>

<script setup>
import TodoCreator from "@/components/TodoCreator.vue";
import TodoItem from "@/components/TodoItem.vue";
import { idCreator } from "@/composables/idCreator";
import { Icon } from "@iconify/vue";
import { ref, watch, computed } from "vue";

const todoList = ref([]);

watch(
  todoList,
  () => {
    setTodoListLocalStorage();
  },
  { deep: true }
);

const todoCompleted = computed(() => {
  return todoList.value.every((todo) => todo.isCompleted);
});

const setTodoListLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};

const getTodoListLocalStorage = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) {
    todoList.value = savedTodos;
  }
};

// I Didnt know to use the onMounted or just call it in the script both seem to work and i just went with simpler one
getTodoListLocalStorage();

const createTodo = (todo) => {
  todoList.value.push({
    id: idCreator(),
    todoTitle: todo,
    isCompleted: null,
    isEditing: null,
  });
};
const toggleTodoComplete = (todoPosition) => {
  todoList.value[todoPosition].isCompleted =
    !todoList.value[todoPosition].isCompleted;
};

const toggleEditTodo = (todoPosition) => {
  todoList.value[todoPosition].isEditing =
    !todoList.value[todoPosition].isEditing;
};

const updateTodo = (value, todoPosition) => {
  todoList.value[todoPosition].todoTitle = value;
};

const deleteTodo = (todoPosition) => {
  todoList.value.splice(todoPosition, 1);
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
}
h1 {
  margin-bottom: 16px;
  text-align: center;
}
.todo-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 24px;
  gap: 20px;
}
.todos-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
</style>
