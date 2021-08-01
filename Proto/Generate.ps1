dotnet tool restore
dotnet protogen --proto_path=.\ --csharp_out=..\Generated\CSharp\ +names=original **/*.proto
ls ..\Generated\CSharp\*.cs | % {
    cat $_.FullName | % { $_.replace("\benum\b","[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]`nenum") } | out-file $_.FullName -encoding utf8
}
