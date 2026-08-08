// ============================================================
// 1. DADOS: 1000 palavras mais frequentes (NGSL/COCA corpus)
// Nível A (0-99), B (100-199) ... J (900-999)
// ============================================================
const WORDS = [
    // Nível A (0-99) - As 100 mais essenciais
    { en: "the", pt: "o, a, os, as" }, { en: "be", pt: "ser, estar" }, { en: "to", pt: "para, ir" }, { en: "of", pt: "de" }, { en: "and", pt: "e" }, { en: "a", pt: "um, uma" }, { en: "in", pt: "em, dentro" }, { en: "that", pt: "que, aquele" }, { en: "have", pt: "ter" }, { en: "i", pt: "eu" },
    { en: "it", pt: "ele, ela (neutro)" }, { en: "for", pt: "para (por)" }, { en: "not", pt: "não" }, { en: "on", pt: "sobre, em cima" }, { en: "with", pt: "com" }, { en: "he", pt: "ele" }, { en: "as", pt: "como, enquanto" }, { en: "you", pt: "você" }, { en: "do", pt: "fazer" }, { en: "at", pt: "em (local)" },
    { en: "this", pt: "este, esta" }, { en: "but", pt: "mas" }, { en: "his", pt: "seu (dele)" }, { en: "by", pt: "por, perto" }, { en: "from", pt: "de (origem)" }, { en: "they", pt: "eles/elas" }, { en: "we", pt: "nós" }, { en: "say", pt: "dizer" }, { en: "her", pt: "dela, seu" }, { en: "she", pt: "ela" },
    { en: "or", pt: "ou" }, { en: "an", pt: "um/uma (antes de vogal)" }, { en: "will", pt: "vai (futuro)" }, { en: "my", pt: "meu/minha" }, { en: "one", pt: "um, uma (número)" }, { en: "all", pt: "todos, tudo" }, { en: "would", pt: "iria" }, { en: "there", pt: "lá" }, { en: "their", pt: "deles/delas" }, { en: "what", pt: "o que" },
    { en: "so", pt: "então, tão" }, { en: "up", pt: "cima, para cima" }, { en: "out", pt: "fora, para fora" }, { en: "if", pt: "se" }, { en: "about", pt: "sobre, aproximadamente" }, { en: "who", pt: "quem" }, { en: "get", pt: "obter, pegar" }, { en: "which", pt: "o qual" }, { en: "go", pt: "ir" }, { en: "me", pt: "mim, me" },
    { en: "when", pt: "quando" }, { en: "make", pt: "fazer, criar" }, { en: "can", pt: "pode, conseguir" }, { en: "like", pt: "gostar, como" }, { en: "time", pt: "tempo, hora" }, { en: "no", pt: "não" }, { en: "just", pt: "apenas, justo" }, { en: "him", pt: "ele (objeto)" }, { en: "know", pt: "saber, conhecer" }, { en: "take", pt: "pegar, levar" },
    { en: "people", pt: "pessoas" }, { en: "into", pt: "para dentro" }, { en: "year", pt: "ano" }, { en: "your", pt: "seu (de você)" }, { en: "good", pt: "bom" }, { en: "some", pt: "alguns, algum" }, { en: "could", pt: "poderia" }, { en: "them", pt: "eles/elas (objeto)" }, { en: "see", pt: "ver" }, { en: "other", pt: "outro" },
    { en: "than", pt: "do que" }, { en: "then", pt: "então, depois" }, { en: "now", pt: "agora" }, { en: "look", pt: "olhar" }, { en: "only", pt: "apenas, somente" }, { en: "come", pt: "vir" }, { en: "its", pt: "seu (neutro)" }, { en: "over", pt: "sobre, acima" }, { en: "think", pt: "pensar" }, { en: "also", pt: "também" },
    { en: "back", pt: "costas, voltar" }, { en: "after", pt: "depois" }, { en: "use", pt: "usar" }, { en: "two", pt: "dois" }, { en: "how", pt: "como" }, { en: "our", pt: "nosso" }, { en: "work", pt: "trabalho, trabalhar" }, { en: "first", pt: "primeiro" }, { en: "well", pt: "bem, poço" }, { en: "way", pt: "caminho, jeito" },
    { en: "even", pt: "até, mesmo" }, { en: "new", pt: "novo" }, { en: "want", pt: "querer" }, { en: "because", pt: "porque" }, { en: "any", pt: "qualquer, algum" }, { en: "these", pt: "estes/estas" }, { en: "give", pt: "dar" }, { en: "day", pt: "dia" }, { en: "most", pt: "mais, a maioria" }, { en: "us", pt: "nós (objeto)" },

    // Nível B (100-199) - Frequência média-alta
    { en: "here", pt: "aqui" }, { en: "thing", pt: "coisa" }, { en: "much", pt: "muito" }, { en: "really", pt: "realmente" }, { en: "right", pt: "certo, direita" }, { en: "tell", pt: "contar, dizer" }, { en: "own", pt: "próprio, possuir" }, { en: "too", pt: "também, muito" }, { en: "old", pt: "velho" }, { en: "place", pt: "lugar" },
    { en: "life", pt: "vida" }, { en: "world", pt: "mundo" }, { en: "house", pt: "casa" }, { en: "call", pt: "chamar, ligar" }, { en: "try", pt: "tentar" }, { en: "man", pt: "homem" }, { en: "big", pt: "grande" }, { en: "long", pt: "longo" }, { en: "day", pt: "dia" }, { en: "where", pt: "onde" },
    { en: "down", pt: "abaixo, para baixo" }, { en: "more", pt: "mais" }, { en: "feel", pt: "sentir" }, { en: "few", pt: "poucos" }, { en: "before", pt: "antes" }, { en: "through", pt: "através" }, { en: "good", pt: "bom" }, { en: "around", pt: "ao redor" }, { en: "between", pt: "entre" }, { en: "need", pt: "precisar" },
    { en: "should", pt: "deveria" }, { en: "keep", pt: "manter" }, { en: "child", pt: "criança" }, { en: "next", pt: "próximo" }, { en: "find", pt: "encontrar" }, { en: "why", pt: "por que" }, { en: "ask", pt: "perguntar" }, { en: "woman", pt: "mulher" }, { en: "different", pt: "diferente" }, { en: "hand", pt: "mão" },
    { en: "head", pt: "cabeça" }, { en: "stand", pt: "ficar em pé" }, { en: "put", pt: "colocar" }, { en: "eye", pt: "olho" }, { en: "family", pt: "família" }, { en: "story", pt: "história" }, { en: "friend", pt: "amigo" }, { en: "start", pt: "começar" }, { en: "great", pt: "ótimo" }, { en: "help", pt: "ajudar" },
    { en: "mean", pt: "significar" }, { en: "name", pt: "nome" }, { en: "show", pt: "mostrar" }, { en: "better", pt: "melhor" }, { en: "same", pt: "mesmo" }, { en: "young", pt: "jovem" }, { en: "true", pt: "verdadeiro" }, { en: "power", pt: "poder" }, { en: "country", pt: "país" }, { en: "car", pt: "carro" },
    { en: "water", pt: "água" }, { en: "air", pt: "ar" }, { en: "food", pt: "comida" }, { en: "school", pt: "escola" }, { en: "run", pt: "correr" }, { en: "play", pt: "jogar, tocar" }, { en: "hear", pt: "ouvir" }, { en: "music", pt: "música" }, { en: "read", pt: "ler" }, { en: "write", pt: "escrever" },
    { en: "talk", pt: "falar" }, { en: "walk", pt: "andar" }, { en: "buy", pt: "comprar" }, { en: "eat", pt: "comer" }, { en: "drink", pt: "beber" }, { en: "sleep", pt: "dormir" }, { en: "open", pt: "abrir" }, { en: "close", pt: "fechar" }, { en: "happy", pt: "feliz" }, { en: "sad", pt: "triste" },
    { en: "fast", pt: "rápido" }, { en: "slow", pt: "devagar" }, { en: "hot", pt: "quente" }, { en: "cold", pt: "frio" }, { en: "easy", pt: "fácil" }, { en: "hard", pt: "difícil, duro" }, { en: "white", pt: "branco" }, { en: "black", pt: "preto" }, { en: "red", pt: "vermelho" }, { en: "blue", pt: "azul" },

    // Nível C (200-299) - Continuação do core diário
    { en: "green", pt: "verde" }, { en: "yellow", pt: "amarelo" }, { en: "mother", pt: "mãe" }, { en: "father", pt: "pai" }, { en: "brother", pt: "irmão" }, { en: "sister", pt: "irmã" }, { en: "teacher", pt: "professor" }, { en: "student", pt: "estudante" }, { en: "doctor", pt: "médico" }, { en: "nurse", pt: "enfermeira" },
    { en: "police", pt: "polícia" }, { en: "money", pt: "dinheiro" }, { en: "price", pt: "preço" }, { en: "store", pt: "loja" }, { en: "market", pt: "mercado" }, { en: "city", pt: "cidade" }, { en: "street", pt: "rua" }, { en: "road", pt: "estrada" }, { en: "park", pt: "parque" }, { en: "bank", pt: "banco" },
    { en: "hospital", pt: "hospital" }, { en: "hotel", pt: "hotel" }, { en: "church", pt: "igreja" }, { en: "beach", pt: "praia" }, { en: "mountain", pt: "montanha" }, { en: "river", pt: "rio" }, { en: "ocean", pt: "oceano" }, { en: "forest", pt: "floresta" }, { en: "garden", pt: "jardim" }, { en: "kitchen", pt: "cozinha" },
    { en: "room", pt: "quarto, sala" }, { en: "door", pt: "porta" }, { en: "window", pt: "janela" }, { en: "table", pt: "mesa" }, { en: "chair", pt: "cadeira" }, { en: "bed", pt: "cama" }, { en: "book", pt: "livro" }, { en: "pen", pt: "caneta" }, { en: "phone", pt: "telefone" }, { en: "computer", pt: "computador" },
    { en: "internet", pt: "internet" }, { en: "email", pt: "e-mail" }, { en: "video", pt: "vídeo" }, { en: "photo", pt: "foto" }, { en: "movie", pt: "filme" }, { en: "song", pt: "música" }, { en: "dance", pt: "dança, dançar" }, { en: "party", pt: "festa" }, { en: "game", pt: "jogo" }, { en: "team", pt: "time" },
    { en: "win", pt: "ganhar" }, { en: "lose", pt: "perder" }, { en: "love", pt: "amar" }, { en: "hate", pt: "odiar" }, { en: "like", pt: "gostar" }, { en: "enjoy", pt: "aproveitar" }, { en: "hope", pt: "esperar" }, { en: "wish", pt: "desejar" }, { en: "believe", pt: "acreditar" }, { en: "imagine", pt: "imaginar" },

    // Nível D (300-399) - Verbos e substantivos comuns
    { en: "realize", pt: "perceber" }, { en: "understand", pt: "entender" }, { en: "explain", pt: "explicar" }, { en: "describe", pt: "descrever" }, { en: "decide", pt: "decidir" }, { en: "consider", pt: "considerar" }, { en: "continue", pt: "continuar" }, { en: "prefer", pt: "preferir" }, { en: "offer", pt: "oferecer" }, { en: "refuse", pt: "recusar" },
    { en: "forget", pt: "esquecer" }, { en: "remember", pt: "lembrar" }, { en: "follow", pt: "seguir" }, { en: "lead", pt: "liderar" }, { en: "miss", pt: "sentir falta, perder" }, { en: "worry", pt: "preocupar" }, { en: "care", pt: "cuidar, importar" }, { en: "share", pt: "compartilhar" }, { en: "save", pt: "salvar, economizar" }, { en: "spend", pt: "gastar" },
    { en: "travel", pt: "viajar" }, { en: "drive", pt: "dirigir" }, { en: "fly", pt: "voar" }, { en: "swim", pt: "nadar" }, { en: "climb", pt: "escalar" }, { en: "build", pt: "construir" }, { en: "break", pt: "quebrar" }, { en: "fix", pt: "consertar" }, { en: "clean", pt: "limpar" }, { en: "cook", pt: "cozinhar" },
    { en: "wear", pt: "usar (roupa)" }, { en: "choose", pt: "escolher" }, { en: "bring", pt: "trazer" }, { en: "send", pt: "enviar" }, { en: "receive", pt: "receber" }, { en: "visit", pt: "visitar" }, { en: "invite", pt: "convidar" }, { en: "discuss", pt: "discutir" }, { en: "argue", pt: "argumentar" }, { en: "agree", pt: "concordar" },
    { en: "disagree", pt: "discordar" }, { en: "complain", pt: "reclamar" }, { en: "apologize", pt: "pedir desculpas" }, { en: "thank", pt: "agradecer" }, { en: "greet", pt: "cumprimentar" }, { en: "introduce", pt: "apresentar" }, { en: "interview", pt: "entrevistar" }, { en: "hire", pt: "contratar" }, { en: "fire", pt: "demitir" }, { en: "promote", pt: "promover" },
    { en: "sell", pt: "vender" }, { en: "buy", pt: "comprar" }, { en: "pay", pt: "pagar" }, { en: "borrow", pt: "pegar emprestado" }, { en: "lend", pt: "emprestar" }, { en: "owe", pt: "dever" }, { en: "earn", pt: "ganhar (dinheiro)" }, { en: "achieve", pt: "alcançar" }, { en: "improve", pt: "melhorar" }, { en: "develop", pt: "desenvolver" },

    // Nível E (400-499) - Adjetivos e advérbios
    { en: "important", pt: "importante" }, { en: "necessary", pt: "necessário" }, { en: "possible", pt: "possível" }, { en: "impossible", pt: "impossível" }, { en: "available", pt: "disponível" }, { en: "comfortable", pt: "confortável" }, { en: "uncomfortable", pt: "desconfortável" }, { en: "famous", pt: "famoso" }, { en: "popular", pt: "popular" }, { en: "serious", pt: "sério" },
    { en: "dangerous", pt: "perigoso" }, { en: "safe", pt: "seguro" }, { en: "private", pt: "privado" }, { en: "public", pt: "público" }, { en: "special", pt: "especial" }, { en: "common", pt: "comum" }, { en: "strange", pt: "estranho" }, { en: "normal", pt: "normal" }, { en: "simple", pt: "simples" }, { en: "complex", pt: "complexo" },
    { en: "cheap", pt: "barato" }, { en: "expensive", pt: "caro" }, { en: "rich", pt: "rico" }, { en: "poor", pt: "pobre" }, { en: "lucky", pt: "sortudo" }, { en: "unlucky", pt: "azarado" }, { en: "wonderful", pt: "maravilhoso" }, { en: "terrible", pt: "terrível" }, { en: "lovely", pt: "adorável" }, { en: "ugly", pt: "feio" },
    { en: "clever", pt: "inteligente" }, { en: "stupid", pt: "estúpido" }, { en: "brave", pt: "corajoso" }, { en: "coward", pt: "covarde" }, { en: "generous", pt: "generoso" }, { en: "mean", pt: "mesquinho" }, { en: "polite", pt: "educado" }, { en: "rude", pt: "rude" }, { en: "honest", pt: "honesto" }, { en: "dishonest", pt: "desonesto" },
    { en: "usually", pt: "geralmente" }, { en: "sometimes", pt: "às vezes" }, { en: "never", pt: "nunca" }, { en: "always", pt: "sempre" }, { en: "often", pt: "frequentemente" }, { en: "rarely", pt: "raramente" }, { en: "already", pt: "já" }, { en: "yet", pt: "ainda" }, { en: "since", pt: "desde" }, { en: "ago", pt: "atrás" },

    // Nível F (500-599) - Tempo, clima, natureza
    { en: "morning", pt: "manhã" }, { en: "afternoon", pt: "tarde" }, { en: "evening", pt: "noite (início)" }, { en: "night", pt: "noite" }, { en: "today", pt: "hoje" }, { en: "tomorrow", pt: "amanhã" }, { en: "yesterday", pt: "ontem" }, { en: "week", pt: "semana" }, { en: "month", pt: "mês" }, { en: "year", pt: "ano" },
    { en: "weather", pt: "clima" }, { en: "rain", pt: "chuva" }, { en: "snow", pt: "neve" }, { en: "sun", pt: "sol" }, { en: "wind", pt: "vento" }, { en: "cloud", pt: "nuvem" }, { en: "storm", pt: "tempestade" }, { en: "flood", pt: "inundação" }, { en: "earthquake", pt: "terremoto" }, { en: "fire", pt: "fogo" },
    { en: "animal", pt: "animal" }, { en: "dog", pt: "cachorro" }, { en: "cat", pt: "gato" }, { en: "bird", pt: "pássaro" }, { en: "fish", pt: "peixe" }, { en: "tree", pt: "árvore" }, { en: "flower", pt: "flor" }, { en: "fruit", pt: "fruta" }, { en: "vegetable", pt: "legume/verdura" }, { en: "meat", pt: "carne" },
    { en: "breakfast", pt: "café da manhã" }, { en: "lunch", pt: "almoço" }, { en: "dinner", pt: "jantar" }, { en: "snack", pt: "lanche" }, { en: "dessert", pt: "sobremesa" }, { en: "coffee", pt: "café" }, { en: "tea", pt: "chá" }, { en: "juice", pt: "suco" }, { en: "milk", pt: "leite" }, { en: "bread", pt: "pão" },

    // Nível G (600-699) - Trabalho, escola, escritório
    { en: "job", pt: "emprego" }, { en: "career", pt: "carreira" }, { en: "office", pt: "escritório" }, { en: "manager", pt: "gerente" }, { en: "employee", pt: "funcionário" }, { en: "colleague", pt: "colega" }, { en: "client", pt: "cliente" }, { en: "customer", pt: "cliente" }, { en: "project", pt: "projeto" }, { en: "deadline", pt: "prazo" },
    { en: "meeting", pt: "reunião" }, { en: "conference", pt: "conferência" }, { en: "presentation", pt: "apresentação" }, { en: "report", pt: "relatório" }, { en: "budget", pt: "orçamento" }, { en: "profit", pt: "lucro" }, { en: "loss", pt: "perda" }, { en: "success", pt: "sucesso" }, { en: "failure", pt: "fracasso" }, { en: "skill", pt: "habilidade" },
    { en: "knowledge", pt: "conhecimento" }, { en: "experience", pt: "experiência" }, { en: "lesson", pt: "lição" }, { en: "exercise", pt: "exercício" }, { en: "question", pt: "pergunta" }, { en: "answer", pt: "resposta" }, { en: "solution", pt: "solução" }, { en: "problem", pt: "problema" }, { en: "challenge", pt: "desafio" }, { en: "opportunity", pt: "oportunidade" },
    { en: "degree", pt: "grau, diploma" }, { en: "course", pt: "curso" }, { en: "subject", pt: "assunto" }, { en: "exam", pt: "exame" }, { en: "grade", pt: "nota" }, { en: "scholarship", pt: "bolsa de estudos" }, { en: "graduation", pt: "formatura" }, { en: "science", pt: "ciência" }, { en: "history", pt: "história" }, { en: "math", pt: "matemática" },

    // Nível H (700-799) - Sentimentos, saúde e corpo
    { en: "health", pt: "saúde" }, { en: "disease", pt: "doença" }, { en: "pain", pt: "dor" }, { en: "cure", pt: "cura" }, { en: "medicine", pt: "medicamento" }, { en: "exercise", pt: "exercício" }, { en: "doctor", pt: "médico" }, { en: "nurse", pt: "enfermeiro" }, { en: "hospital", pt: "hospital" }, { en: "heart", pt: "coração" },
    { en: "mind", pt: "mente" }, { en: "soul", pt: "alma" }, { en: "spirit", pt: "espírito" }, { en: "energy", pt: "energia" }, { en: "strength", pt: "força" }, { en: "courage", pt: "coragem" }, { en: "trust", pt: "confiança" }, { en: "faith", pt: "fé" }, { en: "peace", pt: "paz" }, { en: "war", pt: "guerra" },
    { en: "angry", pt: "com raiva" }, { en: "calm", pt: "calmo" }, { en: "excited", pt: "animado" }, { en: "bored", pt: "entediado" }, { en: "tired", pt: "cansado" }, { en: "hungry", pt: "com fome" }, { en: "thirsty", pt: "com sede" }, { en: "sick", pt: "doente" }, { en: "healthy", pt: "saudável" }, { en: "fit", pt: "em forma" },
    { en: "body", pt: "corpo" }, { en: "head", pt: "cabeça" }, { en: "hair", pt: "cabelo" }, { en: "face", pt: "rosto" }, { en: "eye", pt: "olho" }, { en: "nose", pt: "nariz" }, { en: "mouth", pt: "boca" }, { en: "ear", pt: "orelha" }, { en: "neck", pt: "pescoço" }, { en: "shoulder", pt: "ombro" },

    // Nível I (800-899) - Sociedade, política, cultura
    { en: "government", pt: "governo" }, { en: "president", pt: "presidente" }, { en: "congress", pt: "congresso" }, { en: "law", pt: "lei" }, { en: "right", pt: "direito" }, { en: "freedom", pt: "liberdade" }, { en: "justice", pt: "justiça" }, { en: "crime", pt: "crime" }, { en: "court", pt: "tribunal" }, { en: "police", pt: "polícia" },
    { en: "army", pt: "exército" }, { en: "country", pt: "país" }, { en: "city", pt: "cidade" }, { en: "state", pt: "estado" }, { en: "nation", pt: "nação" }, { en: "culture", pt: "cultura" }, { en: "art", pt: "arte" }, { en: "music", pt: "música" }, { en: "film", pt: "filme" }, { en: "theater", pt: "teatro" },
    { en: "language", pt: "idioma" }, { en: "literature", pt: "literatura" }, { en: "poem", pt: "poema" }, { en: "novel", pt: "romance (livro)" }, { en: "magazine", pt: "revista" }, { en: "newspaper", pt: "jornal" }, { en: "radio", pt: "rádio" }, { en: "television", pt: "televisão" }, { en: "social", pt: "social" }, { en: "economic", pt: "econômico" },
    { en: "political", pt: "político" }, { en: "religious", pt: "religioso" }, { en: "historical", pt: "histórico" }, { en: "cultural", pt: "cultural" }, { en: "modern", pt: "moderno" }, { en: "traditional", pt: "tradicional" }, { en: "international", pt: "internacional" }, { en: "national", pt: "nacional" }, { en: "local", pt: "local" }, { en: "global", pt: "global" },

    // Nível J (900-999) - Tecnologia, futuro e miscelânea
    { en: "technology", pt: "tecnologia" }, { en: "device", pt: "dispositivo" }, { en: "screen", pt: "tela" }, { en: "keyboard", pt: "teclado" }, { en: "mouse", pt: "mouse" }, { en: "software", pt: "software" }, { en: "hardware", pt: "hardware" }, { en: "data", pt: "dados" }, { en: "network", pt: "rede" }, { en: "security", pt: "segurança" },
    { en: "privacy", pt: "privacidade" }, { en: "account", pt: "conta" }, { en: "password", pt: "senha" }, { en: "username", pt: "nome de usuário" }, { en: "website", pt: "site" }, { en: "application", pt: "aplicativo" }, { en: "download", pt: "baixar" }, { en: "upload", pt: "carregar (enviar)" }, { en: "stream", pt: "transmitir" }, { en: "connect", pt: "conectar" },
    { en: "disconnect", pt: "desconectar" }, { en: "update", pt: "atualizar" }, { en: "delete", pt: "deletar" }, { en: "copy", pt: "copiar" }, { en: "paste", pt: "colar" }, { en: "undo", pt: "desfazer" }, { en: "redo", pt: "refazer" }, { en: "search", pt: "pesquisar" }, { en: "find", pt: "encontrar" }, { en: "replace", pt: "substituir" },
    { en: "future", pt: "futuro" }, { en: "past", pt: "passado" }, { en: "present", pt: "presente" }, { en: "create", pt: "criar" }, { en: "destroy", pt: "destruir" }, { en: "protect", pt: "proteger" }, { en: "support", pt: "apoiar" }, { en: "oppose", pt: "opor" }, { en: "accept", pt: "aceitar" }, { en: "refuse", pt: "recusar" },
    { en: "belong", pt: "pertencer" }, { en: "contain", pt: "conter" }, { en: "represent", pt: "representar" }, { en: "consult", pt: "consultar" }, { en: "publish", pt: "publicar" }, { en: "broadcast", pt: "transmitir (TV/rádio)" }, { en: "celebrate", pt: "celebrar" }, { en: "commemorate", pt: "comemorar" }, { en: "memorize", pt: "memorizar" }, { en: "practice", pt: "praticar" }
];

