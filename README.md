# URL Shortner

## Run locally

Requirements: Node.js, npm, and MongoDB.

Set `JWT_SECRET` to a private, random value before starting the app. For example, in PowerShell:

```powershell
$env:JWT_SECRET = [guid]::NewGuid().ToString()
npm start
```

The application connects to MongoDB at `mongodb://localhost:27017/url-shortner` and listens on port 8000.
