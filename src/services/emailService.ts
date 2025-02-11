import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

class EmailService {
  private static instance: EmailService;
  private initialized: boolean = false;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public init(publicKey: string) {
    if (!this.initialized) {
      emailjs.init(publicKey);
      this.initialized = true;
    }
  }

  public async sendEmail(data: EmailData): Promise<void> {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Patrício Brito',
          reply_to: data.email,
        }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}

export const emailService = EmailService.getInstance();