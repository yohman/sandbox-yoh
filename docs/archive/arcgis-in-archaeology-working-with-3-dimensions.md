---
title: "ArcGIS in Archaeology: Working with 3 Dimensions"
date: "2019-02-27"
categories: 
  - "workshops"
---

## ArcGIS in Archaeology: Working with 3 Dimensions

\[TBS\_ALERT color="info" heading="Special Thanks"\] The data used in this workshop has kindly been made available by the University of Jaén.

Name of the project: **Qubbet el-Hawa**  
Institution: **University of Jaén**  
Website: [http://www.ujaen.es/investiga/qubbetelhawa/index.php](http://www.ujaen.es/investiga/qubbetelhawa/index.php)  
Special thanks to **Alejandro Jiménez Serrano** (director of the archaeological project and professor at the University of Jaén), **Luisa García González** (field director and PhD candidate, University of Jaén), and **Patricia Mora Riudavets** (archeological photographer and PhD candidate, University of Alcalá de Henares).  

\[/TBS\_ALERT\]

![](images/DAE-e1551219681720-1024x612.jpg)

## Terminology

**Photogrammetry/Structure-from-Motion:** having to do with measurements from photographs; however, in archaeology (and other disciplines) often shorthand for the process of creating 3D models from a series of photographs taken systematically; link to more information: http://culturalheritageimaging.org/Technologies/Photogrammetry/

![Photogrammetry](images/oven_photogrammetry2-e1551293733592.jpg)

**DEM - Digital Elevation Model**: representation of terrain based on elevation data; typically shown with lighter color indicating a higher elevation and darker color lower. DEMs can be used within ArcMap when running analyses that take into account elevation changes.

![DEM mudbrick example](images/DEM-e1551293759390.png)

**Ortho(photo/image/mosaic):** aerial photograph or an image that has been geometrically corrected to eliminate distortion and create a uniform scale similar to a map

![Draped ortho](images/draped_ortho-e1551293793927.png)

**TIN - Triangular Irregular Network:** points (vertices) with elevation data that are joined together to form a model. TINs can be used in ArcScene as a tool to "drape" points or orthoimages so they can be viewed in three dimensions.

![TIN example](images/tin2-e1551293820178.png)

**AYSOAY - Are You Sick of Acronyms Yet?**

* * *

## ArcScene Demo

We'll go through a short demonstration on what's possible when you start working with the third dimension. The steps for each are detailed below!

## Photoscan/Metashape Models in ArcScene

### Before taking the photographs

Print markers from Photoscan - Tools/Markers/Print markers

![Print markers](images/print_markers-e1551300533278.jpg)

### While taking the photographs

Place markers around area you plan to photograph (distribute throughout taking into account height) and take points on each of the markers (don't forget to label which marker is which!)

![Distributed markers](images/markers-e1551300558192.jpg)

### Processing the photographs

Process the model as you typically would but run the detect markers tool so Photoscan can add targets to each marker. The details of the process is dependent on the software version. A workshop on photogrammetry is typically offered in the Fall or Spring.

![Detect markers](images/detect_markers-e1551300592669.jpg)

In order to render appropriately in ArcScene you will need to export the model twice from Photoscan. The first will be a georeferenced version while the second will not. Export to Collada (dae)

- Go to File/Export/Export model
- Select Collada (dae) from the drop down menu and name your first export something to indicate that it will have spatial coordinates (i.e. model\_utm)
- In the window that pops up select the appropriate coordinate system from the drop down window then uncheck everything except vertex colors and export texture
- Repeat the process again but this time keep local coordinates instead of selecting the coordinate system in the dropdown (don't forget to give the model a name that makes it clear it is not georeferenced)

> [Collada file format](https://www.khronos.org/collada/): Collada files are based on an XML schema designed to facilitate moving 3D assets in and out of programs or applications. With Collada scene information (think lighting, effects, animation) can accompany.

### Importing into ArcScene

- Open new blank ArcScene
- Create a file geodatabase in your project folder
- Search for the **"Import 3D Files"** tool

![Import- Step 1](images/import_1-e1551312742303-1024x650.png)

![Import- Step 2](images/import_2-1-e1551312773910-1024x648.png)

- Import the **_georeferenced model_** and save the feature class to the file geodatabase you created- it will look strange and blocky...do not be alarmed!

![blocky](images/blocky-e1551300617560.png)

- Right click on the model layer on the Table of Contents and select Edit Features/Start Editing
- The 3D Editor toolbar should open (if not open it through Customize/Toolbars)
- Click on Create Features on the far right and then select the model
- Click on the Edit Placement tool then select the model (if you have trouble selecting the model you can open the attribute table and select it through that instead)
- Click on the 3D Editor drop-down and select Replace with Model
- Navigate to the dae file that exported **_without coordinates_**
- The model should load and look normal (not blocky) but remain in the same georeferenced location

## Resources on campus

[UCLA Library Lux Lab](http://www.library.ucla.edu/use/computers-computing-services/lux-lab) – UCLA Library’s emerging technologies unit; staff specialize in 3D scanning, 3D printing, laser etching and cutting, large format printing, aerial mapping, and 360 immersive projections for research projects. Equipment and staff available upon request.

[YRL Scholarly Innovation Lab](https://drc.ucla.edu/labs/sil/) – collaborative workspace for research projects and working groups in YRL; staff specialize in 3D modeling.

[Library Data Science Center](http://www.library.ucla.edu/location/data-science-center) – UCLA Library’s data unit; staff specialize in teaching data literacy, coding skills for researchers, data management and preservation, data cleaning, data analyses and visualizations, and open science.
