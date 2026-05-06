using System.Net;
using System.Net.Mail;

namespace Ravea.Api.Services
{
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendPasswordResetCodeAsync(string toEmail, string resetCode)
        {
            var smtpHost = _configuration["EmailSettings:SmtpHost"];
            var smtpPort = int.Parse(_configuration["EmailSettings:SmtpPort"]!);
            var senderEmail = _configuration["EmailSettings:SenderEmail"];
            var senderPassword = _configuration["EmailSettings:SenderPassword"];

            var message = new MailMessage();
            message.From = new MailAddress(senderEmail!, "RAVÉA Support");
            message.To.Add(toEmail);
            message.Subject = "Your RAVÉA Password Reset Code";
            message.Body =
                $"Hello,\n\nYour RAVÉA password reset code is: {resetCode}\n\nThis code will expire in 10 minutes.\n\nRAVÉA Team";
            message.IsBodyHtml = false;

            using var client = new SmtpClient(smtpHost, smtpPort)
            {
                Credentials = new NetworkCredential(senderEmail, senderPassword),
                EnableSsl = true
            };

            await client.SendMailAsync(message);
        }
    }
}