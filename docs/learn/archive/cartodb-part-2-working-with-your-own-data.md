---
title: "CartoDB Part 2: Working with your own data"
date: "2016-04-26"
---

#### Adding your own data

1. Download the class dataset here: [LA Times Photo Archive](https://ucla.box.com/s/8iqzhhb2fw8wb4ur81e7irt4khuvvfqs)
2. In CartoDB, go back to your dashboard.  If you are in DATA or MAP edit mode, click on the bent arrow at the top left of your window. This will take you to your dashboard: ![dashboard button](images/Screen_Shot_2016-04-25_at_5_16_07_PM.jpg)
3. If you are in Maps view, make sure to switch to Datasets view ![datasets view](images/Screen-Shot-2016-04-25-at-5.20.12-PM.jpg)
4. Click on the new dataset button ![new dataset](images/Screen-Shot-2016-04-25-at-5.24.20-PM.jpg)
5. Find and add the class dataset that you downloaded, and click on the "Connect dataset" button
6. Inspect the data in data view (what do you notice?), and then switch to "MAP VIEW"
7. Navigate the map until you are centered in Los Angeles![](images/latimesmap1.jpg)

### Creating interactivity

We would like a photo to appear when we hover over each marker. Also, if you click on a marker, we would like the popup window to show a larger photo.

1. Click on the infowindow icon
2. Change the width to 400
3. Click on the "change HTML" button
    
    ![](images/infowindow_click2.png)
4. Type the following code into the custom HTML window:
    
    <div class\="cartodb-popup v2"\>
        <a href\="#close" class\="cartodb-popup-close-button close"\>x</a\>
        <div class\="cartodb-popup-content-wrapper"\>
            <div class\="cartodb-popup-content"\>
                <p\>{{title}}</p\>
                <a href\="{{imageurl}}" target\="\_blank"\>
                    <img width\=200 src\="{{imageurl}}"\>
                </a\>
            </div\>
        </div\>
        <div class\="cartodb-popup-tip-container"\></div\>
    </div\>
    
5. Switch to the "Hover" tab
6. Click on the "Change HTML"
7. Enter the following code:
    
    <div class\="cartodb-tooltip-content-wrapper"\>
        <div class\="cartodb-tooltip-content"\>
            <p\><img width\=100 src\={{imageurl}}\></p\>
        </div\>
    </div\>
    

### [](https://github.com/uclamapshare/cartodb-workshop/wiki/3-Working-with-your-own-data#publish-your-map)Publish your map

1. Find and click the "VISUALIZE" button on the top right hand corner of the page
2. Click the "OK, CREATE MAP" button
3. Click the "Edit metadata..." link
    
    ![](images/edit_metadata.png)
4. Add a title (Map Name) and Description and save
5. Go to "Options" and add "Fixed title" and "Fixed description"
    
    ![](images/latimes-options.jpg)
6. Find and click the "PUBLISH" button on the top right hand corner of the page
7. Notice the different options to publish your map.
