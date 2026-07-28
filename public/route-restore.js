// Restores the clean URL after the 404.html SPA bounce, and upgrades legacy
// hash-router links (/#/post/x -> /post/x) so old shares keep working.
(function () {
  try {
    if (location.hash.indexOf('#/') === 0) {
      history.replaceState(null, '', location.hash.slice(1) + location.search);
      return;
    }
    var redirect = sessionStorage.getItem('spa:redirect');
    sessionStorage.removeItem('spa:redirect');
    if (redirect && redirect !== location.href) {
      var url = new URL(redirect);
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  } catch { /* noop */ }
})();
