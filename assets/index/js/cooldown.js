function delayRedirect(event, url) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = url;
  }, 1000)
}
