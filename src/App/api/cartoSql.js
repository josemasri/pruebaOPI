export const getGeolocationPoints = async () => {
  const query = `SELECT * FROM ${process.env.REACT_APP_CARTO_TABLE_NAME}`;
  const data = await fetch(
    `https://${process.env.REACT_APP_CARTO_USERNAME}.carto.com/api/v2/sql?q=${query}&api_key=${process.env.REACT_APP_CARTO_API_KEY}`
  );
  return await data.json();
};
