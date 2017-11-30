## Opsætning af Digital Ocean Server
* www.digitalocean.com
* opret et droplet
* vælg CentOS 6.9 x32  - 64bit koster mere.

## Tilgå den nye server
* Åben PuTTY
* Indtast den IP du har modtaget i emailen.
* Save og open.

## Login til linux
* Brugernavnet er altid "root" på denne linux maskine
* Hvis du markere adgangskoden i mailen så pas på mellemrum
* For at kopire adgangskoden ind, skal du bare højre klikke
* Du kan også skrive den manuelt, koden er dog usynlig
* Skriv samme adgangskode igen og derefter lav en ny adgangskode til root brugeren

## 1. Installer Nano
Vi bruger nano tekst editor da den er let at bruge.

installer nano ved at skrive 
```
yum install nano
```
i konsollen


## 2. Installer MySQL
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

## 3. Installer Node.js

Installation
```
yum install epel-release
yum install nodejs
yum install npm
npm install -g n
```

Opdater nodejs
```
n lts
n
```

Genstart din linux-box nu.

## 4. Installer PM2

PM2 er en process manager til Node.js applikationer.

Installation
```
npm install -g pm2
```

Kør PM2 ved startup
```
pm2 startup
```

## 5. Installer Git

Installation
```
yum install git
```

Konfiguration
```
git config --global user.name "Dit navn"
git config --global user.email "din@email.dk"
```

Tjek konfigurationen
```
nano ~/.gitconfig
```

## 6. Opret et nøglesæt til at logge ind på GitHub

Opret nøglesæt
```
ssh-keygen -t rsa
```

Åbn den offentlige nøgle
```
nano ~/.ssh/id_rsa.pub
```

Kopier indholdet af den offentlige nøgle til GitHub -> Settings -> SSH and GPG keys -> New SSH key

## 7. Opret en mappe til din applikation

mkdir ~/www

Naviger ind i mappen

cd ~/www

## 8. Klon dit repository fra GitHub

git clone git@github.com:brugernavn/repository

(og når du har en opdatering, skal du lave et pull)

git pull git@github.com:brugernavn/repository

