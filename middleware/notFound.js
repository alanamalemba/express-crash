export default function handleNotFound(req, res, next) {
  const error = new Error(`Not found`);
  error.status = 404;
  next(error);
}
