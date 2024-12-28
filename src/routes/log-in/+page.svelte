<script lang="ts">
    import "../../sign-up-in.css"
</script>

<svelte:head>
  <title>Log in - Fireside Flurt</title>
  <link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="bg-white dark:bg-black font-[system-ui] grid place-items-center w-full h-svh">
    <div class="card">
        <h1>Log in</h1>
        <input type="email" placeholder="Email" id="email" required>
        <input type="password" placeholder="Password" id="password" required>
        <button id="submit" type="submit">Log in</button>
        <button id="google">Google</button>
        <a href="../sign-up">Need an account?</a>
    </div>
</div>