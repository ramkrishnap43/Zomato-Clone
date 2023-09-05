import React from "react";
import "./DiningOut.css";
import Collection from "../Common/collection";
import { diningOut } from "../../data/diningOut";
import Filters from "../Common/Filters";
import ExploreSection from "../Common/exploreSection";

const collectionList = [
  {
    id: 1,
    title: "25 Live Cricket Screenings",
    cover:
      "https://b.zmtcdn.com/data/collections/ef140246fb4f5b15717d0ac120a303e0_1693550402.png",
    places: "25 Places",
  },
  {
    id: 2,
    title: "12 Best Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566585.jpeg",
    places: "11 Places",
  },
  {
    id: 3,
    title: "16 Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
    places: "15 Places",
  },
  {
    id: 4,
    title: "9 Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674839413.jpg",
    places: "9 Places",
  },
  {
    id: 5,
    title: "13 Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
    places: "9 Places",
  },
  {
    id: 6,
    title: "8 Pure Veg Places",
    cover:
      "https://b.zmtcdn.com/data/collections/8ea321c04135aacaac89eddb10ef64bd_1688552904.jpg",
    places: "8 Places",
  },
  {
    id: 7,
    title: "14 Must-visit Legendary Places",
    cover:
      "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120252.jpg",
    places: "13 Places",
  },
  {
    id: 8,
    title: "18 Blissful Breakfast Places",
    cover:
      "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg",
    places: "20 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filtersList={diningFilters} />
      </div>
      <ExploreSection  list={diningList} collectionName="Dining-Out Restaurant in Pune" />
    </div>
  );
};

export default DiningOut;
