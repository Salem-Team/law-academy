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
                />
              </a>
            </li>
            <li>
              <a
                class="bg-[#E4405F] rounded"
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
                <!-- <font-awesome-icon :icon="['fab', 'instagram']" /> -->
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="text-4xl bg-[#E4405F]"
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
            <div>
              تتشرف سالم تيم Salem Team بإنشاء موقع أكاديمية الإمام القانونية.
            </div>
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
          <li>
            <a
              href="https://www.facebook.com/groups/546417753365502/?ref=share"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="text-4xl bg-[#1877f2]"
              />
              <div>أكاديمية الإمام القانونية</div>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCOB7iG7oVlpsYfI5BwK_i8w">
              <font-awesome-icon
                :icon="['fab', 'youtube']"
                class="text-4xl bg-[#ff0000]"
              />
              <div>أكاديمية الإمام القانونية</div>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Dr-Mohamed-El-Emam-101533221382032/"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="text-4xl bg-[#1877f2]"
              />
              <div>د / محمد الإمام</div>
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon
                :icon="['fas', 'phone']"
                class="text-4xl bg-[#25d366]"
              />
              <div>01016317083 - 01555067049 - 01222912524</div>
            </a>
          </li>
        </ul>
      </div>
      <div
        class="copyright mt-2.5 w-100 p-2.5 text-center text-[var(--main-color)] text-bold w-100"
        style="
          border-top: 1px solid #ddd;
          font-weight: bold;
          padding: 0;
          padding-top: 20px;
        "
      >
        &copy; جميع الحقوق محفوظة لسالم تيم Salem Team
      </div>
      <!-- <div class="Feat_1 flex w-100 justify-between">
        <a
          href="https://www.facebook.com/groups/546417753365502/?ref=share"
          class="feat flex flex-col gap-2.5 p-2.5 rounded w-24"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="text-4xl text-[#1877f2]"
          />
          <div class="text">أكاديمية الإمام القانونية</div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCOB7iG7oVlpsYfI5BwK_i8w"
          class="feat flex flex-col gap-2.5 p-2.5 rounded w-24"
        >
          <font-awesome-icon
            :icon="['fab', 'youtube']"
            class="text-4xl text-[#ff0000]"
          />
          <div class="text">أكاديمية الإمام القانونية</div>
        </a>
        <a
          href="https://www.facebook.com/Dr-Mohamed-El-Emam-101533221382032/"
          class="feat flex flex-col gap-2.5 p-2.5 rounded w-24"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="text-4xl text-[#1877f2]"
          />
          <div class="text">د / محمد الإمام</div>
        </a>
        <a class="feat flex flex-col gap-2.5 p-2.5 rounded w-24">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            class="text-4xl text-[#25d366]"
          />
          <div class="text">
            <div>01016317083 -</div>
            <div>01555067049 -</div> 
            <div>01222912524</div>
          </div>
        </a>
      </div>
      <div class="Feat_2">
        <div class="text-center Copyright">
          <div>
            <p>
              تصميم وتطوير بواسطة
              <a href="https://www.facebook.com/profile.php?id=61551365201853">
                <strong>سالم تيم</strong>
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/profile.php?id=61551365201853"
                id="fac"
              >
                <font-awesome-icon :icon="['fab', 'facebook']" />
                قم بزيارة صفحتنا عبر الفيس بوك</a
              >
            </p>
          </div>
          <p>
            <span>جميع الحقوق محفوظة &copy; 2024</span>
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
          </p>
        </div>
      </div> -->
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
    // .feat:last-child {
    //   width: 100%;
    //   flex-direction: row;
    //   justify-content: space-between;
    //   .text {
    //     display: flex;
    //     gap: 10px;
    //   }
    // }
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
  background: #fafafa;
  padding: 10px;
  width: 100%;
  font-weight: bold;
  color: var(--main-color) !important;
  border-radius: 5px;
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
