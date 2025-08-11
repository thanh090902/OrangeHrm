// 📁 utils/logger.ts

export class LoggerHelper {
    static info(message: string) {
      console.log(`\x1b[36m[INFO]\x1b[0m ${message}`); // Cyan
    }
  
    static success(message: string) {
      console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`); // Green
    }
  
    static warning(message: string) {
      console.warn(`\x1b[33m[WARNING]\x1b[0m ${message}`); // Yellow
    }
  
    static error(message: string) {
      console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`); // Red
    }
  
    static debug(message: string) {
      console.debug(`\x1b[35m[DEBUG]\x1b[0m ${message}`); // Magenta
    }
  }