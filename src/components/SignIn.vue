<template>
  <div class="main_Overlay" @click="close_1"></div>
  <div
    class="container bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
  >
    <div
      class="header flex justify-between items-center mb-2.5"
      style="
        font-size: 30px;
        font-weight: bold;
        color: var(--main-color);
        font-family: system-ui;
      "
    >
      <h2>تسجيل الدخول</h2>
      <font-awesome-icon
        @click="close_1"
        :icon="['fas', 'xmark']"
        class="text-2xl bg-[--main-color] p-1 text-white rounded"
        style="width: 25px"
      />
    </div>
    <form>
      <v-sheet class="mx-auto">
        <v-form fast-fail @submit.prevent class="flex flex-wrap gap-2.5">
          <v-text-field
            v-model="Phone"
            label="رقم الهاتف"
            :rules="firstNameRules1"
            class="w-48"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="كلمة المرور"
            :rules="passRules"
            class="w-48"
            :type="showPassword ? 'text' : 'password'"
          >
            <div
              class="Show_Password absolute -translate-x-1/2 -translate-y-1/2 left-5 top-1/2"
              @click="showPassword = !showPassword"
            >
              <font-awesome-icon
                :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
              />
            </div>
          </v-text-field>
        </v-form>
      </v-sheet>
      <!-- <div class="input-group mb-3"> -->
      <!-- <div class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="number"
            v-model="number"
          />

          <label for="number"
            ><font-awesome-icon :icon="['fas', 'user-edit']" /> رقم
            الهاتف</label
          >
        </div> -->
      <!-- </div> -->
      <!-- <div class="input-group mb-3">
        <div class="form-floating">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            placeholder="كلمة السر"
            v-model="password"
            required
          />
          <label for="Password"
            ><font-awesome-icon :icon="['fas', 'lock']" /> كلمة السر
          </label>
          <div
            class="Show_Password absolute -translate-x-1/2 -translate-y-1/2 left-5 top-1/2"
            @click="showPassword = !showPassword"
          >
            <font-awesome-icon
              :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
            />
          </div>
        </div>
      </div> -->
      <p
        class="error"
        style="
          width: 100%;
          padding: 10px;
          background: #fafafa;
          border-radius: 5px;
          color: red;
          font-weight: bold;
          text-align: center;
          font-family: system-ui;
        "
      >
        {{ ErrorMsg }}
      </p>
      <div
        @click="SignIn"
        class="w-fit mr-auto p-2.5 text-white bg-[--main-color] rounded cursor-pointer"
        style="
          width: 100%;
          text-align: center;
          font-weight: bold;
          font-family: system-ui;
          margin-top: 10px;
        "
      >
        تسجيل الدخول
      </div>
    </form>
  </div>
</template>
<script>
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBOlDn6NmPGHHfdY-gYHvnA6MoM-y0Xbmo",
  authDomain: "elemam-center-for-training.firebaseapp.com",
  projectId: "elemam-center-for-training",
  storageBucket: "elemam-center-for-training.appspot.com",
  messagingSenderId: "253703295162",
  appId: "1:253703295162:web:927a97dbbc2276f30d7283",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import bcrypt from "bcryptjs";
