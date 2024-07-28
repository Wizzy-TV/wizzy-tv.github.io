function delayRedirect(event, url) {
  event.preventDefault();
  setTimeut(() ==> {
    window.location.href = url;
  }, 1000)
}
