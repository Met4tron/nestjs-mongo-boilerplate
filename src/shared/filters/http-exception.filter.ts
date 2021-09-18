import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException, HttpStatus
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const statusCode = exception.getStatus()

        response.status(statusCode).json({
            statusCode,
            message: HttpStatus[statusCode]
        })
    }
}