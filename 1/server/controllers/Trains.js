import axios from "axios";

const url = "http://20.244.56.144/train/trains";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyMDAzMzcsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZDc4ZDQyZGEtM2VhZC00NGQxLTkyYTMtYzljYWJhNThlYTgwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlMyMDIwMDAxMDA3OCJ9.w6bL6vpYH45T5R_kTKlkBn0xGM-6xmw3JG4nHpEqe0s";
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const fetchTrains = async (req, res) => {
  try {
    const response = await axios.get(url, config);

    const trainsData = response.data;
    const now = new Date();
    const afterThirtyMinutes = new Date(now.getTime() + 30 * 60 * 1000);
    const twelveHoursLater = new Date(now.getTime() + 12 * 60 * 60 * 1000);

    const filteredTrains = trainsData.filter((train) => {
      const departureTime = new Date();
      departureTime.setHours(
        train.departureTime.Hours,
        train.departureTime.Minutes,
        train.departureTime.Seconds
      );

      return (
        departureTime >= afterThirtyMinutes && departureTime <= twelveHoursLater
      );
    });

    const sortedTrains = filteredTrains.sort((a, b) => {
      // Ascending order of price
      if (a.price.sleeper !== b.price.sleeper) {
        return a.price.sleeper - b.price.sleeper;
      }

      // Descending order of available tickets (sleeper)
      if (a.seatsAvailable.sleeper !== b.seatsAvailable.sleeper) {
        return b.seatsAvailable.sleeper - a.seatsAvailable.sleeper;
      }

      // Descending order of departure time
      const aDepartureTime = new Date();
      aDepartureTime.setHours(
        a.departureTime.Hours,
        a.departureTime.Minutes,
        a.departureTime.Seconds
      );

      const bDepartureTime = new Date();
      bDepartureTime.setHours(
        b.departureTime.Hours,
        b.departureTime.Minutes,
        b.departureTime.Seconds
      );

      return bDepartureTime - aDepartureTime;
    });

    return res.status(200).json(sortedTrains);
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching train data." });
  }
};
