---
title: "DH 199 Mapping and Boyle Heights"
date: "2016-04-19"
---

 

## I. Social Explorer

[![2016-04-19 11_45_40-Boyle Heights - Social Explorer2](images/2016-04-19-11_45_40-Boyle-Heights-Social-Explorer2-744x240.png)](http://www.socialexplorer.com/ea4ffa521b/view)

The web application allows us to utilize and download census data that is available in Boyle Heights:

- Census tracts start being accounted for in Boyle Heights starting in 1970s
- Some examples of census data that is available are:
    - Age
    - Sex
    - Race
    - Income
    - Housing
    - Employment Sector
- You can use these to generate movies or interactive narratives, but not for offline viewing

Link to the Social Explorer tutorial:

[http://sandbox.idre.ucla.edu/sandbox/getting-started-with-social-explorer-and-exporting-data](http://sandbox.idre.ucla.edu/sandbox/getting-started-with-social-explorer-and-exporting-data)

#### II. Mapbox and GeoJSON.io

![2016-04-19 12_45_34-Mapbox _ Design and publish beautiful maps](images/2016-04-19-12_45_34-Mapbox-_-Design-and-publish-beautiful-maps-744x257.png)

These are tools that allow you to add data and work across multiple geospatial platforms and create geospatial data.

 

## III. Creating dynamically updated maps with Leaflet

You can use data from live google spreadsheets or MapBox maps in order to visually demonstrate various data sets.

1. Copy Boyle Heights Template Spreadsheet:
2. Then go to the gsJson return and copy the ids of the worksheets: [http://sandbox.idre.ucla.edu/tools/gsJson/](http://sandbox.idre.ucla.edu/tools/gsJson/)
3. Paste the spreadsheet id into line 103: ![2016-04-19 13_36_55-__whippet.ats.ucla.edu_inetpub2_wwwroot_testroom_fairfax_template.html (fairfax)](images/2016-04-19-13_36_55-__whippet.ats_.ucla_.edu_inetpub2_wwwroot_testroom_fairfax_template.html-fairfax-744x212.png)
4. You now have a basic mapping template for a side-by-side comparison map!
5. Manipulating "MapMetaData" a) To change the map, you have to make sure the correct "DataField" is chosen.b) Each map to be loaded is represented by an ID, under the column "MapsUsed"c) Maniuplating MapData: a) Each map needs to have a geoJSON file attached to it, which is stored within a subdirectory, i.e.: boyleHeightsmap/geoJSON; so create a folder called "geoJSON".b) The geoJSONs in this folder should be named exactly the same as the geoJSON file name!c) You can change the data by putting numbers into the spreadsheet! (Please do not use text or percent signs.d) The "mapID" are the list of maps which are being called when a particular map is being shown

 

Dual map view

Single map view
