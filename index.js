var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    input: '',
    visible: false,
    items: [
      { message: 'Sports' },
      { message: 'Gaming' },
      { message: 'Reading' },
      { message: 'Listening to music' },
    ],
  },
  methods: {
    imgShow: function () {
      this.visible = !this.visible
    },
    inputShow: function () {
      this.message = this.input
    },
  },
})
