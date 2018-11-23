# (ASP.NET) Core With Angular

## Steps

### VS add basic npm config file


### working directory is inside solution root directory
make dir tmp-angular


### generate angular app in working directory
ng new tmp-angular --skip-git


### test build & run generated angular app
cd tmp-angular
ng build

ng serve --open


### copy generated angular code to ClientApp folder

#### copy angular.json na dtsconfig.json to solution root folder

#### copy * from scr to ClientApp


### editing npm config file / package.json
add dependencies and devDependencies inside package.json


### go to Project root directory and install dependencies
npm install


### buidl angular application
ng build


### add angular to View / i.e. About
<app-root></app-root>

### do some test changes inside ClientApp angular source code


### then run ng build inside root of the Project
ng build

### setup quicker auto build inside Project root
ng build --watch

### added basic routing


### added Services


### add Heroes editor / example from angular.io


### displaying a list

### Creating components

ng generate component hero-detail

### Creating services

ng generate service hero



 