// ============================================================
// 2. CONFIGURAÇÕES
// ============================================================
const WORDS_PER_LEVEL = 100;
const TOTAL_LEVELS = 10;
const CARDS_PER_SESSION = 12;
const DOMINATION_THRESHOLD = 4; // contador >= 4 = dominada
const UNLOCK_THRESHOLD = 0.8;   // 80%

// ============================================================
// 3. ESTADO (gerenciado via localStorage)
// ============================================================
const DEFAULT_STATE = () => ({
    currentLevel: 0,
    progress: {},
    sessionStats: { correct: 0, wrong: 0, total: 0, lastSessionDate: null }
});

function loadState() {
    try {
        const raw = localStorage.getItem('flashcards_state');
        if (!raw) return DEFAULT_STATE();
        const parsed = JSON.parse(raw);
        if (!parsed.progress) parsed.progress = {};
        if (!parsed.sessionStats) parsed.sessionStats = { correct: 0, wrong: 0, total: 0, lastSessionDate: null };
        return parsed;
    } catch { return DEFAULT_STATE(); }
}

function saveState(state) {
    localStorage.setItem('flashcards_state', JSON.stringify(state));
}

// ============================================================
// 4. FUNÇÕES DE NEGÓCIO
// ============================================================
function getLevelWords(levelIndex) {
    const start = levelIndex * WORDS_PER_LEVEL;
    const end = Math.min(start + WORDS_PER_LEVEL, WORDS.length);
    return WORDS.slice(start, end).map((w, idx) => ({ ...w, index: start + idx }));
}

