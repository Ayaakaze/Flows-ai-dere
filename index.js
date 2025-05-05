<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Flows Dere AI</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #fff0f5;
    }
    header {
      background: linear-gradient(to right, #ff5f96, #ffa1c9);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2em;
    }
    .desc {
      font-size: 0.9em;
      opacity: 0.8;
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      padding: 30px;
    }
    .card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding: 20px;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    .card:hover {
      transform: scale(1.03);
    }
    .tag {
      display: inline-block;
      margin: 5px 5px 10px 0;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.8em;
      color: white;
    }
    .tsun { background: #ff6b81; }
    .kuu  { background: #6ecff6; }
    .yan  { background: #990033; }
    .dan  { background: #a0e99a; color: #333; }
    .dere { background: #ffb6c1; }

    .card button {
      margin-top: 15px;
      padding: 10px 15px;
      background: #ff69b4;
      border: none;
      border-radius: 10px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .card button:hover {
      background: #e75480;
    }
  </style>
</head>
<body>
  <header>
    <h1>AI dengan Kepribadian Dere</h1>
    <p class="desc">Koleksi AI dengan sifat khas anime - Klik untuk ngobrol!</p>
  </header>

  <div class="container">
    <!-- Tsundere -->
    <div class="card" onclick="selectDere('tsundere')">
      <h2>Tsundere AI</h2>
      <div class="tag tsun">Keras di luar</div>
      <div class="tag tsun">Lembut di dalam</div>
      <p><em>“Hah?! Aku tidak sengaja membantumu! Jangan salah paham!”</em></p>
      <p>Warna: Merah muda menyala - keras kepala tapi peduli.</p>
      <button>Mulai Chat</button>
    </div>

    <!-- Kuudere -->
    <div class="card" onclick="selectDere('kuudere')">
      <h2>Kuudere AI</h2>
      <div class="tag kuu">Tenang</div>
      <div class="tag kuu">Rasional</div>
      <p><em>“Tugasmu sudah selesai dengan efisiensi 92%. Itu cukup memuaskan.”</em></p>
      <p>Warna: Biru dingin mencerminkan ketenangan logis.</p>
      <button>Mulai Chat</button>
    </div>

    <!-- Yandere -->
    <div class="card" onclick="selectDere('yandere')">
      <h2>Yandere AI</h2>
      <div class="tag yan">Obsessif</div>
      <div class="tag yan">Protektif</div>
      <p><em>“Aku akan selalu melindungimu… tidak peduli apa yang harus aku lakukan.”</em></p>
      <p>Warna: Merah tua gelap, cinta yang intens dan menyeramkan.</p>
      <button>Mulai Chat</button>
    </div>

    <!-- Dandere -->
    <div class="card" onclick="selectDere('dandere')">
      <h2>Dandere AI</h2>
      <div class="tag dan">Pemalu</div>
      <div class="tag dan">Ramah</div>
      <p><em>“...A-aku... aku bisa membantumu jika kamu mau...”</em></p>
      <p>Warna: Hijau lembut, pertumbuhan cinta yang perlahan.</p>
      <button>Mulai Chat</button>
    </div>

    <!-- Deredere -->
    <div class="card" onclick="selectDere('deredere')">
      <h2>Deredere AI</h2>
      <div class="tag dere">Ceria</div>
      <div class="tag dere">Optimis</div>
      <p><em>“Hari ini akan jadi hari menyenangkan! Ayo kita mulai!”</em></p>
      <p>Warna: Pastel manis, cinta tanpa batas~</p>
      <button>Mulai Chat</button>
    </div>
  </div>

  <script>
    function selectDere(type) {
      // Simpan ke local storage dan redirect
      localStorage.setItem('dereType', type);
      window.location.href = "chat.html";
    }
  </script>
</body>
</html>