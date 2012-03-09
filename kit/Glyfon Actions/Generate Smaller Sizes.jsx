// Script by Reda Kaishin Lemeden
// Tested on Illustrator CS5
// March 7th, 2012

var docRef = app.activeDocument;

// Get glyph
var glyph = docRef.selection;

// Disable pixel alignment to preserve shape
glyph[0].pixelAligned = false;

// Generate icons
if (glyph.length == 1 & docRef.artboards.getActiveArtboardIndex() == 0)
{
    var mediumIcon = glyph[0].duplicate();
    mediumIcon.resize (50.0,50.0);
    mediumIcon.translate(51,-16);

    var smallIcon = mediumIcon.duplicate();
    smallIcon.resize (50.0,50.0);
    smallIcon.translate(27,-8);
}

else
{
  alert("Select one vector object in the 'Glyph' artboard to generate the other icons...");
}

