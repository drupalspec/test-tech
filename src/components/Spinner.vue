<template>
  <div class="overlay">
    <span class="spinner"></span>
  </div>
</template>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,.9);
    z-index:10000;
  }

  .spinner{
    width: 40px;
    height: 40px;
    border: 2px solid #007bff;
    border-top:3px solid #007bff;
    border-radius: 100%;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    margin: auto;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from{
      transform: rotate(0deg);
    }to{
       transform: rotate(360deg);
     }
  }
</style>
