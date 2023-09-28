<template>
	<div>
		<h1 class="text-4xl">Home page</h1>

		<div class="mt-10">
			<p>Device detection:</p>
			<p>is mobile: {{ $device.isMobile }}</p>
			<p>is tablet: {{ $device.isTablet }}</p>
			<p>is desktop: {{ $device.isDesktop }}</p>
		</div>

		<div class="container mt-10">
			<p>Nuxt-img component:</p>
			<NuxtImg src="/static.jpeg" class="w-full lg:w-1/2 mx-auto" />
		</div>

		<div class="container mt-10">
			<ul class="grid grid-cols-2">
				<li v-for="photo in photos" :key="photo.id" class="border">
					<p>{{ photo.title }}</p>
					<p>{{ photo.url }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const preloader = usePreloader();

const { data: photos } = await useFetch(
	"https://jsonplaceholder.typicode.com/photos?_limit=50",
);

preloader.isLoading.value = false;
</script>

<style lang="scss" scoped></style>
