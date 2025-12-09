import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://tiles.openfreemap.org/styles/dark",
  center: [-122.6794762, 45.5155213],
  zoom: 10,
  attributionControl: false
});