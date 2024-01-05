---
title: "Advanced Practical Python #2: Dictionary2csv"
date: "2018-04-04"
---

Our second APP is to convert a Python Dictionary to CSV file! And no, we aren't talking about a \[expand title="dictionary of pythons"\]

[![](images/2018-04-04-14_20_38-Snake-Dictionary_-9781861990877_-Amazon.com_-Books-e1522877096517-1024x467.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/04/2018-04-04-14_20_38-Snake-Dictionary_-9781861990877_-Amazon.com_-Books.png)

\[/expand\]

Now that the warm up is done, we are going to take things up a notch, which means more code and less explaining!

Let's start by importing the os and csv module and using the similar os.listdir tool from the previous session:

#import modules
import os
import csv

folders = os.listdir("./")

Now we will add a \[expand title="dictionary"\]

![https://i.pinimg.com/originals/27/da/b0/27dab0aea677e770540273d494d7d576.jpg](images/27dab0aea677e770540273d494d7d576.jpg)

\[/expand\]

There done.

Actually, no we will be adding a Python dictionary, which looks more like this:

fruits = {"apple": 12, "orange": 4, "pear":10,"purchased":"yes"}

Similar to an actual dictionary, a Python dictionary is a one to one mapping of keys(words) to values (definitions).

With a dictionary you can access the value of elements by calling the dictionary and its key inside quoted brackets like this: dictionary\_name\['key goes here!'\]

In our example: fruits\['apple'\]  will return 12.

Alright, let's create an empty dictionary called file\_types:

file\_types = {}

Now we are going to define a function that counts our file types, as follows:

def count\_filetype(filename):
    extension = filename.split(".")\[-1\]
    if extension not in file\_types.keys():
        file\_types\[extension\]=1

We use the similar "split" command on the "."'s of the filename that is being passed in as a parameter.

The if extension not in file\_types.keys():  is a bit different than the previous script, so let's break it down a little.

This if-not statement will check if the file **extension** is **not found as a key** in our **file\_types dictionary**.

The portion in the colon: file\_types\[extension\]=1  then adds the file extension with a value of 1 into our file\_types dictionary.

Most importantly, if the extension already exists in our dictionary, we need to add to that value! To do that, we add an else-statement:

else:
    file\_types\[extension\]+=1

This else-statement will then increase the value of the extension by 1.

## Part 2: Functional Walking

With our function ready to go, we are ready to walk through our directories and start counting:

for root, dirs, files in os.walk("."):
    for filename in files:
        count\_filetype(filename)

We set up our walk with a loop through "root, dirs, files" in os.walk:

And then loop again for filename in files:

And then apply our function:

We can print and output if we want to see how many file types we found too:

print str(len(file\_types))+" file types found."

Here is how the code should look at this point:

#import modules
import os
import csv

folders = os.listdir("./")

file\_types ={}

def count\_filetype(filename):
    extension = filename.split(".")\[-1\]
    if extension not in file\_types.keys():
        file\_types\[extension\]=1
    else:    
        file\_types\[extension\]+=1

#'walk' through the directories
for root, dirs, files in os.walk("."):
    for filename in files:
        count\_filetype(filename)
            
print str(len(file\_types))+" file types found."

If you run the script, you should be able to find the number of file types. If you want to see the dictionary you can just print file\_types  instead.

## Part 3. Output the Dictionary to CSV

We will now use our dictionary as the basis of a comma sperated value file (CSV).

Let's open up our CSV writer with a with statement!

with open('filelist.csv','wb') as outfile:

Here we are opening up a csv file called "filelist.csv" and giving it an alias of "outfile" since we don't want to type filelist.csv every single time we refer to it.

Next we will open up the csv writer by literally using csv.writer and assigning it to a variable writer... Aren't Python naming conventions great?

writer = csv.writer(outfile)

Let's create a header row by doing:

writer.writerow(\["File Types","Number"\])

And finally, we will loop through all the rows in the file\_types dictionary as items:

for row in file\_types.iteritems():

And within the loop for the rows we want to write each of those rows:

writer.writerow(row)

To be nice, we will then close the file:

outfile.close()

And print that we are done because we can!

print "done"

Here is the final code:

#import modules
import os
import csv

folders = os.listdir("./")

file\_types ={}

def count\_filetype(filename):
    extension = filename.split(".")\[-1\]
    if extension not in file\_types.keys():
        file\_types\[extension\]=1
    else:    
        file\_types\[extension\]+=1

#'walk' through the directories
for root, dirs, files in os.walk("."):
    for filename in files:
        count\_filetype(filename)
            
print str(len(file\_types))+" file types found."

with open('filelist.csv','wb') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(\["File Types","Number"\])
    for row in file\_types.iteritems():
        writer.writerow(row)
        
    outfile.close()
print "done"

Head on over to the next tutorial when you are ready:

[https://sandbox.idre.ucla.edu/sandbox/advanced-practical-python-3](https://sandbox.idre.ucla.edu/sandbox/advanced-practical-python-3)
