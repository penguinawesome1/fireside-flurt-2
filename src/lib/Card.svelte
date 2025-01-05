<script lang="ts">
    export let name: string;
    export let image: string;
    export let description: string;
</script>

<div class="w-96 aspect-square text-wrap flex flex-col justify-between items-center bg-emerald-400 rounded-3xl relative flex-shrink-0 snap-center">
    <h1 class="text-5xl font-semi-bold absolute drop-shadow-[0_1.2px_1.2px_rgb(255,255,255)]">{name}</h1>
    <img class="border-solid hover:border-dashed border-2 border-zinc-800 rounded-3xl w-[100%] h-[70%] bg-white" src={image} alt="profile" draggable="false" />
    <p class="p-4 h-[30%] text-md flex items-center">{description}</p>
</div>

<style>
    @keyframes grow {
        50% {
            width: 28rem;
        }
    }
    div {
        animation: grow ease-in-out;
        animation-timeline: view(x);
    }
</style>