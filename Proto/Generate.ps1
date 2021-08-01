dotnet tool restore
dotnet protogen --proto_path=.\ --csharp_out=..\Generated\CSharp\ +names=original **/*.proto
ls ..\Generated\CSharp\*.cs | % {
  (Get-Content $_.FullName).replace('\benum\b', '[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]`nenum') | Set-Content $_.FullName
}
