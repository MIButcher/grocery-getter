The app is setup to use WSL2 in Docker which prevents throttling the amount of RAM and Virtual CPUs Docker can use inside of Docker's settings. This has the nasty side effect of eventually using up all of your systems resources forcing the need to reboot.

## Setup WSL settings cap resource usage

In Command Line run the following to turn off all wsl instances such as docker-desktop

```
wsl --shutdown
```

Then create a .wslconfig file in your user root directory C:\Users\{username} and paste the below to define the limits

```
[wsl2]
memory=6GB   # Limits VM memory in WSL 2 up to 6GB
processors=4 # Makes the WSL 2 VM use two virtual processors
```

Lastly Restart computer (or bounce wsl/docker)