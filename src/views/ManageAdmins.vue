<template>
  <div class="ManageAdmins" style="margin-top: -20px; padding-bottom: 50px">
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
        إدارة المشرفين
      </div>
      <div
        class="p-2.5 cursor-pointer mb-2.5 text-center hover-0"
        @click="ShowAddAdminFunction"
        style="
          font-size: 20px;
          font-weight: bold;
          color: var(--main-color);
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid var(--main-color);
        "
      >
        إضافة مشرف
      </div>
      <div
        class="main_Overlay"
        v-if="ShowAddAdmin"
        @click="ShowAddAdminFunction"
      ></div>
      <div
        class="AddAdmin bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
        v-if="ShowAddAdmin"
      >
        <div class="flex items-center justify-between">
          <div>إضافة مشرف</div>
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            @click="ShowAddAdminFunction"
          />
        </div>
        <div class="body">
          <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent="AddAdmin">
              <v-text-field
                v-model="Name"
                label="الإسم"
                :rules="firstNameRules"
              ></v-text-field>

              <v-text-field
                v-model="phone"
                label="رقم الهاتف"
                :rules="lastNameRules"
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="الباسوورد"
                :rules="passRules"
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="الإيميل"
                :rules="emailRules"
              ></v-text-field>
              <v-select :items="items" label="صلاحيات المشرف"></v-select>
              <v-btn type="submit" block class="mt-2">تم</v-btn>
            </v-form>
          </v-sheet>
        </div>
      </div>
      <div>
        <div
          style="
            font-size: 26px;
            font-weight: bold;
            color: var(--main-color);
            margin: 20px 0;
          "
        >
          المشرفين
        </div>
        <div class="contain flex flex-wrap gap-2.5">
          <img
            src="../assets/animation_lolk2w1w_small.gif"
            alt="animation"
            class="m-auto"
            v-if="ShowLoding"
          />
          <div
            class="box flex justify-between border p-2.5 flex-col"
            v-for="(data, index) in Data"
            :key="data"
          >
            <div class="flex gap-2.5 align-center">
              <div
                class="num flex align-center justify-center"
                style="width: 30px;
    height: 30px;
    border-radius: 5px;
    background: var(--main-color) !important;
    color: #fff;
}"
              >
                {{ index + 1 }}
              </div>
              <div class="name text-[--main-color] font-bold">
                {{ data.Name }}
              </div>
            </div>
            <div
              class="power"
              style="
                background: #eee;
                padding: 5px;
                border-radius: 5px;
                color: var(--main-color);
                font-weight: bold;
                margin-top: 10px;
                width: 100%;
              "
            >
              الصلاحية : {{ data.powers }}
            </div>
            <div
              class="phone"
              style="
                background: #eee;
                padding: 5px;
                border-radius: 5px;
                color: var(--main-color);
                font-weight: bold;
                margin-top: 10px;
                width: 100%;
              "
            >
              {{ data.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  updateDoc,
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
  mounted() {
    this.generateRandomString(7);
    this.GetData();
  },
  data: () => ({
    ShowLoding: true,
    Name: "",
    Data: [],
    ShowAddAdmin: null,
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "يجب كتابة الإسم";
      },
    ],
    phone: "",
    lastNameRules: [
      (value) => {
        if (value.length === 11) return true;

        return "يجب إدخال رقم صالح";
      },
    ],
    password: "",
    passRules: [
      (value) => {
        if (value?.length > 6) return true;

        return "يجب ان لا كلمة المرور عن 6 احرف";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "البريد الإلكتروني غير صحيح";
      },
    ],
    items: ["الكل", "إضافة الإختبارات & كورسات", "إضافة صور"],
  }),
  methods: {
    async GetData() {
      this.Data = [];
      const querySnapshot = await getDocs(collection(db, "المشرفين"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.Data.push(doc.data());
      });
      this.ShowLoding = false;
    },
    ShowAddAdminFunction() {
      this.ShowAddAdmin = !this.ShowAddAdmin;
    },
    async AddAdmin() {
      // Add a new document with a generated id.
      if (
        this.Name.length > 3 &&
        this.phone.length === 11 &&
        this.password.length > 6
      ) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(this.password, salt);
        let pass = hashedPassword;
        const docRef = await addDoc(collection(db, "المشرفين"), {
          Name: this.Name,
          phone: this.phone,
          Password: pass,
          powers:
            document.querySelector(".v-select .v-select__selection-text")
              .innerText || "الكل",
          Id: null,
        });
        await updateDoc(docRef, { Id: docRef.id });
        this.ShowAddAdmin = false;
        this.GetData();
      }
    },
    generateRandomString(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.password = result;
      return result;
    },

    // استخدام الدالة لإنشاء سلسلة عشوائية بطول 6
  },
};
</script>
<style lang="scss" scoped>
.ManageAdmins {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
.contain > div {
  width: 32%;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  background: #ffffff82;
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .contain > div {
    width: 100% !important;
  }
}
</style>
