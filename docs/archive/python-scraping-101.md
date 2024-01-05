---
title: "Python Scraping 101"
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

page = requests.get('https://twitter.com/search?f=tweets&vertical=news&q=ucla')

We could avoid page = **but** we want to use the page we get, so we have to set it to a variable; otherwise it would just be sitting around doing nothing.

Let's use the module we imported and print the result:

print page.content

What does your script return?

In looking at our url https://twitter.com/search?f=tweets&vertical=news&q=ucla, we can see that q=ucla is our search term, but we are going to make it a variable called search term and add it to the url, like so:

searchTerm = 'ucla'

page = requests.get('https://twitter.com/search?f=tweets&vertical=news&q='+searchTerm)

Your code should look similar to this:

import requests,os,csv
from lxml import html,etree
from collections import defaultdict

searchTerm = 'ucla'

page = requests.get('https://twitter.com/search?f=tweets&vertical=news&q='+searchTerm)
print page.content

## Part II - Let's Treat the Nodes Right

Next we want to use the tree and html modules, because that allows us to search nodes:

tree = html.fromstring(page.content)

html.fromstring allows us to search the page as a tree, rather than simply text, but how do we search?

We have to use the "xpath" module from the tree.

Let's use an example by grabbing all the links from twitter:

for node in tree.xpath('//a/@href'):
    print node

What this does is for all the nodes in tree.xpath , it looks for all the 'a' anchors that have an 'href' attribute and prints the node. With xpath, you can traverse down a tree and grab the children with each '/' character.

\[expand title="How would you store the result into a variable?"\]

links = tree.xpath('//a/@href')

\[/expand\]

Let's look for the time aspect and put into a variable:

tweetTimes = tree.xpath('//small/a/@title')

Feel free to print it out if you'd like.

Let's get some other nodes, like the twitter content and usernames:

#identify the target tag for the course name here
userName = \[node.text\_content() for node in tree.xpath('//\*\[@class="fullname show-popup-with-id "\]')\]

#identify the target tag for the class description here
tweetContent = \[node.text\_content() for node in tree.xpath('//\*\[@class="TweetTextSize  js-tweet-text tweet-text"\]')\]

Notice the the brackets around the two variables, this allows us to put the results into a list. Next, look at node.text\_content() , this is a function to get the **ONLY** the text of the nodes we found, instead of the html tags and text.

Your code should look like this:

import requests,os,csv

from lxml import html,etree
from collections import defaultdict

