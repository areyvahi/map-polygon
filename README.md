
# Map Polygon (Visual + SQL)

The "Map Polygon" project is a web application that allows users to visualize and interact with Coordinate paths on a map. Using Google Maps JavaScript API, users can click on the map to create a custom Coordinate path, which is displayed as a polyline. The project also provides functionality to reset the map to its initial state and generate a SQL query string representing a spatial containment check based on the created Coordinate path.


## Features

- Interactive Map: Users can interact with the map by clicking to create custom Coordinates paths.

- Coordinates Path Visualization: The Coordinates path created by the user is displayed on the map as a polyline, allowing for easy visualization.

- SQL Query Generation: The application generates a SQL query string based on the Coordinates path created by the user. This query string can be used for spatial containment checks in databases.

## ToDo
In index.html, change api key

Refrence for Key : https://developers.google.com/maps/documentation/embed/get-api-key
```html
[ENTER_GOOGLE_MAP_API_KEY_HERE]
```
In polygon.js change defaultCoordinates to the desired starting Coordinate

*Set the coordinates twice , as the starting and the ending point of the polygon is same.* 

EXAMPLE :
```javascript
let defaultCoordinates = [{lat : 33.325951, lng: 76.522209},{lat : 33.325951, lng: 76.522209}];
```




## Tech Stack

HTML, Javascript, CSS , Google Map Api , polyfill.io


## Screenshots

![App Screenshot](https://raw.githubusercontent.com/areyvahi/map-polygon/main/screen-shot.png)


## Support

For support, email satishsahu1998@gmail.com.

