⚠️ This project is **deprecated**.

# The problem

Designing glyph icons often requires us to make a compromise between pixel-precision and scalability. Pixel-perfect icons optimized for present day screens tend to come at the expense of visually balanced, future-proof vector shapes. Meanwhile, icon fonts and vector glyphs end up looking  like a mishmash of pixels in smaller sizes due to subpixel rendering.

# The solution
Glyfons is an icon set that attempts to address this problem by providing both retina-ready vector icons (PDF) as well as their pixel-optimized counterparts (PNG). It comes also with an Adobe Illustrator icon creation kit to make it easier for designers to create their own icons or tailor the existing ones to their needs.

# The icons
Currently the set comes with the following default icons:

* Cabinet
* Document
* Envelope
* Feather
* Film
* Heart
* Home
* Lab
* List
* Magnifier
* Minus
* Pencil
* Plus
* Ralph ([Thoughtbot](http://thoughtbot.com) mascot)
* Trash

New icons will be frequently added and contributions or requests are welcome.


# The kit
### Installing the template and the scripts
- Drag the template file (glyfons.ait) into your Illustrator templates folder (usually in /Applications/Adobe Illustrator CS\<version\>/Cool Extras/\<language-folder\>/Templates).
- Drag the *Glyfon Actions* folder into your Illustrator scripts folder (usually in /Applications/Adobe Illustrator CS<version>/Presets/\<language-folder\>/Scripts). Feel free to rename the new folder and the .jsx scripts or move them to the root level of the scripts directory. 
Please note that you need to restart Illustrator after installing the script for it to load.


### Recommended workflow
- Create a new file using the provided template in *File* > *New from Template…*
- For optimal results, you may want to change the RGB working space in Adobe Illustrator. In *Edit* > *Color Settings…* choose '*Monitor RGB*' in the RGB working space ([screenshot](http://drp.so/5e4890)).
- Make sure that *Pixel Preview* is disabled in *View* > *Pixel preview*.
- Start by designing the main glyph in the largest artboard.
- Once you are done, save your work as a vector file in the location of your choice. 
- Fill the smaller artboards by selecting the glyph (make sure it's a single compound path) then running the *Generate Smaller Sizes* in *File* > *Scripts* > *Glyfon Actions*. 
- Turn on *Pixel Preview*.
- Pixel-adjust the generated icons to your heart's content.
- Once you are satsified with the outcome, run the *Export Icon Files* script. It will create a new folder with the name of the icon, export the main glyph as PDF and the smaller versions as PNG, then saves your current vector file.
