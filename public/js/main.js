new Vue({
  el: 'main',
  mounted(){
    setInterval(() => {
      axios.get('http://localhost:8080/api')
        .then((info) => { this.server = info.data });
    }, 1000);
  },
  data: {
    app: 'Infosys',
    server: ''
  }
})

Vue.filter('bytes', (value) => { return value + ' bytes' })
