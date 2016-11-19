export default (req, res, next) => {
  if ( !(req.headers.user === 'admin') ) {
    return next('access error');
  }

  return next();
}
