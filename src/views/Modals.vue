<template>
  <div id="app" class="relative flex flex-col items-center p-8">
    <h1 class="text-2xl font-bold mb-8">Modal</h1>
    <div class="container w-3/4 bg-gray-200 p-4">
      <p>
        <a href="#cancel-modal" class="text-blue-500 underline">Open Modal</a>
      </p>
      <div>
        <Modal name="cancel-modal">
          <h1 class="font-bold text-xl mb-2">Leaving So Soon?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <template #footer>
            <button
              class="
                bg-gray-500
                py-2
                px-4
                rounded-lg
                text-white
                hover:bg-gray-600
                mr-2
              "
              @click="$modal.hide('cancel-modal')"
            >
              Cancel
            </button>
            <a
              href="#confirm-cancel-modal"
              class="
                bg-blue-500
                py-2
                px-4
                rounded-lg
                text-white
                hover:bg-blue-600
              "
              >Confirm Cancellation</a
            >
          </template>
        </Modal>
        <Modal name="confirm-cancel-modal">
          <h1 class="font-bold text-xl mb-2">You're 100% Sure?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <template #footer>
            <a
              href="#"
              class="
                bg-gray-500
                py-2
                px-4
                rounded-lg
                text-white
                hover:bg-gray-600
                mr-2
              "
              >Cancel</a
            >
            <a
              href="#"
              class="
                bg-blue-500
                py-2
                px-4
                rounded-lg
                text-white
                hover:bg-blue-600
              "
              >Yes</a
            >
          </template>
        </Modal>
        <h2 class="text-2xl underline text-slate-700">Modal Component:</h2>
        <pre class="text-left border-2 border-slate-800 rounded-xl">
            <code>
                &lt;template&gt;
                    &lt;div :id="name" class="overlay text-left"&gt;
                        &lt;a href="#" class="cancel"&gt;&lt;/a&gt;

                        &lt;div class="modal"&gt;
                            &lt;slot&gt;&lt;/slot&gt;

                            &lt;footer class="flex mt-8"&gt;
                                &lt;slot name="footer"&gt;&lt;/slot&gt;
                            &lt;/footer&gt;

                            &lt;a href="#" class="close"&gt;&times;&lt;/a&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/template&gt;

                &lt;script&gt;
                    export default {
                        props: ['name']
                    }
                &lt;/script&gt;

                &lt;style&gt;
                    .overlay {
                        visibility: hidden;
                        position: fixed;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(0, 0, 0, .4);
                        transition: opacity .3s;
                        opacity: 0;
                    }
                    .overlay:target {
                        visibility: visible;
                        opacity: 1;
                    }
                    .modal {
                        position: relative;
                        width: 500px;
                        max-width: 80%;
                        background: white;
                        border-radius: 4px;
                        padding: 2.5em;
                        box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);
                    }
                    .modal .close {
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        color: grey;
                        text-decoration: none;
                    }
                    .overlay .cancel {
                        position: absolute;
                        width: 100%;
                        height: 100%;
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
                &lt;Modal name="cancel-modal"&gt;
                &lt;h1 class="font-bold text-xl mb-2"&gt;Leaving So Soon?&lt;/h1&gt;
                &lt;p&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore.
                &lt;/p&gt;
                &lt;template v-slot:footer&gt;
                    &lt;button
                    @click="$modal.hide('cancel-modal')"
                    class="
                        bg-gray-500
                        py-2
                        px-4
                        rounded-lg
                        text-white
                        hover:bg-gray-600
                        mr-2
                    "
                    &gt;
                    Cancel
                    &lt;/button&gt;
                    &lt;a
                    href="#confirm-cancel-modal"
                    class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600"
                    &gt;Confirm Cancellation&lt;/a
                    &gt;
                &lt;/template&gt;
                &lt;/Modal&gt;
                &lt;Modal name="confirm-cancel-modal"&gt;
                &lt;h1 class="font-bold text-xl mb-2"&gt;You're 100% Sure?&lt;/h1&gt;
                &lt;p&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore.
                &lt;/p&gt;
                &lt;template v-slot:footer&gt;
                    &lt;a
                    href="#"
                    class="
                        bg-gray-500
                        py-2
                        px-4
                        rounded-lg
                        text-white
                        hover:bg-gray-600
                        mr-2
                    "
                    &gt;Cancel&lt;/a
                    &gt;
                    &lt;a
                    href="#"
                    class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600"
                    &gt;Yes&lt;/a
                    &gt;
                &lt;/template&gt;
                &lt;/Modal&gt;

                &lt;script&gt;
                import Modal from '@/components/Modal.vue'

                export default {
                    components: {
                        Modal,
                    },
                }
                &lt;/script&gt;
            </code>
          </pre>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal,
  },
}
</script>