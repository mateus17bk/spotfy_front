<script setup>
const connect = () => {
  const redirectURL = new URL('https://accounts.spotify.com/authorize')
 
  redirectURL.searchParams.append('response_type',
  'code')

  redirectURL.searchParams.append('client_id', 
  '7ff80f1d83404833a308fa534ca2efd9')

  redirectURL.searchParams.append('scope', 
  'user-read-playback-state')

  redirectURL.searchParams.append('redirec_uri', 
  `${windows.location.origin}/handler`)

  windows.location.href = redirectURL

}
</script>

<template>
 <button @click="connect()">Connect on Spotify</button>
</template>

<style scoped>

</style>
