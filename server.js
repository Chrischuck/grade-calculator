import path from 'path';
import express from 'express';
import compression from 'compression';

const app = express();
app.use(compression());

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendfile('./dist/index.html');
});


app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(
        '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
        PORT,
        PORT,
    )),
);
