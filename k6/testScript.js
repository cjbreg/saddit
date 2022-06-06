import http from "k6/http";
import { group, check } from "k6";

export let options = {
  stages: [
    { duration: "60s", target: 500 },
    { duration: "60s", target: 500 },
    { duration: "60s", target: 0 },
  ],
};

export default function () {
  group("API uptime check", () => {
    const response = http.get("http://20.223.33.169/user");
    check(response, {
      "status code should be 200": (res) => res.status === 200,
    });
  });
}
