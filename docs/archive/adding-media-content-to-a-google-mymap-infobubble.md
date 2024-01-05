---
title: "Adding Media Content to a Google MyMap Infobubble"
date: "2013-08-09"
categories: 
  - "tutorials"
---

[![googleEarth](images/googleEarth.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2013/08/googleEarth.png)

You would think that adding youtube video's to an infobubble using Google's MyMaps would be easy.  It turns out that unless you follow a series of undocumented steps, the youtube video will not embed successfully.  Here are the steps needed in order to embed a video successfully into an infowindow.

1. Go to the Youtube page that has the video you want to embed. For example, check out this video of [Randy Newman's tour of Sunset Blvd](http://www.youtube.com/watch?v=vNteJfogiDs).
2. Click on "Share" and then "Embed"
3. Add "http:" to the "src="//www.youtube.com/"parameter.

For example, using our Randy Newman video:

<iframe width="420" height="315" src="//www.youtube.com/embed /vNteJfogiDs" frameborder="0" allowfullscreen></iframe>

We need to change it to:

<iframe width="420" height="315" src="http://www.youtube.com/embed/vNteJfogiDs" frameborder="0" allowfullscreen></iframe>
