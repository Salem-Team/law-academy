<template>
  <div
    class="AdminPage"
    id="AdminPage"
    style="margin-top: -20px; padding-bottom: 50px"
  >
    <div class="container relative" style="padding-top: 160px">
      <div
        style="
          font-size: 40px;
          font-weight: bold;
          color: var(--main-color);
          font-family: system-ui;
          text-align: center;
          margin-bottom: 25px;
        "
      >
        الإشراف
      </div>
      <div class="contain flex gap-2.5 w-100 justify-center flex-wrap">
        <router-link
          to="/ManageAdmins"
          class="box border p-2.5 hover-0 flex align-center gap-2.5"
        >
          <font-awesome-icon :icon="['fas', 'gears']" />
          <div>إدارة المشرفين</div>
        </router-link>
        <router-link
          to="/TheStudents"
          class="box border p-2.5 hover-0 flex align-center gap-2.5"
        >
          <font-awesome-icon :icon="['fas', 'graduation-cap']" />
          <div>الطلاب</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminPage",
  mounted() {
    setTimeout(() => {
      location.href = `/AdminPage#AdminPage`;
    }, 10);
  },
};
</script>
<style lang="scss">
.AdminPage {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
.contain > a {
  width: 32%;
  border: 1px solid var(--main-color) !important;
  border-radius: 5px;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color) !important;
  cursor: pointer;
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .contain > a {
    width: 100% !important;
  }
}
</style>
