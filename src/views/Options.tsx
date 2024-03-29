import React from "react";
import "../assets/styles/App.css";
import Header from "../components/options/Header";
import "../methods/config/settings.js";
import { settings } from "../methods/config/settings";
import ChangeCard from "../components/options/ChangeCard";
import react from "react";
import Sidebar from "../components/options/Sidebar";

var settingsList = Object.keys(settings);

var defaultValue = "#c0ffee";

export default function Options() {
  const [color, setColor] = react.useState(defaultValue);
  const [filteredList, setFilter] = react.useState(settingsList);

  return (
    <div className="relative inline-flex flex-col align justify-center">
      <Header />
      <div className="relative inline-flex flex-row self-center">
        <Sidebar
          color={color}
          setColor={setColor}
          filteredList={filteredList}
          setFilter={setFilter}
          setting={settingsList}
        />
        <div className="inline-flex flex-col">
          <p className="text-3xl text-white p-1 mt-2">all settings</p>
          <p className="text-l text-white p-1 mb-2">
            customise everything from every text to every div
          </p>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-1">
            {filteredList.length > 0 ? (
              filteredList.map((setting) => {
                return (
                  <ChangeCard settingName={setting} colorPickerColor={color} />
                );
              })
            ) : (
              <div className="text-[#7e7e7e] p-1 w-[260px] ">
                no setting found. try another search term?
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
