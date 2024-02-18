<template>
  <div>
    <div
      class="animation container"
      style="
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        width: 90%;
        margin: 45px auto 0;
      "
    >
      <img src="../assets/Animation - 1708119404366.gif" alt="" />
      <img src="../assets/Animation - 1708119428528.gif" alt="" />
      <img src="../assets/Animation - 1708130997569.gif" alt="" />
    </div>
    <div
      class="section"
      style="
        margin-top: 45px;
        background: var(--main-color);
        padding: 30px 10px;
      "
    >
      <!-- 
    height: 200px;
    position: absolute;
    width: 200px;
    top: -146px;
   -->

      <div class="container flex align-center justify-center feat_container">
        <div
          class="feat flex align-center justify-center flex-col w-32 gap-2.5"
        >
          <img src="../assets/exam.png" alt="exam" class="img" />
          <div class="caption_1">امتحانات رقمية بنظام MCQ</div>
        </div>
        <div
          class="feat flex align-center justify-center flex-col w-32 gap-2.5"
        >
          <img src="../assets/test.png" alt="test" class="img" />
          <div class="caption_2">اكثر من الف سؤال لكل ماده</div>
        </div>
        <div
          class="feat flex align-center justify-center flex-col w-32 gap-2.5"
        >
          <img src="../assets/clock.png" alt="clock" class="img" />
          <div class="caption_3">امتحانات بمؤقت ونتائج فوريه</div>
        </div>
      </div>
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
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (
        window.scrollY >= 590 &&
        document.querySelectorAll(".feat_container .feat > div")[0]
      ) {
        document
          .querySelectorAll(".feat_container .feat > div")
          .forEach((e) => {
            e.style.cssText = `top: 10px !important;transform: rotate(0deg)!important`;
          });
        document.querySelectorAll(
          ".feat_container .feat > div"
        )[0].style.background = "#fff5f5";
        document.querySelectorAll(
          ".feat_container .feat > div"
        )[1].style.background = " #017296 ";
        document.querySelectorAll(
          ".feat_container .feat > div"
        )[1].style.color = "  #fff ";
        ("#fff5f5");
        document.querySelectorAll(
          ".feat_container .feat > div"
        )[2].style.background = " #4a98f7 ";
        document.querySelectorAll(
          ".feat_container .feat > div"
        )[2].style.color = "  #fff ";
      } else if (window.scrollY < 590) {
        document
          .querySelectorAll(".feat_container .feat > div")
          .forEach((e) => {
            e.style.cssText = `top: -270px !important;transform: rotate(7deg)!important`;
          });
        if (document.querySelector(".caption_2")) {
          document.querySelector(
            ".caption_2"
          ).style.cssText = `transform: rotate(-7deg)!important`;
        }
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.img {
  height: 200px;
}

.container {
  gap: 20px;
}
.animation > img {
  width: 100px;
}
.feat {
  > div {
    background: #fff;
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

@media (max-width: 767px) {
  .section {
    .container {
      flex-direction: column;
      gap: 60px;

      .feat {
        width: 100%;

        > div {
          top: 0;
          transform: rotate(0);
        }
      }
    }
  }
}
</style>
