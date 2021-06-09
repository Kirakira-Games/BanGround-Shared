@echo off
dotnet tool restore
dotnet protogen --proto_path=.\ --csharp_out=..\Generated\CSharp\ +names=original **/*.proto