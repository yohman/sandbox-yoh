---
title: "Python and the Web"
date: "2018-01-17"
---

## Part I - Setting up the script

Start a new python script in either your preferred text editor or Python IDE.

To work with the web, our python script needs to send out data, one way to do this is using the built-in "request" module. Bring it in using the following:

import requests

The only extra library we will be using is lxml, which is a module used to parse and search through xml.

You can either import the whole module with "import lxml" or you can take the classes we are interested in which is the html and etree. For later, we will also need defaultdict from collections too. So the code should look like this:

from lxml import html,etree
from collections import defaultdict

Now, let's use the request by setting a variable and getting a page:

page = requests.get('http://www.google.com/search?tbm=isch&q='+searchTerm)

We could avoid page = **but** we want to use the page we get, so we have to set it to a variable; otherwise it would just be sitting around doing nothing.

Let's use the module we imported and print the result:

print page.content

What does your script return?

In looking at our url http://www.google.com/search?tbm=isch&q=ucla , we can see that q=ucla is our search term, but we are going to make it a variable called search term and add it to the url, like so:

searchTerm = 'ucla'
page = requests.get('http://www.google.com/search?tbm=isch&q='+searchTerm)

Your code should look similar to this:

import requests,os,csv
from lxml import html,etree
from collections import defaultdict

searchTerm = 'ucla'

page = requests.get('http://www.google.com/search?tbm=isch&q='+searchTerm)
print page.content

## Part II - Let's us Nodes what is going on

Next we want to use the tree and html modules, because that allows us to search nodes:

tree = html.fromstring(page.content)

html.fromstring allows us to search the page as a tree, rather than simply text, but how do we search?

We have to use the "xpath" module from the tree.

Let's use an example by grabbing all the links from the page:

for node in tree.xpath('//a/@href'):
    print node

What this does is for all the nodes in tree.xpath , it looks for all the 'a' anchors that have an 'href' attribute and prints the node. With xpath, you can traverse down a tree and grab the children with each '/' character.

\[expand title="How would you store the result into a variable?"\]

links = tree.xpath('//a/@href')

\[/expand\]

We are only going to grab the images, so let's use the img tag.

images = tree.xpath('//img')

This should work, but it will return the actual images.. That's no good! We actually want the image sources, so we just need to add another node  to get that attribute called @src

images = tree.xpath('//img/@src')

Feel free to print it out if you'd like.

Your code should look like this:

import requests,os,csv
from lxml import html,etree
from collections import defaultdict

searchTerm = 'ucla'
page = requests.get('http://www.google.com/search?tbm=isch&q='+searchTerm)

tree = html.fromstring(page.content)
images = tree.xpath('//img/@src')
print images

### Step 3 - Let's close the loop

Remember that a loop in Python has the following components:

for something in someArray:
    #do something<br>

for \[simple\_tooltip content='This is an alias for indivudal items'\]something\[/simple\_tooltip\] in \[simple\_tooltip content='this is a list of items'\]someArray\[/simple\_tooltip\]: \[simple\_tooltip content='Here is where you have code to do an action with each item'\]#do something\[/simple\_tooltip\]<br>

For example:

someArray = \[0,1,2,3,4,5\]

for number in someArray:
    print number

In order to do a loop, something needs be looped over, in this case it is some array of numbers.

Let's add this code to our Google scraper:

#set an array for the image contents
theData = \[\]

#loop for the content
for source in images:
    theData.append(source)
    print source

In Line 2, we are creating an empty to store our image source contents, and calling it theData . In line 5, we begin our for-loop. Then we add our content to theData array using theData.append(source) . We can print each clean source if we wanted using print source.

## Step 4 Put it into a CSV

Now that we have everything cleaned up, we are going to write it to a csv file:

targetFile = open("./"+searchTerm+".csv", "wb")
writer = csv.writer(targetFile)

Line 1 gives us the target file, which is going to be our very own "searchTerm".csv. Line 2 targets our file with csv.writer() , and assigns it to "writer".

We can check our images with the following:

print 'number of images found:',len(images)

Finally, we will do our last for-loop and close the csv file:

#write the data into the csv file
for row in theData:
    writer.writerow(\[row\])
    print row

targetFile.close()
print "done with script"

Make sure that "row" is within brackets or the csv file will be weird!

### Congratulations you have scraped a Google page!!

## Extra step: Let's add some user input

But wait, instead of searching for "ucla" all the time, we can have the user input a search term by doing the following:

#ask the user for the search term
searchterm = str(raw\_input("What is the search term? \\n"))

Your final code should look like the following:

import requests,os,csv
from lxml import html,etree
from collections import defaultdict

#ask the user for the search term
searchTerm = str(raw\_input("What is the search term? \\n"))

page = requests.get('http://www.google.com/search?tbm=isch&q='+searchTerm)

tree = html.fromstring(page.content)
images = tree.xpath('//img/@src')
print images

#set an array for the image contents
theData = \[\]

#loop for the image source
for source in images:
    cleanSource = source.encode('utf-8')
    theData.append(source)
    print source

#define the target csv
targetFile = open("./"+searchTerm+".csv", "wb")
writer = csv.writer(targetFile)

#write the data into the csv file
for row in theData:
    writer.writerow(\[row\])
    print row

print 'number of images found:',len(images)

targetFile.close()
print "done with script"

#### [Back to the workshop](https://sandbox.idre.ucla.edu/sandbox/web-scrapin-focus-on-python)
