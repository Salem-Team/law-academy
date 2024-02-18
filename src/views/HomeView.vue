<template>
  <div class="home">
    <TheLanding id="Home" />
    <Features />
    <TheClasses />
    <TheGallary />
  </div>
</template>

<script>
// @ is an alias to /src
import TheLanding from "@/components/TheLanding.vue";
import Features from "@/components/Features.vue";
import TheClasses from "@/components/TheClasses.vue";
import TheGallary from "@/components/TheGallary.vue";

export default {
  name: "HomeView",
  mounted() {},
  components: {
    TheLanding,
    Features,
    TheClasses,
    TheGallary,
  },
};
</script>
