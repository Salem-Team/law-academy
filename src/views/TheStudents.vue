<template>
  <div class="TheStudents" style="margin-top: -20px; padding-bottom: 50px">
    <div class="container relative" style="padding-top: 160px">
      <div
        v-if="Info"
        class="main_Overlay"
        style="z-index: 101"
        @click="Info = !Info"
      ></div>
      <div
        v-if="Info"
        class="Info bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
        style="width: 90%; z-index: 101"
      >
        <div class="flex justify-between align-center p-2.5">
          <div style="font-size: 25px; color: var(--main-color)">الشارات</div>
          <font-awesome-icon
            @click="Info = !Info"
            :icon="['fas', 'circle-xmark']"
            style="font-size: 25px; color: red"
          />
        </div>
        <div>
          <table border="1" width="100%">
            <thead>
              <tr>
                <th>الشارة</th>
                <th>الترتيب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="">
                  <div class="flex align-center p-2.5 gap-2.5">
                    <font-awesome-icon :icon="['fas', 'trophy']" color="gold" />
                    <div>الكأس الذهبي</div>
                  </div>
                </td>
                <td>الأول</td>
              </tr>
              <tr>
                <td>
                  <div class="flex align-center p-2.5 gap-2.5">
                    <font-awesome-icon
                      :icon="['fas', 'trophy']"
                      color="silver"
                    />
                    <div>الكأس الفضي</div>
                  </div>
                </td>
                <td>الثاني</td>
              </tr>
              <tr>
                <td>
                  <div class="flex align-center p-2.5 gap-2.5">
                    <font-awesome-icon
                      :icon="['fas', 'trophy']"
                      color="#c77b30"
                    />
                    <div>الكأس البرونزي</div>
                  </div>
                </td>
                <td>الثالث</td>
              </tr>
              <tr>
                <td>
                  <div class="flex align-center p-2.5 gap-2.5">
                    <font-awesome-icon :icon="['fas', 'medal']" color="gold" />
                    <div>الميدالية الذهبية</div>
                  </div>
                </td>
                <td>العشرة الأوائل</td>
              </tr>
              <tr>
                <td>
                  <div class="flex align-center p-2.5 gap-2.5">
                    <font-awesome-icon
                      :icon="['fas', 'certificate']"
                      color="gold"
                    />
                    <div>الشارة الذهبية</div>
                  </div>
                </td>
                <td>الخمسون الأوائل</td>
              </tr>
              <tr>
                <td>
                  <div class="flex align-center p-2.5 gap-2.5">
                    <font-awesome-icon
                      :icon="['fas', 'certificate']"
                      color="silver"
                    />
                    <div>الشارة الفضية</div>
                  </div>
                </td>
                <td>المائة الأوائل</td>
              </tr>
            </tbody>
          </table>
          <div
            class="text"
            style="
              padding: 10px;
              background: #fafafa;
              margin: 10px auto;
              border-radius: 5px;
              line-height: 2;
              color: var(--main-color);
            "
          >
            في حالة حصولك علي شارة من هذه الشارات حتي آخر يوم في الشهر ستتواصل
            معك أكاديمية الإمام لإستلام جائزتك و أرسل صورتك ليتم تكريمك ,
            بالتوفيق للجميع ❤️
          </div>
        </div>
      </div>
      <div
        class="main_Overlay"
        v-if="Sliders"
        @click="Sliders = !Sliders"
      ></div>
      <div
        v-if="Sliders"
        class="Sliders bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        style="width: 90%; z-index: 100"
      >
        <div
          class="header mb-2.5"
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--main-color);
            font-weight: bold;
          "
        >
          <div style="font-size: 20px">حدد فرقة دراسية</div>
          <font-awesome-icon
            @click="Sliders = !Sliders"
            style="font-size: 25px"
            :icon="['fas', 'rectangle-xmark']"
          />
        </div>
        <div class="body">
          <v-card class="mx-auto" width="100%" style="padding: 20px 10px">
            <v-card-title
              style="
                padding: 10px;
                gap: 10px;
                display: flex;
                align-items: center;
                justify-content: flex-start !important;
              "
              class="text-h6 font-weight-regular justify-space-between mb-2.5"
            >
              <v-avatar
                v-text="step"
                style="width: 30px; height: 30px; font-size: 15px"
              ></v-avatar>
              <span
                style="
                  font-size: 20px;
                  font-weight: bold;
                  font-family: system-ui;
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
                    @click="Sliders = !Sliders"
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
      </div>
      <nav class="mb-2.5" aria-label="breadcrumb">
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>{{ Type }} / </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>{{ Lang }} / </MDBBreadcrumbItem>

          <MDBBreadcrumbItem active> {{ Class }}</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <div style="display: flex; align-items: center; gap: 10px">
          <font-awesome-icon
            :icon="['fas', 'sliders']"
            style="background: #fafafa; padding: 10px; border-radius: 5px"
            @click="Sliders = !Sliders"
          />
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            style="background: #fafafa; padding: 10px; border-radius: 5px"
            @click="Search = !Search"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-info']"
            color="info
          !important"
            style="font-size: 24px"
            @click="Info = !Info"
          />
        </div>
      </nav>
      <div class="main_Overlay" v-if="Search" @click="Search = !Search"></div>

      <v-text-field
        label="ابحث في الأسماء"
        :rules="passRules"
        class="border p-2.5 bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        type="text"
        v-if="Search"
        style="width: 90%"
        v-model="searchInput"
      >
        <div
          class="Show_Password absolute -translate-x-1/2 -translate-y-1/2 left-5 top-1/2"
          @click="Search = !Search"
        >
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>
      </v-text-field>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        "
      >
        <div
          style="
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
          "
        >
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :model-value="AllStudent"
            style="color: var(--main-color) !important"
          >
            <template v-slot:default>
              <div
                style="
                  font-size: 20px !important;
                  color: var(--main-color) !important;
                  font-weight: bold !important;
                "
              >
                {{ AllStudent || 0 }} %
              </div>
            </template>
          </v-progress-circular>
          <div style="color: var(--main-color); font-weight: bold">
            عدد الطلاب
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
          "
        >
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :model-value="AllBoy"
            style="color: var(--main-color) !important"
          >
            <template v-slot:default>
              <div
                style="
                  font-size: 20px !important;
                  color: var(--main-color) !important;
                  font-weight: bold !important;
                "
              >
                {{ AllBoy || 0 }} %
              </div>
            </template>
          </v-progress-circular>
          <div style="color: var(--main-color); font-weight: bold">
            عدد الأولاد
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
          "
        >
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :model-value="AllGirl"
            style="color: var(--main-color) !important"
          >
            <template v-slot:default>
              <div
                style="
                  font-size: 20px !important;
                  color: var(--main-color) !important;
                  font-weight: bold !important;
                "
              >
                {{ AllGirl || 0 }} %
              </div>
            </template>
          </v-progress-circular>
          <div style="color: var(--main-color); font-weight: bold">
            عدد البنات
          </div>
        </div>
      </div>
      <div class="content flex" style="gap: 10px; flex-wrap: wrap">
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
          style="
            border-color: var(--main-color) !important;
            border-radius: 5px;
            width: 32%;
          "
        >
          <div class="mb-2.5 flex align-center gap-2.5">
            <div
              class="num"
              style="
                width: 30px;
                height: 30px;
                background: var(--main-color);
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                border-radius: 5px;
              "
            >
              {{ index + 1 }}
            </div>
            <div style="font-weight: bold">
              {{ Student.Name }}
            </div>
          </div>

          <div class="flex flex-col justify-between items-center mb-2.5">
            <div
              style="
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
              "
            >
              <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :model-value="Student.AllResults"
                style="color: var(--main-color) !important"
              >
                <template v-slot:default>
                  <div
                    style="
                      font-size: 20px !important;
                      color: var(--main-color) !important;
                      font-weight: bold !important;
                    "
                  >
                    {{ Student.AllResults || 0 }} %
                  </div>
                </template>
              </v-progress-circular>
              <div
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: var(--main-color);
                "
              >
                متوسط النتائج
              </div>
            </div>
          </div>
          <div
            class="justify-between w-100 mb-2.5"
            style="
              display: flex;
              align-items: center;
              gap: 10px;
              background: #fafafa;
              padding: 10px;
              border-radius: 5px;
            "
          >
            <div style="display: flex; align-items: center; gap: 10px">
              <font-awesome-icon
                :icon="['fas', 'trophy']"
                color="gold"
                v-if="index + 1 === 1"
              />
              <font-awesome-icon
                :icon="['fas', 'trophy']"
                color="silver"
                v-if="index + 1 <= 2"
              />
              <font-awesome-icon
                :icon="['fas', 'trophy']"
                color="#c77b30"
                v-if="index + 1 <= 3"
              />
              <font-awesome-icon
                v-if="index + 1 <= 11"
                :icon="['fas', 'medal']"
                color="gold"
              />
              <font-awesome-icon
                v-if="index + 1 <= 51"
                :icon="['fas', 'certificate']"
                color="gold"
              />
              <font-awesome-icon
                v-if="index + 1 <= 101"
                :icon="['fas', 'certificate']"
                color="silver"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div
              class="button border p-2.5 cursor-pointer hover-0"
              @click="GetBIll(index)"
              style="
                border-radius: 5px;
                width: 48%;
                text-align: center;
                font-weight: bold;
                color: var(--main-color);
              "
            >
              الفواتير
            </div>
            <div
              class="button border p-2.5 cursor-pointer hover-0"
              @click="GetResult(index)"
              style="
                border-radius: 5px;
                width: 48%;
                text-align: center;
                font-weight: bold;
                color: var(--main-color);
              "
            >
              النتائج
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main_Overlay" v-if="BIllShow" style="z-index: 101"></div>
    <div class="main_Overlay" v-if="ResultShow" style="z-index: 101"></div>
    <div
      class="BILL bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
      style="z-index: 101"
      v-if="BIllShow"
    >
      <div>
        <font-awesome-icon :icon="['fas', 'xmark']" @click="BIllShowFunction" />
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
export default {
  name: "TheStudents",
  mounted() {
    this.GetData();

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
    Info: null,
    Class: "الفرقة الأولي",
    Lang: "عربي",
    Type: "كلية الشريعة و القانون",
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
    Sliders: null,
    BIllShow: null,
    ResultShow: null,
    Search: null,
    Male: [],
    Female: [],
    names: [],
    searchInput: "",
    AllStudent: 0,
    AllGirl: 0,
    AllBoy: 0,
  }),
  methods: {
    Progress() {
      this.AllStudent = this.Students.length;
      this.AllBoy = this.Male.length;
      this.AllGirl = this.Female.length;

      console.log(this.AllBoy);
    },
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
        let sentence = doc.data().Class;
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
        // let sentence = doc.data().Class;
        // let words = sentence.split(" ");
        // let firstWord = words[0];
        if (
          doc.data().Type === this.Type &&
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
      console.log(this.Type.split(" ")[0]);
      querySnapshot.forEach((doc) => {
        if (
          doc.data().Type === this.Type.split(" ")[0] &&
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
      this.Progress();
    },
  },
};
</script>
<style lang="scss" scoped>
.TheStudents {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
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
  font-weight: bold;
  color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
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

@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .Main_Class {
    margin-top: -20px !important;
    .container {
      padding-top: 123px !important;
    }
  }
  nav {
    flex-direction: column;
    gap: 10px;
  }
  .content {
    align-items: center;
    justify-content: center;
    & > div {
      width: 100% !important;
    }
  }
}
</style>
