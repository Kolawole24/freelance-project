new Vue({
  el: '#app',
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    searchBySkill() {
      let searchValue = document.getElementById('searchbox');
      if (searchValue.value === '1') {
        window.location.href = "webdev.html";
      } else if (searchValue.value === '2') {
        window.location.href = "webdes.html";
      } else if (searchValue.value === '3') {
        window.location.href = "grades.html";
      } else if (searchValue.value === '4') {
        window.location.href = "sysad.html";
      } else if (searchValue.value === '5') {
        window.location.href = "photo.html";
      } else if (searchValue.value === '6') {
        window.location.href = "digima.html";
      }
    }
  }
})