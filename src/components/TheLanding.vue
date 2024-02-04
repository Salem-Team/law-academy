<template>
  <div
    class="TheLanding p-2.5"
    style="margin: 0; min-height: 110vh; padding-bottom: 50px"
  >
    <div class="container relative" style="margin-top: 140px">
      <!-- <div class="flex justify-end w-100 absolute bottom-14 left-0">
        <img
          src="../assets/Animation - 1701644199286.gif"
          alt=""
          width="50px"
          class="law"
          style="z-index: 0"
        />
      </div> -->
      <div class="flex justify-center items-center h-80 contain">
        <div class="right w-1/2 relative">
          <img src="../assets/الإمام-بدون-خلفية2.webp" alt="" class="m-auto" />
          <!-- <div class="flex justify-end w-100 absolute bottom-14 left-0">
            <img
              src="../assets/Animation - 1701644199286.gif"
              alt=""
              width="50px"
              class="law"
              style="z-index: 0"
            />
          </div> -->
        </div>
        <div class="left w-1/2 flex flex-col justify-center gap-2.5">
          <h2 class="title" style="font-size: 35px">د /</h2>
          <h1 class="title_2" style="font-size: 46px">محمد الإمام</h1>
          <div class="title_3">
            منصة الإمام منصة متخصصة في تدريس المواد القانونية
          </div>
          <div
            class="All_btn"
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            "
          >
            <button @click="dialog = true">
              <font-awesome-icon :icon="['fas', 'scale-balanced']" />
              <span>مجالات العمل بعد التخرج</span>
            </button>
            <button @click="dialog_2 = true">
              <font-awesome-icon :icon="['fas', 'circle-question']" />
              <span>لماذا تختار كلية الشريعة و القانون</span>
            </button>
          </div>
          <div
            class="main_Overlay"
            @click="dialog = false"
            style="z-index: 101"
            v-if="dialog"
          ></div>
          <div
            class="main_Overlay"
            @click="dialog_2 = false"
            style="z-index: 101"
            v-if="dialog_2"
          ></div>
          <div
            class="dialog bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
            v-if="dialog"
            style="z-index: 101; width: 90%"
          >
            <div
              class="header"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 20px;
                font-weight: bold;
                color: var(--main-color);
                padding: 10px;
                background: #fafafa;
                margin-bottom: 10px;
              "
            >
              <div>مجالات العمل بعد التخرج</div>
              <font-awesome-icon
                @click="dialog = false"
                class="text-2xl text-[--main-color]"
                :icon="['fas', 'xmark']"
              />
            </div>
            <div
              class="body"
              style="
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: space-between;
              "
            >
              <div
                class="box"
                v-for="data in data_1"
                :key="data"
                style="
                  width: 32%;
                  background: #fafafa;
                  padding: 10px;
                  text-align: center;
                  color: var(--main-color);
                  font-weight: bold;
                  font-size: 14px;
                "
              >
                {{ data }}
              </div>
            </div>
          </div>
          <div
            class="dialog_2 bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
            v-if="dialog_2"
            style="z-index: 101; width: 90%"
          >
            <div
              class="header"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 18px;
                font-weight: bold;
                color: var(--main-color);
                padding: 10px;
                background: #fafafa;
                margin-bottom: 10px;
              "
            >
              <div>لماذا تختار كلية الشريعة و القانون ؟</div>
              <font-awesome-icon
                @click="dialog_2 = false"
                class="text-2xl text-[--main-color]"
                :icon="['fas', 'xmark']"
              />
            </div>
            <div class="body">
              <div
                style="
                  line-height: 2;
                  background: #fafafa;
                  padding: 10px;
                  border-radius: 5px;
                  color: var(--main-color);
                  font-weight: bold;
                  font-size: 15px;
                "
              >
                كلية الشريعة والقانون هي من الكليات ذات الشأن العالى والرفعة في
                مصر، وهي إحدى أقدم وأعرق كليات جامعة الأزهر وهي كلية خاصة بدراسة
                العلوم الشرعية (الفقه والفقه المقارن وأصول الفقه) إضافة إلى مواد
                العلوم القانونية (القانون الجنائي والقانون الدستوري والقانون
                المدني والقانون الدولي... إلخ)والتي تماثل تلك المواد التي يتم
                تدريسها في كليات الحقوق مما أكسب هذه الكلية ميزةَ الجمع بين
                العلوم الدينية " المتمثلة في المواد الشرعية. والعلوم الدنيوية "
                المتمثلة في المواد القانونية.
              </div>
            </div>
          </div>
          <!-- <div style="z-index: 1; width: fit-content">
            <v-dialog v-model="dialog">
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="button_2 p-0"></div>
              </template>
              <v-card>
                <div
                  class="flex justify-between items-center p-2.5"
                  style="
                    display: flex;
                    align-items: center;
                    padding: 18px 24px;
                    gap: 10px;
                  "
                >
                  <v-card-title>
                    <div class="title_1_1 flex items-center gap-2.5">
                      <font-awesome-icon :icon="['fas', 'scale-balanced']" />
                      <span>مجالات العمل بعد التخرج </span>
                    </div>
                  </v-card-title>

                  <font-awesome-icon
                    @click="dialog = false"
                    class="text-2xl text-[--main-color]"
                    :icon="['fas', 'xmark']"
                  />
                </div>
                <v-card-text>
                  <div class="text-ringth text-[--main-color] mb-2.5 font-bold">
                    ({{ data_1.length }}) مجال
                  </div>
                  <div v-for="(data, index) in data_1" :key="data" class="feat">
                    <span>{{ index + 1 }}</span>
                    <div>{{ data }}</div>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div> -->

          <!-- <div style="z-index: 1; width: fit-content">
            <v-dialog v-model="dialog2">
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="button_2 p-0">
                  <font-awesome-icon :icon="['fas', 'circle-question']" />
                  <span></span>
                </div>
              </template>
              <v-card>
                <div
                  class="flex justify-between items-center p-2.5"
                  style="
                    display: flex;
                    align-items: center;
                    padding: 18px 24px;
                    gap: 10px;
                  "
                >
                  <v-card-title>
                    <div class="title_1_1 flex items-center gap-2.5"></div>
                  </v-card-title>

                  <font-awesome-icon
                    @click="dialog2 = false"
                    class="text-2xl text-[--main-color]"
                    :icon="['fas', 'xmark']"
                  />
                </div>
                <v-card-text style="padding: 0">
                  <div
                    style="
                      font-family: system-ui;
                      line-height: 2;
                      background: #fafafa;
                      text-align: center;
                      border-radius: 5px;
                      padding: 10px;
                    "
                  >
                    كلية الشريعة والقانون هي من الكليات ذات الشأن العالى والرفعة
                    في مصر، وهي إحدى أقدم وأعرق كليات جامعة الأزةر وهي كلية خاصة
                    بدراسة العلوم الشرعية (الفقه والفقه المقارن وأصول الفقه)
                    إضافة إلى مواد العلوم القانونية (القانون الجنائي والقانون
                    الدستوري والقانون المدني والقانون الدولي... إلخ)والتي تماثل
                    تلك المواد التي يتم تدريسها في كليات الحقوق مما أكسب هذه
                    الكلية ميزةَ الجمع بين العلوم الدينية " المتمثلة في المواد
                    الشرعية. والعلوم الدنيوية " المتمثلة في المواد القانونية.
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheLanding",
  data() {
    return {
      dialog: false,
      dialog_2: false,
      data_1: [
        "معيدا بالكلية ( دكتور جامعي )",
        "الهيئات القضائية",
        "مجلس الدولة",
        "النيابة العامة",
        "النيابة الادارية",
        "هيئة قضايا الدولة",
        " كلية الشرطة ( ضباط متخصصين )",
        "الكلية الحربية ( النيابة العسكرية ) ",
        "مأذون شرعي",
        "وزارة الخارجية ( سفير )",
        "وزارة التموين والتجارة الداخلية",
        "الرقابة الإدارية",
        "الجهاز المركزي للمحاسبات",
        "مصلحة الضرائب",
        "الشئون القانونية",
        "المحاماة",
        "وظائف اخري بقطاعات عامة و خاصة",
        "وزارة الأوقاف",
        "وزير",
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.TheLanding {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
.icon {
  bottom: 403px;
  left: 140px;
}
img {
  width: 400px;
  border-radius: 5px;
}
.law {
  width: 75px;
  filter: grayscale(1);
}
.title_1_1 {
  color: var(--main-color) !important;
  font-weight: bold;
  font-size: 20px;
}
.feat {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--main-color);
  margin-bottom: 10px;
  font-size: 14px;
  span {
    width: 30px;
    background: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 5px;
  }
}
.left {
  font-family: system-ui;
  h1 {
    font-weight: bold;
  }
  h2,
  .title_3 {
    color: #ef4444;
    font-weight: bold;
  }
  .title_3 {
    font-size: 23px;
  }
  .title_2 {
    color: var(--main-color);
  }
  .button_1,
  .button_2 {
    padding: 10px !important;
    width: fit-content;
    border: 1px solid var(--main-color) !important;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px !important;
    font-weight: bold;
    color: var(--main-color) !important;
    cursor: pointer;
    transition: 0.3s;
    svg {
      font-size: 19px;
    }
    &:hover {
      background: var(--main-color) !important;
      color: #fff !important;
    }
  }
}
.v-card .v-card-title {
  padding: 0 !important;
}
.All_btn > button {
  border: 1px solid var(--main-color);
  border-radius: 5px;
  color: var(--main-color);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    background: var(--main-color);
    color: #fff;
  }
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .contain {
    flex-direction: column;
    gap: 10px;
    > div {
      width: 100%;
    }
  }
  img.m-auto {
    // width: 145px;
  }
  .icon {
    bottom: 378px;
    left: 268px;
  }
  .container {
    flex-direction: column;
    & > div {
      width: 100%;
    }
    .box {
      width: 48% !important;
    }
  }
}
</style>
