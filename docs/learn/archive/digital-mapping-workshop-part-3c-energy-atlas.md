---
title: "Digital Mapping Workshop - Part 3b:  Energy Atlas"
date: "2015-04-24"
categories: 
  - "workshops"
---

## The LA County Energy Atlas

- Ground up research using address level energy data (electricity and natural gas)
- Who uses energy where to do what?
- Tools to explore data and provide resources to decision makers

[![energy-atlas-map](images/energy-atlas-map-650x480.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/energy-atlas-map.png)

 

[![energy-atlas-table](images/energy-atlas-table-650x480.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/energy-atlas-table.png)

 

## Map Framework

The [Leaflet](http://leafletjs.com/) library handles the map rendering in the browser.  Designed to be fast and work well on mobile devices and across browsers.  Also considered were the Google Maps API (not fully open source) and OpenLayers (between development stages when this project started).

## Thematic Layer

The choropleth map that shows consumption variables for cities or neighborhoods across the county.  Experimented with 3 approaches before settling on the current setup.

**1) GeoJSON**

Most responsive and simplest, but can only handle so much data since the drawing is done in the browser.  Snappy performance, but the browser will slow down or crash ("script not responding") if there are too many features or geometry is too complex.

Works well for our previous map - [http://sustainablecommunities.environment.ucla.edu/maproom/index.html](http://sustainablecommunities.environment.ucla.edu/maproom/index.html) - which is for a smaller study area with mostly rectangular geographies, though we still had to do a lot of trimming and pruning to the data file to get consistently good performance.

[![electricity-map](images/electricity-map-650x481.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/electricity-map.png)

 

**2) TopoJSON**

An extension of GeoJSON that encodes topography (collapses borders).  It's just as responsive as GeoJSON but has smaller file sizes and can handle more features.  Still has trouble with lots of complicated geometries with lots of vertices.

You can use packaged scripts to simplify geometry based on scale and complexity of the shapes, but be careful not to oversimplify.  This image from an earlier experiment shows how a shape can be distorted.

Neighborhood of Walnut (Actual shape left, oversimplified right - see how the right hand version misses detailed geometry).

[![oversimplification](images/oversimplification-650x310.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/oversimplification.png)

**3) Web Map Service**

A WMS is an open standard for displaying a map layer as a series of tiled images  (Leaflet and others provide methods for adding them to a web map).  We use [MapServer](http://mapserver.org/), an open source platform for creating WMS and cached map tiles.  Key points are speed of loading and scalability - we can add much more data and more granular geographies and still maintain the same performance level as we switch between variables to show.

Using this approach requires server-side programming.  For Ubuntu users, the wonderful UbuntuGIS project has all the needed packages and makes it easy to install and get started.

Tiled Maps:

[![tiled-map-res](images/tiled-map-res.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/tiled-map-res.png)

\[residential consumption by city\]

[![tiled-map-comm](images/tiled-map-comm.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/tiled-map-comm.png)

\[commercial consumption by city\]

## Base Maps

TileMill is a great resource for designing map layers based on public or your own data: [https://www.mapbox.com/tilemill/](https://www.mapbox.com/tilemill/).  It's especially good for the artistically inclined (can do filters, fades, dash patterns, etc).

Once you create a project, you can export the tiles in MB Tiles format and serve from a paid MapBox account or from your own server.  In our case, the MapServer installation is also capable of serving MB Tiles.

There are also lots of free base maps out there to use - for example the Esri satellite layer can easily serve as a base map to any project at no cost.  See all the Esri options at [http://www.esri.com/software/arcgis/arcgisonline/maps/maps-and-map-layers](http://www.esri.com/software/arcgis/arcgisonline/maps/maps-and-map-layers)

[![esri-basemaps](images/esri-basemaps-629x650.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/esri-basemaps.png)
