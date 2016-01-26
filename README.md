## Google Spreadsheet - Related Links

### What is it?
`gs-related-links-plugin` easily exports the selected rows from a table of urls and titles into a valid HTML UL, LI strcuture.

![GS Related Links Preview](https://raw.githubusercontent.com/LandRover/gs-related-links-plugin/master/preview/related_links.png)

Column ids for the title and the url are set on are configured from the script, at the top of file: (dont need the overkill of having it dynamicly configured via UI since it doesnt change much)
```
var FIELD_TITLE_INDEX = 1, // column index for the title field
    FIELD_URL_INDEX = 7;   // column index for the url(href) field
```

### Usage?
 1. Open a spreadshet (or create one)
 2. Tools -> Script editor...
 3. Blank Project (if asked, select it)
 4. Paste the code from `src/related_links.gs`
 5. Save & Run
 6. New tab should be added to the top navigation, "Related Links", right after "Help"
 7. Select the relevant rows
 8. Go to `Related Links` -> `Get Links`
 9. Enjoy
