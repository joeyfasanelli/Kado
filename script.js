// Japanese Study App - Vue.js Application
const { createApp } = Vue;

// Japanese character data
const characterData = {
    hiragana: [
        { character: 'あ', romaji: 'a', english: 'a', hint: 'Think of a person with arms outstretched' },
        { character: 'い', romaji: 'i', english: 'i', hint: 'Two lines like the letter "i"' },
        { character: 'う', romaji: 'u', english: 'u', hint: 'Looks like a smile or cup' },
        { character: 'え', romaji: 'e', english: 'e', hint: 'Think of "e" with a line through it' },
        { character: 'お', romaji: 'o', english: 'o', hint: 'A circle with a line, like "o"' },
        { character: 'か', romaji: 'ka', english: 'ka', hint: 'K sound with a line' },
        { character: 'き', romaji: 'ki', english: 'ki', hint: 'K sound with two lines' },
        { character: 'く', romaji: 'ku', english: 'ku', hint: 'K sound with a curve' },
        { character: 'け', romaji: 'ke', english: 'ke', hint: 'K sound with a cross' },
        { character: 'こ', romaji: 'ko', english: 'ko', hint: 'K sound with two horizontal lines' },
        { character: 'さ', romaji: 'sa', english: 'sa', hint: 'S sound with a line' },
        { character: 'し', romaji: 'shi', english: 'shi', hint: 'S sound with a curve' },
        { character: 'す', romaji: 'su', english: 'su', hint: 'S sound with a loop' },
        { character: 'せ', romaji: 'se', english: 'se', hint: 'S sound with a cross' },
        { character: 'そ', romaji: 'so', english: 'so', hint: 'S sound with a zigzag' },
        { character: 'た', romaji: 'ta', english: 'ta', hint: 'T sound with a line' },
        { character: 'ち', romaji: 'chi', english: 'chi', hint: 'T sound with a curve' },
        { character: 'つ', romaji: 'tsu', english: 'tsu', hint: 'T sound with a small circle' },
        { character: 'て', romaji: 'te', english: 'te', hint: 'T sound with a cross' },
        { character: 'と', romaji: 'to', english: 'to', hint: 'T sound with a dot' },
        { character: 'な', romaji: 'na', english: 'na', hint: 'N sound with a line' },
        { character: 'に', romaji: 'ni', english: 'ni', hint: 'N sound with two lines' },
        { character: 'ぬ', romaji: 'nu', english: 'nu', hint: 'N sound with a loop' },
        { character: 'ね', romaji: 'ne', english: 'ne', hint: 'N sound with a curve' },
        { character: 'の', romaji: 'no', english: 'no', hint: 'N sound with a circle' },
        { character: 'は', romaji: 'ha', english: 'ha', hint: 'H sound with a line' },
        { character: 'ひ', romaji: 'hi', english: 'hi', hint: 'H sound with a curve' },
        { character: 'ふ', romaji: 'fu', english: 'fu', hint: 'H sound with a loop' },
        { character: 'へ', romaji: 'he', english: 'he', hint: 'H sound with a triangle' },
        { character: 'ほ', romaji: 'ho', english: 'ho', hint: 'H sound with a cross' },
        { character: 'ま', romaji: 'ma', english: 'ma', hint: 'M sound with a line' },
        { character: 'み', romaji: 'mi', english: 'mi', hint: 'M sound with a curve' },
        { character: 'む', romaji: 'mu', english: 'mu', hint: 'M sound with a loop' },
        { character: 'め', romaji: 'me', english: 'me', hint: 'M sound with a cross' },
        { character: 'も', romaji: 'mo', english: 'mo', hint: 'M sound with a dot' },
        { character: 'や', romaji: 'ya', english: 'ya', hint: 'Y sound with a line' },
        { character: 'ゆ', romaji: 'yu', english: 'yu', hint: 'Y sound with a curve' },
        { character: 'よ', romaji: 'yo', english: 'yo', hint: 'Y sound with a cross' },
        { character: 'ら', romaji: 'ra', english: 'ra', hint: 'R sound with a line' },
        { character: 'り', romaji: 'ri', english: 'ri', hint: 'R sound with two lines' },
        { character: 'る', romaji: 'ru', english: 'ru', hint: 'R sound with a loop' },
        { character: 'れ', romaji: 're', english: 're', hint: 'R sound with a curve' },
        { character: 'ろ', romaji: 'ro', english: 'ro', hint: 'R sound with a zigzag' },
        { character: 'わ', romaji: 'wa', english: 'wa', hint: 'W sound with a line' },
        { character: 'を', romaji: 'wo', english: 'wo', hint: 'W sound with a circle' },
        { character: 'ん', romaji: 'n', english: 'n', hint: 'N sound (syllabic n)' }
    ],
    
    katakana: [
        { character: 'ア', romaji: 'a', english: 'a', hint: 'Angular version of あ' },
        { character: 'イ', romaji: 'i', english: 'i', hint: 'Angular version of い' },
        { character: 'ウ', romaji: 'u', english: 'u', hint: 'Angular version of う' },
        { character: 'エ', romaji: 'e', english: 'e', hint: 'Angular version of え' },
        { character: 'オ', romaji: 'o', english: 'o', hint: 'Angular version of お' },
        { character: 'カ', romaji: 'ka', english: 'ka', hint: 'Angular version of か' },
        { character: 'キ', romaji: 'ki', english: 'ki', hint: 'Angular version of き' },
        { character: 'ク', romaji: 'ku', english: 'ku', hint: 'Angular version of く' },
        { character: 'ケ', romaji: 'ke', english: 'ke', hint: 'Angular version of け' },
        { character: 'コ', romaji: 'ko', english: 'ko', hint: 'Angular version of こ' },
        { character: 'サ', romaji: 'sa', english: 'sa', hint: 'Angular version of さ' },
        { character: 'シ', romaji: 'shi', english: 'shi', hint: 'Angular version of し' },
        { character: 'ス', romaji: 'su', english: 'su', hint: 'Angular version of す' },
        { character: 'セ', romaji: 'se', english: 'se', hint: 'Angular version of せ' },
        { character: 'ソ', romaji: 'so', english: 'so', hint: 'Angular version of そ' },
        { character: 'タ', romaji: 'ta', english: 'ta', hint: 'Angular version of た' },
        { character: 'チ', romaji: 'chi', english: 'chi', hint: 'Angular version of ち' },
        { character: 'ツ', romaji: 'tsu', english: 'tsu', hint: 'Angular version of つ' },
        { character: 'テ', romaji: 'te', english: 'te', hint: 'Angular version of て' },
        { character: 'ト', romaji: 'to', english: 'to', hint: 'Angular version of と' },
        { character: 'ナ', romaji: 'na', english: 'na', hint: 'Angular version of な' },
        { character: 'ニ', romaji: 'ni', english: 'ni', hint: 'Angular version of に' },
        { character: 'ヌ', romaji: 'nu', english: 'nu', hint: 'Angular version of ぬ' },
        { character: 'ネ', romaji: 'ne', english: 'ne', hint: 'Angular version of ね' },
        { character: 'ノ', romaji: 'no', english: 'no', hint: 'Angular version of の' },
        { character: 'ハ', romaji: 'ha', english: 'ha', hint: 'Angular version of は' },
        { character: 'ヒ', romaji: 'hi', english: 'hi', hint: 'Angular version of ひ' },
        { character: 'フ', romaji: 'fu', english: 'fu', hint: 'Angular version of ふ' },
        { character: 'ヘ', romaji: 'he', english: 'he', hint: 'Angular version of へ' },
        { character: 'ホ', romaji: 'ho', english: 'ho', hint: 'Angular version of ほ' },
        { character: 'マ', romaji: 'ma', english: 'ma', hint: 'Angular version of ま' },
        { character: 'ミ', romaji: 'mi', english: 'mi', hint: 'Angular version of み' },
        { character: 'ム', romaji: 'mu', english: 'mu', hint: 'Angular version of む' },
        { character: 'メ', romaji: 'me', english: 'me', hint: 'Angular version of め' },
        { character: 'モ', romaji: 'mo', english: 'mo', hint: 'Angular version of も' },
        { character: 'ヤ', romaji: 'ya', english: 'ya', hint: 'Angular version of や' },
        { character: 'ユ', romaji: 'yu', english: 'yu', hint: 'Angular version of ゆ' },
        { character: 'ヨ', romaji: 'yo', english: 'yo', hint: 'Angular version of よ' },
        { character: 'ラ', romaji: 'ra', english: 'ra', hint: 'Angular version of ら' },
        { character: 'リ', romaji: 'ri', english: 'ri', hint: 'Angular version of り' },
        { character: 'ル', romaji: 'ru', english: 'ru', hint: 'Angular version of る' },
        { character: 'レ', romaji: 're', english: 're', hint: 'Angular version of れ' },
        { character: 'ロ', romaji: 'ro', english: 'ro', hint: 'Angular version of ろ' },
        { character: 'ワ', romaji: 'wa', english: 'wa', hint: 'Angular version of わ' },
        { character: 'ヲ', romaji: 'wo', english: 'wo', hint: 'Angular version of を' },
        { character: 'ン', romaji: 'n', english: 'n', hint: 'Angular version of ん' }
    ],
    
    kanji: [
        { character: '一', romaji: 'ichi', english: 'one', hint: 'Single horizontal line' },
        { character: '二', romaji: 'ni', english: 'two', hint: 'Two horizontal lines' },
        { character: '三', romaji: 'san', english: 'three', hint: 'Three horizontal lines' },
        { character: '人', romaji: 'jin', english: 'person', hint: 'Stick figure person' },
        { character: '大', romaji: 'dai', english: 'big', hint: 'Person with arms outstretched' },
        { character: '小', romaji: 'shou', english: 'small', hint: 'Small lines in the middle' },
        { character: '山', romaji: 'san', english: 'mountain', hint: 'Three peaks' },
        { character: '川', romaji: 'kawa', english: 'river', hint: 'Flowing water lines' },
        { character: '水', romaji: 'mizu', english: 'water', hint: 'Water droplets' },
        { character: '火', romaji: 'hi', english: 'fire', hint: 'Flames rising up' },
        { character: '木', romaji: 'ki', english: 'tree', hint: 'Tree with branches' },
        { character: '土', romaji: 'tsuchi', english: 'earth', hint: 'Ground with a line' },
        { character: '日', romaji: 'hi', english: 'sun', hint: 'Square sun' },
        { character: '月', romaji: 'tsuki', english: 'moon', hint: 'Crescent moon' },
        { character: '年', romaji: 'nen', english: 'year', hint: 'Person carrying rice' },
        { character: '中', romaji: 'naka', english: 'middle', hint: 'Line through the middle' },
        { character: '上', romaji: 'ue', english: 'up', hint: 'Line pointing up' },
        { character: '下', romaji: 'shita', english: 'down', hint: 'Line pointing down' },
        { character: '左', romaji: 'hidari', english: 'left', hint: 'Hand pointing left' },
        { character: '右', romaji: 'migi', english: 'right', hint: 'Hand pointing right' },
        { character: '前', romaji: 'mae', english: 'front', hint: 'Person in front' },
        { character: '後', romaji: 'ato', english: 'back', hint: 'Person behind' },
        { character: '東', romaji: 'higashi', english: 'east', hint: 'Sun rising over trees' },
        { character: '西', romaji: 'nishi', english: 'west', hint: 'Sun setting' },
        { character: '南', romaji: 'minami', english: 'south', hint: 'Sun at noon' },
        { character: '北', romaji: 'kita', english: 'north', hint: 'Person facing north' },
        { character: '口', romaji: 'kuchi', english: 'mouth', hint: 'Square opening' },
        { character: '目', romaji: 'me', english: 'eye', hint: 'Eye with pupil' },
        { character: '耳', romaji: 'mimi', english: 'ear', hint: 'Ear shape' },
        { character: '手', romaji: 'te', english: 'hand', hint: 'Hand with fingers' },
        { character: '足', romaji: 'ashi', english: 'foot', hint: 'Foot with toes' },
        { character: '心', romaji: 'kokoro', english: 'heart', hint: 'Heart shape' },
        { character: '車', romaji: 'kuruma', english: 'car', hint: 'Wheeled vehicle' },
        { character: '電', romaji: 'den', english: 'electricity', hint: 'Lightning bolt' },
        { character: '話', romaji: 'hanashi', english: 'talk', hint: 'Mouth speaking' },
        { character: '見', romaji: 'mi', english: 'see', hint: 'Eye looking' },
        { character: '聞', romaji: 'ki', english: 'hear', hint: 'Ear listening' },
        { character: '書', romaji: 'ka', english: 'write', hint: 'Hand writing' },
        { character: '読', romaji: 'yo', english: 'read', hint: 'Eye reading' },
        { character: '食', romaji: 'ta', english: 'eat', hint: 'Person eating' },
        { character: '飲', romaji: 'no', english: 'drink', hint: 'Person drinking' },
        { character: '行', romaji: 'i', english: 'go', hint: 'Person walking' },
        { character: '来', romaji: 'ki', english: 'come', hint: 'Person arriving' },
        { character: '帰', romaji: 'kae', english: 'return', hint: 'Person returning home' },
        { character: '買', romaji: 'ka', english: 'buy', hint: 'Money and shell' },
        { character: '売', romaji: 'u', english: 'sell', hint: 'Person selling' },
        { character: '新', romaji: 'atara', english: 'new', hint: 'Fresh wood' },
        { character: '古', romaji: 'furu', english: 'old', hint: 'Old person' },
        { character: '高', romaji: 'taka', english: 'high', hint: 'Tall building' },
        { character: '安', romaji: 'yasu', english: 'cheap', hint: 'Woman under roof' },
        { character: '長', romaji: 'naga', english: 'long', hint: 'Long hair' },
        { character: '短', romaji: 'miji', english: 'short', hint: 'Short arrow' },
        { character: '多', romaji: 'oo', english: 'many', hint: 'Many people' },
        { character: '少', romaji: 'suku', english: 'few', hint: 'Small amount' },
        { character: '好', romaji: 'suki', english: 'like', hint: 'Woman and child' },
        { character: '悪', romaji: 'waru', english: 'bad', hint: 'Heart and mind' },
        { character: '美', romaji: 'utsuku', english: 'beautiful', hint: 'Sheep and big' },
        { character: '醜', romaji: 'miniku', english: 'ugly', hint: 'Ghost and wine' },
        { character: '強', romaji: 'tsuyo', english: 'strong', hint: 'Bow and strength' },
        { character: '弱', romaji: 'yowa', english: 'weak', hint: 'Two bows' },
        { character: '早', romaji: 'haya', english: 'early', hint: 'Sun and ten' },
        { character: '遅', romaji: 'oso', english: 'late', hint: 'Sheep and arrive' },
        { character: '近', romaji: 'chika', english: 'near', hint: 'Road and axe' },
        { character: '遠', romaji: 'too', english: 'far', hint: 'Road and long' },
        { character: '広', romaji: 'hiro', english: 'wide', hint: 'House and wide' },
        { character: '狭', romaji: 'sema', english: 'narrow', hint: 'House and narrow' },
        { character: '重', romaji: 'omo', english: 'heavy', hint: 'Person carrying' },
        { character: '軽', romaji: 'karu', english: 'light', hint: 'Car and light' },
        { character: '明', romaji: 'aka', english: 'bright', hint: 'Sun and moon' },
        { character: '暗', romaji: 'kura', english: 'dark', hint: 'Sun and sound' },
        { character: '暑', romaji: 'atsu', english: 'hot', hint: 'Sun and summer' },
        { character: '寒', romaji: 'samu', english: 'cold', hint: 'House and ice' },
        { character: '暖', romaji: 'atata', english: 'warm', hint: 'Sun and warm' },
        { character: '涼', romaji: 'suzu', english: 'cool', hint: 'Water and cool' },
        { character: '乾', romaji: 'kawa', english: 'dry', hint: 'Sun and dry' },
        { character: '湿', romaji: 'shime', english: 'wet', hint: 'Water and wet' },
        { character: '清', romaji: 'kiyo', english: 'clean', hint: 'Water and clear' },
        { character: '汚', romaji: 'kega', english: 'dirty', hint: 'Water and dirty' },
        { character: '静', romaji: 'shizu', english: 'quiet', hint: 'Blue and quiet' },
        { character: '騒', romaji: 'sawa', english: 'noisy', hint: 'Horse and noise' },
        { character: '忙', romaji: 'isoga', english: 'busy', hint: 'Heart and busy' },
        { character: '暇', romaji: 'hima', english: 'free time', hint: 'Sun and free' },
        { character: '楽', romaji: 'tano', english: 'fun', hint: 'Tree and music' },
        { character: '苦', romaji: 'kuru', english: 'painful', hint: 'Grass and bitter' },
        { character: '痛', romaji: 'ita', english: 'pain', hint: 'Disease and pain' },
        { character: '疲', romaji: 'tsuka', english: 'tired', hint: 'Disease and skin' },
        { character: '眠', romaji: 'nemu', english: 'sleepy', hint: 'Eye and sleep' },
        { character: '起', romaji: 'o', english: 'wake up', hint: 'Person and stand' },
        { character: '寝', romaji: 'ne', english: 'sleep', hint: 'House and sleep' },
        { character: '夢', romaji: 'yume', english: 'dream', hint: 'Evening and dream' },
        { character: '現', romaji: 'gen', english: 'present', hint: 'King and see' },
        { character: '実', romaji: 'jitsu', english: 'real', hint: 'House and fruit' },
        { character: '虚', romaji: 'kyo', english: 'false', hint: 'Tiger and empty' },
        { character: '真', romaji: 'shin', english: 'true', hint: 'Ten and eye' },
        { character: '偽', romaji: 'nise', english: 'fake', hint: 'Person and false' },
        { character: '善', romaji: 'zen', english: 'good', hint: 'Sheep and good' },
        { character: '悪', romaji: 'aku', english: 'evil', hint: 'Heart and mind' },
        { character: '正', romaji: 'sei', english: 'correct', hint: 'Stop and one' },
        { character: '誤', romaji: 'go', english: 'mistake', hint: 'Word and mistake' },
        { character: '同', romaji: 'dou', english: 'same', hint: 'Mouth and one' },
        { character: '異', romaji: 'i', english: 'different', hint: 'Rice and different' },
        { character: '似', romaji: 'ni', english: 'similar', hint: 'Person and similar' },
        { character: '違', romaji: 'chiga', english: 'different', hint: 'Road and different' },
        { character: '合', romaji: 'a', english: 'fit', hint: 'Person and mouth' },
        { character: '分', romaji: 'bun', english: 'divide', hint: 'Eight and knife' },
        { character: '集', romaji: 'atsu', english: 'gather', hint: 'Bird and gather' },
        { character: '散', romaji: 'san', english: 'scatter', hint: 'Moon and scatter' },
        { character: '始', romaji: 'haji', english: 'begin', hint: 'Woman and begin' },
        { character: '終', romaji: 'owari', english: 'end', hint: 'Thread and end' },
        { character: '続', romaji: 'tsuzu', english: 'continue', hint: 'Thread and continue' },
        { character: '止', romaji: 'to', english: 'stop', hint: 'Foot and stop' },
        { character: '動', romaji: 'ugo', english: 'move', hint: 'Heavy and power' },
        { character: '静', romaji: 'shizu', english: 'still', hint: 'Blue and quiet' },
        { character: '開', romaji: 'hira', english: 'open', hint: 'Door and open' },
        { character: '閉', romaji: 'shi', english: 'close', hint: 'Door and close' },
        { character: '入', romaji: 'i', english: 'enter', hint: 'Person entering' },
        { character: '出', romaji: 'de', english: 'exit', hint: 'Person exiting' },
        { character: '上', romaji: 'a', english: 'up', hint: 'Line pointing up' },
        { character: '下', romaji: 'sa', english: 'down', hint: 'Line pointing down' },
        { character: '内', romaji: 'uchi', english: 'inside', hint: 'Person inside' },
        { character: '外', romaji: 'soto', english: 'outside', hint: 'Person outside' },
        { character: '中', romaji: 'naka', english: 'middle', hint: 'Line through middle' },
        { character: '間', romaji: 'aida', english: 'between', hint: 'Gate and sun' },
        { character: '前', romaji: 'mae', english: 'front', hint: 'Person in front' },
        { character: '後', romaji: 'ato', english: 'back', hint: 'Person behind' },
        { character: '左', romaji: 'hidari', english: 'left', hint: 'Hand pointing left' },
        { character: '右', romaji: 'migi', english: 'right', hint: 'Hand pointing right' },
        { character: '東', romaji: 'higashi', english: 'east', hint: 'Sun rising over trees' },
        { character: '西', romaji: 'nishi', english: 'west', hint: 'Sun setting' },
        { character: '南', romaji: 'minami', english: 'south', hint: 'Sun at noon' },
        { character: '北', romaji: 'kita', english: 'north', hint: 'Person facing north' }
    ]
};