function getWordProgress(state, wordIndex) {
    return state.progress[wordIndex] || { counter: 0, nextReview: 0, level: state.currentLevel };
}

function updateWordProgress(state, wordIndex, newCounter) {
    state.progress[wordIndex] = {
        counter: newCounter,
        nextReview: Date.now() + getInterval(newCounter),
        level: state.currentLevel
    };
}

function getInterval(counter) {
    if (counter <= 0) return 60000;
    if (counter === 1) return 600000;
    if (counter === 2) return 3600000;
    if (counter === 3) return 86400000;
    if (counter >= 4) return 259200000;
    return 60000;
}

function isWordDominant(progress) {
    return progress.counter >= DOMINATION_THRESHOLD;
}

function getLevelDominance(state, levelIndex) {
    const words = getLevelWords(levelIndex);
    let dominated = 0;
    words.forEach(w => {
        const p = getWordProgress(state, w.index);
        if (isWordDominant(p)) dominated++;
    });
    return { dominated, total: words.length, percentage: dominated / words.length };
}

function isLevelUnlocked(state, levelIndex) {
    if (levelIndex === 0) return true;
    const prevLevel = levelIndex - 1;
    const dom = getLevelDominance(state, prevLevel);
    return dom.percentage >= UNLOCK_THRESHOLD;
}

