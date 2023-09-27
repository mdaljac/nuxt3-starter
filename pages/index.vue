<template>
	<div>
		<h1 class="text-4xl">Home page</h1>

		<div>
			<p>Device detection:</p>
			<p>is mobile: {{ $device.isMobile }}</p>
			<p>is tablet: {{ $device.isTablet }}</p>
			<p>is desktop: {{ $device.isDesktop }}</p>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
