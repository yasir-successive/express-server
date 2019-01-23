export default function errorHandler(err, req, res, next) {
  let ts = new Date();

  res.json({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: ts.toJSON()
  });
}
