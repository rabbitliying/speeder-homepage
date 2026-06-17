export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>世必得科技</title>
    <style>
        body { font-family: Arial, sans-serif; background: #0a0e17; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; flex-direction: column; }
        h1 { font-size: 48px; background: linear-gradient(135deg, #00d4ff, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        p { color: #a0b4d0; font-size: 18px; }
    </style>
</head>
<body>
    <h1>世必得科技</h1>
    <p>专注互联网联接优化及联线安全</p>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  },
};
