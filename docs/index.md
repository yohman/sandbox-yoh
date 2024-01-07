---
hide:
  - navigation
  - toc
---



<style>
    body {
        background-image: url('projects/current/images/{{random_image}}');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>

<script>
    const images = ['FineArts1_Oct26.jpg','FineArts2_Oct26.jpg','StreetofCairo1_Oct26.jpg','Trans_01_May10.jpg','UST_WCE_6-scaled.jpg','VSim2_DemoImage_Dec2018.jpg','WCE_Agriculture_UCLA_Nov5_2015.jpg','WCE_Bridge_UCLA_Nov5_2015.jpg','WCE_Caravels_UCLA_Nov5_2015.jpg','WCE_ConventofLaRabida1_UCLA_Nov5_2015.jpg','WCE_FestivalHall_UCLA_Nov5_2015.jpg','WCE_FineArtsBldg_Int_UCLA_Nov5_2015.jpg','WCE_FineArtsBldg_UCLA_Nov5_2015.jpg','WCE_Horticulture_UCLA_Nov5_2015.jpg','WCE_Illinois_UCLA_Nov5_2015.jpg','WCE_LouisianaStateBldg_UCLA_Nov5_2015.jpg','WCE_MaineStateBldg_UCLA_Nov5_2015.jpg','WCE_Manufactures_UCLA_Nov5_2015.jpg','WCE_MassStateBldg_UCLA_Nov5_2015.jpg','WCE_RoseGarden_UCLA_Nov5_2015.jpg','WCE_WisconsinStateBldg_UCLA_Nov19_2015.jpg','WomansTerrace1_Oct26.jpg']

    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Replace '{{random_image}}' with the randomly chosen image
    document.querySelector('body').style.backgroundImage = `url('projects/current/images/${randomImage}')`;
</script>



<style>
    .l-text {
        font-size: 24px;
        color: white;
        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
    }
    .xl-text {
        font-size: 48px;
        color: black;
        text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
    }
    .text-bubble {
        position: fixed;
        bottom: 80px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        width: 400px;
    }
</style>


<span class="l-text" style="font-family: 'Architects Daughter', cursive;">Welcome to the technology sandbox</span>
<br>
<span class="xl-text" style="font-family: 'Architects Daughter', cursive;">Where researchers come to play.</span>

<div class="text-bubble">
    This background image was captured from the real-time computer model of The World’s Columbian Exposition of 1893 during an interactive flight session.
</div>

