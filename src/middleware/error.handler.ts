export function logErrors (err: any, req: any, res: any, next: any) {
  console.error(err);
  next(err)
}

export function errorHandler(err: any, req: any, res: any, next: any) {
  console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })

  next()
}
