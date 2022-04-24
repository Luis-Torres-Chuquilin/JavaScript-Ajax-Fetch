/** @format */

"use strict";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url =
  "https://us-street.api.smartystreets.com/street-address?auth-id=dc13306f-1a74-2349-76c9-f5e651264cd8&auth-token=ddtVZo7gYYVKnTMClXhN&street=142%20Park%20Rd&city=Pittsford&state=NY&zipcode=14534&candidates=10";

const updateUISuccess = (data) => {
  const parsedData = JSON.parse(data); //
  console.log("updateUISuccess: ", parsedData);
  console.log("updateUISuccess: length : ", parsedData.length);
};
const updateUIError = (error) => console.log("updateUIError: ", error);

const responseMethod = (httpRequest) => {
  console.log("HTTRESPONSE httpRequest.readyState", httpRequest.readyState);
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError(httpRequest.status + ": " + httpRequest.responseText);
    }
  }
};

const createRequest = function (url) {
  const httpRequest = new XMLHttpRequest(url);

  console.log("httpRequest.readyState", httpRequest.readyState);

  httpRequest.addEventListener("readystatechange", (url) => {
    responseMethod(httpRequest);
  });
  httpRequest.open("GET", url);
  httpRequest.send();
  console.log("httpRequest.readyState", httpRequest.readyState);
};

createRequest(url);
