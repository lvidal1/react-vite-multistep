export const getCountries = async () => {
  const response = await fetch('/countries.json');
  return await response.json();
};
