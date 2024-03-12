
let defaultCoordinates = [{lat : 33.325951, lng: 76.522209},{lat : 33.325951, lng: 76.522209}];
let flightPlanCoordinates = [...defaultCoordinates];
/*TODO: Please Set the starting Coordinates Here in defaultCoordinates ,
    Twice as the starting and ending point in Polygon is same.*/


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: defaultCoordinates[0],
        mapTypeId: "terrain",
    });

    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#240A34",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        fillColor: "#240A34",
        fillOpacity : 0.35
    });

    flightPath.setMap(map);

    map.addListener("click", (event) => {
        flightPlanCoordinates.pop();
        flightPlanCoordinates.push(event.latLng.toJSON());
        flightPlanCoordinates.push(defaultCoordinates[0]);
        flightPath.setPath(flightPlanCoordinates);
    });

    document.getElementById("resetButton").addEventListener("click", () => {
        flightPlanCoordinates = [...defaultCoordinates]; // Reset coordinates
        flightPath.setPath(flightPlanCoordinates);
        map.setCenter(defaultCoordinates[0]); // Reset map center
        map.setZoom(5); // Reset zoom level
    });

    document.getElementById("getSqlPolygon").addEventListener("click", generateString);
}

window.initMap = initMap;

function generateString() {
    let polygonString = "POLYGON((";
    flightPlanCoordinates.forEach((coordinate, index) => {
        polygonString += `${coordinate.lng} ${coordinate.lat}`;
        if (index < flightPlanCoordinates.length - 1) {
            polygonString += ",";
        }
    });
    const queryString = `ST_Contains(ST_GeomFromText('${polygonString}'), POINT(user.lng, user.lat)) AS in_region`;
    document.getElementById("generatedString").textContent = queryString;
}