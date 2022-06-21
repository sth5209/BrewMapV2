window.onload = init;

function init(){
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-76.89, 40.26]),
      zoom: 7
    })
  });
}