---
title: "Advanced Practical Python #4 Sentiment Shakespearean Analysis"
date: "2018-04-05"
---

## Part 1. Introduction to Natural Language Processing

### _To Py or Not to Py, that is the question!_

Literally, there are tons of tools to run semantic analysis out there... why should one choose Python, for any Natural Language Processor by any another name would smell just as sweet.

For one, Python makes it easy to do the following:

- Tokenizing - Splitting sentences and words from the body of text.
- Tag parts of speech
- Perform real time semantic analysis on social media

Let's get started by installing the Python [Natural Language Toolkit](https://www.nltk.org/) and [TextBlob](http://textblob.readthedocs.io/en/dev/):

pip install ntlk
pip install textblob

Now open up Python and type the following in the Python Shell:

import nltk
nltk.download()

Now a GUI should pop up! Let's download the extra components for the Natural Language Toolkit.

[![](images/2018-04-04-19_59_39-NLTK-Downloader-e1522897227679.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/04/2018-04-04-19_59_39-NLTK-Downloader-e1522897227679.png)

Before we go further, we should define some of the "lexicon" used when you clicked download:

Corpus is defined as any body of text, corpa is the plural of corpus.

Ex. A corpa of Scientific American articles can be used in semantic analysis.

Lexicon is the definition of words and their meanings, contingent on the context.

Ex. A zoologist may define "python" differently than a computer scientist

Token is used whenever an entity is broken up by a set of rules. When we turn something into a token, we tokenize it.

Ex. We can treat words in a sentence as a token, we can also tokenize sentences in a paragraph.

On this basis, let's start our Shakespearan Semantic Analysis!

## Part 2. Of tags and words

To begin, head over to [MIT's Hamlet website](http://shakespeare.mit.edu/hamlet/hamlet.3.1.html) and copy some lines:

text = "HAMLET
    To be, or not to be: that is the question:
    Whether 'tis nobler in the mind to suffer
    The slings and arrows of outrageous fortune,
    Or to take arms against a sea of troubles,
    And by opposing end them? To die: to sleep;"

Now let's tag it:

from textblob import TextBlob

text = "HAMLET To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep;"

blob = TextBlob(text)
result = blob.tags
print("{}").format(result)

When you see the result, you will notice that the text was tagged depending on the parts of speech that were used:

\[('HAMLET', u'NNP'), ('To', u'TO'), ('be', u'VB'), ('or', u'CC'), ('not', u'RB'), ('to', u'TO'), ('be', u'VB'), ('that', u'DT'), ('is', u'VBZ'),
('the', u'DT'), ('question', u'NN'), ('Whether', u'PRP$'), ("'t", u'NN'), ('is', u'VBZ'), ('nobler', u'VBN'), ('in', u'IN'), ('the', u'DT'), ('mind', u'NN'), ('to', u'TO'), ('suffer', u'VB'), ('The', u'DT'), ('slings', u'NNS'), ('and', u'CC'), ('arrows', u'NNS'), ('of', u'IN'), ('outrageous', u'JJ'), ('fortune', u'NN'), ('Or', u'CC'), ('to', u'TO'), ('take', u'VB'), ('arms', u'NNS'), ('against', u'IN'), ('a', u'DT'), ('sea', u'NN'), ('of', u'IN'), ('troubles', u'NNS'), ('And', u'CC'), ('by', u'IN'), ('opposing', u'VBG'), ('end', u'VB'), ('them', u'PRP'), ('To', u'TO'), ('die', u'VB'), ('to', u'TO'), ('sleep', u'VB')\]

If we want to see how many times noun phrases were used, we can use the blob.np\_count  method:

result = blob.np\_count
print("{}").format(result)

That returns something like this:

defaultdict(<type 'int'>, {'whether': 1, u'outrageous fortune': 1, 'hamlet': 1})

Hey wait, that looks like a dictionary!

You can also create a dictionary based on the word counts:

result = blob.word\_counts

Doing so returns another frequency distribution of the words:

defaultdict(<type 'int'>, {u'and': 2, u'troubles': 1, u'is': 2, u'mind': 1, u'hamlet': 1, u'sleep': 1, u'sea': 1, u'in': 1, u'suffer': 1, u'end': 1, u'question': 1, u'arms': 1, u'to': 6, u'take': 1, u'nobler': 1, u'be': 2, u'them': 1, u'that': 1, u'opposing': 1, u'not': 1, u'by': 1, u'a':
1, u'fortune': 1, u'whether': 1, u'of': 2, u'arrows': 1, u'against': 1, u'outrageous': 1, u't': 1, u'die': 1, u'the': 3, u'slings': 1, u'or': 2})

## Part 3. Sentiment Analysis

We will now do sentiment analysis and look for whether or not Hamlet's soliloquy was positive or negative!

All you need to do is change our result  variable to be:

result = blob.sentiment

And wallah! A sentiment analysis was done based on the NTLK:

Sentiment(polarity=-1.0, subjectivity=1.0)

What the results mean is the following:

- Polarity is the positive or negativeness of the text
- Subjectivity explains whether the text is objective or subjective.

 

## Part 4. Loop through sentences

Let's modify our code to run sentiment analysis on each "sentence" (although for Hamlet it is a bit more difficult since there is no punctuation..

All we need to do is change our result to look for sentences:

result = blob.sentences

And then we will use a Python loop to perform sentiment analysis on each sentence:

for sentence in result:
    sentence.sentiment
