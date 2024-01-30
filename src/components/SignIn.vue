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
          <v-btn
            :disabled="loading"
            :loading="loading"
            type="submit"
            block
            class="mt-hover-0"
            style="
              color: var(--main-color);
              font-weight: bold;
              font-size: 20px;
              padding: 10px;
              background: #fafafa;
              width: 100%;
              text-align: center;
              font-family: system-ui;
              border-radius: 5px;
              border: 1px solid var(--main-color);
            "
            size="x-large"
            variant="flat"
            @click="SignIn"
          >
            تسجيل الدخول
          </v-btn>
        </v-form>
      </v-sheet>
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
  getDoc,
  doc,
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
      loading: false,
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
      let UserState;
      if (MainState) {
        let docRef;
        if (!querySnapshot.empty) {
          docRef = doc(db, "المشرفين", querySnapshot.docs[0].id);
          UserState = "Admin";
        } else if (!querySnapshot_1.empty) {
          docRef = doc(db, "الطلاب", querySnapshot_1.docs[0].id);
          UserState = "Student";
        }
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // hashing password
          const hashedPassword = docSnap.data().password;

          bcrypt.compare(
            this.password.toString(),
            hashedPassword,
            (err, result) => {
              if (err) {
                console.error(err);
                return;
              }
              if (result) {
                console.log("تم التحقق بنجاح");
                this.ErrorMsg = "";
                MainState = true;
              } else {
                console.log("فشل التحقق");
                this.ErrorMsg = "كلمة المرور خاطئة";
                MainState = false;
              }
            }
          );
        } else {
          console.log("No such document!");
        }
      }
      setTimeout(() => {
        if (MainState) {
          this.loading = !this.loading;
          if (UserState === "Admin") {
            localStorage.setItem("userid", querySnapshot.docs[0].id);
          } else if (UserState === "Student") {
            localStorage.setItem("userid", querySnapshot_1.docs[0].id);
          }
          setTimeout(() => {
            this.$emit("GetAdminState");
            this.$emit("CheckAboutUserState");
            this.$emit("close_1");
          }, 500);
        }
      }, 500);
    },
    close_1() {
      this.$emit("close_1");
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
