<template>
  <div class="container TheStudents CC">
    <nav
      aria-label="breadcrumb"
      class="nav_1 flex items-center justify-between"
    >
      <nav aria-label="breadcrumb">
        <MDBBreadcrumb>
          <MDBBreadcrumbItem
            ><router-link to="/AdminPage"
              >الإشراف</router-link
            ></MDBBreadcrumbItem
          >

          <MDBBreadcrumbItem active> / الطلاب</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </nav>
      <div
        @click="CloseAndOpenAddSub"
        class="flex items-center gap-2.5 p-2.5 bg-[#fff] rounded cursor-pointer hover-0"
        v-if="UserAdmin === 'Admin'"
        style="
          border: 1px solid var(--main-color);
          margin: 10px;
          color: var(--main-color);
          font-weight: bold;
          font-size: 14px;
        "
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
        <span>أضف مادة</span>
      </div>
    </nav>
    <div class="contain flex">
      <div class="right w-2/5">
        <v-card class="mx-auto" width="100%">
          <v-card-title
            style="padding: 10px"
            class="text-h6 font-weight-regular justify-space-between mb-2.5"
          >
            <v-avatar v-text="step"></v-avatar>
            <span
              style="font-size: 20px; font-weight: bold; font-family: system-ui"
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
                  @click="select_1"
                  >كلية الشريعة و القانون</span
                >
                <span
                  class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border"
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
                  >عربي</span
                >
                <span
                  @click="select_2"
                  class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border"
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
      </div>
      <div class="left w-3/5">
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>{{ Type }} / </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>{{ Lang }} / </MDBBreadcrumbItem>

            <MDBBreadcrumbItem active> {{ Class }}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
        <div>عدد الطلاب : {{ Students.length }}</div>
        <div>عدد البنات : {{ Female.length }}</div>
        <div>عدد الأولاد : {{ Male.length }}</div>
        <input
          v-model="searchInput"
          @input="searchNames"
          placeholder="ابحث في الأسماء"
          class="border w-100 p-2.5"
        />

        <div class="content flex">
          <img
            src="../assets/animation_loia37xm_small.gif"
            alt=""
            v-if="showDownloadIcon"
            class="m-auto"
          />
          <div
            class="box border p-2.5"
            v-for="(Student, index) in Students"
            :key="Student"
          >
            <div class="num">{{ index + 1 }}</div>
            <div class="flex">
              <div class="name">{{ Student.Name }}</div>
              <div class="flex flex-col justify-between items-center">
                <div class="AllResults">{{ Student.AllResults || 0 }}%</div>
                <div>متوسط النتائج</div>
              </div>
            </div>
            <div class="flex justify-between">
              <div
                class="button border p-2.5 cursor-pointer"
                @click="GetBIll(index)"
              >
                الفواتير
              </div>
              <div
                class="button border p-2.5 cursor-pointer"
                @click="GetResult(index)"
              >
                النتائج
              </div>
            </div>
          </div>
          <div class="main_Overlay" v-if="BIllShow" style="z-index: 101"></div>
          <div
            class="main_Overlay"
            v-if="ResultShow"
            style="z-index: 101"
          ></div>
          <div
            class="BILL bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
            style="z-index: 101"
            v-if="BIllShow"
          >
            <div>
              <font-awesome-icon
                :icon="['fas', 'xmark']"
                @click="BIllShowFunction"
              />
            </div>
            <div class="BIll border p-2.5" v-for="bill in BIll" :key="bill">
              <div>الدراسة : {{ bill.BillType }}</div>
              <div>القسم : {{ bill.BillLang }}</div>
              <div>الفرقة : {{ bill.BillClass }}</div>
              <div>الصنف : {{ bill.BillItem }}</div>
              <div>السعر : {{ +bill.BillPrice / 100 }}</div>
              <div>المادة : {{ bill.BillName }}</div>
              <div>كود الإستلام : {{ bill.order_id }}</div>
              <div>
                تاريخ الدفع :
                {{
                  new Date(bill.Time.toMillis()).toLocaleString(["ar"], {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}
              </div>
            </div>
          </div>
          <div
            class="BILL bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
            v-if="ResultShow"
            style="z-index: 101"
          >
            <div>
              <font-awesome-icon
                :icon="['fas', 'xmark']"
                @click="ResultShowFunction"
              />
            </div>
            <div class="BIll border p-2.5" v-for="bill in Result" :key="bill">
              <div>الدراسة : {{ bill.Type }}</div>
              <div>القسم : {{ bill.Lang }}</div>
              <div>الفرقة : {{ bill.Class }}</div>
              <div>المادة : {{ bill.Sub }}</div>

              <div>اختبار رقم ({{ bill.TestNumber }})</div>
              <div>التقدير : {{ bill.appreciation }}</div>
              <div>النسبة المؤية : {{ bill.percent }}%</div>
              <div>المجموع : {{ bill.result }} / {{ bill.Allresult }}</div>
              <div>
                تاريخ اختبار الطالب :
                {{
                  new Date(bill.Time.toMillis()).toLocaleString(["ar"], {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AlarmClock />
</template>
<script>
import { collection, getDocs, getFirestore } from "firebase/firestore";

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
import AlarmClock from "../components/AlarmClock.vue";
export default {
  name: "TheStudents",
  components: {
    AlarmClock,
  },
  mounted() {
    setTimeout(() => {
      this.select();
    }, 10);
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "الدراسة";
        case 2:
          return "القسم";
        default:
          return "الفرقة";
      }
    },
  },
  data: () => ({
    Type: "",
    Lang: "",
    Class: "",
    classes: [
      "الفرقة الأولي",
      "الفرقة الثانية",
      "الفرقة الثالثة",
      "الفرقة الرابعة",
    ],
    step: 1,
    Students: [],
    showDownloadIcon: false,
    BIll: [],
    Result: [],
    BIllShow: null,
    ResultShow: null,
    Male: [],
    Female: [],
    names: [],
    searchInput: "",
  }),
  methods: {
    select_1() {
      this.step++;
      setTimeout(() => {
        if (this.Type === "معهد أعوان القضاء") {
          document.querySelector(".selecte_2 > span:last-child").style.display =
            "none";
        } else {
          document.querySelector(".selecte_2 > span:last-child").style.display =
            "block";
        }
        document.querySelectorAll(".selecte_2 span").forEach((e) => {
          e.onclick = () => {
            this.Lang = e.innerHTML;
          };
        });
      }, 1);
    },
    select_2() {
      this.step++;
      setTimeout(() => {
        if (this.Type === "معهد أعوان القضاء") {
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

            setTimeout(() => {
              this.GetData();
            }, 10);
          };
        });
      }, 2);
    },
    select() {
      document.querySelectorAll(".selecte_1 span").forEach((e) => {
        e.onclick = () => {
          this.Type = e.innerHTML;
        };
      });
    },
    searchNames() {
      if (this.searchInput.trim() !== "") {
        const searchTerm = this.searchInput.toLowerCase();
        const results = this.names.filter((name) =>
          name.toLowerCase().includes(searchTerm)
        );
        let names = document.querySelectorAll(".box .name");
        names.forEach((e1) => {
          results.forEach((e2) => {
            names.forEach((e) => {
              e.parentElement.parentElement.classList.add("hidden");
            });
            setTimeout(() => {
              if (e1.innerHTML === e2) {
                e1.parentElement.parentElement.classList.remove("hidden");
              }
            }, 10);
          });
        });
      }
    },
    ResultShowFunction() {
      this.ResultShow = !this.ResultShow;
    },
    BIllShowFunction() {
      this.BIllShow = !this.BIllShow;
    },
    async GetResult(index) {
      this.ResultShow = true;
      this.Result = [];
      let theResult;
      const querySnapshot = await getDocs(collection(db, "الطلاب"));
      querySnapshot.forEach((doc) => {
        let sentence = doc.data().TypeOfClass;
        let words = sentence.split(" ");
        let firstWord = words[0];

        if (
          firstWord === this.Type &&
          doc.data().Lang === this.Lang &&
          doc.data().Class === this.Class
        ) {
          this.Result.push(doc.data().resultes);
          this.Result.push(doc.data().resultes);
          this.Students.sort((a, b) => b.AllResults - a.AllResults);
          theResult = this.Result[index];
        }
      });
      this.Result = theResult;
      // this.Result.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
    },
    async GetBIll(index) {
      this.BIllShow = true;
      this.BIll = [];
      let thebill;
      const querySnapshot = await getDocs(collection(db, "الطلاب"));
      querySnapshot.forEach((doc) => {
        let sentence = doc.data().TypeOfClass;
        let words = sentence.split(" ");
        let firstWord = words[0];
        if (
          firstWord === this.Type &&
          doc.data().Lang === this.Lang &&
          doc.data().Class === this.Class
        ) {
          this.BIll.push(doc.data().pay);
          thebill = this.BIll[index];
        }
      });
      this.BIll = thebill;
      this.BIll.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
    },
    async GetData() {
      this.showDownloadIcon = false;
      this.Students = [];
      this.Male = [];
      this.Female = [];
      const querySnapshot = await getDocs(collection(db, "الطلاب"));
      querySnapshot.forEach((doc) => {
        let sentence = doc.data().TypeOfClass;
        if (
          sentence === this.Type &&
          doc.data().Lang === this.Lang &&
          doc.data().Class === this.Class
        ) {
          let data = {
            Name: `${doc.data().name_1} ${doc.data().name_2} ${
              doc.data().name_3
            }`,
            AllResults: doc.data().AllResults,
            type: doc.data().type,
          };
          this.Students.push(data);
          this.names.push(data.Name);
          this.Students.sort((a, b) => b.AllResults - a.AllResults);
          if (data.type === "بنين") {
            this.Male.push(data.type);
          } else {
            this.Female.push(data.type);
          }
        }
      });
    },
    // HandelClick() {
    //   let TypeDevs = document.querySelectorAll(".box .Type");
    //   let LangDevs = document.querySelectorAll(".Lang ");
    //   let classDevs = document.querySelectorAll(".Class");

    //   for (let i = 0; i < TypeDevs.length; i++) {
    //     TypeDevs[i].onclick = () => {
    //       // this.Type = TypeDevs[i].innerHTML;
    //       TypeDevs.forEach((e) => {
    //         e.classList.remove("active");
    //       });
    //       TypeDevs[i].classList.add("active");
    //       LangDevs.forEach((e) => {
    //         e.classList.remove("hidden");
    //         e.onclick = () => {
    //           LangDevs.forEach((e) => {
    //             e.classList.remove("active");
    //           });
    //           e.classList.add("active");

    //           classDevs.forEach((ele) => {
    //             ele.onclick = () => {
    //               this.showDownloadIcon = true;
    //               classDevs.forEach((e) => {
    //                 e.classList.remove("active");
    //               });

    //               ele.classList.add("active");
    //               let sentence =
    //                 document.querySelector(".box .Type.active").innerHTML;
    //               let words = sentence.split(" ");
    //               let firstWord = words[1];
    //               this.Type = firstWord;
    //               this.Lang =
    //                 document.querySelector(".box .Lang.active").innerHTML;
    //               this.Class =
    //                 document.querySelector(".box .Class.active").innerHTML;
    //               setTimeout(() => {
    //                 this.GetData();
    //               }, 10);
    //             };
    //             ele.classList.remove("hidden");
    //           });
    //         };
    //       });
    //     };
    //   }
    // },
  },
};
</script>
<style lang="scss" scoped>
.v-window-item span,
.v-window-item a {
  width: 90%;
  text-align: center;
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
.active {
  background: var(--main-color);
  color: #fff;
}
</style>
