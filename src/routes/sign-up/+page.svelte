<script lang="ts">
    import "../../sign-up-in.css"
</script>

<svelte:head>
  <title>Sign up - Fireside Flurt</title>
  <link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="bg-white dark:bg-black font-[system-ui] grid place-items-center w-full h-svh">
    <div class="card">
        <h1>Sign up</h1>
        <input type="email" placeholder="Email" id="email" required>
        <input type="password" placeholder="Password" id="password" required>
        <button id="submit" type="submit">Sign up</button>
        <button id="google">Google</button>
        <a href="../log-in">Have an account?</a>
    </div>
</div>