// Create Vue app
const app = createApp({
    data() {
        return {
            // App state
            selectedCharacterSet: null,
            isDarkTheme: false,
            showStats: false,
            
            // Study session state
            currentCards: [],
            currentCardIndex: 0,
            userAnswer: '',
            showAnswer: false,
            isCorrect: false,
            
            // Statistics
            correctAnswers: 0,
            incorrectAnswers: 0,
            
            // Progress tracking
            stats: {
                hiragana: { correct: 0, total: 0 },
                katakana: { correct: 0, total: 0 },
                kanji: { correct: 0, total: 0 }
            }
        }
    },
    
    computed: {
        currentCard() {
            return this.currentCards[this.currentCardIndex] || {};
        }
    },
    
    mounted() {
        this.initializeMaterialUI();
        this.loadFromLocalStorage();
        this.initializeJQuery();
    },
    
    methods: {
        // Character set selection
        selectCharacterSet(set) {
            this.selectedCharacterSet = set;
            this.currentCards = this.shuffleArray([...characterData[set]]);
            this.currentCardIndex = 0;
            this.userAnswer = '';
            this.showAnswer = false;
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            
            // Focus on input after a short delay
            this.$nextTick(() => {
                setTimeout(() => {
                    if (this.$refs.answerInput) {
                        this.$refs.answerInput.focus();
                    }
                }, 100);
            });
        },
        
        // Navigation
        goBack() {
            this.selectedCharacterSet = null;
            this.showStats = false;
        },
        
        // Answer checking
        checkAnswer() {
            if (!this.userAnswer.trim()) return;
            
            const userAnswerLower = this.userAnswer.trim().toLowerCase();
            const correctAnswer = this.currentCard.english.toLowerCase();
            
            this.isCorrect = userAnswerLower === correctAnswer;
            
            if (this.isCorrect) {
                this.correctAnswers++;
                this.stats[this.selectedCharacterSet].correct++;
            } else {
                this.incorrectAnswers++;
            }
            
            this.stats[this.selectedCharacterSet].total++;
            this.showAnswer = true;
            this.saveToLocalStorage();
            
            // Simple feedback without flip animation
            $(document).ready(() => {
                const flashcard = $('.flashcard');
                
                // Add success/error animation
                if (this.isCorrect) {
                    flashcard.addClass('correct-answer');
                } else {
                    flashcard.addClass('incorrect-answer');
                }
                
                setTimeout(() => {
                    flashcard.removeClass('correct-answer incorrect-answer');
                }, 1000);
            });
        },
        
        // Card navigation
        nextCard() {
            this.currentCardIndex++;
            this.userAnswer = '';
            this.showAnswer = false;
            
            // If we've reached the end, shuffle and start over
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCards = this.shuffleArray([...this.currentCards]);
                this.currentCardIndex = 0;
            }
            
            // Focus on input
            this.$nextTick(() => {
                if (this.$refs.answerInput) {
                    this.$refs.answerInput.focus();
                }
            });
        },
        

        
        // Input handling
        onInput() {
            // Properly handle Material UI text field behavior
            if (this.$refs.answerInput) {
                const textField = this.$refs.answerInput.closest('.mdc-text-field');
                if (textField) {
                    // Add focused class when user starts typing
                    if (this.userAnswer) {
                        textField.classList.add('mdc-text-field--focused');
                        textField.classList.add('mdc-text-field--label-floating');
                    } else {
                        textField.classList.remove('mdc-text-field--focused');
                        textField.classList.remove('mdc-text-field--label-floating');
                    }
                }
            }
        },
        
        // Theme management
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
            this.saveToLocalStorage();
        },
        
        // Close statistics modal
        closeStatsModal() {
            this.showStats = false;
        },
        
        getCharacterSetTitle() {
            const titles = {
                hiragana: 'Hiragana',
                katakana: 'Katakana',
                kanji: 'Kanji'
            };
            return titles[this.selectedCharacterSet] || '';
        },
        
        // Utility functions
        shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },
        
        // Material UI initialization
        initializeMaterialUI() {
            // Initialize Material UI components when they're available
            if (window.mdc) {
                // Initialize text fields
                const textFields = document.querySelectorAll('.mdc-text-field');
                textFields.forEach(field => {
                    const textField = new mdc.textField.MDCTextField(field);
                    
                    // Add focus and blur event listeners
                    const input = field.querySelector('.mdc-text-field__input');
                    if (input) {
                        input.addEventListener('focus', () => {
                            field.classList.add('mdc-text-field--focused');
                        });
                        
                        input.addEventListener('blur', () => {
                            if (!input.value) {
                                field.classList.remove('mdc-text-field--focused');
                                field.classList.remove('mdc-text-field--label-floating');
                            }
                        });
                    }
                });
                
                // Initialize buttons
                const buttons = document.querySelectorAll('.mdc-button');
                buttons.forEach(button => {
                    new mdc.ripple.MDCRipple(button);
                });
                
                // Initialize icon buttons
                const iconButtons = document.querySelectorAll('.mdc-icon-button');
                iconButtons.forEach(button => {
                    new mdc.ripple.MDCRipple(button);
                });
            }
        },
        
        // jQuery integration
        initializeJQuery() {
            $(document).ready(() => {
                // Keyboard shortcuts
                $(document).keydown((e) => {
                    // Ctrl/Cmd + K to toggle theme
                    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                        e.preventDefault();
                        this.toggleTheme();
                    }
                    
                    // Escape to close stats modal
                    if (e.key === 'Escape' && this.showStats) {
                        this.closeStatsModal();
                    }
                    
                    // Enter to check answer or next card
                    if (e.key === 'Enter') {
                        if (!this.showAnswer && this.userAnswer.trim()) {
                            this.checkAnswer();
                        } else if (this.showAnswer) {
                            this.nextCard();
                        }
                    }
                });
                
                // Add hover effects
                $('.character-set-card').hover(
                    function() {
                        $(this).find('.character-set-icon').addClass('pulse');
                    },
                    function() {
                        $(this).find('.character-set-icon').removeClass('pulse');
                    }
                );
            });
        },
        
        // Notification system
        showNotification(message, type = 'info') {
            const alertClass = {
                'success': 'alert-success',
                'warning': 'alert-warning',
                'danger': 'alert-danger',
                'info': 'alert-info'
            }[type] || 'alert-info';
            
            const icon = {
                'success': 'check_circle',
                'warning': 'warning',
                'danger': 'error',
                'info': 'info'
            }[type] || 'info';
            
            const notification = $(`
                <div class="alert ${alertClass} alert-dismissible fade show position-fixed" 
                     style="top: 20px; right: 20px; z-index: 9999; min-width: 300px; max-width: 400px;">
                    <div class="d-flex align-items-center">
                        <span class="material-icons me-2">${icon}</span>
                        <span>${message}</span>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `);
            
            $('body').append(notification);
            
            // Auto-remove after 5 seconds
            setTimeout(() => {
                notification.fadeOut(300, () => notification.remove());
            }, 5000);
        },
        
        // Local storage
        saveToLocalStorage() {
            const data = {
                stats: this.stats,
                isDarkTheme: this.isDarkTheme
            };
            localStorage.setItem('japaneseStudyData', JSON.stringify(data));
        },
        
        loadFromLocalStorage() {
            const data = localStorage.getItem('japaneseStudyData');
            if (data) {
                const parsed = JSON.parse(data);
                this.stats = parsed.stats || this.stats;
                this.isDarkTheme = parsed.isDarkTheme || false;
                
                // Apply theme
                if (this.isDarkTheme) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                }
            }
        }
    },
    
    watch: {
        // Watch for changes and save to localStorage
        stats: {
            handler() {
                this.saveToLocalStorage();
            },
            deep: true
        },
        
        isDarkTheme() {
            this.saveToLocalStorage();
        }
    }
});

// Mount the app
app.mount('#app');

// Add CSS for animations
const additionalCSS = `
    .pulse {
        animation: pulse 0.6s ease-in-out;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .flashcard.correct-answer {
        animation: correctPulse 1s ease-in-out;
    }
    
    .flashcard.incorrect-answer {
        animation: incorrectShake 1s ease-in-out;
    }
    
    @keyframes correctPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes incorrectShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .alert {
        background: var(--mdc-theme-surface);
        border: 1px solid var(--divider-color);
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-3);
    }
    
    .alert-success {
        border-left: 4px solid var(--success-color);
    }
    
    .alert-warning {
        border-left: 4px solid var(--warning-color);
    }
    
    .alert-danger {
        border-left: 4px solid var(--mdc-theme-error);
    }
    
    .alert-info {
        border-left: 4px solid var(--info-color);
    }
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style); 