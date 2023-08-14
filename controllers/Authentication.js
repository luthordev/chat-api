const { OAuth2Client } = require("google-auth-library");
const validate = require("../utils/validate");
const db = require("../utils/db");

let oauth2Client = new OAuth2Client(
  "217038659284-7dbi6k7u815mlaa1spuuag9bn093pe3e.apps.googleusercontent.com",
  "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",
  "http://localhost:5173/chat"
);

async function Login(req, res) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });
  res.redirect(authUrl);
}

async function GetUserInfo(req, res) {
  try {
    const code = req.query.code;
    const { tokens } = await oauth2Client.getToken(code);

    const userinfo = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience:
        "217038659284-7dbi6k7u815mlaa1spuuag9bn093pe3e.apps.googleusercontent.com",
    });

    res.send(userinfo);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Invalid code.",
    });
  }
}

module.exports = { Login, GetUserInfo };
