/* eslint-disable prettier/prettier */
<template>
  <div id="app" class="flex flex-col items-center p-8">
    <h1 class="text-2xl font-bold mb-8">Dropdown Menu</h1>
    <div>
      <div class="bg-gray-400 w-64 h-64 flex items-center justify-center">
        <!-- Example 1 -->
        <DropDown>
          <template #trigger>
            <button class="hover:text-blue-500">...</button>
          </template>
          <li>
            <a
              href="#"
              class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
              >Edit</a
            >
          </li>
          <li>
            <a
              href="#"
              class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
              >Delete</a
            >
          </li>
          <li>
            <a
              href="#"
              class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
              >Report</a
            >
          </li>
        </DropDown>
      </div>
    </div>
    <hr />
    <!-- Example 2 -->
    <DropDown classes="w-full">
      <template #trigger>
        <button class="text-blue-500">Example With Full Width Menu</button>
      </template>
      <li>
        <a
          href="#"
          class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
          >Edit</a
        >
      </li>
      <li>
        <a
          href="#"
          class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
          >Delete</a
        >
      </li>
      <li>
        <a
          href="#"
          class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
          >Report</a
        >
      </li>
    </DropDown>
  </div>
  <div>
    <h2 class="text-2xl underline text-slate-700">Dropdown Menu Component:</h2>
    <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;template&gt;
                    &lt;div class="dropdown relative"&gt;
                        &lt;div class="dropdown-trigger"
                            @click.prevent="isOpen = ! isOpen"
                            aria-haspopup="true"
                            :aria-expanded="isOpen"
                        &gt;
                            &lt;slot name="trigger"&gt;&lt;/slot&gt;
                        &lt;/div&gt;

                        &lt;transition name="pop-out-quick"&gt;
                            &lt;ul v-show="isOpen"
                                class="dropdown-menu absolute bg-black mt-2 py-2 rounded shadow text-white z-10"
                                :class="classes"
                            &gt;
                                &lt;slot&gt;&lt;/slot&gt;
                            &lt;/ul&gt;
                        &lt;/transition&gt;
                    &lt;/div&gt;
                &lt;/template&gt;

                &lt;script&gt;
                    export default {
                        props: ['classes'],
                        data() {
                            return {
                                isOpen: false
                            };
                        },
                        watch: {
                            isOpen(isOpen) {
                                if (isOpen) {
                                    document.addEventListener(
                                        'click',
                                        this.closeIfClickedOutside
                                    );
                                }
                            }
                        },
                        methods: {
                            closeIfClickedOutside(event) {
                                if (! event.target.closest('.dropdown')) {
                                    this.isOpen = false;
                                    document.removeEventListener('click', this.closeIfClickedOutside);
                                }
                            }
                        }
                    }
                &lt;/script&gt;

                &lt;style&gt;
                    .pop-out-quick-enter-active,
                    .pop-out-quick-leave-active {
                        transition: all 0.4s;
                    }
                    .pop-out-quick-enter,
                    .pop-out-quick-leave-active {
                        opacity: 0;
                        transform: translateY(-7px);
                    }
                &lt;/style&gt;
            </code>
          </pre>
  </div>
  <div>
    <h2 class="mt-5 text-2xl underline text-slate-700">How to use on page:</h2>
    <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;DropDown classes="w-full"&gt;
                  &lt;template #trigger&gt;
                        &lt;button class="text-blue-500"&gt;Example With Full Width Menu&lt;/button&gt;
                    &lt;/template&gt;
                    &lt;li&gt;
                        &lt;a
                        href="#"
                        class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
                        &gt;Edit&lt;/a
                        &gt;
                    &lt;/li&gt;
                    &lt;li&gt;
                        &lt;a
                        href="#"
                        class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
                        &gt;Delete&lt;/a
                        &gt;
                    &lt;/li&gt;
                    &lt;li&gt;
                        &lt;a
                        href="#"
                        class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
                        &gt;Report&lt;/a
                        &gt;
                    &lt;/li&gt;
                &lt;/DropDown&gt;

                &lt;script&gt;
                import DropDown from "@/components/DropDown.vue";

                export default {
                  components: {
                    DropDown,
                  },
                };
                &lt;/script&gt;
            </code>
          </pre>
  </div>
</template>

<script>
import DropDown from '@/components/DropDown.vue'

export default {
  components: {
    DropDown,
  },
}
</script>
