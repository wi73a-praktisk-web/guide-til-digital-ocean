# guide-til-digital-ocean
Formålet med dette repository er blot at give mig selv en nemmere tilgang til opsætning af en linux server.

### Opsætning af Digital Ocean Server
* www.digitalocean.com
* opret et droplet
* vælgt CentOS 6.9 x32  - 64bit koster mere.

### Installer Nano
Vi bruger nano tekst editor da den er let at bruge.

installer nano ved at skrive 
```
yum install nano
```
i konsollen

### Installer MySQL
Installation
```
yum install mysql-server
```

Start/stop/restart
```
service mysqld start/stop/restart
```

Konfigurer MySQL
```
sudo /usr/bin/mysql_secure_installation
```