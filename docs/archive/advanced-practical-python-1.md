---
title: "Advanced Practical Python #1: Getting Warmed Up"
date: "2018-04-04"
---

In the first part of our Advanced Practical Python workshop we are going to create a script the moves our files into folders based on the file type (also known as file extension).

**Warning:** This script WILL move your files so do not run it in a system directory or somewhere that you did not want to have organized! THERE IS NO UNDO!!!! [?](https://emojipedia.org/smiling-face-with-smiling-eyes/)

## Part 1. Getting a basic count of files

Let's start with importing some built in Python modules:

#import modules
import shutil
import os

"import Shutil" brings in shell utilities which allows Python to interact in the command line, and "import os" allows interaction with the operating system.

After bringing these imports in, we are going to use os.listdir  to list all the directories where ever this script is running:

folders = os.listdir("./")

We will use what I call "fancy printing" to avoid the issue with blank folders, which uses brackets as placeholders and the .format() to place variables inside:

print "here are the folders: {}".format(folders)

Next we will 'walk' through our folders and just get a count of the number of files in there:

count = 0
#'walk' through the directories
for files in os.walk("."):
    for filename in files:
        count +=1
print "This is the count of files {}".format(count)

Count just gives us a place holder for the number, before we begin a for-loop within os.walk(".")

Within that for-loop, we will nest another loop (for the file names later on) and increment the count.

Then we'll finally print the count.

We now have a basic function that counts the total number of files within the scripts folder.

## Part 2. Counting unique file extensions

Let's do something more useful and get the specific file types of the files within the folder. Set a blank array for the file types with file\_types = \[\]  we will then encase our function in a file name loop because the current loop just deals with "walking." The next line of code then splits the entire file name when you encounter the first "." using filename.split(".")

file\_types =\[\]

#'walk' through the directories
for files in os.walk("."):
    for filename in files:
        extension = filename.split(".")\[-1\]

Remember that in Python, you can get the values of an index by using brackets. In this case we want the last value after a "." so we use \[-1\]

For example, given some\_array = \["apple", "grape", "melon"\] then some\_array\[0\] will return "apple".  We can also use colons to identify starting points, some\_array\[1:\] will return "grape" and "melon" while some\_array\[:1\] will return only "apple."

Now let's do something useful and get a list of unique extensions in our directory by adding the following **if-statement**:

file\_types = \[\]

#'walk' through the directories
for files in os.walk("."):
    for filename in files:
        print filename
        extension = filename.split(".")\[-1\]
        if extension not in file\_types:
            file\_types.append(extension)
print "{}".format(file\_types)

This if-statement adds unique extensions to the "filetypes" array using the "not in" condition.

If you get all the file types in your folder listed, then rejoice!

The next step is to create folders for each file extension and then move our files into there.

## Part 3. Moving files into folders

Now that we have a list of folders, we can loop through them and create folders. Start with our good friend, the for-loop and a print statement:

for file\_type in file\_types:
    print file\_type

Time to get functional and build a function!

In Python the format for a function is as follows:

def function\_name(parameters):
    #do something

Our function is going to look like this:

def create\_path(path):
    if not os.path.isdir(path):
        os.mkdir(path)

The name of the function is called create\_path  and it takes in a parameter called path  and what it simply does is make a path if it does not already exist. Pretty simple function, right?

But in order for a function to... function we need to use it, so let's do so:

create\_path(file\_type)

Make sure that create\_path is outside of the function definition (but still within our loop), or else it will not work.

Since the function will exists within the looping of file types, so the loop should look like this now:

for file\_type in file\_types:
    destination = "./"+file\_type+"/"
    def create\_path(path):
        if not os.path.isdir(path):
            os.mkdir(path)
    
    create\_path(file\_type)

Time to actually use those folders!

## Part 4. Moving your files into folders

Within the loop of for file\_type in file\_types:  we are going to add another loop inside of it! Adding loops within loops is a common exercise, in this instance our logic is as follows:

1. For each **file type** we are going to create a **directory** (if it does not already exist)
2. For each **file** we are going to see if it matches that **file type** and move it into that **directory**.

We already finished the first part, so now we just need to do the second, right? Not quite! We did create the directories, but we haven't used them yet! Let's direct the files to the correct "directories" with the following:

destination = "./"+file\_type+"/"

This allows us to set a destination that is a folder with the file type name.

You can put this destination variable right before our new for-loop:

destination = "./"+file\_type+"/"
for files in folders:
    #do something to 'files'

Ok, now we will loop through the files in the folders and move the files ONLY IF the extension ends with the same file\_type:

for files in folders:
    if files.endswith("."+file\_type):
        shutil.move(files,destination)

Line 1 starts the loop to look for files within the folders.

Line 2 is the conditional statement that looks for files that ends with the same file types using files.endswith("."+file\_type)

The last line finally moves the file over with shutil.move(files, destination)  using the destination  variable that we defined earlier.

Wait! Don't run the code just yet, because if you do.. the actual script will be moved as well...

Pop quiz! How would you work around this?

Times up! The solution is to use an if-else statement, like the following:

if files == 'fileOrganizer.py':
    print "found file organizer so ignoring it."
else:
    shutil.move(files,destination)

The logic here is that if "files" is equal to the name of your python script, ignore it! Otherwise, run the shutil.move command.

If you made it this far, congrats! You finished the warm up!

Your final script should look like the following:

import shutil
import os

#define the folders to look through
folders = os.listdir("./")

#set an array for the file types
file\_types = \[\]

#create a list of file types
for root, dirs, files in os.walk("."):
    for filename in files:
        the\_type = filename.split(".")\[-1\]
        if the\_type not in file\_types:
            file\_types.append(the\_type)
            
##OPTIONAL: print out the list of file types ##
print ('These are file types: \\n {}').format(file\_types)

for file\_type in file\_types:
    #define the function for making folders
    def create\_path(path):
        if not os.path.isdir(path):
            os.mkdir(path)

    #use the function
    create\_path(file\_type)
    
    #make a variable for the target destinations
    destination = "./"+file\_type+"/"
    
    #loop through each file in the folders
    for files in folders:
        if files.endswith("."+file\_type):
            if files == 'fileOrganizer.py':
                print "Found file organizer so ignoring it."
            else:
                shutil.move(files,destination)
print "Script has completed"

You can also find the code on GitHub here:

[https://github.com/albertkun/fileOrganizer/blob/master/fileOrganizer.py](https://github.com/albertkun/fileOrganizer/blob/master/fileOrganizer.py)

 Now on time for the second script!
