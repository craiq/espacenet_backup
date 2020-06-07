# Espacenet snippets

Those snippets can export and import Espacenet progress.
For example this contains

* viewed patents
* last searches
* saved patents

## Why

Espacenet stores your progress in your browser. So if you want to change your browser or reset all browser data from time to time, this tool will help you.

## How to setup

With Chromium based Browser

1. open the Espacenet WebSite
2. open dev tools (press F12)
3. open the tab "sources"
4. chose snippets via the two right arrows

### export

1. paste the content of "exportStore.js" in an empty snippet
2. run the snippet (strg + enter)
3. save the "backUp.json"

### import

1. paste the content of "EspacenetBack.js" in an empty snippet
2. replace the brackets "{}" in the snippet with the content of "backUp.json"
3. run the snippet (strg + enter)
4. create a new snippet and paste the content of "importStore.js"
5. run this "importStore" snippet
6. be happy :D
