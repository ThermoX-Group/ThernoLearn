<template>
    <div class="collapse bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex justify-between items-center pl-4">
            <h4>{{ data.courseSeasonsText }}</h4>
            <div class="flex items-center gap-2 z-10">
                <div class="tooltip tooltip-right" data-tip="اضافه کردن قسمت">
                    <svg @click="$emit('openModal', index)" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div class="tooltip tooltip-right" data-tip="حذف فصل">
                    <svg @click="$emit('deleteSeason')" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="collapse-content border-t-2 border-base-300">
            <p class="mt-2" v-if="data.episodes.length === 0">هیچ قسمتی وجود ندارد</p>
            <div v-else v-for="(item, index) in data.episodes" :key="index"
                class="flex justify-between items-center mt-2 border-b-2 py-1 border-base-300 last:border-0">
                <input type="text" v-model="data.episodes[index]" @keyup.enter="toggleEditMode(index)"
                    class="border border-yellow-300 px-2 w-2/3 rounded-full outline-yellow-300"
                    placeholder="متن های جایگزین را وارد کنید..." v-if="editModes[index]">
                <h4 v-else>
                    قسمت {{ index + 1 }} : {{ item }}
                </h4>
                <div class="flex items-center gap-3">
                    <span>10:00</span>
                    <div>
                        <div class="tooltip tooltip-right" data-tip="حذف قسمت">
                            <svg @click="data.episodes.splice(index, 1)" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="size-6 cursor-pointer ml-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </div>
                        <div class="tooltip tooltip-right" data-tip="ویرایش قسمت" v-if="!editModes[index]">
                            <svg @click="toggleEditMode(index)" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="size-6 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                        <div class="tooltip tooltip-right" data-tip="لغو" v-else>
                            <svg @click="toggleEditMode(index)" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="size-6 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
export default {
    props: ['data', 'index'],
    setup() {
        let editModes = ref([]);
        let editText = ref('');

        function toggleEditMode(index) {
            editModes.value[index] = !editModes.value[index];
        }

        return {
            editModes,
            toggleEditMode,
            editText
        }
    }
}
</script>