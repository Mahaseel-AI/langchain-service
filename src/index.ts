import app from "./app";

const port = process.env.PORT ?? 4200;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`✨ langchain Services is running ...✨`);
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
