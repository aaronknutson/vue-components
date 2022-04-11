<template>
  <div class="about">
    <div id="app" class="p-8">
      <h1 class="text-2xl font-bold">Smooth Scroll</h1>
      <ScrollLink href="#categories" class="text-sky-500"
        >Go To Testimonials</ScrollLink
      >
      <div class="mt-10" style="height: 2000px">
        <div>
          <h2 class="text-2xl underline text-slate-700">
            Scroll Link Component:
          </h2>
          <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;template&gt;
                    &lt;a :href="href" @click.prevent="scroll"&gt;
                        &lt;slot&gt;&lt;/slot&gt;
                    &lt;/a&gt;
                &lt;/template&gt;

                &lt;script&gt;
                export default {
                  props: ["href"],
                  methods: {
                    scroll() {
                      // For older browsers, consider pulling in a polyfill.
                      // https://www.npmjs.com/package/smoothscroll-polyfill
                      document.querySelector(this.href).scrollIntoView({ behavior: "smooth" });
                    },
                  },
                };
                &lt;/script&gt;
            </code>
          </pre>
        </div>
        <div>
          <h2 class="mt-5 text-2xl underline text-slate-700">
            How to use on page:
          </h2>
          <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;ScrollLink href="#categories" class="text-sky-500"&gt;
                  Go To Testimonials
                &lt;/ScrollLink&gt;

                &lt;script&gt;
                import ScrollLink from "@/components/ScrollLink.vue";

                export default {
                  components: {
                    ScrollLink,
                  },
                };
                &lt;/script&gt;
            </code>
          </pre>
        </div>
      </div>
      <div id="categories">
        <h2 class="font-bold mb-6">Testimonials</h2>
        <div class="flex">
          <div class="w-1/3 h-48 bg-gray-200 p-4">
            <ScrollLink href="#app" class="text-sky-500">Go Back Up</ScrollLink>
          </div>
          <div class="w-1/3 h-48 bg-gray-400 p-4">Item</div>
          <div class="w-1/3 h-48 bg-gray-200 p-4">Item</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollLink from "@/components/ScrollLink.vue";

export default {
  components: {
    ScrollLink,
  },
};
</script>
