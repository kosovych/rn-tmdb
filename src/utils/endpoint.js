const endpoint = (feature, method, route) => ({
  endpoint: `${feature} ${method} ${route}`,
  url: route,
  feature: feature,
});

export default endpoint;
