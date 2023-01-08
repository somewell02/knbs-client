<template>
  <div class="d-flex flex-column justify-start mb-3">
    <h3
      v-html="title"
      class="mb-2 text-center"
    />
    <div v-html="text" />
  </div>
</template>

<script>
export default {
  name: "TextPopup",

  props: {
    title: {
      type: String,
      required: false,
      default: 'Заголовок'
    },
    text: {
      type: String,
      required: false,
      default: 'текст'
    }
  }
}
</script>
