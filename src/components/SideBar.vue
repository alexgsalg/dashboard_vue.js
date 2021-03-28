<template>
  <header class="header" :class="{ open: sideOpen }">
    <img
      class="header_logo"
      src="../assets/img/Brand.svg"
      alt="Logo Ignição Digital"
    />

    <div class="header_select">
      <select name="areas" id="selectArea" @change="selectImg($event)">
        <option value="areaCliente" selected>Área do cliente</option>
        <option value="admin">Administração</option>
        <img src="../assets/img/home.png" alt="" />
      </select>
      <span class="header_select__img" :class="selectValue"></span>
    </div>
    _

    <div class="header_apps">
      <p class="header_apps__title">APPS</p>
      <nav>
        <router-link
          to="/emails"
          class="header_apps__item"
          exact-active-class="active"
        >
          <email-icon />
          Email
        </router-link>
        <a href="#" class="header_apps__item">
          <chat-icon />
          Conversar
        </a>
        <a href="#" class="header_apps__item">
          <todo-icon />
          Todo
        </a>
        <a href="#" class="header_apps__item">
          <calendar-icon />
          Calendário
        </a>
      </nav>
    </div>

    <!-- Cabeçalho mobile -->
    <div class="section_mobile">
      <img
        class="mobile_logo"
        src="../assets/img/Brand.svg"
        alt="Logo Ignição Digital"
      />
      <button id="menu" @click="sideOpen = !sideOpen">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>
</template>

<script>
import CalendarIcon from "../assets/icons/CalendarIcon.vue";
import ChatIcon from "../assets/icons/ChatIcon.vue";
import EmailIcon from "../assets/icons/EmailIcon.vue";
import TodoIcon from "../assets/icons/TodoIcon.vue";
export default {
  name: "sidebar",
  components: { EmailIcon, ChatIcon, TodoIcon, CalendarIcon },
  data: () => ({
    selectValue: "areaCliente",
    sideOpen: false,
  }),
  methods: {
    selectImg: function (event) {
      // console.log();
      this.selectValue = event.target.value;
    },
  },
};
</script>

<style lang="scss"></style>
