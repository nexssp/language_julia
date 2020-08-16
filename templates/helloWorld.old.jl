# Nexss PROGRAMMER 2.0.0 - Julia
# Default template for JSON Data
# STDIN
NexssStdin = readline();

# JSON in Julia installation
import Pkg; 
if !in("JSON", keys(Pkg.installed()))
    # write(stderr,"pkgJSON is not intalled");
    @warn("pkgJSON is not intalled")
    Pkg.add("JSON");  
end
import JSON;
# END JSON part

# Modify Data
parsedJson = JSON.parse(NexssStdin);
parsedJson["juliaOutput"] = "Hello from Julia! $VERSION";
# parsedJson["test"] = "test";
NexssStdout = JSON.json(parsedJson)

# STDOUT
write(stdout,NexssStdout); 
