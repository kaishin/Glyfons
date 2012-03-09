// Script by Reda Kaishin Lemeden
// Tested on Illustrator CS5
// March 2nd, 2012

var docRef = app.activeDocument;

// Grab the current icon filename (this includes full path)

var originalName = docRef.fullName;
var fileName = docRef.name;
var num_artboards = docRef.artboards.length;

// Locate the position of the final '.' before the filename extension. Your filenames should not start with s '.' for this script to work
var finalDotPosition = fileName.lastIndexOf( "." ) ;

// Remove the extension from the filename
if ( finalDotPosition > -1 ) {
  extensionLess = fileName.substr( 0 , finalDotPosition );
}
else {
  extensionLess = false;
}

// Loop through the artboards
if (extensionLess)  {

  var destFolder = Folder.selectDialog( 'Select the parent folder where a new folder with the name of the icon will be created...');

  if (destFolder) {
    // Create the icon folder
    var iconFolder = new Folder(destFolder + "/" + extensionLess);
    iconFolder.create();

    var destFile = new File(destFolder + "/" + extensionLess + "/" + extensionLess + ".pdf");

    var pdfSaveOptions = new PDFSaveOptions();
    pdfSaveOptions.viewAfterSaving = false;
    pdfSaveOptions.artboardRange= "1";
    pdfSaveOptions.preserveEditability = false;

    docRef.saveAs(destFile, pdfSaveOptions);

    for (var i = 1; i < num_artboards; i++ )
    {
      var destFile = new File(destFolder + "/" + extensionLess + "/" + extensionLess + "-" + docRef.artboards[i].name + ".png");
      var options = new ExportOptionsPNG24();
      options.artBoardClipping = true;
      options.matte = false;

      docRef.artboards.setActiveArtboardIndex(i);

      docRef.exportFile (destFile, ExportType.PNG24, options);
    }

    // Save the file using the original fullName
    docRef.saveAs( originalName );
  }
}

else {
  alert("You need to save your icon once and give it a name before running this script.");
}


