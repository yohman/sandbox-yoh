---
title: "Python and Web Scraping 2018"
date: "2018-10-03"
---

### Why bother scraping?

Data is all around us.. you can download multiple data sets from the [LA Open Data](https://data.lacity.org/) portal, use the [Yelp API](https://www.yelp.com/developers) to get restaurant reviews, or download your own history on social media... so why would it be necessary to scrape data **and** why would Python be a good candidate?

Let's say I am a climate researcher and I would like to grab historical data from weather sources.. So, I search for "historical weather data"... and I get a similar page:

[![](images/2018-10-08-17_08_33-Arrest-Log-2010-with-addresses.xlsx-Excel-e1539044216598-1024x717.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-08-17_08_33-Arrest-Log-2010-with-addresses.xlsx-Excel.png)While the [National Oceanic and Atmospheric Agency](https://www.ncei.noaa.gov/) website [![](images/1marker-e1539044099777.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/1marker.png) should be trustworthy, I want to cross verify this data I've downloaded.

So I would like to use another service, let's check out the Weather Underground link [![](images/2marker-e1539044149447.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2marker-e1539044149447.png) :

[https://www.wunderground.com/history/](https://www.wunderground.com/history/)

Looking good, there's a place to enter a location! We'll use UCLA's zipcode which is:

90095

[![](images/2018-10-08-16_52_24-Weather-History-Data-Archive-_-Weather-Underground-e1539044246153-1024x487.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-08-16_52_24-Weather-History-Data-Archive-_-Weather-Underground.png)Then we'll hit Submit and on the next page, make sure to switch to monthly view:

[![](images/2018-10-08-16_54_42-Santa-Monica-Municipal_v2-e1539044261614-1024x625.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-08-16_54_42-Santa-Monica-Municipal_v2.png)Cool! We can get historical data going to at least the 1970s! Let's check out their API by clicking on the link at the bottom of the page:

[![](images/2018-10-08-17_00_07--1024x465.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-08-17_00_07-.png)

Upon clicking the page.. we learn that the API is:

**No longer accessible..**

[![](images/2018-10-08-17_04_13-API-_-Weather-Underground_v3-e1539044276215-1024x602.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-08-17_04_13-API-_-Weather-Underground_v3.png)So looks like if we really want to use this data we can copy and paste the data by hand, or we can programmatically download it!

So, let's get to it shall we?

### Step 1 - Setting up the script and Selenium

In most cases, we would use something simple like, "requests" to request data, however because the data on Weather Underground is loaded through JavaScript, we need to use a headless browser... Perfect for the spirit of Halloween, right?

The tool we will be using is called "Selenium" and you can learn more about it here:

[https://selenium-python.readthedocs.io/](https://selenium-python.readthedocs.io/)

Selenium, allows Python to run a headless browser which means you can send keyboard strokes, click on page buttons, and do other nifty stuff with websites. Selenium can also identify content and look for specific items!

For the adventurous and daring, here is a handy Selenium cheat-sheet:

[https://codoid.com/selenium-webdriver-python-cheat-sheet/](https://codoid.com/selenium-webdriver-python-cheat-sheet/)

Excited yet?

Well, to install it there are two steps:

1. Install Selenium through using: pip install selenium
2. Install a headless web driver by downloading one here:  [https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)
    1. This is the key component of Selenium, and we will be using the Firefox web driver (Gecko) please visit the link here to download it for your operating system:
        - **Windows:** Copy and paste the geckodriver.exe  file into your Python directory ("C:\\Python")
        - **Mac:** you can run "brew install geckodriver "
        - **Linux:** extract the tar file and open up the shell and add the path to the GeckoDriver to your system path:`export PATH=$PATH:/path/to/directory/of/executable/downloaded/webdriver`

Ok, with installation out of the way, time to test out if the installation works!

Start a new python file in Python IDE (or preferred editor) and add the following lines:

from selenium import webdriver

driver = webdriver.Firefox()
driver.get("https://www.google.com/")
driver.close()

Before running it, can you guess what is happening here?

First, our script is bringing the selenium library's "webdriver".

Next, we using selenium's webdriver to use Firefox and then setting it to a variable called "driver". If you were using a different browser, like Chrome or Edge, you would change this line to be "webdriver.Chrome" or "webdriver.Edge" respectively.

Remember if you don't like variable name "driver," you can change the name (as with all user created variables)!

The last two lines are going to a webpage, using driver.get and then closing the driver.

## Step 2 - Getting one piece of data first

Our first objective is to get One Piece:

\[caption id="attachment\_3437" align="alignnone" width="921"\][![](images/2018-10-09-19_59_12--e1539140520286.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-09-19_59_12-.png) The D stands for data.\[/caption\]

Using our previous code, we are going to check out the address of Weather Underground site:

https://www.wunderground.com/history/monthly/us/ca/santa-monica/KSMO/date/2018-10

Let's copy that into our script, thereby replacing our "google.com" link.

Referring to the Selenium cheat sheet, we notice there's something called, "find\_element\_by\_class\_name"! That sounds perfect!

Hold up, why? Well, all web content is organized in various ways, such as html tags and css classes. How we can identify the content we want is through right clicking and inspecting and element:

[![](images/2018-10-09-19_26_01_inspect_element-1024x561.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-09-19_26_01_inspect_element.png)

After clicking that, the debug tool bar will show up, and you can see the name of the content you are looking for (it will also highlight that on the page!):

[![](images/2018-10-09-19_28_40--1024x502.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-09-19_28_40-.png)

Let's find the right container for our data...

Aha! The summary-table looks like the perfect match:

[![](images/2018-10-09-19_31_32-Santa-Monica-Municipal-CA-History-_-Weather-Underground-1024x495.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-09-19_31_32-Santa-Monica-Municipal-CA-History-_-Weather-Underground.png)

So... using the power of the cheat sheet, or line will look like this:

driver.find\_element\_by\_class\_name("summary-table")   ## returns just the table we are interested in

This line is incomplete! Any ideas why?

Correct, it needs to be assigned to a variable, or else we can do anything with it!

Let's call it "elem", short for "elementary my dear Watson.":

elem = driver.find\_element\_by\_class\_name("summary-table")

The next step is to only get the text data in that table, luckily we will use Selenium clever tool called... .text on the "elem" variable:

data = elem.text

We'll also print our data so we can see it:

print data

And because we only want one piece of data, average temperature, we will use .split() to divide our text up based on a new line, which in Python looks like "\\n" .

data\_lines = data.split("\\n")

At this point our script should look like this:

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("https://www.wunderground.com/history/monthly/us/ca/santa-monica/KSMO/date/2018-10")

elem = driver.find\_element\_by\_class\_name("summary-table") 
data = elem.text
print data
data\_lines = data.split("\\n")
driver.close()

Not too interesting at the moment, but if you want you can also add a print data\_lines so you can see the separated content of our data!

The time has come to make a loop and grab the only piece of data we are interested in, the average temperatures for a month.

Start by making a Python for-loop that splits the content of the lines based on spaces:

for line in data\_lines:
    line\_content = line.split(" ")

With that out of the way, we just need to account for the first two lines, because "Avg Temperature" is our way of making sure we got the correct line of data. Besides, data without labels is pretty hard to work with!

So we'll use an "if statement" that looks for the "Avg" within the first line content.. this means if the line starts with "Avg", that the average temperature line we are looking for! Recall that \[0\] means the first object in that list!

if line\_content\[0\] == "Avg":

Next we will join the lines together using the .join() function and set it to be the first two content of the lines:

data\_title = " ".join(new\_line\[:2\])

I use the name "data\_title" as it refers "avg temperature" which is the data we are aiming for.

We will then join the rest of the data together using a comma separator and the reverse of the index command we just used:

        sep = ","
        temp\_data = sep.join(new\_line\[2:\])
        line\_data = title+sep+temp\_data
        print line\_data

The sep  variable is optional, but it makes the code more flexible in case we no longer like commas and want to use another separator.

Wallah! This should print out the data for October 2018, unless you forget to copy the line, print line\_data !

Our code should look like this:

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("https://www.wunderground.com/history/monthly/us/ca/santa-monica/KSMO/date/2018-10")

elem = driver.find\_element\_by\_class\_name("summary-table")   ## returns just the table we are interested in
data = elem.text
data\_lines = data.split("\\n")
# print data\_lines                                          ## shows us the data table
for line in data\_lines:
    line\_content = line.split(" ")
    if line\_content\[0\] == "Avg":
        data\_title = " ".join(new\_line\[:2\])
        sep = ","
        temp\_data = sep.join(new\_line\[2:\])
        line\_data = title+sep+temp\_data
        print line\_data
driver.close()

## Step 3 - A wide range of loops!

With one piece of data out of the way we are now going loop through the data and get even more data sets!

Our objective is to use Weather Underground's historical data, and remembering that the url ends with the "year-month" format, this means we need to format our dates accordingly!

One good way to start this next step is to open a new file, because we don't need the browser just yet!

Let's create a variable for start year and end year, to signify what period we want to look at.

We'll also create an empty array called "study\_period" that contains all the dates we will be looking at.

start\_year = 2017
end\_year = 2018

study\_period = \[\]

We will then create a function that will format the dates in the way we need:

def add\_month\_to\_years(year,month):
    this\_period = str(year) +"-"+ str(month)
    study\_period.append(this\_period)

Because this is a function, I opted to use "-" instead of a variable for the separator to keep it short and memory efficient. The two parameters I am creating are "year" and "month" which are then put into the "this\_period" variable combined with the "-" character. Lastly, we will then add the data to the study\_period array using append().

The next step is to go through each year from our start\_year and end\_year variables and then add the months to it:

for years in range(start\_year,end\_year+1):
    for month in range(1,13):
        add\_month\_to\_years(years,month)
print study\_period

Notice how +1 is added to end\_year and the range? Recall that in Python Indexes begin at 0, so to use real numbers, 1 extra value needs to be added, or else the range will stop too early (at 11 in the case of the month).

We also use the function we created, which nicely adds all the data into our study\_period array. The last line is to print out the final array.

Our code should look like this:

start\_year = 2017
end\_year = 2018

study\_period = \[\]

def add\_month\_to\_years(year,month):
    this\_period = str(year) +"-"+ str(month)
    study\_period.append(this\_period)

for years in range(start\_year,end\_year+1):
    for month in range(1,13):
        add\_month\_to\_years(years,month)
print study\_period

If it runs and you have the data all nice, the time has come to integrate it into our main code by the magic of copy and pasting!

After doing so, we need to in case our lines beginning with "driver.get()" to "line\_data" in a for loop, like so:

for time in study\_period:
    driver.get("https://www.wunderground.com/history/monthly/us/ca/santa-monica/KSMO/date/2018-10)
    elem = driver.find\_element\_by\_class\_name("summary-table")   ## returns just the table we are interested in
    data = elem.text
    data\_lines = data.split("\\n")                                    
    for line in data\_lines:
        new\_line = line.split(" ")
        if new\_line\[0\] == "Avg":
            sep = ","
            data\_title = " ".join(new\_line\[:2\])
            temp\_data = sep.join(new\_line\[2:\])
            line\_data = data\_title+sep+temp\_data

No we will replace 2018-10  in our url with "time" so that we loop through all the times we made earlier!

We will also add time to "line\_data" or else we won't know what time period the data represents. Remember to add the sep in between data\_title and time or your data will be combined together.

Finally, we will create a new array outside of the loop called collected\_temperature\_data and append to this array right after line\_data.

Our mostly completed code should look like this:

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()

start\_year = 2017
end\_year = 2018

study\_period = \[\]

def add\_month\_to\_years(year,month):
    this\_period = str(year) +"-"+ str(month)
    study\_period.append(this\_period)

for years in range(start\_year,end\_year+1):
    for month in range(1,13):
        add\_month\_to\_years(years,month)
print study\_period

collected\_temperature\_data = \[\]

for time in study\_period:
    driver.get("https://www.wunderground.com/history/monthly/us/ca/santa-monica/KSMO/date/"+time)
    elem = driver.find\_element\_by\_class\_name("summary-table")   
    data = elem.text
    data\_lines = data.split("\\n")
    # print data\_lines                                          
    for line in data\_lines:
        new\_line = line.split(" ")
        if new\_line\[0\] == "Avg":
            sep = ","
            data\_title = " ".join(new\_line\[:2\])
            temp\_data = sep.join(new\_line\[2:\])
            line\_data = time+sep+title+sep+temp\_data                
            collected\_temperature\_data.append(line\_data)
driver.close()

After successfully running this we will be on the last step!

## Step 4 - See us CSVing the data!

Now we are at the stage of saving our data! So now, we will import the csv module which makes reading and writing csv files a snap! What is a CSV file you might ask? Well, a CSV is a text file that separates data with commas! Very handy for data analysis!

Add this line to the top of our file:

import csv

After the line, "end\_year" you can then also write the headers for our data and define the target csv file as out\_file, which will be written to using the csv.writer() method:

out\_file = open('average\_temperature\_'+str(start\_year)+'\_to\_'+str(end\_year)+'.csv', "wb")
writer = csv.writer(out\_file)
writer.writerow(\["Year-Month,Data-Title,Min,Avg,Max,Sum"\])

Out\_file looks complicated because it uses our start and end years to name our csv file. Now when you run the script a csv file with the start and end year will be created.

Writer.writerow is where we define our headers, and it gets written to the csv file.

Finally at the very end of our script,  we loop through our collected\_temperature\_data variable and write the data too:

for line in collected\_temperature\_data:
    writer.writerow(\[line\])

Wallah! You are done! The final script should look like the following:

import csv

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()

start\_year = 2017
end\_year = 2017

study\_period = \[\]
outfile = open('average\_temperature\_'+str(start\_year)+'\_to\_'+str(end\_year)+'.csv', "wb")
writer = csv.writer(outfile)
writer.writerow(\["Year-Month,Data-Title,Min,Avg,Max,Sum"\])

def add\_month\_to\_years(year,month):
    this\_period = str(year) +"-"+ str(month)
    study\_period.append(this\_period)

for years in range(start\_year,end\_year+1):
    for month in range(1,13):
        add\_month\_to\_years(years,month)

collected\_temperature\_data = \[\]

for time in study\_period:
    driver.get("https://www.wunderground.com/history/monthly/us/ca/santa-monica/KSMO/date/"+time)
    elem = driver.find\_element\_by\_class\_name("summary-table")   ## returns just the table we are interested in
    data = elem.text
    data\_lines = data.split("\\n")
    # print data\_lines                                          ## shows us the data table
    for line in data\_lines:
        new\_line = line.split(" ")
        if new\_line\[0\] == "Avg":
            sep = ","
            data\_title = " ".join(new\_line\[:2\])
            temp\_data = sep.join(new\_line\[2:\])
            line\_data = time+sep+data\_title+sep+temp\_data                ## we put the year-month, tricky title, and temperature data here
            collected\_temperature\_data.append(line\_data)
    print collected\_temperature\_data
driver.close()

for line in collected\_temperature\_data:
    writer.writerow(\[line\])

print "you have finished the data collection!"

## Open the CSV file in Excel:

Let's open the CSV file to see if there any issues!

[![](images/2018-10-10-11_12_29-average_temperature_2017_to_2017.csv-Excel-e1539195182821.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-10-11_12_29-average_temperature_2017_to_2017.csv-Excel.png)

Aha! The script puts our data in one column.. So let's use Text to Columns  and save out the CSV file correctly:

[![](images/2018-10-10-11_13_21-average_temperature_2017_to_2017.csv-Excel-1024x455.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-10-11_13_21-average_temperature_2017_to_2017.csv-Excel.png)

Choose "delimited" and then use the "comma" as the separator:

[![](images/2018-10-10-11_14_44-average_temperature_2017_to_2017.csv-Excel-e1539195339753.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-10-11_14_44-average_temperature_2017_to_2017.csv-Excel.png)

Your final file should look like this:

[![](images/2018-10-10-11_18_01-average_temperature_2017_to_2017.csv-Excel-e1539195510842.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/10/2018-10-10-11_18_01-average_temperature_2017_to_2017.csv-Excel.png)

If you are at this point, we are ready to visualize!

## [Go to Part 2: Visualizing Data with Python](https://sandbox.idre.ucla.edu/sandbox/visualizing-data-with-python)
