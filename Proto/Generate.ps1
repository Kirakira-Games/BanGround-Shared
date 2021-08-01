dotnet tool restore
dotnet protogen --proto_path=.\ --csharp_out=..\Generated\CSharp\ +names=original **/*.proto
ls ..\Generated\CSharp\*.cs | % {
  (Get-Content $_.FullName).replace('    public enum ', '    [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]\n    public enum ') | Set-Content $_.FullName
}
