## Små tricks
* " ls -l " viser hvad der er i mappen du er placeret i
* " pm2 status " viser hvor mange servere der kører eller om der er fejl osv.
* " rm -rf mappenavn " sletter mappe + indhold.
* brug SHOW DATABASES; for at få vist dine databaser, du skal dog lige logge ind først: mysql -u root -p
* Hvis MySQL Workbench giver fejlkode: 1067, er det fordi Current_Timestamp ikke er godkendt.
Erstart 'created' med:
```
`created` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00'
```
* For at få mysql servicen til at starte automatisk efter genstart af serveren skal man skrive dette:
```
chkconfig --level 345 mysqld on
```
Genstart serveren og skriv:
```
chkconfig --list mysqld
```
Tjek at 3. 4 & 5 står til "on".
* For at få pm2 til at starte dine javascript filer efter genstart af serveren skal du gøre følgende:
Start dine javascript filer med:
```
pm2 start javascript.js
```
Når de er startet skal du blot skrive:
```
pm2 startup
pm2 save
```

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
* For at kopire adgangskoden ind, skal du bare højre klikke. Du kan også skrive den manuelt, koden er dog usynlig
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
Når du har indtastet koden og trykket enter, vil du blive bedt om at angive din root adgangskode, du trykker bare enter.
Så bliver du bedt om at indtaste en adgangskode til mysql og det vil vi meget gerne. HUSK der er forskel på root adgangskoden og mysql adgangskoden.

herefter trykker vi følgende
* y
* n
* y
* y
Mysql er ny sat op.
Prøv og stop mysql og start den igen.


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
Du vil blive spurgt om du ønsker at skrifte navn på filen samt placering.
I vores tilfælde, trykker vi bare enter 3 gange.

Åbn den offentlige nøgle
```
nano ~/.ssh/id_rsa.pub
```
Navnet på filen er "id_rsa.pub".
Har du valgt give ssh nøglen et andet navn så erstat navnet med det.
Opdel koden så du kan huske det og kopire ved at bruge musen til at markere det hele, så snart du slipper venstre museknap er det kopiret.
Tryk ctrl-x og tryk n så er du ude af text editoren.

Skriver du cat i stedet for nano kan man nemmere kopirer ssh koden.
```
cat ~/.ssh/id_rsa.pub
```

Kopier indholdet af den offentlige nøgle til GitHub -> Settings -> SSH and GPG keys -> New SSH key

## 7. Opret en mappe til din applikation

mkdir ~/www

Naviger ind i mappen

cd ~/www

## 8. Klon dit repository fra GitHub
```
git clone git@github.com:brugernavn/repository
```
Den vil spørge om du er sikker på om du ønsker at clone dit repository
Skriv yes for at fortsætte

Når du har en opdatering, skal du lave et pull
```
git pull git@github.com:brugernavn/repository master
```

## 9. Start app.js
For at starte sin app.js skal vi ind i mappen.
```
cd ~/www/repository-navn
```

Vi skal lige sikre os at vores node-modules er installeret
```
npm install
```
Da vi har vores packages.json finder serveren selv ud af hvilke plugins der skal installeres.

Derefter starter vi vores app.js ved at skrive:
```
pm2 start app.js
```
Sørg for at være inde i mappen hvor app.js er placeret.

## 10. Upsætning af database
* Åben MySQL Workbench
* Tryk på " + " under 'MySQL Connections'
* Angiv et navn til forbindelsen (valgfrit)
* Skift 'Connection method' til "Standard TCP/IP over SSH"
* SSH Hostname: IP-Adresse:Port
* SSH Username: root
* SSH Password: "Skriv root password"
* Tryk på "Store in Vault" så du ikke skal taste dit root password hver gang
* Lad resten være default
* Test forbindelsen
* Du skulle gerne kunne tilgå databasen nu
* Højre click i Schemas og opret nyt schema, kald det som der står i sql.js filen
* Kopier din sql ind i query tabben eller vælg database import under server menu
* For at eksportere sin database går man under server menuen og vælger Data Export. Tryk på databasen du ønsker at eksportere og vælg de tabeller du ønsker eksporteret, vælg derefter mappe placeringen er tryk Start Export