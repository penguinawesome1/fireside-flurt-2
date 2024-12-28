<script lang="ts">
	import '../output.css';
	let { children } = $props();
	
	export const prerender = true;
</script>

{@render children()}