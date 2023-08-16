import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import "./App.css";
import axios from "axios";
// import { fetchAlltrains } from "./actions/train";
function App() {
  const [trainsList,setTrainList] = useState([]);
  useEffect(()=>{const fetchData= async () => {
    try {
      const data = await axios.get("http://localhost:5000/trains");
      setTrainList(data.data);
      console.log("fjkdfdl",trainsList.length);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();}, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // console.log(trainsList);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="home-main-container">
      <div
        style={{ marginLeft: isSmallScreen ? "7vw" : "14vw", width: "75vw" }}
        className="main-bar"
      >
        <div style={{ overflowY: "scroll", height: "90vh", width: "100%" }}>
          {trainsList?.length} Trains
          {trainsList?.map((train) => {
            return (
              <div
                style={{
                  minHeight: "80px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fdf7e2",
                  borderBottom: "solid 1px #edeff0",
                }}
                className="display-train-container"
              >
                 <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    {train.trainNumber}
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    {/* {train?.upvotes?.length - train?.downvotes?.length} */}
                    {
                      train?.trainName
                    }
                  </p>

                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    AC:{train?.price?.AC} Ruppess
                    <br/>
                    Sleeper:{train?.price?.sleeper} Ruppess
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    AC:{train?.seatesAvailable?.AC} seates
                    <br/>
                    Sleeper:{train?.seatesAvailable?.sleeper} seates
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    AC:{train?.departureTime?.Hours} seates
                    <br/>
                    Sleeper:{train?.seatesAvailable?.sleeper} seates
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