// import Main_ClassVue from "@/views/Main_Class.vue";
export default {
  name: "SignIn",
  emits: ["close_1"],
  computed: {
    UserAdmin() {
      return this.$store.state.UserAdmin;
    },
  },
  data() {
    return {
      Phone: "",
      number: null,
      loginError: "",
      ErrorMsg: "",
      showPassword: false,
      firstNameRules1: [
        async (value) => {
          if (value?.length > 1) {
            const q = query(
              collection(db, "المشرفين"),
              where("phone", "==", this.Phone)
            );
            const querySnapshot = await getDocs(q);
            const q_1 = query(
              collection(db, "الطلاب"),
              where("phone", "==", this.Phone)
            );
            const querySnapshot_1 = await getDocs(q_1);
            if (querySnapshot.empty && querySnapshot_1.empty) {
              return " الرقم  غير مسجل في الموقع";
            }
          }
        },
      ],
      password: "",
      passRules: [
        (value) => {
          if (value?.length >= 4) return true;

          return "يجب ان لا تقل كلمة المرور عن 4 احرف";
        },
      ],
    };
  },
  methods: {
    async SignIn() {
      let MainState;
      // Check About number
      const q = query(
        collection(db, "المشرفين"),
        where("phone", "==", this.Phone)
      );
      const querySnapshot = await getDocs(q);
      const q_1 = query(
        collection(db, "الطلاب"),
        where("phone", "==", this.Phone)
      );
      const querySnapshot_1 = await getDocs(q_1);
      if (querySnapshot.empty && querySnapshot_1.empty) {
        this.ErrorMsg = " الرقم غير مسجل في الموقع";
        MainState = false;
      } else {
        this.ErrorMsg = "";
        MainState = true;
      }
      // Check About password
      if (MainState) {
        const q_2 = query(
          collection(db, "المشرفين"),
          where("Password", "==", this.password.toString())
        );
        const querySnapshot_2 = await getDocs(q_2);
        const q_3 = query(
          collection(db, "الطلاب"),
          where("password", "==", this.password.toString())
        );
        const querySnapshot_3 = await getDocs(q_3);
        if (querySnapshot_2.empty && querySnapshot_3.empty) {
          this.ErrorMsg = "كلمة المرور خاطئة";
          MainState = false;
        } else {
          this.ErrorMsg = "";
          MainState = true;
        }
      }
      //
      if (MainState) {
        localStorage.setItem(
          "userid",
          querySnapshot.docs[0].id || querySnapshot_1.docs[0].id
        );
        this.$emit("GetAdminState");
        this.$emit("close_1");
      }
    },
    async State() {
      try {
        const q_Admin = query(
          collection(db, "المشرفين"),
          where("Id", "==", localStorage.getItem("userid"))
        );
        const querySnapshot_Admin = await getDocs(q_Admin);
        if (!querySnapshot_Admin.empty) {
          this.$store.commit("setUserAdmin", "Admin");
        } else {
          this.$store.commit("setUserAdmin", "");
        }
      } catch (error) {
        error;
      }
      try {
        const q_User = query(
          collection(db, "الطلاب"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot_User = await getDocs(q_User);
        if (!querySnapshot_User.empty) {
          this.$store.commit("setUserAdmin", "User");
        } else {
          this.$store.commit("setUserAdmin", "");
        }
      } catch (error) {
        error;
      }
    },
    close_1() {
      this.$emit("close_1");
    },

    async login(event) {
      event.preventDefault();
      console.log("mmmmmm");
      try {
        const q_Admin = query(
          collection(db, "المشرفين"),
          where("phone", "==", this.number)
        );
        const querySnapshot_Admin = await getDocs(q_Admin);
        querySnapshot_Admin.forEach((doc) => {
          const user = doc.data();
          const isPasswordCorrect_Admin = bcrypt.compareSync(
            this.password,
            user.Password
          );

          if (isPasswordCorrect_Admin) {
            localStorage.setItem("userphone", user.phone);
            localStorage.setItem("userid", doc.id);
            localStorage.setItem("username_1", user.Name);
            this.loginError = "";
            this.number = "";
            this.password = "";
            this.$emit("close_1");
            setTimeout(() => {
              this.State();
            }, 100);
          } else {
            this.loginError = "بيانات تسجيل الدخول غير صحيحة !";
          }
        });
        const q = query(
          collection(db, "الطلاب"),
          where("phone", "==", this.number)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          const isPasswordCorrect = bcrypt.compareSync(
            this.password,
            user.password
          );
          if (isPasswordCorrect) {
            this.username = user.name;
            this.useremail = user.number;
            localStorage.setItem("username_1", user.name_1);
            localStorage.setItem("username_2", user.name_2);
            localStorage.setItem("username_3", user.name_3);
            localStorage.setItem("userid", doc.id);
            this.loginError = "";
            this.number = "";
            this.password = "";
            this.$emit("close_1");
            setTimeout(() => {
              this.State();
              this.$emit("GetAdminState");
            }, 100);
          } else {
            this.loginError = "بيانات تسجيل الدخول غير صحيحة !";
          }
        });
      } catch (error) {
        this.loginError = "حدث خطأ أثناء تسجيل الدخول!";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .v-form {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
}
</style>
