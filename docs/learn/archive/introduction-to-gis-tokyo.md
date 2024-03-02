---
title: "Introduction to GIS (Tokyo)"
date: "2014-01-21"
---

# Part I: Preparing ArcMap/Windows to read Japanese

 By default, ArcMap does not "read" Japanese, and instead, spits out garbled text.  While ESRI does offer a Japanese language version of ArcGIS, there is a quick fix out there, but this requires editing the registry.  If you feel safe with this, you can download the following file, and run it within your windows environment.  What this fix does, is it allows ArcMap to read data in UTF-8 encoding.  Why this is not an option from within ArcMap in this global age of international mapping, is a mystery to me...

[http://sandbox.idre.ucla.edu/japan/utf8encoding\_default.reg.zip](http://sandbox.idre.ucla.edu/japan/utf8encoding_default.reg.zip)

# Part II: Getting Tokyo Basemap Data

Obviously, a map needs _something_ to start out with in order to orient oneself within the intended space.  While base maps are available through various commercial suppliers, there is nothing more refreshing than a truly free, open source alternative for data.  In regards to GIS data, we find crowdsourced data layers for pretty much every location on the planet via the [Open Street Map initiative](http://www.openstreetmap.org/), a community of geographers like you and me.  Here are the steps needed to download data for Tokyo:

1. Go to [http://downloads.cloudmade.com/](http://downloads.cloudmade.com/)
2. Click on Asia, Eastern Asia, Japan, Tokyo
3. Download the shapefiles for Tokyo (also provided below)
    - [tokyo.shapefiles.zip](http://downloads.cloudmade.com/asia/eastern_asia/japan/tokyo/tokyo.shapefiles.zip) (21.9M)
4. Experiment with turning layers on/off, symbolization, labeling, etc
