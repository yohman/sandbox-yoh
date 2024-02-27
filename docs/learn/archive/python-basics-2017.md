---
title: "Python Basics 2017"
date: "2018-01-17"
---

## Syntax

Like any language, computer or human, Python has some ground rules for being spoken. Welcome to Python Club. The first rule of Python Club is:

You must correctly indent in Python Club.

Here is the second rule of Python Club:

You MUST correctly indent in Python Club.

In other words, spaces are very important in Python.

Whenever you see a ":" you should have indented **four spaces** because the next lines are within a nested statement.

These rules make Python a good programming language for beginners because it teaches disciplined formatting.

## Print

Check outputs by using the "print" command, for example print "hello python club" will print out your welcome to the club.

#### \[expand title="Congratulations welcome to Python Club"\][![](images/python_club-226x300.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2017/05/python_club.png)\[/expand\]

## Importance of Importing

Use "import" to bring in modules, also known as external tools and functions.

For example import datetime would bring in date and time functions, like datetime.datetime.now() will tell you the exact time.

## Import parts of a module

To use certain parts of another module and you can also do

from datetime import datetime which would take the "datetime" function, but not the whole "datetime" module.

If done correctly, the following code should work:

datetime.now()

There we are using "datetime" as if we created the function ourselves, but in fact we borrowed it from the (badly named) datetime module.

## Variables

To speak effectively in Python you have to use variables, which are defined with an = sign. Unlike some computer languages, variables are typed (treated as a number or text) depending on how they are defined. This makes Python easily readable.

For example:

awesome = "some text"

Creates a variable called "awesome" that is a string of characters called "some text", while:

awesome = 10

Creates a variable with a value of 10.

So awesome + awesome = 20 neat, right?

You can also define lists, arrays, and tuples. These are simple collection of items stored in brackets, like so:

UCLA = \['University','of','California','Los Angeles'\]

## Organization

Much like an essay, Python code flows from top to bottom.

For example: If you ran the datetime.now() before importing it will not run at all.