function getAllowedLevels(state) {
    let highest = 0;
    for (let i = 0; i < TOTAL_LEVELS; i++) {
        if (isLevelUnlocked(state, i)) highest = i;
        else break;
    }
    if (highest > state.currentLevel) state.currentLevel = highest;
    return state.currentLevel;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function selectCardsForSession(state) {
    const level = state.currentLevel;
    const words = getLevelWords(level);
    const now = Date.now();

    const priority = [];
    const newWords = [];
    const stable = [];

    words.forEach(w => {
        const prog = getWordProgress(state, w.index);
        if (prog.counter === 0) {
            newWords.push(w);
        } else if (prog.counter < DOMINATION_THRESHOLD && now >= prog.nextReview) {
            priority.push(w);
        } else {
            stable.push(w);
        }
    });

    shuffle(priority);
    shuffle(newWords);
    shuffle(stable);

    const countPriority = Math.min(Math.round(CARDS_PER_SESSION * 0.6), priority.length);
    const countNew = Math.min(CARDS_PER_SESSION - countPriority, newWords.length);
    const countStable = CARDS_PER_SESSION - countPriority - countNew;

    let selected = [];
    selected.push(...priority.slice(0, countPriority));
    selected.push(...newWords.slice(0, countNew));
    selected.push(...stable.slice(0, countStable));

    if (selected.length < CARDS_PER_SESSION) {
        const rest = [...priority.slice(countPriority), ...newWords.slice(countNew), ...stable.slice(countStable)];
        selected.push(...rest.slice(0, CARDS_PER_SESSION - selected.length));
    }

    shuffle(selected);
    return selected;
}

// ============================================================
// 5. UI RENDERIZAÇÃO
// ============================================================
let state = loadState();
let currentSession = [];
let sessionIndex = 0;
let sessionCorrect = 0;
let sessionWrong = 0;
let sessionStartTime = 0;
let timerInterval = null;
let isAnswering = false;

function renderDashboard() {
    const level = state.currentLevel;
    const dom = getLevelDominance(state, level);
    const percent = Math.round(dom.percentage * 100);
    const isUnlocked = percent >= 80;
    const nextLevel = level + 1;

    document.getElementById('levelBadge').textContent = `Nível ${String.fromCharCode(65 + level)}`;
    document.getElementById('dominatedCount').textContent = `${dom.dominated} / ${dom.total}`;
    document.getElementById('progressPercent').textContent = `${percent}%`;
    
    const fill = document.getElementById('progressFill');
    fill.style.width = `${Math.min(percent, 100)}%`;
    fill.classList.toggle('achieved', isUnlocked);

    const status = document.getElementById('levelStatus');
    if (nextLevel < TOTAL_LEVELS) {
        if (isUnlocked) {
            status.innerHTML = `✅ Nível ${String.fromCharCode(65 + nextLevel)} desbloqueado! Clique em "Iniciar" para começar.`;
            status.className = 'level-status unlocked';
            if (state.currentLevel < nextLevel && isLevelUnlocked(state, nextLevel)) {
                state.currentLevel = nextLevel;
                saveState(state);
            }
        } else {
            status.innerHTML = `🔒 Atinga 80% (${percent}%) para desbloquear Nível ${String.fromCharCode(65 + nextLevel)}.`;
            status.className = 'level-status';
        }
    } else {
        status.innerHTML = '🏁 Você completou todos os níveis! Parabéns!';
        status.className = 'level-status unlocked';
    }

    const last = state.sessionStats.lastSessionDate;
    document.getElementById('lastSessionInfo').textContent = last ? new Date(last).toLocaleDateString() + ' (' + state.sessionStats.correct + '/' + state.sessionStats.total + ')' : 'Nenhuma ainda';

    if (state.sessionStats.total > 0) {
        const rate = Math.round((state.sessionStats.correct / state.sessionStats.total) * 100);
        document.getElementById('sessionRate').textContent = rate + '%';
    } else {
        document.getElementById('sessionRate').textContent = '--';
    }

    showScreen('dashboard');
}

function startSession() {
    state.currentLevel = getAllowedLevels(state);
    saveState(state);
    
    currentSession = selectCardsForSession(state);
    if (currentSession.length === 0) {
        alert('Sem palavras disponíveis para revisão. Avance de nível!');
        return;
    }
    sessionIndex = 0;
    sessionCorrect = 0;
    sessionWrong = 0;
    sessionStartTime = Date.now();
    isAnswering = false;

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
        document.getElementById('sessionTimer').textContent = `⏱️ ${elapsed}s`;
    }, 1000);

    showScreen('session');
    renderCard();
}

