#filePath is the path of the text file where the url(s) you wish to download are.
$filePath = 'UrlList.txt'
Clear-Content $filePath
#Enter your playlist url below
$Playlist = ((Invoke-WebRequest "https://www.youtube.com/watch?v=91T0muvKGUA&list=UUXvSeBDvzmPO05k-0RyB34w").Links | Where {$_.class -match "playlist-video"}).href
ForEach ($Video in $Playlist) {
$s ="https://www.youtube.com" + $Video
$s =$s.Substring(0, $s.IndexOf('&'))
    Write-Output ($s)
    Add-Content $filePath $s
}