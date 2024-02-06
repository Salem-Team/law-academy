<template>
  <div class="Add_Test">
    <div class="main_Overlay" style="z-index: 101" @click="CloseAddTest"></div>
    <div
      class="container rounded bg-white fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 overflow-auto z-10 h-90"
      style="z-index: 101; padding: 15px 10px"
    >
      <div
        class="head text-left flex justify-between mb-2.5"
        style="
          font-size: 20px;
          align-items: center;
          font-weight: bold;
          color: var(--main-color);
          background: #fafafa;
          padding: 10px;
          border-radius: 5px;
        "
      >
        <span>إضافة إختبار</span>
        <font-awesome-icon :icon="['fas', 'xmark']" @click="CloseAddTest" />
      </div>
      <div class="body flex flex-col gap-2.5">
        <div class="feat p-2.5 rounded">
          <div class="flex flex-wrap justify-between flex-col">
            <div class="form-floating text-end w-100 mt-2.5">
              <input
                type="time"
                class="form-control"
                id="Time"
                v-model="selectedTime"
                style="
                  border: 1px solid var(--main-color);
                  border-radius: 5px;
                  color: var(--main-color);
                  font-weight: bold;
                "
              />
              <label for="Time">وقت الإختبار</label>
            </div>
            <div class="form-floating text-end mt-2.5 w-100">
              <v-container
                style="
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <v-date-picker
                  v-model="selectedDate"
                  show-adjacent-months
                ></v-date-picker>
              </v-container>
            </div>
          </div>
        </div>
        <div
          class="text-right"
          style="
            background: #fafafa;
            padding: 10px;
            border-radius: 5px;
            font-weight: bold;
            color: var(--main-color);
          "
        >
          تاريخ الإختبار :
          {{ formatDate(selectedDate) }}
        </div>
        <div class="feat p-2.5 rounded">
          <div class="type flex flex-wrap justify-between">
            <div
              class="p-2.5 hover-0 cursor-pointer mt-2.5 flex gap-2.5 w-48 items-center type ActiveClass"
              style="
                color: var(--main-color);
                font-weight: bold;
                border: 1px solid var(--main-color);
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
              "
            >
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              <span>مجاني</span>
            </div>
            <div
              class="p-2.5 hover-0 cursor-pointer mt-2.5 flex gap-2.5 w-48 items-center type"
              style="
                color: var(--main-color);
                font-weight: bold;
                border: 1px solid var(--main-color);
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
              "
            >
              <font-awesome-icon :icon="['fas', 'coins']" /> <span>مدفوع</span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 mt-5 text-center">
        <div
          class="bg-[--main-color] text-white p-2.5 rounded cursor-pointer"
          @click="AddData"
          style="font-size: 18px"
        >
          تم
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
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
// import "moment/locale/ar";
export default {
  name: "Add_Test",

  data() {
    return {
      selectedTime: "",
      formattedTime: "",
      selectedDate: null,
      Time: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.ClassActive();
    }, 100);
  },

  methods: {
    GetData() {
      this.$emit("GetData");
    },
    CloseAddTest() {
      this.$emit("close");
    },
    ClassActive() {
      let btn = document.querySelectorAll(".type > .type");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
          btn.forEach((e) => {
            e.classList.remove("ActiveClass");
          });
          btn[i].classList.add("ActiveClass");
        };
      }
    },
    formatDate(date) {
      if (!date) return "";
      return moment(date).locale("en").format("DD/MM/YYYY");
    },

    async AddData() {
      console.log(this.selectedTime);
      // let formattedTime = moment(this.selectedTime, "hh:mm A").format("HH:mm");

      // console.log("formattedTime", formattedTime);

      // قم بطباعة الوقت المنسق
      console.log("this.Time ", this.selectedTime);
      console.log("this.selectedDate ", this.formatDate(this.selectedDate));
      if (this.selectedTime && this.selectedDate) {
        const newData = {
          Time: this.selectedTime,
          Date: this.formatDate(this.selectedDate),
          Type: document.querySelector(".type .type.ActiveClass span")
            .innerHTML,
          AllQu: {},
        };
        let sentence = localStorage.getItem("updateType");
        let words = sentence.split(" ");
        let firstWord = words[0];

        const collectionPath = `اختبارات - ${firstWord} - ${localStorage.getItem(
          "updateLang"
        )} - ${localStorage.getItem("updateClass")}`;
        const docRef = doc(
          db,
          collectionPath,
          localStorage.getItem("updateSub")
        );

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const docData = docSnap.data();
          if (!docData.test) {
            docData.test = [];
          }
          docData.test.push(newData);
          await setDoc(docRef, docData);
        } else {
          await setDoc(docRef, { test: [newData] });
        }

        this.CloseAddTest();
        this.GetData();
      }
    },
  },
};
</script>
<style>
.ActiveClass {
  background: var(--main-color);
  color: #fff !important;
}
.v-picker-title {
  display: none;
}
</style>
