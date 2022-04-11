<template>
  <div id="app" class="relative flex flex-col items-center p-8">
    <h1 class="text-2xl font-bold mb-8">Conditional Visibility</h1>
    <div class="container w-3/4 bg-gray-200 p-4" style="height: 2000px">
      <a id="new-post-link" href="#" class="text-blue-500">New Post</a>
      <div>
        <h2 class="text-2xl underline text-slate-700">
          Conditionally Rendered Component:
        </h2>
        <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;template&gt;
                    &lt;transition name="fade"&gt;
                        &lt;div v-show="shouldDisplay"&gt;
                            &lt;slot&gt;&lt;/slot&gt;
                        &lt;/div&gt;
                    &lt;/transition&gt;
                &lt;/template&gt;

                &lt;script&gt;
                    import inViewport from 'in-viewport';
                    export default {
                        props: ['whenHidden'],
                        data() {
                            return {
                                shouldDisplay: false
                            }
                        },
                        mounted() {
                            window.addEventListener('scroll', () => {
                                this.shouldDisplay = ! inViewport(
                                    document.querySelector(this.whenHidden)
                                );
                            }, { passive: true });
                        }
                    }
                &lt;/script&gt;

                &lt;style&gt;
                    .fade-enter-active, .fade-leave-active {
                        transition: opacity .3s;
                    }
                    .fade-enter, .fade-leave-to {
                        opacity: 0;
                    }
                &lt;/style&gt;
            </code>
          </pre>
      </div>
      <div>
        <h2 class="mt-5 text-2xl underline text-slate-700">
          How to use on page:
        </h2>
        <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;visible when-hidden="#new-post-link"&gt;
                    &lt;button
                        class="bg-blue-500 hover:bg-blue-600 rounded-full w-24 h-24 text-white text-4xl fixed z-10 right-0 bottom-0 mr-4 mb-4"
                    &gt;+&lt;/button&gt;
                &lt;/visible&gt;

                &lt;script&gt;
                import Visible from '@/components/Visible.vue'

                export default {
                    components: {
                        Visible,
                    },
                }
                &lt;/script&gt;
            </code>
          </pre>
      </div>
      <Visible when-hidden="#new-post-link">
        <button
          class="
            bg-blue-500
            hover:bg-blue-600
            rounded-full
            w-24
            h-24
            text-white text-4xl
            fixed
            z-10
            right-0
            bottom-0
            mr-4
            mb-4
          "
        >
          +
        </button>
      </Visible>
    </div>
  </div>
</template>

<script>
import Visible from '@/components/Visible.vue'

export default {
  components: {
    Visible,
  },
}
</script>