function renderCard() {
    if (sessionIndex >= currentSession.length) {
        endSession();
        return;
    }

    const card = currentSession[sessionIndex];
    document.getElementById('cardCounter').textContent = `Card ${sessionIndex + 1} / ${currentSession.length}`;
    document.getElementById('wordDisplay').textContent = card.en;
    document.getElementById('feedbackOverlay').classList.remove('show');

    const correctPt = card.pt;
    let options = [correctPt];

    const pool = WORDS.filter(w => w.pt !== correctPt && w.en !== card.en);
    shuffle(pool);
    for (let i = 0; i < 3 && i < pool.length; i++) {
        options.push(pool[i].pt);
    }
    while (options.length < 4) {
        options.push('---');
    }
    shuffle(options);

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.dataset.correct = (opt === correctPt) ? 'true' : 'false';
        btn.addEventListener('click', () => handleAnswer(btn, correctPt));
        container.appendChild(btn);
    });
}

function handleAnswer(clickedBtn, correctPt) {
    if (isAnswering) return;
    isAnswering = true;

    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.add('disabled'));

    const isCorrect = clickedBtn.dataset.correct === 'true';
    const word = currentSession[sessionIndex];
    const prog = getWordProgress(state, word.index);

    if (isCorrect) {
        clickedBtn.classList.add('correct');
        sessionCorrect++;
        const newCounter = Math.min(prog.counter + 1, 5);
        updateWordProgress(state, word.index, newCounter);
        showFeedback(true);
    } else {
        clickedBtn.classList.add('wrong');
        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') b.classList.add('correct');
        });
        sessionWrong++;
        updateWordProgress(state, word.index, 0);
        showFeedback(false);
    }

    saveState(state);

    setTimeout(() => {
        sessionIndex++;
        isAnswering = false;
        renderCard();
    }, 1200);
}

