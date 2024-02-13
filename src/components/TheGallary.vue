<template>
  <div
    id="TheGallary"
    class="TheGallary"
    style="background: #fafafa; padding: 10px; margin-top: 50px"
  >
    <div class="container relative">
      <div
        style="
          text-align: center;
          margin: 50px auto;
          font-size: 24px;
          font-weight: bold;
          color: var(--main-color);
        "
      >
        معرض الصور
      </div>
      <div
        class="flex items-center gap-2.5 hover-0 p-2.5 cursor-pointer text-center text-xl"
        @click="Add_Img = true"
        v-if="ShowBtnToUser === 'Admin'"
        style="
          font-weight: bold;
          border-radius: 5px;
          /* padding: 5px; */
          border: 1px solid var(--main-color);
          color: var(--main-color);
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease 0s;
          position: absolute;
          top: 0px;
          left: 10px;
        "
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
      </div>
      <div
        class="main_Overlay"
        style="z-index: 100"
        v-if="Add_Img"
        @click="Add_Img = false"
      ></div>
      <div
        v-if="Add_Img"
        class="Add_Img bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
        style="z-index: 101; width: 90%"
      >
        <div
          class="header flex items-center justify-between"
          style="
            font-size: 20px;
            font-weight: bold;
            color: var(--main-color);
            background: #fafafa;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
          "
        >
          <div>أضف صورة</div>

          <font-awesome-icon
            :icon="['fas', 'xmark']"
            @click="Add_Img = false"
          />
        </div>
        <div class="body">
          <v-sheet width="100%" class="mx-auto">
            <v-form fast-fail @submit.prevent="AddImg">
              <v-text-field
                v-model="Link"
                label="لينك الصورة"
                :rules="firstLinkRules"
              ></v-text-field>

              <v-select :items="items" label="نوع الصورة "></v-select>
              <v-btn type="submit" block class="mt-2">تم</v-btn>
            </v-form>
          </v-sheet>
        </div>
      </div>
      <div class="buttons flex items-center gap-2.5 justify-between">
        <div class="flex items-center gap-2.5">
          <div
            class="active bg-[#eee] p-2.5 cursor-pointer text-center text-xl bg-[#fff] rounded hover-0"
            style="
              border: 1px solid var(--main-color);
              transition: 0.3s;
              padding: 5px 15px;
            "
          >
            الكل
          </div>
          <div
            class="bg-[#eee] p-2.5 cursor-pointer text-center text-xl bg-[#fff] rounded hover-0"
            style="
              border: 1px solid var(--main-color);
              transition: 0.3s;
              padding: 5px 15px;
            "
          >
            تكريم
          </div>
          <div
            class="bg-[#eee] p-2.5 cursor-pointer text-center text-xl bg-[#fff] rounded hover-0"
            style="
              border: 1px solid var(--main-color);
              transition: 0.3s;
              padding: 5px 15px;
            "
          >
            الأكاديمية
          </div>
        </div>
      </div>
      <div
        v-if="img.length === 0"
        style="
          text-align: center;
          background: #fff;
          padding: 10px;
          border-radius: 5px;
          font-weight: bold;
          color: var(--main-color);
        "
      >
        لا يوجد صور لعرضها
      </div>
      <div v-if="loading">
        <img
          src="../assets/animation_lolk2w1w_small.gif"
          alt=""
          style="margin: 10px auto"
        />
      </div>
      <div class="box flex justify-start gap-2.5 flex-wrap">
        <div
          v-for="(MyImg, index) in img"
          :key="MyImg"
          class="d-flex child-flex relative img"
          :class="MyImg.Category"
          cols="4"
          style="width: 32%"
        >
          <v-img
            :src="MyImg.Link"
            :lazy-src="MyImg.Link"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2 Main_Img w-100"
            @click="showModal(index)"
            style="
              cursor: zoom-in !important;
              border-radius: 6px;
              z-index: 1;
              transition: 0.3s;
            "
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <div class="Modal" v-if="showModalFlag">
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            @click="previousImage"
            v-show="this.currentIndex"
            style="
              position: absolute;
              left: 30px;
              font-size: 30px;
              color: var(--main-color);
              cursor: pointer;
              background: #fff;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              opacity: 0.7;
              font-weight: bold;
              padding: 10px;
            "
          />
          <img :src="img[currentIndex].Link" alt="" />
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            @click="nextImage"
            v-show="this.currentIndex < this.img.length - 1"
            style="
              position: absolute;
              right: 30px;
              font-size: 30px;
              color: var(--main-color);
              cursor: pointer;
              background: #fff;
              width: 25px;
              height: 25px;
              padding: 10px;
              border-radius: 50%;
              opacity: 0.7;
              font-weight: bold;
            "
          />
          <font-awesome-icon
            :icon="['fas', 'times']"
            @click="closeModal"
            style="
              position: absolute;
              top: 20px;
              left: 30px;
              color: var(--main-color);
              cursor: pointer;
              background: rgb(255, 255, 255);
              width: 35px;
              height: 35px;
              border-radius: 50%;
              opacity: 0.7;
              transition: all 0.3s ease 0s;
              padding: 10px;
            "
          />
          <!-- padding: 10px; -->
        </div>
      </div>
      <div
        v-if="More"
        class="More hover-0 cursor-pointer"
        style="
          border: 1px solid var(--main-color);
          text-align: center;
          padding: 10px;
          border-radius: 5px;
          margin-top: 11px;
          font-size: 20px;
          color: var(--main-color);
          font-weight: bold;
        "
      >
        المزيد
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
  query,
  where,
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
export default {
  name: "TheGallary",
  mounted() {
    setInterval(() => {
      this.CheckAboutAdminState();
    }, 1000);
    setTimeout(() => {
      this.GetAdminState();
      this.GetData();
    }, 100);
  },

  computed: {
    UserAdmin() {
      return this.$store.state.UserAdmin;
    },
    color() {
      switch (this.value) {
        case 0:
          return "var(--main-color)";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
  data() {
    return {
      loading: true,
      ShowBtnToUser: null,
      imges: 4,
      Add_Img: null,
      tab: null,
      value: 1,
      img: [],
      showModalFlag: false,
      currentIndex: 0,
      Link: "",
      More: null,
      firstLinkRules: [
        (value) => {
          if (value?.length > 10) return true;

          return "يجب كتابة لينك صالح";
        },
      ],

      items: ["تكريم", "الأكاديمية"],
      Admin_Gallery: null,
    };
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
      if (this.UserAdmin === "Admin") {
        const querySnapshot = await getDocs(collection(db, "المشرفين"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().Id === localStorage.getItem("userid")) {
            if (
              doc.data().powers === "الكل" ||
              doc.data().powers === "إضافة صور"
            ) {
              this.Admin_Gallery = true;
            }
          }
        });
      }
    },
    ShowBtnMore() {
      let DivNotHidden = document.querySelectorAll(".box > div:not(.hidden)");
      if (DivNotHidden.length > 6) {
        this.More = true;
        setTimeout(() => {
          DivNotHidden.forEach((e, index) => {
            if (index >= 6) {
              e.classList.add("hidden");
            }
          });
          if (document.querySelector(".More")) {
            document.querySelector(".More").onclick = () => {
              this.More = false;
              DivNotHidden.forEach((e) => {
                e.classList.remove("hidden");
              });
            };
          }
        }, 10);
      } else {
        this.More = false;
      }
    },
    Select() {
      let btn = document.querySelectorAll(".buttons > div>  div ");

      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
          btn.forEach((e) => {
            e.classList.remove("active");
          });
          btn[i].classList.add("active");

          document.querySelectorAll(".box > div").forEach((e) => {
            if (
              e.classList[4] === "الأكاديمية" &&
              btn[i].innerHTML === " الأكاديمية "
            ) {
              document.querySelectorAll(".box > div").forEach((ele) => {
                ele.classList.add("hidden");
              });
              setTimeout(() => {
                e.classList.remove("hidden");
              }, 10);
            } else if (
              e.classList[4] === "تكريم" &&
              btn[i].innerHTML === " تكريم "
            ) {
              document.querySelectorAll(".box > div").forEach((ele) => {
                ele.classList.add("hidden");
              });
              setTimeout(() => {
                e.classList.remove("hidden");
              }, 10);
            } else if (btn[i].innerHTML === " الكل ") {
              setTimeout(() => {
                document.querySelectorAll(".box > div").forEach((ele) => {
                  ele.classList.remove("hidden");
                });
              }, 10);
            }
            setTimeout(() => {
              this.ShowBtnMore();
            }, 100);
          });
        };
      }
    },
    async GetData() {
      this.img = [];
      let Arr = [];
      const querySnapshot = await getDocs(collection(db, "الصور"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        Arr.push(doc.data());
      });
      this.img = Arr;
      setTimeout(() => {
        this.Select();
      }, 100);
      setTimeout(() => {
        this.ShowBtnMore();
      }, 50);
      this.loading = false;
    },
    async AddImg() {
      if (this.Link.length > 10) {
        await addDoc(collection(db, "الصور"), {
          Link: this.Link,
          Category:
            document.querySelector(".v-select .v-select__selection-text")
              .innerText || "تكريم",
          Time: new Date(),
        });
        this.Link = "";
        this.Add_Img = false;
        this.GetData();
        let btn = document.querySelectorAll(".buttons > div>  div ");

        for (let i = 0; i < btn.length; i++) {
          btn.forEach((e) => {
            e.classList.remove("active");
          });
          btn[0].classList.add("active");
        }
      }
    },
    showModal(index) {
      this.currentIndex = index;
      this.showModalFlag = true;
    },
    closeModal() {
      this.showModalFlag = false;
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextImage() {
      if (this.currentIndex < this.img.length - 1) {
        this.currentIndex++;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 10px;
  text-align: center;
  margin: -23px auto 40px;
  justify-content: center;
  & > div > div {
    border: 1px solid var(--main-color);
    transition: 0.3s;
    padding: 2px 10px;
    font-size: 15px;
    font-weight: bold;
    color: var(--main-color);
  }
}

.v-Main_Img > img {
  // width: 100%;
  cursor: zoom-in !important;
  border-radius: 6px;
  z-index: 1;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
}
.Modal {
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
}
.See_All {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: var(--main-color);
  }
}
.Main_Img:hover {
  transform: scale(1.03);
}

svg:hover {
  opacity: 1 !important;
}
.hidden {
  display: none !important;
}
.active {
  background: var(--main-color);
  color: #fff !important;
}

@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .box > .img {
    width: 48% !important;
  }

  .buttons {
    flex-direction: column;
    & > div {
      justify-content: space-around;
    }
  }
}
</style>
