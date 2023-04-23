import SideBar from "components/Sidebar/index";
import Chartboard from "container/chartboard";
import Dashboard from "container/dashboard";
import ManageBills from "container/manageBills";
import ViewBills from "container/viewBills";
import "../../App.css";
import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
      return (
        <SideBar>
          <Dashboard />
          <ViewBills />
          <Chartboard />
          <ManageBills />
          <div className="text-center">
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </SideBar>
        
      );
    }