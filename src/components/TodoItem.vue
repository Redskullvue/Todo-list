<template>
  <li>
    <input
      type="checkbox"
      @input="$emit('toggle-complete', index)"
      :checked="data.isCompleted"
    />

    <div class="todo">
      <input
        v-if="data.isEditing"
        type="text"
        :value="data.todoTitle"
        @input="$emit('update-todo', $event.target.value, index)"
      />
      <span v-else :class="data.isCompleted ? 'completed-todo' : ''">
        {{ data.todoTitle }}
      </span>
    </div>
    <div class="todo-actions">
      <Icon
        v-if="data.isEditing"
        icon="ph:check-circle"
        width="22px"
        height="22px"
        style="color: #41b080"
        class="icon"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        v-else
        icon="ph:pencil-fill"
        width="22px"
        height="22px"
        style="color: #41b080"
        class="icon"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        icon="ph:trash"
        width="22px"
        height="22px"
        style="color: #f95e5e"
        class="icon"
        @click="$emit('delete-todo', index)"
      />
    </div>
  </li>
</template>
<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

defineEmits(["toggle-complete", "edit-todo", "update-todo", "delete-todo"]);
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
li:hover .todo-actions {
  opacity: 1;
}

input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
input:checked {
  background-color: #41b080;
}

.todo {
  flex: 1;
}
input[type="text"] {
  width: 100%;
  padding: 2px 6px;
  border: 2px solid #41b080;
}

.todo-actions {
  display: flex;
  gap: 6px;
  opacity: 0;
  transition: 150ms ease-in-out;
}
.icon {
  cursor: pointer;
}

.completed-todo {
  text-decoration: line-through;
}
</style>
