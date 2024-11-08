# pweb-express-mongodb-P17-2024

Anggota:
- Rafael Ega Krisaditya/5027231025
- Nama/NRP
- Veri Rahman/5027231088

Langkah kerja:
1. `npm init`
2. `npm install express`
3. `npm install -D typescript @types/node @types/express ts-node nodemon`
4. `npx tsc --init`
5. `npm install mongoose bcrypt jsonwebtoken`
6. `npm i --save-dev @types/bcrypt`
7. `npm i --save-dev @types/jsonwebtoken`
8. Buat file `.env`
```
MONGODB_URI=mongodb+srv://[username]:[pw]@[cluster-name]/[db-name]?retryWrites=true&w=majority&appName=[app-name]
PORT=1717
JWT_SECRET=[secret-string]
```
9. `npm run start:dev`