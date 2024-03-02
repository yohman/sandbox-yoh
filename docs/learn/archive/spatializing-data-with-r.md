---
title: "Spatializing Data with R"
date: "2020-01-17"
categories: 
  - "workshops"
tags: 
  - "r"
---

# Spatializing Data with R

While WYSIWYG software packages like [ArcGIS](https://www.esri.com/en-us/arcgis/about-arcgis/overview) and [QGIS](https://www.qgis.org/) remain a standard in cartographic representations, open source, scripting solutions have always had a strong cadre of support, especially for advanced spatial research initiatives. With a development history that harks back to the late 1990s, [R](https://www.r-project.org/) has been championed as the free and open source programming tool for statisticians the world over. With its growth and foray into data viz, more and more researchers are adopting R as a solution for their spatial needs, due to its scripting capability, and strong statistical integration.

Here, we introduce you to [tmap](https://github.com/mtennekes/tmap) (thematic maps), an actively maintained open-source [R](http://stackoverflow.com/tags/r/info)\-library for drawing thematic maps, written by [Martijn Tennekes](http://stackoverflow.com/users/1393348/martijn-tennekes). 

### Data

This workshop presumes that you have a basic knowledge on spatial research, and follows up on the [Getting Started Spatial Research workshop](https://sandbox.idre.ucla.edu/sandbox/getting-started-with-spatial-research). Data can be obtained from the [LA Data Portal](https://data.lacity.org/) following [this tutorial](https://ucladataguides.readthedocs.io/en/latest/working_with_data/data_portal.html).

You can also use any of the data here:

Sample datasets:

- [Los Angeles Arrests in September 2019](http://sandbox.idre.ucla.edu/data/Arrest_Data_2019_09.csv)
- [Stolen Bikes in Los Angeles 2019](https://sandbox.idre.ucla.edu/data/gis%20workshop/STOLEN%20BIKE%202019.csv) ([source](https://data.lacity.org/A-Safe-City/Crime-Data-from-2010-to-Present/63jg-8b9z))
- [Child Abuse 2019](https://sandbox.idre.ucla.edu/data/gis%20workshop/CHILD%20ABUSE%202019.csv) ([source](https://data.lacity.org/A-Safe-City/Crime-Data-from-2010-to-Present/63jg-8b9z))

### R + RStudio

[R](https://www.r-project.org/) is a programming language that is especially powerful for data exploration, visualization, and statistical analysis. To interact with R, we use [RStudio](https://www.rstudio.com/). Follow these instructions to ensure that you have the proper environment to get started with your R-based research.

**MacOS setup**

[Video Tutorial](https://www.youtube.com/watch?v=5-ly3kyxwEg)

Install R by downloading and running [this .pkg file](https://cran.r-project.org/bin/macosx/R-latest.pkg) from [CRAN](https://cran.r-project.org/index.html). Also, please install the [RStudio IDE](https://www.rstudio.com/products/rstudio/download/#download).

**Windows setup**

[Video Tutorial](https://www.youtube.com/watch?v=q0PjTAylwoU)

Install R by downloading and running [this .exe file](https://cran.r-project.org/bin/windows/base/release.htm) from [CRAN](https://cran.r-project.org/index.html). Also, please install the [RStudio IDE](https://www.rstudio.com/products/rstudio/download/#download). Note that if you have separate user and admin accounts, you should run the installers as administrator (right-click on .exe file and select "Run as administrator" instead of double-clicking). Otherwise problems may occur later, for example when installing R packages.

### Installing tmap

Launch RStudio to get started. Use the console to follow the commands throughout this workshop. Start with the installation of the "tmap" package. Note that this may take up to **5 minutes** to install (yes, there are lots of dependencies here):

```
install.packages("tmap")
```

Now that the tmap package is installed, add the following libraries to your current session. Note that "sf" is the library that stands for "[Simple Features](https://r-spatial.github.io/sf/)" which allows data to be spatialized for R.

```
library(tmap)
library(sf)
```

Load the data. Data can be obtained from the [LA Data Portal](https://data.lacity.org/) following [this tutorial](https://ucladataguides.readthedocs.io/en/latest/working_with_data/data_portal.html), or you can download sample datasets from the links provided in the Data section above. Once downloaded, rename the data file to "arrests.csv," and take note of its path in your computer. Enter the following command to assign a variable "arrests" to your data and change the path accordingly.

MacOS example:

```
arrests <- read.csv("~/Downloads/gis/arrests.csv")
```

Windows example (use double back slashes):

```
arrests <- read.csv("C:\\Users\\yohman\\Downloads\\arrests.csv")
```

Check your environment tab to see your data, and make sure the "lat" and "lon" columns exist:

![rstudio-arrests-data](images/rstudio-arrests-data-1024x298.png)

Convert "arrests" into a "simple feature" – a spatial geometry format that is tmap readable – by identifying the longitude and latitude columns, and create a new variable "arrests\_sf." Also, set the projection (crs) to [4326](https://epsg.io/4326), which stands for WGS84, a geographic coordinate system that reads decimal degrees globally:

```
arrests_sf <- st_as_sf(arrests, coords = c("Lon", "Lat"), crs = 4326)
```

Visualize the tabular data and take notice on the new "geometry" column:

```
view(arrests_sf)
```

![view-arrests_sf](images/view-arrests_sf.png)

Now starts the tmap magic. With just one command "qtm" which stands for "[quick thematic map plot](https://www.rdocumentation.org/packages/tmap/versions/2.3-1/topics/qtm)," you can instantly output a map of your data

```
qtm(arrests_sf)
```

![simple dot map](images/image-e1579211829540.png)

Let's change the map into an interactive leaflet map.

```
tmap_mode("view")
qtm(arrests_sf)
```

![leaflet](images/leaflet.png)

Change it back to the original view:

```
tmap_mode("plot")
```

To give our data spatial bearing, let's bring in a layer for Los Angeles Council Districts. You can download it in SHP (shapefile) format from the [LA Times data portal.](http://boundaries.latimes.com/sets/) Save the file and create a variable for the data.

![council-districts-from-LA-Times](images/council-districts-from-LA-Times.png)

```
la_council_districts <- read_sf("C:\\Users\\yohman\\Downloads\\l.a. city council district (2012).shp")
```

Visualize the council districts.

```
qtm(la_council_districts, borders = 'gray',fill=NULL)
```

Visualize arrests and districts together.

```
qtm(arrests_sf)+
    qtm(la_council_districts, borders = 'gray',fill=NULL)
```

![arrests-with-council-districts](images/arrests-with-council-districts.png)

Color dots by charge description.

```
qtm(arrests_sf, dots.col = "Charge.Group.Description",dots.size = 0.1)+
    qtm(la_council_districts, borders = 'darkgray',fill=NULL)
```

![map-by-charge-type](images/map-by-charge-type.png)

One map per charge description.

```
qtm(arrests_sf, dots.col = "Charge.Group.Description",dots.size = 0.1,by = "Charge.Group.Description")+
    qtm(la_council_districts, borders = 'darkgray',fill=NULL)
```

![maps-by-charge-type](images/maps-by-charge-type.png)

### Sources

- [tmap github](https://github.com/mtennekes/tmap)
- [tmap: get started!](https://cran.r-project.org/web/packages/tmap/vignettes/tmap-getstarted.html)
- Tennekes, Martijn. "[tmap: Thematic Maps in R.](https://www.jstatsoft.org/article/view/v084i06)" _Journal of Statistical Software_ \[Online\], 84.6 (2018): 1 - 39. Web. 17 Jan. 2020
- [Creating beautiful demographic maps in R with the tidycensus and tmap packages](http://zevross.com/blog/2018/10/02/creating-beautiful-demographic-maps-in-r-with-the-tidycensus-and-tmap-packages/)
- [tmap official documentation (pdf)](https://cran.r-project.org/web/packages/tmap/tmap.pdf)
- [Geocomputation with R](https://geocompr.robinlovelace.net/adv-map.html)
