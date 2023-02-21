export function trackAction(action) {
  const _paq = (window._paq = window._paq || [])
  _paq.push(['trackEvent', 'Action', action.type, JSON.stringify(action)])
}

export function init() {
  const _paq = (window._paq = window._paq || [])
  _paq.push(['trackPageView'])
  _paq.push(['requireCookieConsent'])
  _paq.push(['enableLinkTracking'])
  _paq.push(['setTrackerUrl', '//matomo.iteam.services/matomo.php'])
  _paq.push(['setSiteId', '3'])
}
