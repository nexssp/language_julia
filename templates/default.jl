# Nexss PROGRAMMER 2.x - Julia
# Default template for JSON Data
# STDIN
NexssStdin = readline();

try
    import JSON    
catch
    import Pkg 
    Pkg.add("JSON")
    import JSON 
end

# Modify Data
parsedJson = JSON.parse(NexssStdin);
# parsedJson["juliaOutput"] = "Hello from Julia! $VERSION";
parsedJson["test"] = "test";
NexssStdout = JSON.json(parsedJson)

# STDOUT
write(stdout,NexssStdout); 
