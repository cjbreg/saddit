import http from "k6/http";
import { group, check, sleep } from "k6";

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<200"], // 95 percent of response times must be below 200ms
  },
  scenarios: {
    user_service: {
      exec: "AllUsersTest",
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "60s", target: 500 },
        { duration: "60s", target: 500 },
        { duration: "60s", target: 0 },
      ],
    },
    post_service: {
      exec: "AllPostsTest",
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "60s", target: 500 },
        { duration: "60s", target: 500 },
        { duration: "60s", target: 0 },
      ],
    },
  },
};

export function AllUsersTest() {
  const res = http.get("http://20.223.33.169/user");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}

export function AllPostsTest() {
  const res = http.get("http://20.223.33.169/post");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
