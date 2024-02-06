<template>
  <div
    id="Main_Testing"
    class="Main_Testing CC pt-2.5"
    style="margin-top: -20px; padding-bottom: 50px"
  >
    <div class="container relative" style="padding-top: 160px">
      <AddTest
        @Close="CloseAndOpenAddTest"
        @GetData="GetData"
        v-if="ShowAddTest"
      />
      <ShowTest @Close="Close" v-if="ShowTest" :TestIndex="this.TestIndex" />
      <nav
        aria-label="breadcrumb"
        class="nav_1 flex items-center justify-between"
      >
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb>
            <MDBBreadcrumbItem
              ><router-link to="/">{{ Type }}</router-link></MDBBreadcrumbItem
            >
            <MDBBreadcrumbItem>
              <router-link to="/">{{ Lang }}</router-link></MDBBreadcrumbItem
            >
            <MDBBreadcrumbItem>
              <router-link to="/Main_Class">{{ Class }}</router-link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{{ Sub }}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
        <span
          class="bg-[#fff] p-2.5 rounded cursor-pointer flex items-center gap-2.5 hover-0"
          @click="CloseAndOpenAddTest"
          v-if="ShowBtnToUser === 'Admin'"
          style="
            border: 1px solid var(--main-color);
            margin: 10px;
            color: var(--main-color);
            font-weight: bold;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          <span>اضف اختبار</span>
        </span>

        <!-- @click="CloseAndOpenAddSub" -->
      </nav>
      <div
        class="text-right my-2.5 p-2.5 text-[--main-color] font-bold"
        style="
          background: #fff;
          width: fit-content;
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 0 10px #ddd;
        "
      >
        ({{ AllTest.length }}) اختبار
      </div>
      <div class="data flex flex-wrap gap-2.5 justify-between mt-2.5">
        <img
          src="../assets/animation_lolk2w1w_small.gif"
          alt="animation"
          class="m-auto"
          v-if="ShowLoding"
        />
        <div
          v-if="ShowMsg"
          class="text-center"
          style="
            background: #fff;
            width: 100%;
            padding: 10px;
            font-weight: bold;
            color: var(--main-color);
          "
        >
          {{ MsgEmpty }}
        </div>
        <div
          class="box w-48 border-1 p-2.5 rounded relative"
          v-for="(test, index) in AllTest"
          :key="index"
          style="
            background: #ffffffa1;
            box-shadow: 0 0 10px #ddd;
            font-family: system-ui;
          "
        >
          <div class="flex justify-between">
            <div
              class="number"
              style="
                font-size: 21px;
                font-weight: bold;
                font-family: system-ui;
                color: var(--main-color);
              "
            >
              اختبار رقم (<span>{{ index + 1 }}</span
              >)
            </div>
            <div style="display: flex; gap: 10px; align-items: center">
              <!-- <div v-if="test.Type === 'مجاني'">
                <font-awesome-icon :icon="['fas', 'file-circle-check']" />
              </div>
              <div v-if="test.Type === 'مدفوع'">
                <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" />
              </div> -->
              <div
                style="
                  font-size: 14px;
                  font-weight: bold;
                  font-family: system-ui;
                  color: var(--main-color);
                  background: #eee;
                  padding: 10px;
                  border-radius: 5px;
                "
              >
                {{ test.Type }}
              </div>
            </div>
          </div>
          <div
            style="
              font-size: 18px;
              margin: 10px 0;
              font-weight: bold;
              color: #595555;
            "
          >
            ميعاد بدأ الإختبار
          </div>
          <div
            class="flex gap-2.5 items-center"
            style="
              background: #eee;
              padding: 10px;
              border-radius: 5px;
              font-weight: bold;
              font-family: system-ui;
              margin-bottom: 10px;
            "
          >
            <font-awesome-icon :icon="['fas', 'clock']" />
            <p class="Time">{{ test.Time }}</p>
          </div>
          <div
            class="flex gap-2.5 items-center"
            style="
              background: #eee;
              padding: 10px;
              border-radius: 5px;
              font-weight: bold;
              font-family: system-ui;
              margin-bottom: 10px;
            "
          >
            <font-awesome-icon :icon="['fas', 'calendar-days']" />
            <p class="Date">{{ test.Date }}</p>
          </div>
          <div
            class="mt-2.5 hover-0 TestYourSelf"
            style="
              color: var(--main-color);
              font-size: 15px;
              border: 1px solid var(--main-color);
              height: 45px;
              width: 106px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              cursor: pointer;
              border-radius: 5px;
              font-size: 16px;
            "
            @click="CheckTimeAndData(index)"
          >
            أختبر نفسك
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          إغلاق
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <div>
    <v-snackbar v-model="snackbar_1" :timeout_1="timeout_1">
      {{ text_1 }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar_1 = false">
          إغلاق
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <PayTest v-if="PayTest" @ColseAndOpen="ColseAndOpen" />
</template>
<script>
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-vue-ui-kit";
import AddTest from "../components/Add_Test.vue";
import ShowTest from "../components/ShowTest.vue";
import PayTest from "../components/PayTest.vue";
import {
  getDoc,
  getFirestore,
  doc,
  query,
  where,
  collection,
  getDocs,
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
import moment from "moment";
import "moment/locale/ar";
export default {
  name: "Main_Testing",
  emits: ["GetData"],
  data() {
    return {
      ShowBtnToUser: null,
      ShowAddTest: null,
      ShowAddQu: null,
      MsgEmpty: "",
      ShowMsg: null,
      ShowLoding: true,
      ShowPopup: null,
      ShowTest: null,
      AllTest: [],
      AllQu: [],
      TestIndex: "",
      Type: "",
      Lang: "",
      Class: "",
      Sub: "",
      PayState: true,
      PayTest: null,
      UserAdminState: null,
      main_state: null,
      text: "انتظر حتي يحين موعد الإختبار!",
      text_1: "يجب عليك الإشتراك أولاً!",
      snackbar: false,
      snackbar_1: false,
      timeout: 5000,
      timeout_1: 5000,
      // arabicTimes: ["٢:٤٤", "١٢:٠٠"],
      // largestTimeFormatted: null,
    };
  },

  mounted() {
    setTimeout(() => {
      location.href = `${location.href}#Main_Testing`;
    }, 10);
    this.CheckAboutAdminState();
    setInterval(() => {
      this.CheckAboutAdminState();
    }, 1000);
    this.getvalues();
    setTimeout(() => {
      this.GetData();
    }, 1000);
  },

  components: {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    AddTest,
    ShowTest,
    PayTest,
  },
  methods: {
    async CheckAboutAdminState() {
      // ShowBtnToUser
      try {
        const q_Admin = query(
          collection(db, "المشرفين"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot_Admin = await getDocs(q_Admin);
        if (!querySnapshot_Admin.empty) {
          // Check About Powers
          this.ShowBtnToUser = "Admin";
        } else {
          this.ShowBtnToUser = "";
        }
      } catch (error) {
        error;
      }
    },
    async GetAdminState() {
      // if (this.UserAdmin === "Admin") {
      //   const querySnapshot = await getDocs(collection(db, "المشرفين"));
      //   querySnapshot.forEach((doc) => {
      //     // doc.data() is never undefined for query doc snapshots
      //     if (doc.data().Id === localStorage.getItem("userid")) {
      //       if (
      //         doc.data().powers === "الكل" ||
      //         doc.data().powers === "إضافة الإختبارات & كورسات"
      //       ) {
      //         this.UserAdminState = true;
      //       }
      //     }
      //   });
      // }
    },
    Time() {
      for (let i = 0; i < this.AllTest.length; i++) {
        moment(this.AllTest[i].Time, "HH:mm").locale("ar").format("h:mm A");
        // moment(this.AllTest[i].Date).locale("en").format("DD/MM/YYYY");
        let AllTime = document.querySelectorAll(".box .Time");
        AllTime[i].innerHTML = moment(this.AllTest[i].Time, "HH:mm")
          .locale("ar")
          .format("h:mm A");
      }
    },
    ColseAndOpen() {
      this.PayTest = !this.PayTest;
    },
    async CheckTimeAndData(index) {
      this.TestIndex = index;
      const currentDate = new Date();
      const currentTime = moment(currentDate).locale("en").format("HH:mm");
      let currentDate_v2 = moment(currentDate)
        .locale("ar")
        .format("DD/MM/YYYY");
      console.log(
        "TimeInData",
        moment(this.AllTest[index].Time, "HH:mm").unix()
      );
      console.log(
        "DateInData",
        moment(this.AllTest[index].Date, "DD/MM/YYYY").unix()
      );
      console.log(
        "currentDate_v2",
        moment(currentDate_v2, "DD/MM/YYYY").unix()
      );
      if (
        moment(currentDate_v2, "DD/MM/YYYY").unix() >
        moment(this.AllTest[index].Date, "DD/MM/YYYY").unix()
      ) {
        this.main_state = true;
      } else if (
        moment(currentDate_v2, "DD/MM/YYYY").unix() ===
        moment(this.AllTest[index].Date, "DD/MM/YYYY").unix()
      ) {
        if (
          moment(currentTime, "HH:mm").unix() >=
          moment(this.AllTest[index].Time, "HH:mm").unix()
        ) {
          this.main_state = true;
        } else {
          this.main_state = false;
        }
      } else {
        this.main_state = false;
      }

      if (this.main_state) {
        console.log("this.main_state", this.main_state);
        if (this.AllTest[index].Type === "مدفوع") {
          if (this.ShowBtnToUser === "Admin") {
            this.ShowTest = true;
          } else {
            const q = query(
              collection(db, "الطلاب"),
              where("userid", "==", localStorage.getItem("userid"))
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              const user = doc.data();
              for (let i = 0; i < user.pay.length; i++) {
                if (
                  user.pay[i].BillName === "جميع الإختبارات" &&
                  user.pay[i].BillType === this.Type &&
                  user.pay[i].BillClass === this.Class &&
                  user.pay[i].BillLang === this.Lang
                ) {
                  if (user.pay[i].success === "true") {
                    this.ShowTest = true;
                    this.snackbar_1 = false;
                  } else {
                    this.snackbar_1 = true;
                  }
                }
              }
              if (user.pay.length === 0) {
                this.snackbar_1 = true;
                console.log("مدفوع");
              }
            });
          }
        } else {
          this.ShowTest = true;
        }
      } else {
        this.snackbar = true;
      }
      if (this.ShowBtnToUser === "Admin") {
        this.snackbar = false;
        this.snackbar_1 = false;
        this.ShowTest = true;
      }
    },
    getvalues() {
      setTimeout(() => {
        this.Type = localStorage.getItem("updateType");
        this.Lang = localStorage.getItem("updateLang");
        this.Class = localStorage.getItem("updateClass");
        this.Sub = localStorage.getItem("updateSub");
      }, 100);
    },
    Close() {
      this.ShowTest = !this.ShowTest;
    },
    ToggelPopop() {
      this.ShowPopup = !this.ShowPopup;
    },
    async GetData() {
      let sentence = localStorage.getItem("updateType");
      let words = sentence.split(" ");
      let firstWord = words[0];
      const collectionPath = `اختبارات - ${firstWord} - ${localStorage.getItem(
        "updateLang"
      )} - ${localStorage.getItem("updateClass")}`;

      const docRef = doc(db, collectionPath, this.Sub);
      const docSnap = await getDoc(docRef);
      this.ShowLoding = false;
      if (docSnap.exists()) {
        let arr = [];
        arr.push(docSnap.data());
        this.AllTest = arr[0].test;
        this.AllQu = arr[0].test;
        this.ShowMsg = false;
      } else {
        this.MsgEmpty = `لا توجد إختبارات متاحة الآن لمادة ${this.Sub}`;
        this.ShowMsg = true;
      }
      setTimeout(() => {
        this.Time();
      }, 100);
    },
    CloseAndOpenAddQu() {
      this.ShowAddQu = !this.ShowAddQu;
    },
    CloseAndOpenAddTest() {
      this.ShowAddTest = !this.ShowAddTest;
    },
  },
};
</script>
<style lang="scss" scoped>
.Main_Testing {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}

nav {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  &.nav_1 {
    padding: 0;
    box-shadow: 0 0 10px #ddd;
  }
  nav ol.breadcrumb {
    margin: 0 !important;
    li {
      transition: 0.3s;
      font-weight: bold;
      &:hover {
        color: var(--main-color) !important;
      }
    }
    li.breadcrumb-item.active {
      font-weight: bold;
      color: var(--main-color);
    }
  }
}
.border-[--main-color] {
  border: 1px solid var(--main-color) !important;
}

.hover-0 {
  transition: 0.3s;
}
.hover-0:hover {
  background: var(--main-color);
  color: #fff;
}
.hover-0:hover svg,
.hover-0:hover span {
  color: #fff;
}
.table_1 {
  height: 35px;
  border: 1px solid var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-bottom: none;
  &:last-child {
    border: 1px solid var(--main-color);
  }
}
.table_2 {
  border: 1px solid var(--main-color);
  height: 35px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: none;
  border-top: none;

  &:last-child {
    border-top: 1px solid var(--main-color);
  }
}

@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
  // .body .main_box {
  //   width: 100% !important;
  // }
}

@media (max-width: 767px) {
  .TestYourSelf {
    width: 100% !important;
  }
  .data {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
  .body .main_box {
    width: 100% !important;
  }
  section {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
  .nav_1 {
    flex-direction: column;
    align-items: stretch;
    & > div {
      justify-content: center;
    }
  }
}
</style>
