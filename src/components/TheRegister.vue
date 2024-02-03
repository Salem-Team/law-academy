<template>
  <div
    class="main_Overlay"
    @click="close_2"
    style="z-index: 101; pointer-events: none"
  ></div>
  <div
    class="container m-0 bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
    style="z-index: 101"
  >
    <section>
      <div
        class="header flex justify-between items-center mb-2.5"
        style="
          font-size: 30px;
          font-weight: bold;
          color: var(--main-color);
          font-family: system-ui;
        "
      >
        <div>حساب جديد</div>
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          @click="close_2"
          class="text-2xl bg-[--main-color] p-1 text-white rounded"
          style="width: 25px"
        />
      </div>
      <v-sheet class="mx-auto">
        <v-form fast-fail @submit.prevent class="flex flex-wrap gap-2.5">
          <v-text-field
            v-model="Name1"
            label="الإسم الأول"
            :rules="firstNameRules1"
            class="w-48"
          ></v-text-field>
          <v-text-field
            v-model="Name2"
            label="الإسم الثاني"
            :rules="firstNameRules2"
            class="w-48"
          ></v-text-field>
          <v-text-field
            v-model="Name3"
            label="الإسم الثالث"
            :rules="firstNameRules3"
            class="w-48"
          ></v-text-field>

          <v-text-field
            v-model="phone"
            label="رقم الهاتف"
            :rules="phoneRules"
            class="w-48"
          ></v-text-field>

          <v-card class="mx-auto" width="100%">
            <v-card-title
              style="padding: 10px"
              class="flex text-h6 font-weight-regular justify-space-between mb-2.5 gap-2.5"
            >
              <v-avatar v-text="step"></v-avatar>
              <span
                style="
                  font-size: 20px;
                  font-weight: bold;
                  font-family: system-ui;
                  margin-right: 10px;
                "
                >{{ currentTitle }}</span
              >
            </v-card-title>

            <v-window v-model="step">
              <v-window-item :value="1">
                <div
                  class="selecte_1 flex justify-center gap-2.5 flex-wrap selecte"
                >
                  <span
                    class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border"
                    style="width: 48%"
                    @click="select_1"
                    >كلية الشريعة و القانون</span
                  >
                  <span
                    class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border"
                    style="width: 48%"
                    @click="select_1"
                    >معهد أعوان القضاء</span
                  >
                </div>
              </v-window-item>

              <v-window-item :value="2">
                <div
                  class="selecte_2 flex justify-center gap-2.5 flex-wrap selecte"
                >
                  <span
                    @click="select_2"
                    class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border"
                    style="width: 48%"
                    >عربي</span
                  >
                  <span
                    @click="select_2"
                    class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border"
                    style="width: 48%"
                    >English</span
                  >
                </div>
              </v-window-item>

              <v-window-item :value="3">
                <div class="selecte_3 flex justify-center gap-2.5 flex-wrap">
                  <a
                    v-for="Class in classes"
                    :key="Class"
                    class="border-gray-300 border rounded flex justify-center items-center w-23 p-10 cursor-pointer hover_color_border"
                    @click="AddBorder($event)"
                  >
                    {{ Class }}
                  </a>
                </div>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                v-if="step > 1"
                variant="text"
                @click="step--"
                style="
                  color: var(--main-color);
                  border: 1px solid var(--main-color);
                "
              >
                السابق
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
          <div
            style="
              width: 100%;
              background: #f6f6f6;
              padding: 10px;
              border-radius: 5px;
              font-family: system-ui;
              color: var(--main-color);
            "
          >
            لقد أخترت : {{ type }} - {{ lang }} - {{ Class }}
          </div>
          <v-select
            class="w-100"
            label="حدد مكان كليتك / معهدك"
            :items="items"
            v-model="selectedPlace"
          ></v-select>
          <v-text-field
            v-model="email"
            label="الإيميل"
            :rules="emailRules"
            class="w-48 email"
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
          <div
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
          </div>
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
            @click="Register"
          >
            إنشاء حساب
          </v-btn>
        </v-form>
      </v-sheet>
    </section>
  </div>

  <div class="main_Overlay" style="z-index: 1000" v-if="ShowHello"></div>
  <div
    class="popup bg-white fixed rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
    style="width: 80%; z-index: 1000"
    v-if="ShowHello"
  >
    <img
      src="../assets/Animation - 1706443135125 (1).gif"
      style="margin: auto; position: relative"
      alt=""
      class="Check_Anmation"
    />
    <div
      class="Check_Anmation_2"
      style="
        color: var(--main-color);
        font-weight: bold;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding: 10px;
        opacity: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
      "
    >
      <div
        style="
          background: #fafafa;
          width: 100%;
          padding: 10px;
          text-align: center;
          border-radius: 5px;
        "
      >
        تم إنشاء حسابك بنجاح
      </div>
      <div
        style="
          background: #fafafa;
          width: 100%;
          padding: 10px;
          text-align: center;
          border-radius: 5px;
        "
      >
        أهلا بك في منصة الإمام القانونية
      </div>
    </div>
    <div
      @click="CloseTheRegister"
      class="Check_Anmation_2"
      style="
        background: var(--main-color);
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        opacity: 0;
      "
    >
      تم
    </div>
  </div>

  <div id="user"></div>
