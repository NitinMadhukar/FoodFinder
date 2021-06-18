import axios from "axios";

export default axios.create({
  //linked with mongoDB realm
  baseURL: "https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-nkxzc/service/restaurants/incoming_webhook/",
  headers: {
    "Content-type": "application/json"
  }
});