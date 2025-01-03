# Text to Speech Library

Library sederhana untuk mengubah teks menjadi suara dengan dukungan Bahasa Indonesia.

## Cara Pakai

```html
<!-- Include library -->
<script src="indoSpeech.js"></script>

<!-- Basic usage -->
<script>
const tts = new IndoSpeech();

// Mulai bicara
tts.speak('Halo, ini adalah contoh text to speech!');

// Kontrol
tts.pause();   // Jeda
tts.resume();  // Lanjutkan
tts.stop();    // Berhenti
</script>
```

## Opsi Konfigurasi

```javascript
const tts = new IndoSpeech({
    lang: 'id-ID',    // Bahasa
    rate: 1,          // Kecepatan (0.1 - 2)
    pitch: 1,         // Nada (0.1 - 2)
    volume: 1         // Volume (0 - 1)
});
```

## Browser Support
Disarankan menggunakan Chrome/Edge untuk hasil terbaik.

## License
MIT License

---
Made with ❤️ by [dypras666](https://github.com/dypras666)