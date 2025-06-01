type fristByProps = {
  customId: string;
};

export const FistBuyEmailHtml = ({ customId }: fristByProps) => {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bem-vindo à Clinitt.ai</title>
    <style>
      body {
        background-color: #f0f4f8;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0; padding: 0;
      }
      .container {
        background: #ffffff;
        border-radius: 12px;
        padding: 40px 30px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        max-width: 500px;
        margin: 40px auto;
        text-align: center;
        color: #333333;
      }
      h1 {
        color: #006d77;
        margin-bottom: 24px;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .button {
        display: inline-block;
        padding: 14px 28px;
        background-color: #006d77;
        color: #ffffff !important;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        margin: 20px auto;
      }
      .footer {
        font-size: 14px;
        color: #718096;
        margin-top: 30px;
      }
    </style>
    </head>
    <body>
      <div class="container">
        <h1>Olá, Dentista!</h1>
        <p>Seja bem-vindo à <strong>Clinitt.ai</strong>, o sistema especialista em orçamentos odontológicos estratégicos.</p>
        <p>Sua conta já está ativa.</p>
        <p>Para acessar a plataforma pela primeira vez, clique no botão abaixo e defina sua senha:</p>
    
        <a href="${process.env.NEXT_PUBLIC_URL}/reset-password/${customId}" class="button">Definir Senha e Acessar</a>
    
        <p>Com a <strong>Clinitt.ai</strong>, você cria orçamentos personalizados em segundos, aumenta sua taxa de conversão e apresenta sua clínica de forma profissional.</p>
    
        <p>⚠️ <strong>Atenção:</strong><br>
        Em até 72 horas úteis, nosso time entrará em contato pelo número cadastrado para agendar seu onboarding.</p>
    
        <p>Nesse encontro, você vai conhecer todos os recursos da plataforma e aprender como potencializar seus resultados desde o início.</p>
    
        <p>Qualquer dúvida, estamos por aqui.</p>
    
        <div class="footer">
          <p>Equipe Clinitt.ai</p>
          <p><a href="https://www.clinitt.ai" style="color: #006d77; text-decoration: none;">www.clinitt.ai</a></p>
        </div>
      </div>
    </body>
    </html>
    `;

  return html;
};
