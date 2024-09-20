<script setup lang="ts">
const route = useRoute();
const nextUrl = computed(() => (route.path === "/" ? "/other" : "/"));
const { data: dataFromUseFetch, status: useFetchStatus } = await useFetch(
  "/api/test",
  {
    watch: [() => route.path],
  }
);

const { data: dataFromUseAsyncData, status: useAsyncDataStatus } =
  await useAsyncData(() => useRequestFetch()("/api/test"), {
    watch: [() => route.path],
  });

const pending = computed(
  () =>
    useFetchStatus.value === "pending" || useAsyncDataStatus.value === "pending"
);
</script>

<template>
  <div>
    <h1>
      Route: {{ route.path }}
      <br />
    </h1>

    <p v-if="pending">Loading...</p>
    <div v-else>
      <p>
        useFetch: {{ dataFromUseFetch }}
      </p>
      <p>
        useAsyncData: {{ dataFromUseAsyncData }}
      </p>
    </div>

    <NuxtLink :to="nextUrl">Navigate!</NuxtLink>
  </div>
</template>
