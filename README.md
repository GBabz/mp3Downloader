# Requirements
In order to run the script, you will need [phantomjs](http://phantomjs.org/download.html) and [casperjs](http://casperjs.org/) installed on your computer. 
Once you have downloaded phantomjs and casperjs, just make sure you added both of them properly in your system environment variables (Path variable).<br>

If you do not know how to add/manage environment variables on your computer, please check this [link](https://www.nextofwindows.com/how-to-addedit-environment-variables-in-windows-7).<br>
<br>
Once you are done with all this you should be good to go.
# How it works 
**1.** Put all the Youtube urls that you want to download into **UrlList.txt** (one url per line). <br>
**2.** Execute the script. <br>
**3.** Your done ! Your mp3 files will be store in the mp3 folder.
# Running the script
Open cmd.exe then simply type :<br> **casperjs path/Mp3Downloader.js**<br>("path" = where the script folder is located)<br>
I recommend you to make a .bat file that will execute the command automatically (in order to save time).

# Tips
If you want to download a Youtube playlist, simply edit the **GetPlaylistUrls.ps1** file on **line #5** (change the url to the desired playlist url). 
<br>Then, execute the **GetPlaylistUrls.ps1** file with PowerShell.<br>
This will get and write all of your playlist urls into **UrlList.txt** (simply execute the script after that in order to download the mp3 files).
