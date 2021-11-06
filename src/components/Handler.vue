<template>
  <h1>Handler Spotify</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

  onMounted (() => {
    getToken();
  });

const getToken = async () =>{
  const route = useRoute(); 
  const { code } = route.query;
  const clientid = '7ff80f1d83404833a308fa534ca2efd9';
  const clientScret = import.meta.env.VITE_CLIENT_SECRET;
  const authorizationCode = window.btoa(`${clientid}:${clientScret}`)
  const redirectUri = `${window.location.origin}/handler`

  if(code){
    const headers = {
      Authorization: `Basic ${authorizationCode}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }

  const data = new URLSearchParams();
  data.append('code', code)
  data.append('redirect_uri', redirectUri)
  data.append('grant_type', 'authorization_code')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    headers,
    method: 'POST',
    body: formData,
    })

    console.log(await response.json())

  }
}
</script>
