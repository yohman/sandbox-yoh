---
title: "MXD Data Source Replacer"
date: "2015-01-07"
categories: 
  - "python"
---

Get started by downloading the python script here:

[http://sandbox.idre.ucla.edu/tools/python/mxd\_converter\_AKochaphum.py](http://sandbox.idre.ucla.edu/python/mxd_converter_AKochaphum.py "http://sandbox.idre.ucla.edu/tools/python/mxd_converter_AKochaphum.py")

The "MXD Data Source Replacer" python script is used for changing the location of data for ArcGIS mxd files. For new users of python the only line which you need to be concerned about is lines 14 and 17.

Line 14 is the old data source path which you would like to change, while Line 17 is the new data path that you would like to replace it with. It is crucial for the code to work that you use two backslashes (e.g.\\) in order to identify the paths; the reason for this oddity is that one backslash (e.g.) triggers an escape action in python, so having two of them treats the backslashes as one.

#import the necessary python modules
import arcpy,os

#setting folderpath
folderPath = r"./"

#setting environment variables
ws = arcpy.env.workspace = folderPath
arcpy.env.overwriteOutput = True

#### Start editing the code here: Setting the paths ####
#Note: Be sure to use two backslashes (eg. \\) in order to change directories 
#Tell the script which data path needs to be updated
oldPath = "T:\\Users\\akocha\\python\\data\\"

#Tell the script what the new data path is
newDataPath = "C:\\akocha\\"

#### Stop editing the code here ####

#use arcpy to list all of the mxd files
mxdList = arcpy.ListFiles("\*.mxd")

#print the total number of mxd files
if len(mxdList) == 0:
    print "There are no mxd files found in this directory."
if len(mxdList) == 1:
    print "There is "+str(len(mxdList))+" mxd file found in this directory."
if len(mxdList) > 1:
    print "There are "+str(len(mxdList))+" mxd files found in this directory."   

#set the count of the mxds to 0
count = 0
errorCount = 0

#starting the loop to check for each of the mxds
try:
    for mxds in mxdList:
        #set the mxd to the workspace with the mxd files
        mxd = arcpy.mapping.MapDocument(ws + mxds)
        for lyr in arcpy.mapping.ListLayers(mxd):
            if lyr.supports("DATASOURCE"):
                theData = lyr.dataSource
                dataSourceCheck = lyr.dataSource\[:-8\]
            if dataSourceCheck == oldPath:
                mxd.findAndReplaceWorkspacePaths(oldPath,newDataPath,False)
                count += 1
                mxd.save()                  
        del mxd
except Exception as e:
    print "The following error has occured:"
    print e.message
    print "Because there was an error, you should try re-running the script."
    errorCount += 1

successCount = count-errorCount    
print
print "The conversion process has finished and "+str(successCount)+" file(s) have been replaced."
