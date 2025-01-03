class IndoSpeech {
    constructor(options = {}) {
        // Cek apakah browser mendukung Web Speech API
        if (!('speechSynthesis' in window)) {
            throw new Error('Browser Anda tidak mendukung Web Speech API');
        }

        // Inisialisasi SpeechSynthesis
        this.synth = window.speechSynthesis;
        this.utterance = null;
        
        // Set default options
        this.options = {
            lang: options.lang || 'id-ID',
            rate: options.rate || 1,
            pitch: options.pitch || 1,
            volume: options.volume || 1,
            onStart: options.onStart || (() => {}),
            onPause: options.onPause || (() => {}),
            onResume: options.onResume || (() => {}),
            onEnd: options.onEnd || (() => {}),
            onError: options.onError || (() => {})
        };
    }

    // Method untuk memulai text to speech
    speak(text) {
        return new Promise((resolve, reject) => {
            // Hentikan speech yang sedang berjalan
            this.stop();

            // Buat utterance baru
            this.utterance = new SpeechSynthesisUtterance(text);

            // Set properti
            this.utterance.lang = this.options.lang;
            this.utterance.rate = this.options.rate;
            this.utterance.pitch = this.options.pitch;
            this.utterance.volume = this.options.volume;

            // Set event handlers
            this.utterance.onstart = () => {
                this.options.onStart();
            };

            this.utterance.onpause = () => {
                this.options.onPause();
            };

            this.utterance.onresume = () => {
                this.options.onResume();
            };

            this.utterance.onend = () => {
                this.options.onEnd();
                resolve();
            };

            this.utterance.onerror = (error) => {
                this.options.onError(error);
                reject(error);
            };

            // Mulai berbicara
            this.synth.speak(this.utterance);
        });
    }

    // Method untuk menjeda speech
    pause() {
        if (this.synth.speaking) {
            this.synth.pause();
        }
    }

    // Method untuk melanjutkan speech
    resume() {
        if (this.synth.paused) {
            this.synth.resume();
        }
    }

    // Method untuk menghentikan speech
    stop() {
        this.synth.cancel();
    }

    // Method untuk mengecek status
    isSpeaking() {
        return this.synth.speaking;
    }

    isPaused() {
        return this.synth.paused;
    }

    // Method untuk mengubah pengaturan
    setRate(rate) {
        this.options.rate = rate;
        if (this.utterance) {
            this.utterance.rate = rate;
        }
    }

    setPitch(pitch) {
        this.options.pitch = pitch;
        if (this.utterance) {
            this.utterance.pitch = pitch;
        }
    }

    setVolume(volume) {
        this.options.volume = volume;
        if (this.utterance) {
            this.utterance.volume = volume;
        }
    }

    setLanguage(lang) {
        this.options.lang = lang;
        if (this.utterance) {
            this.utterance.lang = lang;
        }
    }
}

// Export library
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IndoSpeech;
} else {
    window.IndoSpeech = IndoSpeech;
}