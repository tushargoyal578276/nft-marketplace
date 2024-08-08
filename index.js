const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", 'ejs');
app.use(express.static("public"));
const port = process.env.PORT || 3000;


app.get("/", async (req, res) => {
    try {
      res.render('index');
    } catch (err) {
      res.send(err.message);
    }
  });
  
  app.get("/home-nft", async (req, res) => {
    try {
      res.render('home-nft');
  
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/dashboard-tokensales", async (req, res) => {
    try {
      res.render('dashboard-tokensales');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/dashboard-features", async (req, res) => {
    try {
      res.render('dashboard-features');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/dashboard-roadmap", async (req, res) => {
    try {
      res.render('dashboard-roadmap');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/dashboard-creations", async (req, res) => {
    try {
      res.render('dashboard-creations');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/dashboard-team", async (req, res) => {
    try {
      res.render('dashboard-team');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/dashboard-faq", async (req, res) => {
    try {
      res.render('dashboard-faq');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/blog-v2", async (req, res) => {
    try {
      res.render('blog-v2');
    } catch (err) {
      res.send(err.message);
    }
  });

  app.get("/connect-wallet", async (req, res) => {
    try {
      res.render('connect-wallet');
    } catch (err) {
      res.send(err.message);
    }
  });

//   app.get("/", async (req, res) => {
//     try {
//       res.render('index');
//     } catch (err) {
//       res.send(err.message);
//     }
//   });

  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });