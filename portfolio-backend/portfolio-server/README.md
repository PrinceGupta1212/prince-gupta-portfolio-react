# Portfolio Backend — Contact Form API

Ye backend sirf ek kaam karta hai: contact form ka data MongoDB Atlas
mein save karna, aur turant tumhe email pe notification bhejna.

## Folder Structure

```
portfolio-server/
├── config/db.js              # MongoDB connection
├── models/Message.js         # Message schema
├── controllers/contactController.js
├── routes/contactRoutes.js
├── middleware/
│   ├── validateContact.js    # form data validate karta hai
│   └── errorHandler.js
├── utils/mailer.js           # email notification bhejta hai
├── server.js                 # entry point
├── .env.example              # apna ".env" isi se banao
└── package.json
```

## Setup Steps

### 1. MongoDB Atlas se connection string lo
1. https://www.mongodb.com/cloud/atlas par free account banao (agar nahi bana)
2. Cluster banao (free tier "M0" kaafi hai)
3. **Database Access** mein ek user banao (username + password)
4. **Network Access** mein apna IP allow karo (ya "Allow from anywhere" — `0.0.0.0/0` — dev ke liye)
5. **Connect > Drivers** pe click karo, connection string copy karo — kuch aisi dikhegi:
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 2. Gmail App Password banao (email notification ke liye)
1. Google Account > Security > **2-Step Verification** ON karo
2. Usi page pe **App Passwords** dhoondo, naya app password generate karo
3. 16-digit password milega — yehi `.env` mein use hoga (apna normal Gmail password NAHI)

### 3. `.env` file banao
`.env.example` ko copy karke naam `.env` rakho, phir apni real values bharo:

```bash
cp .env.example .env
```

`.env` mein:
```
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolioDB?retryWrites=true&w=majority
PORT=5000
CLIENT_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-digit-app-password
NOTIFY_EMAIL=your-email@gmail.com
ADMIN_SECRET_KEY=kuch-bhi-lambi-random-string
```

⚠️ Agar `MONGO_URI` mein password ke andar `@`, `#`, `%` jaise special characters hain,
unhe URL-encode karna padega (jaise `@` → `%40`).

### 4. Install + Run

```bash
npm install
npm run dev
```

Terminal mein dikhna chahiye:
```
✅ MongoDB Atlas connected successfully
🚀 Server running on http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Kya karta hai |
|---|---|---|
| POST | `/api/contact` | Naya message save karta hai + email bhejta hai |
| GET | `/api/contact?key=YOUR_ADMIN_SECRET_KEY` | Saare messages dekhne ke liye (browser mein khol sakte ho) |

Apne saare messages dekhne ke liye browser mein ye kholo:
```
http://localhost:5000/api/contact?key=YAHI_WALA_ADMIN_SECRET_KEY_JO_ENV_MEIN_DIYA
```

## Frontend Connect Karna

`portfolio-react/src/components/Contact.jsx` mein already ye backend call
hone ke liye set kiya gaya hai:
```js
const API_URL = "http://localhost:5000/api/contact";
```

Dono (frontend `npm run dev` aur backend `npm run dev`) ek saath chalane
honge — do alag terminal tabs mein.

## Production Deploy

- **Backend**: Render.com ya Railway.app par free deploy kar sakte ho
  (GitHub repo connect karo, environment variables wahan ki dashboard
  mein daalo, `MONGO_URI` waghera).
- Deploy hone ke baad jo URL milega (jaise `https://your-app.onrender.com`),
  usse `Contact.jsx` ke `API_URL` mein daal dena, aur backend ke `.env`
  mein `CLIENT_URL` ko apne deployed frontend URL se update kar dena.
