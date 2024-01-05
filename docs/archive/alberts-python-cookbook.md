---
title: "Albert's Python Cookbook"
date: "2017-05-09"
categories: 
  - "python"
  - "tools"
---

### Write a csv file

import csv

with open('YOUR FILE NAME.csv', "wb") as csvFile:
        writer = csv.writer(csvFile, delimiter=',')
        for line in dataSET:
            writer.writerow(line)

### Find something in a text string:

someArray = \["Institute", "for", "Digital", "Research", "and", "Education"\]

for object in someArray:
    if "it" in object:
        print "these objects have the letters 'it': "+object

    if "it" not in object:
        print "these objects do not have the letters 'it': "+object

### Add arguments to python in command line:

import sys

print 'Number of arguments:', len(sys.argv), 'arguments.'
print 'Argument List:', str(sys.argv)

### Read CSV from command line argument:

#open the csv file    
f = open("somedata.csv")

#define csv variable
csv\_f = csv.reader(f)

#loop
for row in csv\_f:
    #do something with each row
    print row

### Selenium

import sys, unittest, time, re, selenium
 
class Sel(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        print "waiting"
        self.driver.implicitly\_wait(30)
        self.base\_url = "https://twitter.com"
        self.verificationErrors = \[\]
        print "going"
        self.accept\_next\_alert = True
    def test\_sel(self):
        driver = self.driver
        delay = 3
        driver.get(self.base\_url + "/search?q=stckoverflow&src=typd")
        driver.find\_element\_by\_link\_text("View all").click()
        for i in range(1,5):
            self.driver.execute\_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(4)
        html\_source = driver.page\_source
        data = html\_source.encode('utf-8')
        print data
 
if \_\_name\_\_ == "\_\_main\_\_":
    unittest.main()

### [Scrapy Tutorial](https://sandbox.idre.ucla.edu/sandbox/scrapy-tutorial)

 

### [Back to workshop](https://sandbox.idre.ucla.edu/sandbox/web-scrapin-focus-on-python)
