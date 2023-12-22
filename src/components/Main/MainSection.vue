<template>
  <section
    :id="`hero-${section}`"
    :class="[
      `w-full h-screen flex items-center`,
      positionRight ? `justify-center md:justify-end` : `justify-center md:justify-start`,
    ]"
  >
    <div
      :class="[
        `flex flex-col gap-2 max-w-[80%] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[920px] 2xl:max-w-[942px]`,
        positionRight ? `md:pr-10 lg:pr-20` : `md:pl-10 lg:pl-20`,
      ]"
    >
      <div :class="[`flex flex-col overflow-hidden`, positionRight ? `items-end` : null]">
        <p class="font-primary text-kinda-white uppercase leading-none text-[2rem] sm:text-[3rem] lg:text-5xl xl:text-6xl 2xl:text-7xl">
          {{ title }}
        </p>
        <div
          id="text-line"
          :class="[
            `h-1 bg-kinda-white`,
            section == 1
              ? `w-[15.5rem] sm:w-[23.3rem] xl:w-[29.10rem] 2xl:w-[35rem]`
              : section == 2
              ? `w-[17rem] sm:w-[25.7rem] xl:w-[32rem] 2xl:w-[38.5rem]`
              : section == 3
              ? `w-[19rem] sm:w-[28.5rem] xl:w-[35.75rem] 2xl:w-[43rem]`
              : null,
          ]"
        ></div>
      </div>
      <img src="/images/line.svg" alt="" draggable="false"/>
      <p
        class="text-kinda-white font-secondary md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] md:leading-[25px] lg:leading-[30px] xl:leading-[40px] 2xl:leading-[42px] text-justify"
      >
        {{ desc }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bgImg: String,
    positionRight: Boolean,

    section: Number,
    title: String,
    desc: String,
  },
  created() {
    setTimeout(() => {
      document.querySelector(
        `#hero-${this.section}`
      ).style.backgroundImage = `url(/Budayaku${this.bgImg})`;
    }, 1);
  },
};
</script>
