<template>
  <div class="section mt-20">
    <div class="container flex align-center justify-center gap-2.5">
      <div class="feat flex align-center justify-center flex-col w-32 gap-2.5">
        <img src="../assets/exam.png" alt="exam" />
        <div>امتحانات رقمية بنظام MCQ</div>
      </div>
      <div class="feat flex align-center justify-center flex-col w-32 gap-2.5">
        <img src="../assets/test.png" alt="test" />
        <div>اكثر من الف سؤال لكل ماده</div>
      </div>
      <div class="feat flex align-center justify-center flex-col w-32 gap-2.5">
        <img src="../assets/clock.png" alt="clock" />
        <div>امتحانات بمؤقت ونتائج فوريه</div>
      </div>
      <div class="images"></div>
      <div id="text" class="moving-element" ref="movingElement"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFeatures",

  data() {
    return {
      isScrollingUp: false,
      isScrollingDown: false,
      scrollPosition: 0,
      elementColor: "#3498db",
    };
  },
  mounted() {
    window.addEventListener("scroll", console.log(window.scrollY));
  },

  methods: {
    handleScroll() {
      console.log("handleScroll");
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  height: 200px;
}
.feat {
  > div {
    background: #fafafa;
    padding: 10px;
    width: 260px;
    border-radius: 5px;
    text-align: center;
    color: var(--main-color);
    font-weight: bold;
    font-family: system-ui;
  }
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .section {
    .container {
      flex-direction: column;
      gap: 30px;
      .feat {
        width: 100% !important;
      }
    }
  }
}
</style>
