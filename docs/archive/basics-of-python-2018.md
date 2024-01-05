---
title: "And now for something completely different..."
date: "2018-01-17"
---

## [![](images/somethingDifferent-e1516153285486.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/somethingDifferent-e1516153285486.png)Syntax

Like any language, computer or human, Python has some ground rules for being spoken. Welcome to Python Club. The first rule of Python Club is:

You must correctly indent in Python Club.

Here is the second rule of Python Club:

You MUST correctly indent in Python Club.

In other words, spaces and indentation are very important in Python.

Whenever you see a ":" you should start **a new line** and then **indent four spaces** **from the previous line** because these are a nested statement.

\[TBS\_ALERT color="info" heading="What the colon?"\]More like what the code blockin' Essentially, the colon is used to denote a code block, which will be discussed soon.\[/TBS\_ALERT\]

These rules make Python a good programming language for beginners because it teaches disciplined formatting.

## Showing outputs: Print

Check outputs by using the in-built "**print**" function, for example print( "hello python club") will print out your welcome to the club.

#### \[expand title="Congratulations welcome to Python Club"\][![](images/python_club-226x300.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2017/05/python_club.png)\[/expand\]

## Assigning Variables

To speak effectively in Python you have to use variables, which are defined with an = sign. Unlike some computer languages, variables are typed (treated as a number or text) depending on how they are defined. This makes Python easily readable.

For example:

awesome = "some text"

Creates a variable called "awesome" that is a string of characters called "some text", while:

awesome = 10

Creates a variable with a value of 10.

So awesome + awesome = 20 neat, right?

Adding variables to print commands

## Using Lists/Arrays

Variables can also be defined as a list. A list is a collection of items stored in brackets, like so:

UCLA = \['University','of','California','Los Angeles'\]

You can access objects in a list in a couple ways, one is directly calling it's place in the index. Python uses a **zero-based index,** this means that **index starts at 0**, so UCLA\[0\]  would return "University".

One common use is to slice the list using a colon, the location of the colon indicates which direction to grab the data from. If I wanted everything after California I would use UCLA\[:2\] .

## Defining a function

Think of the formula for a line (y = mx + b), where **y** changes depending on what the formula for **x** is. In Python, the function gets defined for dealing with parameters. The syntax is as follows:

def my\_function(parameter1,parameter2):
     result = parameter1+parameter2
     return result
my\_function(10,10)

Here is what the function for a line would look like:

def line\_function(x,slope,intersect):
    y = (slope\*x)+b
    return y
line\_function(10,5,5)

## Importance of Importing

Use "import" to bring in modules, also known as external tools and functions.

For example import datetime would bring in date and time functions, like datetime.datetime.now() will tell you the exact time.

## Import parts of a module

To use certain parts of another module and you can also do

from datetime import datetime which would take the "datetime" function, but not the whole "datetime" module.

If done correctly, the following code should work:

datetime.now()

There we are using "datetime" as if we created the function ourselves, but in fact we borrowed it from the (badly named) datetime module.

## Conditionals, loops, and exceptions- Oh my!

What does a "If-Statement", a "for-loop", and "try, except" have in common? They all exist inside a code block, because they are nested.

An if-statement uses an operator to check/compare various variables and statements:

a = 5
b = 10
if a > b:
    print(a + " is bigger than " + b)

A for-loop is designed to loop through an array items and do something with them, which can also be combined with a conditional:

sample\_array = \[1,2,3,4,5,6\]
for number in sample\_array:
    if number > 5:
        print(str(number) + " is greater than 5)

You can also set a range to loop through, rather than a per-defined list of numbers:

for number in range(0,10):
    print(number)

Finally, a try/except is a code block that will try to run, but return an error when it does not. For example:

try:
   normal\_operation = (10/10)
   broke\_operation = (10 / 0)
except:
   print("there was a mistake somewhere")

## Code Organization

Much like an essay, Python code flows from top to bottom.

For example: If you ran the datetime.now() before importing it will not run at all.

While coders may have different styles of arranging, what is most important is readability.  As such, the Python developers have created official coding guidelines for Python at the PEP Style Guide for Python:

[https://www.python.org/dev/peps/pep-0008/#id15](https://www.python.org/dev/peps/pep-0008/#id15)

Now that we have some fundamentals, we can now move on to some real examples of Python uses.
