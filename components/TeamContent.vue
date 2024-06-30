<template>
  <div>
    <div class="max-w-2xl xl:col-span-2 pt-20 px-10">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        About the team
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </p>
    </div>
    <!-- tabs -->
    <div class="pt-20 px-10">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to update the selected tab variable. -->
        <select
          id="tabs"
          name="tabs"
          class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="selectedTab"
        >
          <option v-for="tab in tabs" :key="tab.name" :value="tab.name">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              @click="selectTab(tab.name)"
              :class="[
                tab.name === selectedTab
                  ? 'border-oi-blue text-oi-blue-dark'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              ]"
              :aria-current="tab.name === selectedTab ? 'page' : undefined"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-white py-24 md:py-32">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5"
      >
        <ul
          role="list"
          class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          <li
            v-for="person in selectedPeople"
            :key="person.name"
            class="flex flex-col gap-10 pt-12 sm:flex-row"
          >
            <img
              class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              :src="person.imageUrl"
              alt=""
            />
            <div class="max-w-xl flex-auto">
              <h3
                class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
              >
                {{ person.name }}
              </h3>
              <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
              <p class="mt-6 text-base leading-7 text-gray-600">
                {{ person.bio }}
              </p>
              <ul role="list" class="mt-6 flex gap-x-6">
                <li>
                  <a
                    :href="person.xUrl"
                    class="text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">X</span>
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    :href="person.linkedinUrl"
                    class="text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Reactive variable for the selected tab
const selectedTab = ref("Faculty");

// Tabs array
const tabs = [{ name: "Faculty" }, { name: "Fellows" }, { name: "Students" }];

// Separate arrays for students and fellows
const faculty = [
  {
    name: "Faculty One",
    role: "Faculty",
    imageUrl:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Faculty bio.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More faculty...
];

const students = [
  {
    name: "Student One",
    role: "Student",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Student bio.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More students...
];

const fellows = [
  {
    name: "Fellow One",
    role: "Fellow",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Fellow bio.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More fellows...
];

// Function to select a tab
const selectTab = (tabName) => {
  selectedTab.value = tabName;
};

// Computed property to get the selected people based on the selected tab
const selectedPeople = computed(() => {
  if (selectedTab.value === "Students") {
    return students;
  } else if (selectedTab.value === "Fellows") {
    return fellows;
  } else if (selectedTab.value === "Faculty") {
    return faculty;
  }
  return [];
});
</script>
