---
title: "Palladio Workshop"
date: "2018-03-28"
categories: 
  - "workshops"
---

## **Visualizing A Century of New Yorker Stories**

![](images/Screen-Shot-2018-04-10-at-8.45.02-AM-e1523375184846.png)

What does a century of stories, navigating through space and time, look like as a digital visualization? [Palladio](http://hdlab.stanford.edu/palladio/), a data visualization platform built by the Digital Humanities lab at Stanford University, purports to be able to “visualize complex historical data with ease.” Let’s put this claim to the test, and see what it can do with 100 years of New Yorker stories.

## Prerequisites

Download the following course dataset. The data is password protected, so make sure to ask your instructor for the password:  
[Course dataset](https://sandbox.idre.ucla.edu/sandbox/workshop-data)

We will also be using a text editor. We recommend Sublime text:  
[Sublime Text](https://www.sublimetext.com/)

### **Assigning the “spatial”**

\[TBS\_ALERT color="info" heading="Lazy?"\]You can skip this step entirely if you are just interested in visualizing the data (go to the "Let's Palladio" section below). If, however, you want to know more about how the "spatial" is materialized from text data, read on!\[/TBS\_ALERT\]

Space and time are forever intertwined. While time is easily represented in data as a date field, the “where” poses a few more challenges. In order to put our stories onto a map, coordinates must be assigned to each record. Palladio allows you to “join” a table with "spatial" coordinates, that is, coordinates that allow you to plot your data onto a map. Let’s extract each distinct country in the data, give them their respective coordinates, and create a separate country table. We will then be able to map each story in our database.

\[TBS\_ALERT color="info" heading="What do you mean by 'spatial'?"\]The word "spatial" may seem like a fancy term, and in some ways, it certainly is. The term "Spatial Turn" has been widely used to refer to an interdisciplinary push to consider locational and temporal attributes as a cornerstone of research inquiries. Our very own Edward Soja describes this phenomenon as "an attempt to develop a more creative and critically effective balancing of the spatial/geographical and the temporal/historical imaginations."

Edward W. Soja, "Taking Space Personally," in Warf and Arias, The Spatial Turn, 11-35, at 12.

\[/TBS\_ALERT\]

1. From the class dataset, upload stories.csv into a Google Spreadsheet.
2. Assign coordinates to each country in the data
    1. In Google spreadsheets, go to **Data**, **Pivot Tables**
    2. In the Pivot table editor on the right, enter:
        1. Rows: **Country where the author was born**
        2. Values: **Country where the author was born  
            
            ![](images/Screen-Shot-2018-04-09-at-10.45.26-AM-e1523295959456.png)
            
            **  
            
3. Select (click and drag) just the country names in Column A (from Albania to Zimbabwe)
4. Copy these countries (command-C or ctrl-C)
5. Go to UCLA's [free web geocoder](https://gis.ucla.edu/geocoder)
6. Paste the countries into the INPUT box
7. Add the header for "ADDRESS" at the top, and then click on the ****geocode**** **addresses** button.

![geocoder input](images/Screen-Shot-2019-04-25-at-10.05.18-AM-e1556211972838.png)

Examine the results and copy them to your clipboard.

![geocode results](images/Screen-Shot-2019-04-25-at-10.08.17-AM-e1556212170417.png)

### **Data cleanup**

Palladio accepts spatial data, but it is very picky on _how_ the spatial data is organized. The coordinates must be put in a _single_ column, rather than a more typical two column format (latitude, longitude). Let’s clean up our data to adhere to Palladio’s format. In this step, we will combine the latitude and longitude columns by putting double quotes around them. Sublime is a great text editor that makes doing this process fun and easy.

Open Sublime and paste the results from the web geocoder. Add the following headers:

![sublime headers](images/Screen-Shot-2019-04-25-at-10.16.15-AM-e1556212626980-1024x232.png)

Now it's data cleanup time. Notice the two commas followed by the word "APPROXIMATE". We need to get rid of these, and then we need to add double quotes around the coordinate numbers

Do a find (cmd-f/ctrl-f), type “,,APPROXIMATE," and click on the Find All button. You should now have a cursor on every row. Very cool!  

![](images/sublime find all.gif) 

Add the quote before the first number and then go to the end of the line (cmd + right arrow or ctrl + right arrow) to add the closing quote:

![](images/sublime adding quotes.gif)

Save the file as **Countries.csv**

### **Let’s Palladio!**

Let's review what we have just accomplished. We have a rich table of almost 10,000 records of New Yorker fiction stories that span 100 years. Check. We have a second table with every distinct country represented in our stories, _and_ we have given them spatial coordinates so that we can plot them on a map. Check. We have modified the coordinate fields to conform to Palladio's format. Check. Now our data is finally ready for some [Palladio](http://hdlab.stanford.edu/palladio/) fun!

Go to [Palladio](http://hdlab.stanford.edu/palladio/) and start a new project

Drag and drop your Stories.csv file into the box  

![](images/Screen-Shot-2018-04-09-at-10.49.50-AM-e1523296230799.png)

  

Click on **Country** from the list of columns in your primary table

![palladio countries](images/Screen-Shot-2019-04-25-at-10.50.44-AM-e1556214828981.png)

Click on **Add a new table**

Drag and drop your Countries.csv file into the box:  

![](images/palladiojoin.gif)

Rename your tables to “**Stories**” and “**Countries**” respectively

### **Mapping**

Now that our stories are loaded in Palladio, linked to its country table, we can see what our stories will look like on a map.

1. Click on the **Map** tab  
    
    ![](images/Palladio-2-1-e1523381606725.png)
2. Click on **New Layer  
    
    ![](images/Palladio-3-1-e1523381683845.png)
    
    **  
    1. Name: **Stories**
    2. Places: **Country**
    3. Tooltip label: **Country\_1**
    4. Color: **red** (or something that stands out!)
    5. Size points: **check**
    6. According to: **Number of Stories  
        
        ![](images/Screen-Shot-2018-04-09-at-10.51.59-AM-e1523296346701.png)
        
          
        **
3. Click on **Add layer**  
    

\[TBS\_ALERT color="info" heading="Nice map!"\]

Hurray! We have a beautiful map with lots of circles on it. But, what does this visual tell us? Perhaps more importantly, is all the information on the map _accurate_? Never trust a graphic without special inspection. Hover over each circle, reflect on the size of them, consider its location, inspect the label... Can you find any errors?

![](images/Screen-Shot-2018-04-09-at-10.52.57-AM-e1523296398246.png)

\[/TBS\_ALERT\]

### Timeline

![](images/Palladio-4-e1523381871193.png)

Now that we have the "space" out of the way, let's work on the "time."  Click on the tab (at the bottom left of the page) labeled Timeline.  

\[TBS\_ALERT color="info" heading="What does this timeline tell you? "\]

![](images/Screen-Shot-2018-04-09-at-11.10.48-AM-e1523297485348.png)

What are the temporal trends over the course of the past 100 years of New Yorker fiction articles? Also notice that the data is grouped by gender. What does the timeline tell us about gender?

\[/TBS\_ALERT\]

Now click on the Group By dropdown.

![](images/Palladio-5-e1523382025543.png)

![](images/Screen-Shot-2018-04-09-at-11.45.54-AM-e1523299605929.png)

Choose Author  

![](images/Screen-Shot-2018-04-09-at-11.47.17-AM-e1523299699540.png)

What happened to the timeline? Inspect the timeline by hovering over the timeline. What do you notice?  

Switch the grouping back to gender. Position your cursor on the left edge of the timeline, and drag towards the right. Select the first few bars on the timeline. Notice the effect that this has on the map.

![](images/Palladio-e1523298927810.png)

Now position your cursor at the right edge of the light blue box you just created, and drag the edge of the blue box towards the right.

![](images/palladio.gif)

This process cumulatively adds the stories that were written over the years. It is as if you are traversing 100 years of history! Notice how different points on the globe light up the more "global" the stories become over the years.

### Facets

Now let's look at facet browsing. Facets are a fancy way of filtering our data. Just like a real life filter, facets begin to narrow down what we are looking at based on different attributes in our data. What makes facets interesting is that we can _combine_ facets. So, for example, if we have one facet that filters our data by gender, a second facet that filters it by country, and a third facet that displays the authors, we can display a count of all female authors in the United Kingdom. Let's give it a spin.

Click the Facet button. Click on the **Dimensions** button and choose **Gender**, **Country**, and **Author** _in this order_.

![](images/Palladio-2-e1523304942903.png)

Click on the **Count** button and select **Number of Stories**. You should now see the three facets. On the first facet, click on F (female), on the second facet, click on United States.

![](images/Screen-Shot-2018-04-09-at-12.06.40-PM-e1523300827867.png)

Now let's regenerate our timeline based on our facet. Click on the trash can next to the existing timeline.

![](images/Palladio_and_Pushbullet_-_Your_devices_working_better_together-e1523305172782.png)

Click on the **Timeline** button again. Click on the **Group by** button, and select **Author**.

![](images/Screen-Shot-2018-04-09-at-1.21.09-PM-e1523305301451.png)

How is this timeline different from the overall timeline you generated earlier? What does this tell us about female authors from the United States?

### Gallery

The last Palladio tool we will cover is the Gallery. It may seem innocuous, but it is in fact, yet another powerful tool that can convey visual significance. However, in order to make the Gallery come to life, additional data fields are necessary. Specifically, we want to add two columns to our data: an image URL, and a link to the article. Once this is accomplished, we can visualize the stories in the Gallery, complete with a view of the associated image (in this case, the representing graphic on the New Yorker site). Clicking on one of the boxes will then take you directly to the article page.

![](images/Screen-Shot-2018-04-10-at-10.25.47-AM-e1523381384917.png)

### Thinking forward

Now that you are familiar with the power of Palladio, think of what future applications of its usage may be. What kind of data can you add that would provide a powerful visual narrative?
