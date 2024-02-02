<template>
  <div class="section" style="margin-top: 125px">
    <div class="container flex align-center justify-center">
      <div class="feat flex align-center justify-center flex-col w-32 gap-2.5">
        <img src="../assets/exam.png" alt="exam" />
        <div class="caption_1">امتحانات رقمية بنظام MCQ</div>
      </div>
      <div class="feat flex align-center justify-center flex-col w-32 gap-2.5">
        <img src="../assets/test.png" alt="test" />
        <div class="caption_2">اكثر من الف سؤال لكل ماده</div>
      </div>
      <div class="feat flex align-center justify-center flex-col w-32 gap-2.5">
        <img src="../assets/clock.png" alt="clock" />
        <div class="caption_3">امتحانات بمؤقت ونتائج فوريه</div>
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
    console.log("المكون قد تم تحميله بنجاح");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 395) {
        document.querySelectorAll(".feat > div").forEach((e) => {
          e.style.cssText = `top: 10px !important;transform: rotate(0deg)!important`;
        });

        console.log(window.scrollY);
      } else if (window.scrollY < 395) {
        document.querySelectorAll(".feat > div").forEach((e) => {
          e.style.cssText = `top: -270px !important;transform: rotate(7deg)!important`;
        });
        document.querySelector(
          ".caption_2"
        ).style.cssText = `transform: rotate(-7deg)!important`;
      }
    });
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
.container {
  gap: 20px;
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
    position: relative;
    top: -270px;
    transition: 1.3s;
    transform: rotate(7deg);
    box-shadow: 0 0 1px var(--main-color);
    &.caption_2 {
      transform: rotate(-7deg);
    }
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
      gap: 50px;
      .feat {
        width: 100% !important;
      }
    }
  }
}
</style>
