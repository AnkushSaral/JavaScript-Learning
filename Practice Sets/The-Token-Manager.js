//The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

const setAuthToken = (authToken) => {
    let expiryTime = Date.now() + 5 * 60 * 1000; // 5 minutes

  localStorage.setItem(
    "authToken",
    JSON.stringify({
      token: authToken,
      expTime: expiryTime,
    }),
  );
};

setAuthToken("1122334455kghmang");
