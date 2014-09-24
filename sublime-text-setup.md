# Making Sublime Text Awesome

One of the great things about Sublime text it that you can add extra functionality to it with plugins.  There are MANY great plugins out there but because this is just a little extra we're only going to look at 2 of them.

**Please Note:** If the workshop is already underway please do NOT do this now.  This is an extra for if you have a moment.  You can come back to this during a break or over the lunch hour.  It's much more important to listen to the workshop then do this stuff. 

## Package Manager

This is a plugin that makes adding plugins easier.  We will add this plugin first before the next one.  To add this plugin follow the instructions below:

* <a href="https://sublime.wbond.net/installation" target="_blank"> open this link </a>
* Follow the instructions there.  **Please note that there are different installations involved for Sublime Text 2 or Sublime Text 3**
* Restart Sublime Text after installation of Package Manager
    * You'll want to close the program entirely and then open it again.
* After that You can test that the install worked correctly by installing the next plugin via package manager.

## Emmet

Emmet is an amazing plugin that makes working with HTML and CSS muuch more enjoyable by letting you learn a shorthand that sublime text will expand into the full text.  It's a "write less, do more" kind of thing.  Here's how to install it.

* In sublime text open the Command Pallete:
    * On a Mac you do this with 
      * ```<CMD> + <SHIFT> + <P> (⌘⇧P)```
    * On Windows you do this with 
      * ```<CTRL> + <SHIFT> + <P> (^⇧P)```
* This lets you run any command by typing the name of it.
* To install a plugin type "Install Package" and press enter.
    * When the item that says **Package Control: Install Package** is highlighted that when you want to press enter
    * If you do NOT see the option **Package Control: Install Package** then you did not install the package control plugin correcly.  did you remember the close and re-open sublime text?  Ask your mentor for a hand.  
        * *If all else fails, forget about it for now.  NOTHING on this page is mandatory.*
* Wait a moment for Package Manager to get a list of all packages
* When the new text box comes up type **Emmet** and press enter
    * You'll know its the right one when it says **Emmet (ex-Zen Coding) for Sublime Text**

You'll know the install worked properly if you see a new page open that says something like this:
```
Package Control Messages
========================

Emmet:
-----

  Thank you for installing Emmet -- a toolkit that can greatly improve your workflow.  
```

You can now write html and CSS super quick.  let's test this... Open a new file in sublime by going to ```File > New File```.  The set the syntax of that file to HTML by opening the command pallete (⌘⇧P for mac or ^⇧P for windows) and typing ```sshtml```.  press enter when the command **S**et **S**yntax: **HTML** is selected. 

type the following:
```
.menu>ul>li*5>a
```
then press the <TAB> key with your cursor at the very end of the text you typed (it won't work with a space there).

Whoa!!!  did that just turn into this?
```html
<div class="menu">
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</div>
```

That's right Emmet just let you write something Super cool.  here's how:
```
.menu>ul>li*5>a
   | | | | |  └ a is for the ANCHOR tag. which is a link in HTML
   | | | | └ *5 means TIMES 5, or make 5 List items
   | | | └ li is for List Item.  the element that goes in lists
   | | └ ul is an unordered list.
   | └ the GREATER THAN symbol (>) means make the next item a
   |   CHILD of the item before it. so NEST it inside it
   |   Notice that we have one of these at every level
   └ .menu means create an element with a CLASS of menu
```

You can learn more about the way that Emmet uses shortcuts at <http://emmet.io/>.  It's realy cool.  just don't do this while the workshop is running ok?  cool thanks!

