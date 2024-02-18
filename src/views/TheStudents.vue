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
          <MDBBreadcrumbItem>{{ Type }} </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>{{ Lang }} </MDBBreadcrumbItem>

          <MDBBreadcrumbItem> {{ Class }}</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <div style="display: flex; align-items: center; gap: 10px">
          <font-awesome-icon
            :icon="['fas', 'sliders']"
            style="background: #fafafa; padding: 10px; border-radius: 5px"
            @click="Sliders = !Sliders"
          />
          <!-- <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            style="background: #fafafa; padding: 10px; border-radius: 5px"
            @click="SearchFunction"
          /> -->
          <font-awesome-icon
            :icon="['fas', 'circle-info']"
            color="info
          !important"
            style="font-size: 24px"
            @click="Info = !Info"
          />
        </div>
      </nav>
      <!-- <div class="main_Overlay" v-if="Search" @click="Search = !Search"></div> -->

      <!-- <v-text-field
        label="ابحث في الأسماء"
        :rules="searchInput"
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
      </v-text-field> -->
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 20px auto;
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
                {{ AllStudent || 0 }}
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
            :model-value="(AllBoy / AllStudent) * 100 || 0"
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
                {{ Math.floor((AllBoy / AllStudent) * 100) || 0 }} %
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
            :model-value="(AllGirl / AllStudent) * 100 || 0"
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
                {{ Math.floor((AllGirl / AllStudent) * 100) || 0 }} %
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
            <div
              class="Icons"
              style="display: flex; align-items: center; gap: 10px"
            >
              <font-awesome-icon
                :icon="['fas', 'trophy']"
                color="gold"
                class="gold hidden"
              />
              <font-awesome-icon
                :icon="['fas', 'trophy']"
                color="silver"
                class="silver hidden"
              />
              <font-awesome-icon
                :icon="['fas', 'trophy']"
                color="#c77b30"
                class="c77b30 hidden"
              />
              <!-- v-if="index + 1" -->
              <font-awesome-icon
                class="madel_gold hidden"
                :icon="['fas', 'medal']"
                color="gold"
              />
              <!-- v-if="index + 1 <= 51" -->
              <font-awesome-icon
                class="certificate_gold hidden"
                :icon="['fas', 'certificate']"
                color="gold"
              />
              <!-- v-if="index + 1 <= 101" -->
              <font-awesome-icon
                class="certificate_silver hidden"
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
      class="Main_Box BILL bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
      style="z-index: 101; width: 90%"
      v-if="BIllShow"
    >
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fafafa;
          padding: 10px;
          border-radius: 5px;
          color: var(--main-color);
          font-weight: bold;
          font-size: 20px;
        "
      >
        <div>الفواتير</div>
        <font-awesome-icon :icon="['fas', 'xmark']" @click="BIllShowFunction" />
      </div>

      <div class="box_1_1 border p-2.5" v-for="bill in BIll" :key="bill">
        <div class="small_box">
          <div>
            <div>الدراسة</div>
            <div>{{ bill.BillType }}</div>
          </div>
          <div>
            <div>القسم</div>
            <div>{{ bill.BillLang }}</div>
          </div>
          <div>
            <div>الفرقة</div>
            <div>{{ bill.BillClass }}</div>
          </div>
          <div>
            <div>المادة</div>
            <div>{{ bill.BillName }}</div>
          </div>
          <div>
            <div>الصنف</div>
            <div>{{ bill.BillItem }}</div>
          </div>
          <div>
            <div>السعر</div>
            <div>{{ +bill.BillPrice / 100 }} جنية مصري</div>
          </div>

          <div>
            <div>كود الإستلام</div>
            <div>{{ bill.order_id }}</div>
          </div>
          <div>
            <div>تاريخ الدفع</div>
            <div>
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

      <div
        v-if="BIll.length === 0"
        style="
          text-align: center;
          margin-top: 10px;
          color: var(--main-color);
          font-weight: bold;
          padding: 10px;
        "
      >
        لا توجد فواتير متاحة.
      </div>
    </div>
    <div
      class="Main_Box BILL bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
      v-if="ResultShow"
      style="z-index: 101; width: 90%"
    >
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fafafa;
          padding: 10px;
          border-radius: 5px;
          color: var(--main-color);
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 10px;
        "
      >
        <div>النتائج</div>
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          @click="ResultShowFunction"
        />
      </div>

      <div
        v-if="Result.length === 0"
        style="
          text-align: center;
          margin-top: 10px;
          color: var(--main-color);
          font-weight: bold;
          padding: 10px;
        "
      >
        لا توجد نتائج متاحة.
      </div>
      <div class="box_1 border p-2.5" v-for="bill in Result" :key="bill">
        <div class="small_box">
          <div>
            <div>الدراسة</div>
            <div>{{ bill.Type }}</div>
          </div>
          <div>
            <div>القسم</div>
            <div>{{ bill.Lang }}</div>
          </div>
          <div>
            <div>الفرقة</div>
            <div>{{ bill.Class }}</div>
          </div>
          <div>
            <div>المادة</div>
            <div>{{ bill.Sub }}</div>
          </div>
          <div>
            <div>إختبار رقم</div>
            <div>{{ bill.TestNumber }}</div>
          </div>
          <div>
            <div>التقدير</div>
            <div>{{ bill.appreciation }}</div>
          </div>
          <div>
            <div>الوقت</div>
            <div>
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
        <div class="small_box">
          <div>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :model-value="bill.percent || 0"
              style="color: var(--main-color) !important"
            >
              <template v-slot:default>
                <div
                  class="value"
                  style="
                    font-size: 20px !important;
                    color: var(--main-color) !important;
                    font-weight: bold !important;
                  "
                >
                  <span>{{ bill.percent || 0 }}</span> %
                </div>
              </template>
            </v-progress-circular>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-vue-ui-kit";
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
  components: {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
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
    SearchFunction() {
      this.searchNames();
      this.Search = !this.Search;
    },
    Progress() {
      this.AllStudent = this.Students.length;
      this.AllBoy = this.Male.length;
      this.AllGirl = this.Female.length;
      let Arr = [];
      let uniqueNumbers = [];
      setTimeout(() => {
        let num = document.querySelectorAll(".num");
        // let Icons = document.querySelectorAll(".Icons > svg");
        for (let i = 0; i < this.Students.length; i++) {
          Arr.push(this.Students[i].AllResults);
        }
        // حلقة لفحص كل عنصر في القائمة الأصلية
        console.log("Arr", Arr);
        Arr.forEach((number) => {
          if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
          }
        });

        console.log("uniqueNumbers", uniqueNumbers);
        Arr.forEach((e_1, index_1) => {
          uniqueNumbers.forEach((e_2, index_2) => {
            if (e_2 === e_1) {
              num[index_1].innerHTML = index_2 + 1;

              console.log(e_1, index_2);
            }
          });
        });
        let box = document.querySelectorAll(".box");
        console.log(" box.length", box.length);
        for (let i = 0; i < box.length; i++) {
          // console.log("(num[i].innerHTML", +num[i].innerHTML);
          if (+num[i].innerHTML === 1) {
            box[i].querySelectorAll(".Icons svg")[0].style.display = "block";
          }
          if (+num[i].innerHTML <= 2) {
            box[i].querySelectorAll(".Icons svg")[1].style.display = "block";
          }
          if (+num[i].innerHTML <= 3) {
            box[i].querySelectorAll(".Icons svg")[2].style.display = "block";
          }
          if (+num[i].innerHTML < 11) {
            box[i].querySelectorAll(".Icons svg")[3].style.display = "block";
          }
          if (+num[i].innerHTML < 51) {
            box[i].querySelectorAll(".Icons svg")[4].style.display = "block";
          }
          if (+num[i].innerHTML < 101) {
            box[i].querySelectorAll(".Icons svg")[5].style.display = "block";
          }
        }
      }, 100);
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
        // let sentence = doc.data().Class;
        // let words = sentence.split(" ");
        // let firstWord = words[0];

        if (
          doc.data().Type === this.Type.split(" ")[0] &&
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
        if (
          doc.data().Type === this.Type.split(" ")[0] &&
          doc.data().Lang === this.Lang &&
          doc.data().Class === this.Class
        ) {
          this.BIll.push(doc.data().pay);
          thebill = this.BIll[index];
        }
      });
      this.BIll = thebill;
      console.log(this.BIll);
      // this.BIll.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
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
          console.log(doc.data().Gender);
          if (doc.data().Gender === "بنين") {
            this.Male.push(data.type);
          } else {
            this.Female.push(data.type);
          }
        }
      });
      this.Progress();
      this.searchNames();
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
.Main_Box,
.Info {
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

.box_1_1 {
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 20px 0;

  & .small_box {
    width: 100%;
    display: flex;

    &.small_box:first-child {
      flex-direction: column;
      gap: 10px;
      & > div {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        width: 100%;
        & div {
          width: 48%;
          padding: 10px;
          text-align: center;
          background: rgba(250, 250, 250, 0.5882352941);
          border-radius: 5px;
          box-shadow: 0 0 10px #ddd;
          color: var(--main-color);
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    &.small_box:last-child {
      align-items: center;
      justify-content: center;
    }
  }
}
.box_1 {
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 20px 0;

  & .small_box {
    width: 50%;
    display: flex;

    &.small_box:first-child {
      flex-direction: column;
      gap: 10px;
      & > div {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        & div {
          width: 48%;
          padding: 10px;
          text-align: center;
          background: rgba(250, 250, 250, 0.5882352941);
          border-radius: 5px;
          box-shadow: 0 0 10px #ddd;
          color: var(--main-color);
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    &.small_box:last-child {
      align-items: center;
      justify-content: center;
    }
  }
}
table th,
td {
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
  color: var(--main-color);
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
  .breadcrumb {
    font-size: 12px !important;
  }
  .box_1 {
    flex-direction: column !important;
    gap: 30px;
    & > .small_box {
      width: 100%;
    }
  }
}
</style>
