<script lang="ts">
	export const prerender = true;
	import '../output.css';
	let { children } = $props();
</script>

{@render children()}