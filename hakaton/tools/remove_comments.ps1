$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Get-ChildItem -Path $root -Recurse -File | ForEach-Object {
    $ext = $_.Extension.ToLower()
    try {
        $text = Get-Content -Raw -Encoding UTF8 $_.FullName
    } catch {
        return
    }
    $orig = $text
    if ($ext -in '.html','.htm') {
        $text = [regex]::Replace($text,'<!--([\s\S]*?)-->','')
    }
    elseif ($ext -eq '.css') {
        $text = [regex]::Replace($text,'/\*([\s\S]*?)\*/','')
    }
    elseif ($ext -eq '.js') {
        $text = [regex]::Replace($text,'/\*([\s\S]*?)\*/','')
        $text = [regex]::Replace($text,'//.*$','',[System.Text.RegularExpressions.RegexOptions]::Multiline)
    }
    elseif ($ext -eq '.py') {
        $text = [regex]::Replace($text,"(?s)(\"\"\".*?\"\"\"|'''.*?''')",'')
        $text = [regex]::Replace($text,'#.*$','',[System.Text.RegularExpressions.RegexOptions]::Multiline)
    } else {
        return
    }
    if ($text -ne $orig) {
        Set-Content -Encoding UTF8 -Path $_.FullName -Value $text
        Write-Output "Stripped comments: $($_.FullName)"
    }
}
Write-Output "Done."
