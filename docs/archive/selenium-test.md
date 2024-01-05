---
title: "Selenium Test"
date: "2017-05-11"
categories: 
  - "python"
  - "tools"
---

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
