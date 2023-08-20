[ ] create user modal
[ ] signin 
[ ] signup

npx sequelize model:generate --name User --attributes fname:string,lname:string,email:string,country:string,phone:string,dob:string,password:string

//Deleting migrations
npx sequelize db:migrate:undo