#the url goes here after "get"
page = requests.get('https://twitter.com/search?f=tweets&vertical=news&q=ucla)
tree = html.fromstring(page.content)

tweetTimes = tree.xpath('//small/a/@title')
userName = \[node.text\_content() for node in tree.xpath('//\*\[@class="fullname show-popup-with-id "\]')\]
tweetContent = \[node.text\_content() for node in tree.xpath('//\*\[@class="TweetTextSize  js-tweet-text tweet-text"\]')\]

## Step 3 Time to loop it around

Half-way there! Now we will systematically take clean the data by using a for-loop.

A loop in Python has the following components:

for something in someArray:
    #do something<br>

for \[simple\_tooltip content='This is an alias for indivudal items'\]something\[/simple\_tooltip\] in \[simple\_tooltip content='this is a list of items'\]someArray\[/simple\_tooltip\]: \[simple\_tooltip content='Here is where you have code to do an action with each item'\]#do something\[/simple\_tooltip\]<br>

For example:

someArray = \[0,1,2,3,4,5\]

for number in someArray:
    print number

In order to do a loop, something needs be looped over, in this case it is some array of numbers.

Let's add this code to our Twitter scraper:

#set an array for the tweet contents
theTweets=\[\]

#loop for the content
for contents in tweetContent:
    cleanTweet = contents.encode('utf-8')
    theTweets.append(cleanTweet)
    # print theTweets

In Line 2, we are creating an empty to store our tweet contents. In line 5, we begin our for-loop, and encode the contents into 'utf-8' to get rid of special characters (sorry emojis, not sorry) with contents.encode('utf-8') . Then we add our emoji-free content to the Tweets array using theTweets.append(single) . We can print each clean tweet if we wanted using print theTweets .

Go ahead and add similar arrays and for-loops for the usernames.

#set an array for the usernames
userNames = \[\]

#loop for the userName
for names in userName:
    cleanUsername= names.encode('utf-8')
    userNames.append(cleanUsername)

\[expand title="Your code should look like the following:"\]

import requests,os,csv

from lxml import html,etree
from collections import defaultdict

searchterm = 'ucla'

page = requests.get('https://twitter.com/search?f=tweets&vertical=news&q='+searchterm)
tree = html.fromstring(page.content)

userName = \[node.text\_content() for node in tree.xpath('//\*\[@class="fullname show-popup-with-id "\]')\]

tweetContent = \[node.text\_content() for node in tree.xpath('//\*\[@class="TweetTextSize  js-tweet-text tweet-text"\]')\]

time = tree.xpath('//small/a/@title')

theTweets=\[\]

for contents in tweetContent:
    cleanTweet = contents.encode('utf-8')
    theTweets.append(cleanTweet)
    # print single

userNames = \[\]

for names in userName:
    cleanUsername= names.encode('utf-8')
    userNames.append(cleanUsername)
    
theTimes = \[\]

for eachTime in time:
    cleanTimes = eachTime.encode('utf-8')
    theTimes.append(cleanTimes)

\[/expand\]

## Step 4 Put it into a CSV

Now that we have everything cleaned up, we are going to write it to a csv file:

targetFile = open("./"+searchTerm+".csv", "wb")
writer = csv.writer(targetFile)
writer.writerow(\["User Name", "Tweet","Time"\])

Line 1 gives us the target file, which is going to be our very own "searchTerm".csv. Line 2 targets our file with csv.writer, and assigns it to "writer". Line 3 finally writes our first csv row with our headers using writerow() .

We can check our data to make sure the number of tweets and usernames are the same with the following:

print 'number of contents found:',len(theTweets)
print 'number of users:',len(userName)

Now we will prepare our twitter data by zipping it up, this is a necessary step if you have more than one column of data.

#zip the data up
theData=(zip(userNames,theTweets,time))

The order of the zip should match the order of our headings that we typed in the previous new code.

Finally, we will do our last for-loop and close the csv file:

#write the data into the csv file
for row in theData:
    writer.writerow(row)
    print row

targetFile.close()
print "done with script"

### Congratulations you have scraped a Twitter page!!

## Extra step: Let's add some user input

But wait, instead of searching for "ucla" all the time, we can have the user input a search term by doing the following:

#ask the user for the search term
searchterm = str(raw\_input("What is the search term? \\n"))

Your final code should look like the following:

#bring in modules
import requests,os,csv

#bring in classes from modules
from lxml import html,etree
from collections import defaultdict

#ask the user for the search term
searchTerm = str(raw\_input("What is the search term? \\n"))

#the url goes here after "get"
page = requests.get('https://twitter.com/search?f=tweets&vertical=news&q='+searchTerm)
tree = html.fromstring(page.content)
# print page.content

#identify the target tag for the user name here
userName = \[node.text\_content() for node in tree.xpath('//\*\[@class="fullname show-popup-with-id "\]')\]
# print user name

#identify the target tag for the class description here
tweetContent = \[node.text\_content() for node in tree.xpath('//\*\[@class="TweetTextSize  js-tweet-text tweet-text"\]')\]
#print content

#identify the target tag for the class description here
time = tree.xpath('//small/a/@title')
#print time

#set an array for the tweet contents
theTweets=\[\]

#loop for the content
for contents in tweetContent:
    cleanTweet = contents.encode('utf-8')
    theTweets.append(cleanTweet)
    # print single

#set an array for the usernames
userNames = \[\]

#loop for the userName
for names in userName:
    cleanUsername= names.encode('utf-8')
    userNames.append(cleanUsername)
    
# print theContents

#write the new csv file
targetFile = open("./"+searchTerm+".csv", "wb")
writer = csv.writer(targetFile)
writer.writerow(\["User Name", "Tweet","Time"\])

#summarize the data for the user
print 'number of contents found:',len(theTweets)
print 'number of users:',len(userName)

#zip the data up
theData=(zip(userNames,theTweets,time))

#write the data into the csv file
for row in theData:
    writer.writerow(row)
    print row

#finish the script by closing the csv file and letting the user know
print "done"
targetFile.close()

#### [Back to the workshop](https://sandbox.idre.ucla.edu/sandbox/web-scrapin-focus-on-python)