</template>
<script>
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  where,
  query,
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
  name: "TheRegister",
  selectedValue: "",
  emits: ["close_2"],
  mounted() {
    this.select();
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  data() {
    return {
      showPassword: null,
      ShowHello: null,
      loading: false,
      selectedPlace: "",
      user: {
        Name_1: "",
        Name_2: "",
        Name_3: "",
        email: "",
        phone: "",
        parents_phone: "",
        password_1: "",
        password_2: "",
      },
      ErrorMsg: "",
      errorEmailMsg: "",
      errorEmailMsg_stat: null,
      items: [
        "القاهرة - بنين",
        "طنطا - بنين",
        " تفهنا الأشراف - بنين",
        "  دمنهور - بنين",
        "  أسيوط - بنين",

        "  القاهرة - بنات",
        "  الإسكندرية - بنات",
        "  دمنهور - بنات",
        "  الفيوم - بنات",
        "  المنيا - بنات",
        "  المنصورة - بنات",
        "  أسيوط - بنات",
        "  سوهاج - بنات",
        "  طيبة - بنات",
      ],
      closeHelloUser: null,
      PhoneState: null,
      showPassword_1: false,
      showPassword_2: false,
      type: "",
      lang: "",
      Class: "",

      value: false,
      Name1: "Mo",
      Name2: "Ahmed",
      Name3: "Salem",
      email: "Mo@mo.com",
      Data: [],
      ShowAddAdmin: null,
      firstNameRules1: [
        (value) => {
          if (value?.length >= 2) return true;

          return "يجب كتابة الإسم بصورة صحيحة";
        },
      ],
      firstNameRules2: [
        (value) => {
          if (value?.length > 1) return true;

          return "يجب كتابة الإسم بصورة صحيحة";
        },
      ],
      firstNameRules3: [
        (value) => {
          if (value?.length > 1) return true;

          return "يجب كتابة الإسم بصورة صحيحة";
        },
      ],
      phone: "01012344566",
      phoneRules: [
        async (value) => {
          const q_1 = query(
            collection(db, "الطلاب"),
            where("phone", "==", this.phone)
          );
          const querySnapshot_1 = await getDocs(q_1);
          if (!isNaN(value) && value.length >= 11) {
            if (!querySnapshot_1.empty) {
              return "رقم الهاتف  مسجل بالفعل علي الموقع";
            } else {
              return true;
            }
          }

          return "يجب إدخال رقم صالح";
        },
      ],
      password: "1234",
      passRules: [
        (value) => {
          if (value?.length >= 4) return true;

          return "يجب ان لا تقل كلمة المرور عن 4 احرف";
        },
      ],
      emailRules: [
        async (value) => {
          const q_1 = query(
            collection(db, "الطلاب"),
            where("email", "==", this.email)
          );
          const querySnapshot_1 = await getDocs(q_1);
          if (/.+@.+\..+/.test(value)) {
            if (!querySnapshot_1.empty) {
              return "الإيميل  مسجل بالفعل علي الموقع";
            } else {
              return true;
            }
          }

          return "البريد الإلكتروني غير صحيح";
        },
      ],
      classes: [
        "الفرقة الأولي",
        "الفرقة الثانية",
        "الفرقة الثالثة",
        "الفرقة الرابعة",
      ],
      step: 1,
      Selector: null,
    };
  },
  computed: {
    UserAdmin() {
      return this.$store.state.UserAdmin;
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "أختر دراستك";
        case 2:
          return "أختر قسمك";
        default:
          return "أختر فرقتك";
      }
    },
  },
  methods: {
    CloseTheRegister() {
      this.ShowHello = false;
      this.$emit("close_2");
    },
    AddBorder(e) {
      e.target.style.cssText = "border-color: var(--main-color) !important;";
      console.log(e.target);
    },
    // div.event.target.style.border = "1px solid var(--main-color)";
    async Register() {
      let MainState;
      // Test The Name
      if (
        this.Name1.length >= 2 &&
        this.Name2.length >= 2 &&
        this.Name3.length >= 2
      ) {
        this.ErrorMsg = "";
        MainState = true;
      } else {
        this.ErrorMsg = "يرجي كتابة الإسم بصورة صحيحة";
        MainState = false;
      }
      // Test The Phone
      if (MainState) {
        if (!isNaN(this.phone) && this.phone.length >= 11) {
          this.ErrorMsg = "";
          MainState = true;

          const q = query(
            collection(db, "الطلاب"),
            where("phone", "==", this.phone)
          );
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            this.ErrorMsg = "رقم الهاتف  مسجل بالفعل علي الموقع";
            MainState = false;
          } else {
            this.ErrorMsg = "";
            MainState = true;
          }
        } else {
          MainState = false;
          this.ErrorMsg = "يرجي كتابة رقم صحيح";
        }
      }
      // Test The class
      console.log(this.lang);
      if (MainState) {
        if (this.Class === "") {
          this.ErrorMsg = "يجب إختيار فرقتك الدراسية ";
          MainState = false;
        } else {
          MainState = true;
          this.ErrorMsg = "";
        }
      }
      // Test The Location
      console.log(this.selectedPlace);
      if (MainState) {
        if (this.selectedPlace !== "") {
          MainState = true;
          this.ErrorMsg = "";
        } else {
          this.ErrorMsg = "حدد مكان كليتك / معهدك";
          MainState = false;
        }
      }
      // Test The Email
      if (MainState) {
        if (/.+@.+\..+/.test(this.email)) {
          this.ErrorMsg = "";
          MainState = true;

          const q_1 = query(
            collection(db, "الطلاب"),
            where("email", "==", this.email)
          );
          const querySnapshot_1 = await getDocs(q_1);
          if (!querySnapshot_1.empty) {
            this.ErrorMsg = " الإيميل  مسجل بالفعل علي الموقع";
            MainState = false;
          } else {
            this.ErrorMsg = "";
            MainState = true;
          }
        } else {
          MainState = false;
          this.ErrorMsg = "يرجي كتابة إيميل صحيح";
        }
      }
      // Test The Password
      if (MainState) {
        if (this.password.length >= 4) {
          MainState = true;
          this.ErrorMsg = "";
        } else {
          MainState = false;
          this.ErrorMsg = "يجب ان لا تقل كلمة المرور عن 4 احرف";
        }
      }

      // Main Test
      if (MainState) {
        this.loading = !this.loading;

        // Edit College Place , Type And Gender

        const names = this.selectedPlace.split(" - ");
        const firstName = names[0];
        const lastName = names[1];
        const names_1 = this.type.split(" ");
        const firstName_1 = names_1[0];

        // Make Hashing

        let saltRounds = 10;
        const hashPassword = (password, saltRounds) => {
          return new Promise((resolve, reject) => {
            bcrypt.hash(password.toString(), saltRounds, (err, hash) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                console.log("كلمة المرور المشفرة:", hash);
                resolve(hash);
              }
            });
          });
        };
        const passwordWithHash = await hashPassword(this.password, saltRounds);

        // Add data

        const docRef = await addDoc(collection(db, "الطلاب"), {
          name_1: this.Name1,
          name_2: this.Name2,
          name_3: this.Name3,
          phone: this.phone,
          email: this.email,
          password: passwordWithHash,
          Type: firstName_1,
          Lang: this.lang,
          Class: this.Class,
          resultes: [],
          pay: [],
          College_place: firstName,
          Gender: lastName,
          AllResults: 0,
          userid: null,
        });
        await updateDoc(docRef, { userid: docRef.id });
        localStorage.setItem("userid", docRef.id);
        this.ShowHello = true;
      }
    },

    select_1() {
      this.step++;
      setTimeout(() => {
        console.log(this.type);
        if (this.type === "معهد أعوان القضاء") {
          document.querySelector(".selecte_2 > span:last-child").style.display =
            "none";
        } else {
          document.querySelector(".selecte_2 > span:last-child").style.display =
            "block";
        }
        document.querySelectorAll(".selecte_2 span").forEach((e) => {
          e.onclick = () => {
            this.lang = e.innerHTML;
          };
        });
      }, 1);
    },
    select_2() {
      this.step++;
      setTimeout(() => {
        if (this.type === "معهد أعوان القضاء") {
          document.querySelector(
            ".selecte_3  > a:nth-child(3) "
          ).style.display = "none";
          document.querySelector(
            ".selecte_3  > a:nth-child(4) "
          ).style.display = "none";
        } else {
          document.querySelector(
            ".selecte_3  > a:nth-child(3) "
          ).style.display = "block";
          document.querySelector(
            ".selecte_3  > a:nth-child(4) "
          ).style.display = "block";
        }
        document.querySelectorAll(".selecte_3 a").forEach((e) => {
          e.onclick = () => {
            this.Class = e.innerHTML;
            this.Selector = true;
            console.log(this.Class);
            // localStorage.setItem("updateType", this.type);
            // localStorage.setItem("updateLang", this.lang);
            // localStorage.setItem("updateClass", this.class);
          };
        });
      }, 2);
    },
    select() {
      document.querySelectorAll(".selecte_1 span").forEach((e) => {
        e.onclick = () => {
          this.type = e.innerHTML;
        };
      });
    },
    close_2() {
      this.$emit("close_2");
    },
    close() {
      this.closeHelloUser = !this.closeHelloUser;
    },
    handleSelectChange(event) {
      this.selectedValue = event.target.value;
    },
  },
};
</script>

