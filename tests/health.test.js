const request = require("supertest");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../app")));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

describe("Health endpoint", () => {
  it("returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
