
// Backup redirect if meta refresh fails
setTimeout(() => {
  if (window.location.href === document.location.href) {
    window.location.href = 'https://gitfilehost.github.io/download/';
  }
}, 0);
