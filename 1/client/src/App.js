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
          {trainsList?.length} Trains are available
          <div
                style={{
                  minHeight: "50px",
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
                    Train No
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    Name
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    Price in ruppess
                  </p>
                  </div>
                  <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    Seates Available now
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    Departure Time
                  </p>
                </div>
                
              </div>
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
                    AC:{train?.price?.AC} 
                    <br/>
                    Sleeper:{train?.price?.sleeper}
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                 
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    AC:{train?.seatsAvailable?.AC} seates
                    <br/>
                    Sleeper:{train?.seatsAvailable?.sleeper} seates
                  </p>
                </div>
                <div style={{ padding: "10px" }} className="display-votes-ans">
                  <p style={{ margin: "0%", textAlign: "center" }}>
                    Departure Time
                  <br/>
                    {train?.departureTime?.Hours} :{train?.departureTime?.Minutes}:{train?.departureTime?.Seconds}
                    
                    
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
