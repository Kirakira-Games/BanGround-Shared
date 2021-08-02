dotnet tool restore
dotnet protogen --proto_path=.\ --csharp_out=..\Generated\CSharp\ +names=original **/*.proto

$targets = "Language", "Difficulty", "NoteType"

ls ..\Generated\CSharp\*.cs | % {
  (cat $_) | % {
    if ($_ -match "public enum (.*)$" -and $targets.Contains($Matches[1])) {
      "    [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]`n$_"
    }
    else {
      $_
    }
  } | Out-File $_
}