<style lang="scss">
.v-avatar.v-avatar--density-default {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: var(--main-color) !important;
  color: #fff;
}
.v-card-title {
  display: flex;
  justify-content: flex-start !important;
  align-items: center;
  gap: 10px;
}
.selecte {
  & > span {
    color: var(--main-color);
    font-weight: bold;
    font-size: 16px;
    width: 46% !important;
    font-family: system-ui;
    text-align: center;
  }
}
.selecte_3 > a {
  color: var(--main-color) !important;
  font-weight: bold;
  font-size: 16px;
  width: 46% !important;
  font-family: system-ui;
  text-align: center;
}
.container {
  // background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
input {
  &.form-control {
    border-bottom: 1px solid #333 !important;
    border-radius: 0;
  }
}
.container_1 {
  section {
    display: flex;
    .imges {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 100%;
        z-index: -1;
      }
    }
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 100%;
        z-index: -1;
      }
    }
    form {
      font-family: Century Gothic;
      width: 50%;
      h2 {
        margin: 10px auto;
        color: var(--Black-color);

        strong {
          color: var(--main-color);
        }
      }
      p {
        color: var(--Black-color);
      }
      .small_container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        & > div {
          position: relative;
          width: 48%;
          &.long {
            width: 100%;
          }
          label {
            svg {
              color: var(--main-color);
            }
          }
          input {
            &.form-control {
              border-bottom: 1px solid #333 !important;
              border-radius: 0;
            }
          }
        }
      }
      .Register_Login {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px auto;
        button {
          min-width: 150px;
          background: var(--main-color);
          border: none;
          min-height: 37px;
          font-weight: 700;
        }
        .social_media {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          p {
            margin: 0;
            color: var(--Black-color);
          }
          .icons_social {
            display: flex;
            gap: 10px;
            align-items: center;
            svg {
              cursor: pointer;
              border-radius: 4px;
              padding: 5px;
              width: 30px;
              height: 30px;
              color: #fff;
              &:first-child {
                background-color: #3b5998;
              }
              &:last-child {
                background-color: rgb(234, 67, 53);
              }
            }
          }
        }
      }
      .TheLogin {
        font-size: 14px;
        margin: 15px auto 0;
      }
    }
  }
}
.Error_Email_Msg {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 12;
  background: var(--main-color);
  min-width: 300px;
  transform: translate(-50%, -50%);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #fff;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  font-size: 20px;
  div {
    font-weight: bold;
  }
  button {
    border: none;
    border-radius: 6px;
    background: #fff;
    font-size: 18px;
    cursor: pointer;
    padding: 6px 12px;
  }
}
.v-field__append-inner {
  display: none !important;
}
.Check_Anmation {
  animation: Check 1s 1s 1 forwards;
}
.Check_Anmation_2 {
  animation: Check_2 1s 1.5s 1 forwards;
}
@keyframes Check {
  0% {
    top: 0px;
  }
  100% {
    top: -160px;
    opacity: 0;
  }
}
@keyframes Check_2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .selecte_1,
  .selecte_2,
  .selecte_3 {
    flex-direction: column;
    span {
      width: 95% !important;
      margin: auto;
    }
  }
  .selecte_3 > a {
    width: 95% !important;
    margin: auto;
  }
  .v-input--horizontal.email {
    width: 100%;
  }
}
</style>
