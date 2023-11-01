import axiosPrimitive from "axios";

export const axios = axiosPrimitive.create({
  baseURL: "",
  headers: {
    "X-Custom-Header": "foobar",
  },
});
