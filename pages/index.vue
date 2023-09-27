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
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
