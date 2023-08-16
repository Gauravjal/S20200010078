import React, { useState, useEffect } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalAlert } from "../../actions/alert.js";
function LeftSidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showBot, setShowBot] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  var User = useSelector((state) => state.currentUser);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <nav
      style={{
        marginTop: "40px",
        width: isSmallScreen ? "10vw" : "15vw",
        height: "100%",
        position: "fixed",
        left: "0",
        padding: isSmallScreen ? "10px 0px" : "30px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        trainsition: "width 0.5s",
        color: "black",
      }}
      className="left-sidebar"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          style={{
            backgroundColor: "inherit",
            width: "100%",
            border: "none",
            padding: "0%",
          }}
        >
          <NavLink
            className="side-nav-links"
            activeclassname="active"
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            <h5
              style={{
                textAlign: "left",
                position: "relative",
                left: isSmallScreen ? "0%" : "5%",
              }}
            >
              <AiFillHome
                style={{
                  width: isSmallScreen ? "" : "30px",
                }}
              />
              {!isSmallScreen ? "HOME" : ""}
            </h5>
          </NavLink>
        </button>
        <button
          style={{
            backgroundColor: "inherit",
            width: "100%",
            border: "none",
            padding: "0%",
          }}
        >
          <NavLink
            className="side-nav-links"
            activeclassname="active"
            style={{
              textDecoration: "none",
              color: "black",
            }}
            activeStyle={{ backgroundColor: "black" }}
            to="/public"
          >
            <h5 style={{ textAlign: "left", position: "relative", left: "5%" }}>
              <BsGlobeAmericas
                style={{
                  width: isSmallScreen ? "" : "30px",
                }}
              />
              {!isSmallScreen ? "PUBLIC" : ""}
            </h5>
          </NavLink>
        </button>
        <div
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/Questions"
              activeStyle={{ backgroundColor: "black" }}
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <BsQuestionCircleFill
                  style={{
                    width: isSmallScreen ? "" : "30px",
                  }}
                />
                {!isSmallScreen ? "QUESTIONS" : ""}
              </h5>
            </NavLink>
          </button>
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/Tags"
              activeClassName="active-link"
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <IoIosPricetags
                  style={{
                    width: isSmallScreen ? "" : "30px",
                  }}
                />
                {!isSmallScreen ? "TAGS" : ""}
              </h5>
            </NavLink>
          </button>
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/Users"
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <FaUserFriends
                  style={{
                    width: isSmallScreen ? "" : "30px",
                  }}
                />
                {!isSmallScreen ? "USERS" : ""}
              </h5>
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default LeftSidebar;
