@echo off
for /f %%a in ('dir /b *.proto') do (
  dotnet protogen --csharp_out=../Generated/CSharp +names=original %%a
)
