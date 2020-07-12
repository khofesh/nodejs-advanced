```
$ wget https://aur.archlinux.org/cgit/aur.git/snapshot/apache-tools.tar.gz
$ tar xvf apache-tools.tar.gz
$ cd apache-tools
$ makepkg -rsi
```

```
$ ab -c 50 -n 500 localhost:3000/fast
$ ab -c 1 -n 1 localhost:3000/
$ ab -c 2 -n 2 localhost:3000/
$ ab -c 6 -n 6 localhost:3000/
```
