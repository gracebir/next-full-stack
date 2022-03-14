/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    MONGO_URI: "mongodb+srv://rachoder:Firewall12@mern.v8ddv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
}
