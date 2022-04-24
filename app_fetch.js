/** @format */

const fetch = require("node-fetch");

const url =
  "https://us-street.api.smartystreets.com/street-address?auth-id=dc13306f-1a74-2349-76c9-f5e651264cd8&auth-token=ddtVZo7gYYVKnTMClXhN&street=142%20Park%20Rd&city=Pittsford&state=NY&zipcode=14534&candidates=10";

const parkUpdateUISuccess = function (parsedData) {
  console.log(parsedData);
};

const parkUpdateUIError = function (error) {
  console.log(error);
};

const handleErrors = function (response) {
  if (!response.ok) {
    throw "error - " + response.status + ": " + response.statusText;
  }
  return response.json();
};

const createRequest = function (url, succeed, fail) {
  fetch(url)
    .then((response) => handleErrors(response))
    .then((data) => succeed(data))
    .catch((error) => fail(error));
};

createRequest(url, parkUpdateUISuccess, parkUpdateUIError);
