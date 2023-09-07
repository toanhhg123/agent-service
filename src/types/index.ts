export interface IResponse<T> {
  status: 'success' | 'error'
  message: string
  element: T
}

export class ResponseError {
  public status!: number
  public message!: string
  public additionalInfo!: unknown

  constructor(message: string, status = 400, additionalInfo = {}) {
    this.message = message
    this.status = status
    this.additionalInfo = additionalInfo
  }

  static forbbidenError(
    message?: string,
    additionalInfo?: unknown
  ): ResponseError {
    return new ResponseError(message ?? 'forbbiden', 403, additionalInfo ?? {})
  }
}
