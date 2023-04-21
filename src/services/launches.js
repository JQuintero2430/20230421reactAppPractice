const API_URL = "https://api.spacexdata.com/v3";

export const getAllLaunches = async () => {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLaunchByFlightNumber = async (flightNumber) => {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
