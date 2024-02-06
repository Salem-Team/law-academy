import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Main_Class from "../views/Main_Class.vue";
import Main_Testing from "../views/Main_Testing.vue";
import TheUser from "../views/TheUser.vue";
import AdminPage from "../views/AdminPage.vue";
import TheStudents from "../views/TheStudents.vue";
import ManageAdmins from "../views/ManageAdmins.vue";
import {
  getFirestore,
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
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Main_Class",
    name: "Main_Class",
    component: Main_Class,
  },
  {
    path: "/Main_Testing",
    name: "Main_Testing",
    component: Main_Testing,
    meta: { requiresAdmin: true },
    beforeEnter: async (to, from, next) => {
      try {
        const q = query(
          collection(db, "الطلاب"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot = await getDocs(q);
        const q_Admin = query(
          collection(db, "المشرفين"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot_Admin = await getDocs(q_Admin);
        if (!querySnapshot.empty || !querySnapshot_Admin.empty) {
          next();
        } else {
          next("/");
        }
      } catch (error) {
        console.error("Error checking admin state:", error);
        next("/");
      }
    },
  },
  {
    path: "/TheUser",
    name: "TheUser",
    component: TheUser,
    meta: { requiresAdmin: true },
    beforeEnter: async (to, from, next) => {
      try {
        const q = query(
          collection(db, "الطلاب"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          next();
        } else {
          next("/");
        }
      } catch (error) {
        console.error("Error checking admin state:", error);
        next("/");
      }
    },
  },
  {
    path: "/AdminPage",
    name: "AdminPage",
    component: AdminPage,
    meta: { requiresAdmin: true },
    beforeEnter: async (to, from, next) => {
      try {
        const q = query(
          collection(db, "المشرفين"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          next();
        } else {
          next("/");
        }
      } catch (error) {
        console.error("Error checking admin state:", error);
        next("/");
      }
    },
  },
  {
    path: "/TheStudents",
    name: "TheStudents",
    component: TheStudents,
    meta: { requiresAdmin: true },
    beforeEnter: async (to, from, next) => {
      try {
        const q = query(
          collection(db, "المشرفين"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          next();
        } else {
          next("/");
        }
      } catch (error) {
        console.error("Error checking admin state:", error);
        next("/");
      }
    },
  },
  {
    path: "/ManageAdmins",
    name: "ManageAdmins",
    component: ManageAdmins,
    meta: { requiresAdmin: true },
    beforeEnter: async (to, from, next) => {
      try {
        const q = query(
          collection(db, "المشرفين"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          next();
        } else {
          next("/");
        }
      } catch (error) {
        console.error("Error checking admin state:", error);
        next("/");
      }
    },
  },
];

// تعريف الـ router بعد تحديد الوظيفة beforeEach
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
