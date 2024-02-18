<template>
  <div id="ContactUs" class="ContactUs bg-[#eee] mt-20">
    <div class="container flex flex-col justify-center items-center">
      <div
        style="
          width: 100%;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 10px;
        "
      >
        <div class="right" style="width: 20%">
          <a
            class="text-reset fw-bold"
            href="https://www.facebook.com/profile.php?id=61551365201853"
          >
            <img
              src="../assets/SalemTeamLogo_2-removebg-preview.png"
              alt="SalemTeam"
              id="SalemTeam"
              style="height: 60px"
            />
          </a>
          <ul
            class="social mt-2.5"
            style="padding: 0; display: flex; gap: 10px"
          >
            <li>
              <a
                class="bg-[#1877f2] rounded"
                href="https://www.facebook.com/profile.php?id=61551365201853"
                style="
                  color: #fff !important;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  width: 50px;
                  height: 50px;
                  font-size: 20px;
                  transition: all 0.3s ease 0s;
                "
              >
                <!-- <font-awesome-icon :icon="['fab', 'facebook-f']" /> -->
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  class="text-4xl bg-[#1877f2]"
                  style="font-size: 24px"
                />
              </a>
            </li>
            <li>
              <a
                class="bg-[#E4405F] rounded"
                href="https://www.instagram.com/salem_team_company"
                style="
                  color: #fff !important;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  width: 50px;
                  height: 50px;
                  font-size: 20px;
                  transition: all 0.3s ease 0s;
                "
              >
                <!-- <font-awesome-icon :icon="['fab', 'instagram']" /> -->
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="text-4xl bg-[#E4405F]"
                  style="font-size: 24px"
                />
              </a>
            </li>
          </ul>
          <div
            class="text"
            style="
              line-height: 2;
              color: var(--main-color);
              font-weight: bold;
              font-size: 15px;
            "
          >
            <div>" جودة تستحق التجربة "</div>
            <div>تتشرف سالم تيم Salem Team بإنشاء موقع أكاديمية القانون.</div>
            <div>لا تتردد في التواصل معنا.</div>
          </div>
        </div>
        <ul
          class="left"
          style="
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 0;
            margin: 0;
            width: 70%;
          "
        >
          <div
            style="
              background: #fafafa;
              padding: 10px;
              border-radius: 5px;
              font-weight: bold;
              color: var(--main-color);
              height: 64px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
            "
          >
            تواصل مع أكاديمية القانون علي :
          </div>
          <li>
            <a href="#">
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="text-4xl bg-[#1877f2]"
              />
              <div>أكاديمية القانون</div>
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon
                :icon="['fab', 'youtube']"
                class="text-4xl bg-[#ff0000]"
              />
              <div>أكاديمية القانون</div>
            </a>
          </li>
          <!-- <li>
            <a
              href="https://www.facebook.com/Dr-Mohamed-El-Emam-101533221382032/"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="text-4xl bg-[#1877f2]"
              />
              <div>د / محمد الإمام</div>
            </a>
          </li> -->
          <li>
            <a>
              <font-awesome-icon
                :icon="['fas', 'phone']"
                class="text-4xl bg-[#25d366]"
              />
              <div>01000000000</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    class="copyright p-2.5 text-center text-[var(--main-color)]"
    style="
      font-weight: bold;
      padding: 10px;
      background: var(--main-color);
      color: #fff;
    "
  >
    <div style="width: 90%; margin: auto">
      &copy; جميع الحقوق محفوظة لسالم تيم Salem Team
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>
<style lang="scss" scoped>
.ContactUs {
  padding: 10px;

  .Feat_1 {
    flex-wrap: wrap;
    gap: 10px;
    .feat {
      width: 24%;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--main-color);
    }
  }
  .Feat_2 {
    width: 100%;
    margin: 10px auto 0;
    .Copyright {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-direction: column;
      padding: 0 20px 20px 20px;
      width: 100%;
      & > div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        gap: 10px;
        align-items: center;
        padding: 10px;
        background: #fff;
        border-radius: 5px;
      }
      p {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        margin: 0;
        &:first-child {
          padding-bottom: 10px;
        }
      }
      span {
        display: flex;
        align-items: flex-end;
      }
      a {
        position: relative;
      }
      strong {
        font-weight: bold;
        color: var(--main-color);
      }
      #fac {
        background: var(--main-color);
        color: #fff !important;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }
}
.left svg {
  // background-color: var(--main-color);
  color: rgb(255, 255, 255);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* width: 50px; */
  /* height: 50px; */
  font-size: 24px;
  transition: all 0.3s ease 0s;
  padding: 10px;
  border-radius: 5px;
}
.left > li > a {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgb(250 250 250 / 50%);
  padding: 10px;
  width: 100%;
  font-weight: bold;
  color: var(--main-color) !important;
  border-radius: 5px;
  box-shadow: 0 0 10px #ddd;
}
.phone {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  gap: 10px;
  > span {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #dddddd;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;

    > .button {
      background: #eee;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
.ContactUs {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .Copyright {
    & > div {
      flex-direction: column;
      p:last-child {
        width: 100%;
        a {
          width: 100%;
        }
      }
    }
  }
  .Feat_1 {
    flex-direction: column;
    .feat {
      width: 100% !important;
    }
  }
  .container {
    flex-direction: column;

    & > div {
      width: 100%;
    }
    .left,
    .right {
      width: 100% !important;
    }
    .phone > span {
      width: 100%;
    }
  }
}
</style>
