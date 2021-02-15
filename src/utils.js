import axios from "axios";

export const signup = async (user) => {
  const userData = {
    "fields": {
      "UserName": user.UserName,
      "Email": user.Email,
      "Password": user.Password
    }
  }
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };
  const records = await axios.post('https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Users', userData, config);
  localStorage.setItem("UserName", records.data.fields.UserName);
  localStorage.setItem("UserId", records.data.id);
  return records.data.fields;
};

export const signin = async (user) => {
  const userData = {
    UserName: user.UserName,
    Password: user.Password
  };
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };
  const { data } = await axios.get('https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Users', config);
  let record = {};
  data.records.filter((record) => {
    if (record.fields.UserName === userData.UserName && record.fields.Password === userData.Password) {
      localStorage.setItem("UserName", record.fields.UserName);
      localStorage.setItem("UserId", record.id);
      record = {
        UserName: record.fields.UserName,
        Password: record.fields.Password,
        id: record.id
      }
      return true
    }
    return false;
  })
  return record;
}

export const getRestaurant = async () => {
  const Authorization = localStorage.getItem("Authorization");
  const UserName = localStorage.getItem("UserName");
  const config = {
    headers: { Authorization: Authorization }
  };
  const { data: restaurantList } = await axios.get('https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Restaurants', config);
  let restaurantsIds = [];
  restaurantList.records.map((record, index) => {
    restaurantsIds[index] = record.id;
    return restaurantsIds;
  })

  let reviewsRestaurantIds = [];
  const { data: reviewsList } = await axios.get(`https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Reviews?filterByFormula=%7BUsers%7D%3D'${UserName}'`, config);
  reviewsList.records.map((record, index) => {
    reviewsRestaurantIds[index] = record.fields.Restaurants[0];
    return reviewsRestaurantIds;
  })

  let newRestaurantsIds = restaurantsIds.filter(e => reviewsRestaurantIds.indexOf(e) < 0);
  let returnRestaurantsId = newRestaurantsIds[Math.floor(Math.random() * newRestaurantsIds.length)];
  localStorage.setItem("RestaurantId", returnRestaurantsId);
  return returnRestaurantsId;
}

export const getRestaurantDetail = async (restaurantId) => {
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };
  const { data } = await axios.get(`https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Restaurants/${restaurantId}`, config);
  return data.fields;
}

export const isEaten = async (review) => {
  const reviewData = {
    "fields": {
      "ReviewNumber": review.ReviewNumber,
      "Users": review.Users,
      "Restaurants": review.Restaurants,
      "IsBlackList": review.IsBlackList
    }
  }
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };
  const { data } = await axios.post('https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Reviews', reviewData, config);
  return data.fields;
}

export const getEatenRestaurant = async () => {
  const UserName = localStorage.getItem("UserName");
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };
  const { data } = await axios.get(`https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Reviews?filterByFormula=AND(%7BUsers%7D%3D'${UserName}'%2C%7BIsBlackList%7D!%3D'true')`, config);
  return data.records;
}

export const getBlackList = async () => {
  const UserName = localStorage.getItem("UserName");
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };
  const { data } = await axios.get(`https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Reviews?filterByFormula=AND(%7BUsers%7D%3D'${UserName}'%2C%7BIsBlackList%7D%3D'true')`, config);
  return data.records;
}

export const getLockedList = async () => {
  const UserName = localStorage.getItem("UserName");
  const Authorization = localStorage.getItem("Authorization");
  const config = {
    headers: { Authorization: Authorization }
  };

  const { data: allRestaurantList } = await axios.get('https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Restaurants', config);
  let allRestaurantsIds = [];
  allRestaurantList.records.map((record, index) => {
    allRestaurantsIds[index] = record.id;
    return allRestaurantsIds;
  })

  let allReviewsRestaurantIds = [];
  const { data: allReviewsList } = await axios.get(`https://api.airtable.com/v0/appF72A7qd3ePlXLJ/Reviews?filterByFormula=%7BUsers%7D%3D'${UserName}'`, config);
  allReviewsList.records.map((record, index) => {
    allReviewsRestaurantIds[index] = record.fields.Restaurants[0];
    return allReviewsRestaurantIds;
  })
  let lockedRestaurantsIds = allRestaurantsIds.filter(e => allReviewsRestaurantIds.indexOf(e) < 0);
  return lockedRestaurantsIds;
}