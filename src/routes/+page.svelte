<script lang="ts">
    import Header from "../components/Header.svelte";
    import Card from "../components/Card.svelte";
  
    const names = ["John Doe", "Name 2", "John Smith", "Jane Smith", "John Johnson", "Jane Johnson", "John Williams", "Jane Williams", "last"];
      const images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg", "./images/8.jpg", "./images/9.jpg"];
      const descriptions = ["First description", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Hola", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "last"];
  </script>
  
  <svelte:head>
    <title>Find One Now - Fireside Flurt</title>
    <link rel="icon" href="/favicon.png" />
  </svelte:head>
  
  <Header />
  <div class="bg-white dark:bg-black font-sans w-[100vw] h-[100svh] flex justify-start items-center gap-12 overflow-x-scroll snap-x snap-proximity px-[40%]">
    {#each names as myName, index}
      <Card
        name={myName}
        image={images[index]}
        description={descriptions[index]}
      />
    {/each}
  </div>