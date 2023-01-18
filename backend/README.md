## Project setup

Setting Database in Config folder

npm install


### Run

nodemon start


### note
comment code below if tables already exist (in server.js file)

#### 

#####
db.connectMysql.sync({force: true}).then(() =>{
######
  console.log('Drop and ReSync');
   initial();
######
});

