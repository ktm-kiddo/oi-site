<template>
  <Nav></Nav>
  <div class="bg-white py-24 md:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5"
    >
      <ul
        role="list"
        class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
      >
        <li
          v-for="person in people"
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
                  href="mailto:{{person.email}}"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Email</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.713l11.985-8.713H.015L12 12.713zm0 1.405L.015 5.279V20h23.97V5.279L12 14.118z"
                    />
                  </svg>
                </a>
              </li>

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

    <!-- dropdown info -->
    <dl class="mt-10 space-y-6 divide-y divide-gray-900/10 px-10 pb-10">
      <Disclosure
        as="div"
        v-for="box in infobox"
        :key="box.question"
        class="pt-6"
        v-slot="{ open }"
      >
        <dt>
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-gray-900"
          >
            <span class="text-base font-semibold leading-7">{{
              box.title
            }}</span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 pr-12">
          <p class="text-base leading-7 text-gray-600">{{ box.content }}</p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
    <div class="px-8"></div>
  </div>
  <Footer></Footer>
</template>

<script setup>
const people = [
  {
    name: "Jerry Orange-Face",
    role: "CEO / Cheif Executive Orange",
    imageUrl:
      "https://img.freepik.com/premium-photo/man-fruit-orange-wearing-suit-pastel-color-background_988095-897.jpg",
    bio: "This orange is truly amazing. After killing all the apples, this orange managed to take the CEO position, and rule the world. HE WILL NOT BE JUICED.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const infobox = [
  {
    title: "Academic background:",
    content: "What academic background?",
  },
  {
    title: "Publications:",
    content:
      "Eating and Juicing: Making Delicious Worlds in Fruit-land Kathmandu",
  },
  {
    title: "CV and contact information:",
    content: "DONT CONTACT ME. I WILL PUT YOU IN SPAM",
  },
  // More questions...
];
</script>
