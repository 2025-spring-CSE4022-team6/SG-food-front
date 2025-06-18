// restaurantImages.js

export const restaurantImages = {
  1: "/img/photo-restaurant1.jpg",
  2: "/img/photo-restaurant2.jpg",
  3: "/img/photo-restaurant3.jpg",
  4: "/img/photo-restaurant4.jpg",
  5: "/img/photo-restaurant5.jpg",
  6: "/img/photo-restaurant6.jpg",
  7: "/img/photo-restaurant7.jpg",
  8: "/img/photo-restaurant8.jpg",
  9: "/img/photo-restaurant9.jpg",
  10: "/img/photo-restaurant10.jpg",
  11: "/img/photo-restaurant11.jpg",
  12: "/img/photo-restaurant12.jpg",
  13: "/img/photo-restaurant13.jpg",
  14: "/img/photo-restaurant14.jpg",
  15: "/img/photo-restaurant15.jpg",
  16: "/img/photo-restaurant16.jpg",
  17: "/img/photo-restaurant17.jpg",
  18: "/img/photo-restaurant18.jpg",
  19: "/img/photo-restaurant19.jpg",
  20: "/img/photo-restaurant20.jpg",
};

export const getRestaurantImage = (id) =>
  restaurantImages[id] || "/img/store-default.jpg";
