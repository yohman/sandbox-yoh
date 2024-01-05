---
title: "Python, Scraping, and Border Mapping"
date: "2019-06-05"
categories: 
  - "workshops"
---

## Python, Scraping, and Border Mapping

<a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mi&#47;MigrantDeaths\_15804327495940&#47;Dashboard1&#47;1\_rss.png' style='border: none' /></a>

    

<script type="text/javascript">var divElement = document.getElementById('viz1580509086766'); var vizElement = divElement.getElementsByTagName('object')[0]; if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='877px';} var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement);</script>

![human-border-mapping](images/human-border-mapping-e1551810866736-1024x347.png)

No data, no justice. As we try to imagine what border deaths _looks_ like, we need information, data to enable our visual production. Borders can be defined in any number of ways. A drawn line produced by pen on paper, or a digitally enabled cartographic vector line can demarcate one side from another; a physical barrier, such as an impenetrable wall may symbolize a contested and divisive border. Cognitive borders, however, may not be as easily defined as a simple drawing of a line, or a construction of a massive barrier. As Sarah Mekdjian notes in her article on _Mapping Mobile Borders_, "Borders cannot be reduced to a linear and territorial conception."

How then do we go about mapping human borders? This article/tutorial is a practical approach that seeks to address this question through the experimental mapping of _border deaths_ along the southern border of California and Mexico. It does so through the amalgamation of a suite of digital concepts and technologies, using **Python** for web-scraping border deaths, and various data visualization tools such as **Palladio** to inform us on the temporal and spatial implications of the humans who navigate and perish in the border lands.

### National Missing and Unidentified Persons

[![](images/namus-logo-tagline-2.png)](https://www.namus.gov/)

More than 600,000 individuals go missing every year in the United States. It is also estimated that 4,400 unidentified bodies are recovered each year (source: https://www.namus.gov/About). Funded and administered by the National Institute of Justice, the NamUs website provides a searchable database for missing, unidentified, and missing persons.

With the objective to map border deaths, we look at the NamUs Unidentified Persons database. At the time of this writing, there are 12,559 results, 2,472 of which were found in California.

### Web-scraping with Python

Users can search NamUs using a myriad of data options: by demographic attributes like sex, race, estimated age, or by a more harrowing set of attributes such as by _details of recovery_ that include options for: all parts recovered, head not recovered, torso not recovered, one or more limbs not recovered, or one or both hands not recovered. One can also search by _location found_ which narrows our search results to only those recovered in California.

While the search interface provides an impressive array of options, the site does not provide a _download_ option. With an impetus to match unidentified persons with their loved ones, downloading entire datasets has not been a priority for NamUs, despite their efforts for transparency and freedom of data access. The front-end interface provides a search result set as either a list of gallery view with a subset of the attributes for quick viewing purposes. Clicking on individual records then expands on any individual record to reveal its entire array of attributes.

![Sample search results screenshot from NamUs](images/namus-dashboard.png)

Sample search results screenshot from NamUs

Peaking into the backend, the NamUs website is driven by a robust and well defined api to navigate, filter, and produce its search results. Python allows us to intercept, or configure these web requests using re-usable code. For example, the following script calls the NamUs API to get a summary list results for unidentified persons in California:

```
import requests

# Set search parameters
state = "California"
records = "10"

# Search headers
headers = {
    'Origin': 'https://www.namus.gov',
    'Content-Type': 'application/json;charset=UTF-8',
    'Referer': 'https://www.namus.gov/UnidentifiedPersons/Search',
    'Connection': 'keep-alive',
}

# Request string
data = '{"predicates":[{"field":"stateOfRecovery","operator":"IsIn","values":["California"]}],"take":2,"skip":0,"projections":["idFormatted","caseNumber","dateFound","estimatedAgeFrom","estimatedAgeTo","cityOfRecovery","countyDisplayNameOfRecovery","stateOfRecovery","sex","raceEthnicity","modifiedDateTime","namus2Number","stateDisplayNameOfRecovery"],"orderSpecifications":[{"field":"dateFound","direction":"Descending"}]}'

# Send request
response = requests.post('https://www.namus.gov/api/CaseSets/NamUs/UnidentifiedPersons/Search', headers=headers, data=data)

print(response.content)
```

The above request produces the following results:

```
{"count":2472,"results":[{"idFormatted":"UP55461","caseNumber":"2019-01239","dateFound":"2019-02-13T00:00:00","estimatedAgeFrom":null,"estimatedAgeTo":null,"cityOfRecovery":"Llano","countyDisplayNameOfRecovery":"Los Angeles","stateOfRecovery":"California","sex":"Unsure","raceEthnicity":"Uncertain","modifiedDateTime":"2019-02-26T15:54:19.94","namus2Number":55461,"stateDisplayNameOfRecovery":"CA","link":"/UnidentifiedPersons/Case#/55461","image":"/api/CaseSets/NamUs/UnidentifiedPersons/Cases/55461/Images/Default/Thumbnail"},{"idFormatted":"UP55264","caseNumber":"2019-00929","dateFound":"2019-02-03T00:00:00","estimatedAgeFrom":40,"estimatedAgeTo":60,"cityOfRecovery":"Los Angeles","countyDisplayNameOfRecovery":"Los Angeles","stateOfRecovery":"California","sex":"Male","raceEthnicity":"Hispanic / Latino","modifiedDateTime":"2019-02-25T23:48:30.953","namus2Number":55264,"stateDisplayNameOfRecovery":"CA","link":"/UnidentifiedPersons/Case#/55264","image":"/api/CaseSets/NamUs/UnidentifiedPersons/Cases/55264/Images/Default/Thumbnail"}]}
```

From this result set, we can determine that the ID for each individual record resides in the attribute _namus2Number_. With this in mind, we can safely presume to obtain all individual id numbers for unidentified people in California, and with this data, we can further obtain all the attributes for each individual record. The following python code loops through our results to do so:

```
import json

# put the json response in a variable "data"
parsedSearchResponse = json.loads(response.content)
data = parsedSearchResponse['results']

# start a counter
count = 1

# let's print some preliminary results
print('Total records:')
print(len(data))

with open('jsondata7.json','w') as outfile:
    # json.dump(jsondata, outfile)
    jsondata = {}
    jsondata['people'] = []

    # json.dump("{people: [",outfile)
    outfile.write('{"people": [')

    records2process = len(data)

    for value in data:

        jsondata = {}
        jsondata['people'] = []

        # get the id for this record and send a request for data
        id = value['namus2Number']
        # send the request to get the data for each person by id
        page = requests.get('https://www.namus.gov/api/CaseSets/NamUs/UnidentifiedPersons/Cases/'+str(id))

        # put the response in a variable and decode to utf-8
        parsedPerson = json.loads(page.content.decode('utf-8'))
        print(count)
        # output something to show
        # print(json.dumps(parsedPerson, indent=4, sort_keys=True))
        # jsondata['people'].append(parsedPerson)

        json.dump(parsedPerson,outfile)
        # only write comma if not the last record
        if count >= records2process:
            break
        else:
            outfile.write(',')
            count = count + 1

    
    outfile.write(']}')
```

[![border death word cloud](images/wordcloud-e1559754221287-1024x768.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2019/06/wordcloud-e1559754221287.png)

[![border death descriptions in palladio](images/Screen-Shot-2019-06-05-at-10.39.33-AM-e1559756442360-1024x694.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2019/06/Screen-Shot-2019-06-05-at-10.39.33-AM-e1559756442360.png)