function showFeedback(isCorrect) {
    const overlay = document.getElementById('feedbackOverlay');
    document.getElementById('feedbackIcon').textContent = isCorrect ? '✅' : '❌';
    document.getElementById('feedbackText').textContent = isCorrect ? 'Correto!' : 'Errado!';
    overlay.classList.add('show');
}

function endSession() {
    clearInterval(timerInterval);
    timerInterval = null;

    state.sessionStats.correct += sessionCorrect;
    state.sessionStats.wrong += sessionWrong;
    state.sessionStats.total += (sessionCorrect + sessionWrong);
    state.sessionStats.lastSessionDate = new Date().toISOString();
    saveState(state);

    document.getElementById('endCorrect').textContent = sessionCorrect;
    document.getElementById('endWrong').textContent = sessionWrong;
    const total = sessionCorrect + sessionWrong;
    const score = total > 0 ? Math.round((sessionCorrect / total) * 100) : 0;
    document.getElementById('endScore').textContent = score + '%';
    document.getElementById('endIcon').textContent = score >= 70 ? '🏆' : '💪';
    document.getElementById('endTitle').textContent = score >= 70 ? 'Ótima sessão!' : 'Continue praticando!';

    showScreen('sessionEnd');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ============================================================
// 6. EVENTOS E INICIALIZAÇÃO
// ============================================================
document.getElementById('startSessionBtn').addEventListener('click', startSession);
document.getElementById('quitSessionBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    renderDashboard();
});
document.getElementById('endGoDashboardBtn').addEventListener('click', renderDashboard);

// INICIALIZA A APLICAÇÃO
renderDashboard();
