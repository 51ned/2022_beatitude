export const pageView = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
