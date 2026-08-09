// ============================================================
// 1. DADOS COMPLETOS
// ============================================================

// --- 1000 PALAVRAS MAIS FREQUENTES (Nível A a J) ---
const WORDS = [
    // Nível A (0-99)
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
    // Nível B (100-199)
    { en: "here", pt: "aqui" }, { en: "thing", pt: "coisa" }, { en: "much", pt: "muito" }, { en: "really", pt: "realmente" }, { en: "right", pt: "certo, direita" }, { en: "tell", pt: "contar, dizer" }, { en: "own", pt: "próprio, possuir" }, { en: "too", pt: "também, muito" }, { en: "old", pt: "velho" }, { en: "place", pt: "lugar" },
    { en: "life", pt: "vida" }, { en: "world", pt: "mundo" }, { en: "house", pt: "casa" }, { en: "call", pt: "chamar, ligar" }, { en: "try", pt: "tentar" }, { en: "man", pt: "homem" }, { en: "big", pt: "grande" }, { en: "long", pt: "longo" }, { en: "day", pt: "dia" }, { en: "where", pt: "onde" },
    { en: "down", pt: "abaixo, para baixo" }, { en: "more", pt: "mais" }, { en: "feel", pt: "sentir" }, { en: "few", pt: "poucos" }, { en: "before", pt: "antes" }, { en: "through", pt: "através" }, { en: "good", pt: "bom" }, { en: "around", pt: "ao redor" }, { en: "between", pt: "entre" }, { en: "need", pt: "precisar" },
    { en: "should", pt: "deveria" }, { en: "keep", pt: "manter" }, { en: "child", pt: "criança" }, { en: "next", pt: "próximo" }, { en: "find", pt: "encontrar" }, { en: "why", pt: "por que" }, { en: "ask", pt: "perguntar" }, { en: "woman", pt: "mulher" }, { en: "different", pt: "diferente" }, { en: "hand", pt: "mão" },
    { en: "head", pt: "cabeça" }, { en: "stand", pt: "ficar em pé" }, { en: "put", pt: "colocar" }, { en: "eye", pt: "olho" }, { en: "family", pt: "família" }, { en: "story", pt: "história" }, { en: "friend", pt: "amigo" }, { en: "start", pt: "começar" }, { en: "great", pt: "ótimo" }, { en: "help", pt: "ajudar" },
    { en: "mean", pt: "significar" }, { en: "name", pt: "nome" }, { en: "show", pt: "mostrar" }, { en: "better", pt: "melhor" }, { en: "same", pt: "mesmo" }, { en: "young", pt: "jovem" }, { en: "true", pt: "verdadeiro" }, { en: "power", pt: "poder" }, { en: "country", pt: "país" }, { en: "car", pt: "carro" },
    { en: "water", pt: "água" }, { en: "air", pt: "ar" }, { en: "food", pt: "comida" }, { en: "school", pt: "escola" }, { en: "run", pt: "correr" }, { en: "play", pt: "jogar, tocar" }, { en: "hear", pt: "ouvir" }, { en: "music", pt: "música" }, { en: "read", pt: "ler" }, { en: "write", pt: "escrever" },
    { en: "talk", pt: "falar" }, { en: "walk", pt: "andar" }, { en: "buy", pt: "comprar" }, { en: "eat", pt: "comer" }, { en: "drink", pt: "beber" }, { en: "sleep", pt: "dormir" }, { en: "open", pt: "abrir" }, { en: "close", pt: "fechar" }, { en: "happy", pt: "feliz" }, { en: "sad", pt: "triste" },
    { en: "fast", pt: "rápido" }, { en: "slow", pt: "devagar" }, { en: "hot", pt: "quente" }, { en: "cold", pt: "frio" }, { en: "easy", pt: "fácil" }, { en: "hard", pt: "difícil, duro" }, { en: "white", pt: "branco" }, { en: "black", pt: "preto" }, { en: "red", pt: "vermelho" }, { en: "blue", pt: "azul" },
    // Nível C (200-299)
    { en: "green", pt: "verde" }, { en: "yellow", pt: "amarelo" }, { en: "mother", pt: "mãe" }, { en: "father", pt: "pai" }, { en: "brother", pt: "irmão" }, { en: "sister", pt: "irmã" }, { en: "teacher", pt: "professor" }, { en: "student", pt: "estudante" }, { en: "doctor", pt: "médico" }, { en: "nurse", pt: "enfermeira" },
    { en: "police", pt: "polícia" }, { en: "money", pt: "dinheiro" }, { en: "price", pt: "preço" }, { en: "store", pt: "loja" }, { en: "market", pt: "mercado" }, { en: "city", pt: "cidade" }, { en: "street", pt: "rua" }, { en: "road", pt: "estrada" }, { en: "park", pt: "parque" }, { en: "bank", pt: "banco" },
    { en: "hospital", pt: "hospital" }, { en: "hotel", pt: "hotel" }, { en: "church", pt: "igreja" }, { en: "beach", pt: "praia" }, { en: "mountain", pt: "montanha" }, { en: "river", pt: "rio" }, { en: "ocean", pt: "oceano" }, { en: "forest", pt: "floresta" }, { en: "garden", pt: "jardim" }, { en: "kitchen", pt: "cozinha" },
    { en: "room", pt: "quarto, sala" }, { en: "door", pt: "porta" }, { en: "window", pt: "janela" }, { en: "table", pt: "mesa" }, { en: "chair", pt: "cadeira" }, { en: "bed", pt: "cama" }, { en: "book", pt: "livro" }, { en: "pen", pt: "caneta" }, { en: "phone", pt: "telefone" }, { en: "computer", pt: "computador" },
    { en: "internet", pt: "internet" }, { en: "email", pt: "e-mail" }, { en: "video", pt: "vídeo" }, { en: "photo", pt: "foto" }, { en: "movie", pt: "filme" }, { en: "song", pt: "música" }, { en: "dance", pt: "dança, dançar" }, { en: "party", pt: "festa" }, { en: "game", pt: "jogo" }, { en: "team", pt: "time" },
    { en: "win", pt: "ganhar" }, { en: "lose", pt: "perder" }, { en: "love", pt: "amar" }, { en: "hate", pt: "odiar" }, { en: "like", pt: "gostar" }, { en: "enjoy", pt: "aproveitar" }, { en: "hope", pt: "esperar" }, { en: "wish", pt: "desejar" }, { en: "believe", pt: "acreditar" }, { en: "imagine", pt: "imaginar" },
    // Nível D (300-399)
    { en: "realize", pt: "perceber" }, { en: "understand", pt: "entender" }, { en: "explain", pt: "explicar" }, { en: "describe", pt: "descrever" }, { en: "decide", pt: "decidir" }, { en: "consider", pt: "considerar" }, { en: "continue", pt: "continuar" }, { en: "prefer", pt: "preferir" }, { en: "offer", pt: "oferecer" }, { en: "refuse", pt: "recusar" },
    { en: "forget", pt: "esquecer" }, { en: "remember", pt: "lembrar" }, { en: "follow", pt: "seguir" }, { en: "lead", pt: "liderar" }, { en: "miss", pt: "sentir falta, perder" }, { en: "worry", pt: "preocupar" }, { en: "care", pt: "cuidar, importar" }, { en: "share", pt: "compartilhar" }, { en: "save", pt: "salvar, economizar" }, { en: "spend", pt: "gastar" },
    { en: "travel", pt: "viajar" }, { en: "drive", pt: "dirigir" }, { en: "fly", pt: "voar" }, { en: "swim", pt: "nadar" }, { en: "climb", pt: "escalar" }, { en: "build", pt: "construir" }, { en: "break", pt: "quebrar" }, { en: "fix", pt: "consertar" }, { en: "clean", pt: "limpar" }, { en: "cook", pt: "cozinhar" },
    { en: "wear", pt: "usar (roupa)" }, { en: "choose", pt: "escolher" }, { en: "bring", pt: "trazer" }, { en: "send", pt: "enviar" }, { en: "receive", pt: "receber" }, { en: "visit", pt: "visitar" }, { en: "invite", pt: "convidar" }, { en: "discuss", pt: "discutir" }, { en: "argue", pt: "argumentar" }, { en: "agree", pt: "concordar" },
    { en: "disagree", pt: "discordar" }, { en: "complain", pt: "reclamar" }, { en: "apologize", pt: "pedir desculpas" }, { en: "thank", pt: "agradecer" }, { en: "greet", pt: "cumprimentar" }, { en: "introduce", pt: "apresentar" }, { en: "interview", pt: "entrevistar" }, { en: "hire", pt: "contratar" }, { en: "fire", pt: "demitir" }, { en: "promote", pt: "promover" },
    { en: "sell", pt: "vender" }, { en: "buy", pt: "comprar" }, { en: "pay", pt: "pagar" }, { en: "borrow", pt: "pegar emprestado" }, { en: "lend", pt: "emprestar" }, { en: "owe", pt: "dever" }, { en: "earn", pt: "ganhar (dinheiro)" }, { en: "achieve", pt: "alcançar" }, { en: "improve", pt: "melhorar" }, { en: "develop", pt: "desenvolver" },
    // Nível E (400-499)
    { en: "important", pt: "importante" }, { en: "necessary", pt: "necessário" }, { en: "possible", pt: "possível" }, { en: "impossible", pt: "impossível" }, { en: "available", pt: "disponível" }, { en: "comfortable", pt: "confortável" }, { en: "uncomfortable", pt: "desconfortável" }, { en: "famous", pt: "famoso" }, { en: "popular", pt: "popular" }, { en: "serious", pt: "sério" },
    { en: "dangerous", pt: "perigoso" }, { en: "safe", pt: "seguro" }, { en: "private", pt: "privado" }, { en: "public", pt: "público" }, { en: "special", pt: "especial" }, { en: "common", pt: "comum" }, { en: "strange", pt: "estranho" }, { en: "normal", pt: "normal" }, { en: "simple", pt: "simples" }, { en: "complex", pt: "complexo" },
    { en: "cheap", pt: "barato" }, { en: "expensive", pt: "caro" }, { en: "rich", pt: "rico" }, { en: "poor", pt: "pobre" }, { en: "lucky", pt: "sortudo" }, { en: "unlucky", pt: "azarado" }, { en: "wonderful", pt: "maravilhoso" }, { en: "terrible", pt: "terrível" }, { en: "lovely", pt: "adorável" }, { en: "ugly", pt: "feio" },
    { en: "clever", pt: "inteligente" }, { en: "stupid", pt: "estúpido" }, { en: "brave", pt: "corajoso" }, { en: "coward", pt: "covarde" }, { en: "generous", pt: "generoso" }, { en: "mean", pt: "mesquinho" }, { en: "polite", pt: "educado" }, { en: "rude", pt: "rude" }, { en: "honest", pt: "honesto" }, { en: "dishonest", pt: "desonesto" },
    { en: "usually", pt: "geralmente" }, { en: "sometimes", pt: "às vezes" }, { en: "never", pt: "nunca" }, { en: "always", pt: "sempre" }, { en: "often", pt: "frequentemente" }, { en: "rarely", pt: "raramente" }, { en: "already", pt: "já" }, { en: "yet", pt: "ainda" }, { en: "since", pt: "desde" }, { en: "ago", pt: "atrás" },
    // Nível F (500-599)
    { en: "morning", pt: "manhã" }, { en: "afternoon", pt: "tarde" }, { en: "evening", pt: "noite (início)" }, { en: "night", pt: "noite" }, { en: "today", pt: "hoje" }, { en: "tomorrow", pt: "amanhã" }, { en: "yesterday", pt: "ontem" }, { en: "week", pt: "semana" }, { en: "month", pt: "mês" }, { en: "year", pt: "ano" },
    { en: "weather", pt: "clima" }, { en: "rain", pt: "chuva" }, { en: "snow", pt: "neve" }, { en: "sun", pt: "sol" }, { en: "wind", pt: "vento" }, { en: "cloud", pt: "nuvem" }, { en: "storm", pt: "tempestade" }, { en: "flood", pt: "inundação" }, { en: "earthquake", pt: "terremoto" }, { en: "fire", pt: "fogo" },
    { en: "animal", pt: "animal" }, { en: "dog", pt: "cachorro" }, { en: "cat", pt: "gato" }, { en: "bird", pt: "pássaro" }, { en: "fish", pt: "peixe" }, { en: "tree", pt: "árvore" }, { en: "flower", pt: "flor" }, { en: "fruit", pt: "fruta" }, { en: "vegetable", pt: "legume/verdura" }, { en: "meat", pt: "carne" },
    { en: "breakfast", pt: "café da manhã" }, { en: "lunch", pt: "almoço" }, { en: "dinner", pt: "jantar" }, { en: "snack", pt: "lanche" }, { en: "dessert", pt: "sobremesa" }, { en: "coffee", pt: "café" }, { en: "tea", pt: "chá" }, { en: "juice", pt: "suco" }, { en: "milk", pt: "leite" }, { en: "bread", pt: "pão" },
    // Nível G (600-699)
    { en: "job", pt: "emprego" }, { en: "career", pt: "carreira" }, { en: "office", pt: "escritório" }, { en: "manager", pt: "gerente" }, { en: "employee", pt: "funcionário" }, { en: "colleague", pt: "colega" }, { en: "client", pt: "cliente" }, { en: "customer", pt: "cliente" }, { en: "project", pt: "projeto" }, { en: "deadline", pt: "prazo" },
    { en: "meeting", pt: "reunião" }, { en: "conference", pt: "conferência" }, { en: "presentation", pt: "apresentação" }, { en: "report", pt: "relatório" }, { en: "budget", pt: "orçamento" }, { en: "profit", pt: "lucro" }, { en: "loss", pt: "perda" }, { en: "success", pt: "sucesso" }, { en: "failure", pt: "fracasso" }, { en: "skill", pt: "habilidade" },
    { en: "knowledge", pt: "conhecimento" }, { en: "experience", pt: "experiência" }, { en: "lesson", pt: "lição" }, { en: "exercise", pt: "exercício" }, { en: "question", pt: "pergunta" }, { en: "answer", pt: "resposta" }, { en: "solution", pt: "solução" }, { en: "problem", pt: "problema" }, { en: "challenge", pt: "desafio" }, { en: "opportunity", pt: "oportunidade" },
    { en: "degree", pt: "grau, diploma" }, { en: "course", pt: "curso" }, { en: "subject", pt: "assunto" }, { en: "exam", pt: "exame" }, { en: "grade", pt: "nota" }, { en: "scholarship", pt: "bolsa de estudos" }, { en: "graduation", pt: "formatura" }, { en: "science", pt: "ciência" }, { en: "history", pt: "história" }, { en: "math", pt: "matemática" },
    // Nível H (700-799)
    { en: "health", pt: "saúde" }, { en: "disease", pt: "doença" }, { en: "pain", pt: "dor" }, { en: "cure", pt: "cura" }, { en: "medicine", pt: "medicamento" }, { en: "exercise", pt: "exercício" }, { en: "doctor", pt: "médico" }, { en: "nurse", pt: "enfermeiro" }, { en: "hospital", pt: "hospital" }, { en: "heart", pt: "coração" },
    { en: "mind", pt: "mente" }, { en: "soul", pt: "alma" }, { en: "spirit", pt: "espírito" }, { en: "energy", pt: "energia" }, { en: "strength", pt: "força" }, { en: "courage", pt: "coragem" }, { en: "trust", pt: "confiança" }, { en: "faith", pt: "fé" }, { en: "peace", pt: "paz" }, { en: "war", pt: "guerra" },
    { en: "angry", pt: "com raiva" }, { en: "calm", pt: "calmo" }, { en: "excited", pt: "animado" }, { en: "bored", pt: "entediado" }, { en: "tired", pt: "cansado" }, { en: "hungry", pt: "com fome" }, { en: "thirsty", pt: "com sede" }, { en: "sick", pt: "doente" }, { en: "healthy", pt: "saudável" }, { en: "fit", pt: "em forma" },
    { en: "body", pt: "corpo" }, { en: "head", pt: "cabeça" }, { en: "hair", pt: "cabelo" }, { en: "face", pt: "rosto" }, { en: "eye", pt: "olho" }, { en: "nose", pt: "nariz" }, { en: "mouth", pt: "boca" }, { en: "ear", pt: "orelha" }, { en: "neck", pt: "pescoço" }, { en: "shoulder", pt: "ombro" },
    // Nível I (800-899)
    { en: "government", pt: "governo" }, { en: "president", pt: "presidente" }, { en: "congress", pt: "congresso" }, { en: "law", pt: "lei" }, { en: "right", pt: "direito" }, { en: "freedom", pt: "liberdade" }, { en: "justice", pt: "justiça" }, { en: "crime", pt: "crime" }, { en: "court", pt: "tribunal" }, { en: "police", pt: "polícia" },
    { en: "army", pt: "exército" }, { en: "country", pt: "país" }, { en: "city", pt: "cidade" }, { en: "state", pt: "estado" }, { en: "nation", pt: "nação" }, { en: "culture", pt: "cultura" }, { en: "art", pt: "arte" }, { en: "music", pt: "música" }, { en: "film", pt: "filme" }, { en: "theater", pt: "teatro" },
    { en: "language", pt: "idioma" }, { en: "literature", pt: "literatura" }, { en: "poem", pt: "poema" }, { en: "novel", pt: "romance (livro)" }, { en: "magazine", pt: "revista" }, { en: "newspaper", pt: "jornal" }, { en: "radio", pt: "rádio" }, { en: "television", pt: "televisão" }, { en: "social", pt: "social" }, { en: "economic", pt: "econômico" },
    { en: "political", pt: "político" }, { en: "religious", pt: "religioso" }, { en: "historical", pt: "histórico" }, { en: "cultural", pt: "cultural" }, { en: "modern", pt: "moderno" }, { en: "traditional", pt: "tradicional" }, { en: "international", pt: "internacional" }, { en: "national", pt: "nacional" }, { en: "local", pt: "local" }, { en: "global", pt: "global" },
    // Nível J (900-999)
    { en: "technology", pt: "tecnologia" }, { en: "device", pt: "dispositivo" }, { en: "screen", pt: "tela" }, { en: "keyboard", pt: "teclado" }, { en: "mouse", pt: "mouse" }, { en: "software", pt: "software" }, { en: "hardware", pt: "hardware" }, { en: "data", pt: "dados" }, { en: "network", pt: "rede" }, { en: "security", pt: "segurança" },
    { en: "privacy", pt: "privacidade" }, { en: "account", pt: "conta" }, { en: "password", pt: "senha" }, { en: "username", pt: "nome de usuário" }, { en: "website", pt: "site" }, { en: "application", pt: "aplicativo" }, { en: "download", pt: "baixar" }, { en: "upload", pt: "carregar (enviar)" }, { en: "stream", pt: "transmitir" }, { en: "connect", pt: "conectar" },
    { en: "disconnect", pt: "desconectar" }, { en: "update", pt: "atualizar" }, { en: "delete", pt: "deletar" }, { en: "copy", pt: "copiar" }, { en: "paste", pt: "colar" }, { en: "undo", pt: "desfazer" }, { en: "redo", pt: "refazer" }, { en: "search", pt: "pesquisar" }, { en: "find", pt: "encontrar" }, { en: "replace", pt: "substituir" },
    { en: "future", pt: "futuro" }, { en: "past", pt: "passado" }, { en: "present", pt: "presente" }, { en: "create", pt: "criar" }, { en: "destroy", pt: "destruir" }, { en: "protect", pt: "proteger" }, { en: "support", pt: "apoiar" }, { en: "oppose", pt: "opor" }, { en: "accept", pt: "aceitar" }, { en: "refuse", pt: "recusar" },
    { en: "belong", pt: "pertencer" }, { en: "contain", pt: "conter" }, { en: "represent", pt: "representar" }, { en: "consult", pt: "consultar" }, { en: "publish", pt: "publicar" }, { en: "broadcast", pt: "transmitir (TV/rádio)" }, { en: "celebrate", pt: "celebrar" }, { en: "commemorate", pt: "comemorar" }, { en: "memorize", pt: "memorizar" }, { en: "practice", pt: "praticar" }
];

// --- 50 FRASES CLOZE (com tradução em português) ---
const CLOZE_SENTENCES = [
    { en: "I _______ to the store yesterday.", pt: "Eu fui à loja ontem.", answer: "went" },
    { en: "She _______ a new car last week.", pt: "Ela comprou um carro novo na semana passada.", answer: "bought" },
    { en: "They _______ playing soccer when it started to rain.", pt: "Eles estavam jogando futebol quando começou a chover.", answer: "were" },
    { en: "He has _______ to London three times.", pt: "Ele esteve em Londres três vezes.", answer: "been" },
    { en: "We _______ dinner when the phone rang.", pt: "Nós estávamos jantando quando o telefone tocou.", answer: "were having" },
    { en: "I _______ you tomorrow.", pt: "Eu te ligo amanhã.", answer: "will call" },
    { en: "She _______ very happy with her test results.", pt: "Ela ficou muito feliz com os resultados da prova.", answer: "was" },
    { en: "They _______ to the beach every summer.", pt: "Eles vão para a praia todo verão.", answer: "go" },
    { en: "He _______ his keys at home.", pt: "Ele esqueceu as chaves em casa.", answer: "left" },
    { en: "We _______ the movie already.", pt: "Nós já vimos o filme.", answer: "have seen" },
    { en: "I _______ a lot of books this year.", pt: "Eu li muitos livros este ano.", answer: "have read" },
    { en: "She _______ singing when she was young.", pt: "Ela começou a cantar quando era jovem.", answer: "started" },
    { en: "They _______ to travel next month.", pt: "Eles planejam viajar no próximo mês.", answer: "plan" },
    { en: "He _______ his homework before dinner.", pt: "Ele terminou a lição de casa antes do jantar.", answer: "finished" },
    { en: "We _______ at the hotel for two weeks.", pt: "Nós ficamos no hotel por duas semanas.", answer: "stayed" },
    { en: "I _______ my phone yesterday.", pt: "Eu perdi meu telefone ontem.", answer: "lost" },
    { en: "She _______ a glass of water every morning.", pt: "Ela bebe um copo de água toda manhã.", answer: "drinks" },
    { en: "They _______ to the party last night.", pt: "Eles foram à festa ontem à noite.", answer: "went" },
    { en: "He _______ his car to work every day.", pt: "Ele dirige seu carro para o trabalho todos os dias.", answer: "drives" },
    { en: "We _______ a great time at the beach.", pt: "Nós nos divertimos muito na praia.", answer: "had" },
    { en: "I _______ to music while I study.", pt: "Eu ouço música enquanto estudo.", answer: "listen" },
    { en: "She _______ her hair yesterday.", pt: "Ela cortou o cabelo ontem.", answer: "cut" },
    { en: "They _______ a new house next year.", pt: "Eles vão comprar uma casa nova no próximo ano.", answer: "will buy" },
    { en: "He _______ for the bus for 20 minutes.", pt: "Ele está esperando o ônibus há 20 minutos.", answer: "has been waiting" },
    { en: "We _______ English for three years.", pt: "Nós estudamos inglês por três anos.", answer: "have studied" },
    { en: "I _______ to call you, but I forgot.", pt: "Eu ia ligar para você, mas esqueci.", answer: "was going" },
    { en: "She _______ to the gym every Monday.", pt: "Ela vai à academia toda segunda-feira.", answer: "goes" },
    { en: "They _______ their friends last weekend.", pt: "Eles visitaram os amigos no fim de semana passado.", answer: "visited" },
    { en: "He _______ a letter to his grandmother.", pt: "Ele escreveu uma carta para a avó.", answer: "wrote" },
    { en: "We _______ the game if we practice more.", pt: "Nós venceremos o jogo se praticarmos mais.", answer: "will win" },
    { en: "I _______ that movie before.", pt: "Eu já vi aquele filme antes.", answer: "have seen" },
    { en: "She _______ her room every Saturday.", pt: "Ela limpa o quarto todo sábado.", answer: "cleans" },
    { en: "They _______ a delicious dinner last night.", pt: "Eles cozinharam um jantar delicioso ontem.", answer: "cooked" },
    { en: "He _______ to become a doctor.", pt: "Ele quer se tornar médico.", answer: "wants" },
    { en: "We _______ to the mountains for vacation.", pt: "Nós iremos para as montanhas nas férias.", answer: "will go" },
    { en: "I _______ you were coming!", pt: "Eu não sabia que você estava vindo!", answer: "didn't know" },
    { en: "She _______ a lot of photos on her trip.", pt: "Ela tirou muitas fotos na viagem.", answer: "took" },
    { en: "They _______ a dog and a cat.", pt: "Eles têm um cachorro e um gato.", answer: "have" },
    { en: "He _______ his job last month.", pt: "Ele pediu demissão do emprego no mês passado.", answer: "quit" },
    { en: "We _______ a beautiful sunset yesterday.", pt: "Nós vimos um pôr do sol lindo ontem.", answer: "saw" },
    { en: "I _______ to start a new hobby.", pt: "Eu quero começar um novo hobby.", answer: "want" },
    { en: "She _______ to bed early every night.", pt: "Ela vai para a cama cedo toda noite.", answer: "goes" },
    { en: "They _______ a meeting right now.", pt: "Eles estão tendo uma reunião agora.", answer: "are having" },
    { en: "He _______ his grandmother every Sunday.", pt: "Ele liga para a avó todo domingo.", answer: "calls" },
    { en: "We _______ our homework already.", pt: "Nós já terminamos nossa lição de casa.", answer: "have finished" },
    { en: "I _______ a new job next week.", pt: "Eu vou começar um novo emprego na próxima semana.", answer: "will start" },
    { en: "She _______ the piano very well.", pt: "Ela toca piano muito bem.", answer: "plays" },
    { en: "They _______ to the cinema yesterday.", pt: "Eles foram ao cinema ontem.", answer: "went" },
    { en: "He _______ his car last week.", pt: "Ele vendeu o carro na semana passada.", answer: "sold" },
    { en: "We _______ a great time at the party.", pt: "Nós nos divertimos muito na festa.", answer: "had" }
];

// --- 20 QUESTÕES DE GRAMÁTICA (com justificativa) ---
const GRAMMAR_QUESTIONS = [
    { 
        en: "Qual dessas frases usa corretamente a preposição 'at'?",
        options: ["I wake up ___ 7am.", "I go ___ school.", "I look ___ the window.", "I listen ___ music."],
        correct: "I wake up ___ 7am.",
        justification: "'At' é usado para indicar HORAS e MOMENTOS ESPECÍFICOS (7am, noon, night). As outras usam 'to', 'through' e 'to'."
    },
    {
        en: "Qual dessas frases usa corretamente a preposição 'in'?",
        options: ["I live ___ Brazil.", "The book is ___ the table.", "I depend ___ you.", "I am good ___ math."],
        correct: "I live ___ Brazil.",
        justification: "'In' é usado para PAÍSES, CIDADES e REGIÕES. 'On' é para superfícies, 'on/upon' para depender, e 'at' para habilidades."
    },
    {
        en: "Qual dessas frases usa corretamente a preposição 'on'?",
        options: ["The book is ___ the table.", "I arrived ___ Brazil.", "I am interested ___ art.", "I work ___ a hospital."],
        correct: "The book is ___ the table.",
        justification: "'On' é usado para SUPERFÍCIES (table, floor, wall). 'In' para países, 'in' para interesse, 'at' para locais de trabalho."
    },
    {
        en: "Qual é a forma correta do Simple Past do verbo 'go'?",
        options: ["go", "goes", "went", "gone"],
        correct: "went",
        justification: "O Simple Past de 'go' é irregular: 'went'. 'Gone' é o Past Participle (usado com 'have')."
    },
    {
        en: "Qual é a forma correta do Past Participle do verbo 'eat'?",
        options: ["eat", "ate", "eaten", "eating"],
        correct: "eaten",
        justification: "O Past Participle de 'eat' é 'eaten' (usado com 'have': 'I have eaten'). 'Ate' é Simple Past."
    },
    {
        en: "Qual frase está no Present Perfect?",
        options: ["I went to Paris.", "I go to Paris.", "I have gone to Paris.", "I am going to Paris."],
        correct: "I have gone to Paris.",
        justification: "Present Perfect = 'have/has' + Past Participle (gone). Indica uma ação passada com relevância no presente."
    },
    {
        en: "Qual frase está no Past Continuous?",
        options: ["I eat dinner.", "I ate dinner.", "I was eating dinner.", "I have eaten dinner."],
        correct: "I was eating dinner.",
        justification: "Past Continuous = 'was/were' + verbo+ing. Indica uma ação em andamento no passado."
    },
    {
        en: "Qual opção completa a frase: 'She is ___ than her sister.' (comparativo)?",
        options: ["tall", "taller", "tallest", "more tall"],
        correct: "taller",
        justification: "Para adjetivos curtos (1-2 sílabas), usamos '-er' no comparativo: tall → taller."
    },
    {
        en: "Qual opção completa a frase: 'This is the ___ movie I have ever seen.' (superlativo)?",
        options: ["good", "better", "best", "more good"],
        correct: "best",
        justification: "Superlativo de 'good' é irregular: 'best'. Usamos 'the' antes do superlativo."
    },
    {
        en: "Qual frase está no Future (will)?",
        options: ["I go to school.", "I went to school.", "I will go to school.", "I am going to school."],
        correct: "I will go to school.",
        justification: "'Will' + verbo base é a forma clássica do Future Simple. 'Going to' também é futuro, mas a pergunta pede 'will'."
    },
    {
        en: "Qual opção é um advérbio de frequência?",
        options: ["happy", "quickly", "always", "big"],
        correct: "always",
        justification: "'Always' (sempre) é um advérbio de frequência. 'Quickly' é de modo, 'happy' e 'big' são adjetivos."
    },
    {
        en: "Qual frase usa o Present Continuous corretamente?",
        options: ["I read a book now.", "I am reading a book now.", "I have read a book now.", "I readed a book now."],
        correct: "I am reading a book now.",
        justification: "Present Continuous = 'am/is/are' + verbo+ing. Usamos para ações acontecendo agora ('now')."
    },
    {
        en: "Qual é a forma correta do Simple Past do verbo 'buy'?",
        options: ["buy", "buys", "bought", "buyed"],
        correct: "bought",
        justification: "'Buy' é irregular: Simple Past = 'bought'. 'Buyed' não existe."
    },
    {
        en: "Qual opção completa a frase: 'I have ___ finished my homework.' (já)?",
        options: ["yet", "already", "still", "never"],
        correct: "already",
        justification: "'Already' (já) é usado em frases afirmativas no Present Perfect. 'Yet' é usado em negativas/interrogativas."
    },
    {
        en: "Qual opção completa a frase: 'She hasn't arrived ___.' (ainda)?",
        options: ["already", "just", "yet", "ever"],
        correct: "yet",
        justification: "'Yet' é usado em frases negativas e interrogativas no Present Perfect para indicar 'até agora'."
    },
    {
        en: "Qual dessas palavras é um artigo indefinido?",
        options: ["the", "a", "this", "that"],
        correct: "a",
        justification: "'A' (e 'an') são artigos indefinidos. 'The' é definido. 'This/that' são pronomes demonstrativos."
    },
    {
        en: "Qual opção completa: 'I am looking ___ my keys.' (procurando)?",
        options: ["at", "for", "to", "on"],
        correct: "for",
        justification: "'Look for' = procurar (algo/alguém). 'Look at' = olhar para. As outras não fazem sentido."
    },
    {
        en: "Qual opção completa: 'I need to ___ a doctor.' (consultar)?",
        options: ["see", "look", "watch", "view"],
        correct: "see",
        justification: "'See a doctor' é a expressão natural para consultar um médico. 'Look/Watch' são para observar."
    },
    {
        en: "Qual é a forma correta do comparativo de 'big'?",
        options: ["big", "bigger", "biggest", "more big"],
        correct: "bigger",
        justification: "'Big' termina em C+V+C, então dobramos a consoante e adicionamos '-er': bigger."
    },
    {
        en: "Qual frase está na voz passiva?",
        options: ["I eat the cake.", "The cake was eaten by me.", "I am eating the cake.", "I have eaten the cake."],
        correct: "The cake was eaten by me.",
        justification: "Voz passiva = sujeito sofre a ação ('was eaten'). As outras estão na voz ativa."
    }
];

// --- 30 FRASES PARA "MONTE A FRASE" (SCRAMBLE) ---
const SCRAMBLE_SENTENCES = [
    { en: "I am going to the store.", words: ["I", "am", "going", "to", "the", "store."] },
    { en: "She is a great teacher.", words: ["She", "is", "a", "great", "teacher."] },
    { en: "They are playing soccer.", words: ["They", "are", "playing", "soccer."] },
    { en: "We have a big house.", words: ["We", "have", "a", "big", "house."] },
    { en: "He likes to read books.", words: ["He", "likes", "to", "read", "books."] },
    { en: "I need to study more.", words: ["I", "need", "to", "study", "more."] },
    { en: "She can speak three languages.", words: ["She", "can", "speak", "three", "languages."] },
    { en: "They will travel next year.", words: ["They", "will", "travel", "next", "year."] },
    { en: "We are cooking dinner now.", words: ["We", "are", "cooking", "dinner", "now."] },
    { en: "He works at a hospital.", words: ["He", "works", "at", "a", "hospital."] },
    { en: "I bought a new car.", words: ["I", "bought", "a", "new", "car."] },
    { en: "She loves to dance.", words: ["She", "loves", "to", "dance."] },
    { en: "They live in London.", words: ["They", "live", "in", "London."] },
    { en: "We watched a movie.", words: ["We", "watched", "a", "movie."] },
    { en: "He writes poems.", words: ["He", "writes", "poems."] },
    { en: "I have a dog and a cat.", words: ["I", "have", "a", "dog", "and", "a", "cat."] },
    { en: "She is my best friend.", words: ["She", "is", "my", "best", "friend."] },
    { en: "They are from Brazil.", words: ["They", "are", "from", "Brazil."] },
    { en: "We need to leave now.", words: ["We", "need", "to", "leave", "now."] },
    { en: "He goes to school by bus.", words: ["He", "goes", "to", "school", "by", "bus."] },
    { en: "I like to play the guitar.", words: ["I", "like", "to", "play", "the", "guitar."] },
    { en: "She drinks coffee every morning.", words: ["She", "drinks", "coffee", "every", "morning."] },
    { en: "They built a new house.", words: ["They", "built", "a", "new", "house."] },
    { en: "We are learning English.", words: ["We", "are", "learning", "English."] },
    { en: "He broke his phone.", words: ["He", "broke", "his", "phone."] },
    { en: "I will call you later.", words: ["I", "will", "call", "you", "later."] },
    { en: "She found her keys.", words: ["She", "found", "her", "keys."] },
    { en: "They are happy together.", words: ["They", "are", "happy", "together."] },
    { en: "We ate pizza for dinner.", words: ["We", "ate", "pizza", "for", "dinner."] },
    { en: "He runs every day.", words: ["He", "runs", "every", "day."] }
];

// ============================================================
// 2. GERADOR DE FONÉTICA (Português Brasil - Simplificado)
// ============================================================
function generateBrazilianPhonetic(text) {
    const exceptions = {
        "the": "dâ", "be": "bí", "to": "tú", "of": "óv", "and": "ând", "a": "éi",
        "in": "ín", "that": "dát", "have": "ráv", "i": "ái", "it": "ít", "for": "fór",
        "not": "nát", "on": "ón", "with": "uíd", "he": "rí", "as": "áz", "you": "iú",
        "do": "dú", "at": "ét", "this": "dís", "but": "bát", "his": "rís", "by": "bái",
        "from": "frám", "they": "dêi", "we": "uí", "say": "sêi", "her": "rêr", "she": "xí",
        "or": "ór", "an": "án", "will": "uíl", "my": "mái", "one": "uán", "all": "ól",
        "would": "úd", "there": "dér", "their": "dér", "what": "uót", "so": "sôu",
        "up": "áp", "out": "áut", "if": "íf", "about": "abáut", "who": "rú",
        "get": "guét", "which": "uítch", "go": "gôu", "me": "mí", "when": "uén",
        "make": "mêik", "can": "kén", "like": "láik", "time": "táim", "no": "nôu",
        "just": "jást", "him": "rím", "know": "nôu", "take": "têik", "people": "pípol",
        "into": "íntu", "year": "íer", "your": "iôr", "good": "gúd", "some": "sám",
        "could": "kúd", "them": "dém", "see": "sí", "other": "áder", "than": "dén",
        "then": "dén", "now": "náu", "look": "lúk", "only": "ônli", "come": "kám",
        "its": "íts", "over": "ôver", "think": "tínk", "also": "ólsou", "back": "bék",
        "after": "áfter", "use": "iús", "two": "tchú", "how": "ráu", "our": "áur",
        "work": "uórk", "first": "férst", "well": "uél", "way": "uêi", "even": "íven",
        "new": "niú", "want": "uánt", "because": "bicóz", "any": "éni", "these": "dís",
        "give": "guív", "day": "dêi", "most": "môust", "us": "ás", "here": "ríer",
        "thing": "tín", "much": "mátch", "really": "ríali", "right": "ráit", "tell": "tél",
        "own": "ôn", "too": "tchú", "old": "ôld", "place": "plêis", "life": "láif",
        "world": "uórld", "house": "ráus", "call": "cól", "try": "trái", "man": "mén",
        "big": "bíg", "long": "lóng", "where": "uér", "down": "dáun", "more": "môr",
        "feel": "fíl", "few": "fiú", "before": "bifór", "through": "tru", "around": "aráund",
        "between": "bituín", "need": "níd", "should": "xúd", "keep": "kíp", "child": "tcháild",
        "next": "nékst", "find": "fáind", "why": "uái", "ask": "ésk", "woman": "úman",
        "different": "díferent", "hand": "rénd", "head": "réd", "stand": "sténd", "put": "pút",
        "eye": "ái", "family": "fémili", "story": "stóri", "friend": "frend", "start": "stárt",
        "great": "grêit", "help": "rép", "mean": "mín", "name": "nêim", "show": "xôu",
        "better": "béter", "same": "sêim", "young": "iáng", "true": "tru", "power": "páuer",
        "country": "cántri", "car": "cár", "water": "uóter", "air": "ér", "food": "fúd",
        "school": "scúl", "run": "rán", "play": "plêi", "hear": "ríer", "music": "miúzic",
        "read": "ríd", "write": "ráit", "talk": "tók", "walk": "uók", "buy": "bái",
        "eat": "ít", "drink": "drínk", "sleep": "slíp", "open": "ôpen", "close": "clôus",
        "happy": "répi", "sad": "séd", "fast": "fést", "slow": "slôu", "hot": "rôt",
        "cold": "côld", "easy": "ízi", "hard": "rárd", "white": "uáit", "black": "blék",
        "red": "réd", "blue": "blú", "green": "grín", "yellow": "iélou", "mother": "máder",
        "father": "fáder", "brother": "bráder", "sister": "síster", "teacher": "títcher",
        "student": "stiúdent", "doctor": "dóctor", "nurse": "nérs", "police": "polís",
        "money": "máni", "price": "práis", "store": "stôr", "market": "márket",
        "city": "síti", "street": "strít", "road": "rôd", "park": "párk", "bank": "bénk",
        "hospital": "ráspital", "hotel": "hotél", "church": "tchértch", "beach": "bítch",
        "mountain": "máunten", "river": "ríver", "ocean": "ôuxen", "forest": "fórest",
        "garden": "gárden", "kitchen": "kítchen", "room": "rúm", "door": "dôr",
        "window": "uíndou", "table": "têibol", "chair": "tchér", "bed": "béd",
        "book": "búk", "pen": "pén", "phone": "fôn", "computer": "compíuter",
        "internet": "íntérnet", "email": "ímêil", "video": "vídiou", "photo": "fôto",
        "movie": "múvi", "song": "sóng", "dance": "déns", "party": "párti",
        "game": "gêim", "team": "tím", "win": "uín", "lose": "lús", "love": "láv",
        "hate": "rét", "enjoy": "injói", "hope": "rôup", "wish": "uích", "believe": "bilív",
        "imagine": "imédjin", "realize": "ríalaiz", "understand": "ándersténd",
        "explain": "iksplêin", "describe": "discráib", "decide": "disáid",
        "consider": "consíder", "continue": "contíniu", "prefer": "prifér",
        "offer": "ófer", "refuse": "rifiús", "forget": "forguét", "remember": "rimémber",
        "follow": "fólo", "lead": "líd", "miss": "mís", "worry": "uári", "care": "kér",
        "share": "xér", "save": "sêiv", "spend": "spénd", "travel": "trével",
        "drive": "dráiv", "fly": "flái", "swim": "suím", "climb": "cláim", "build": "bíld",
        "break": "brêik", "fix": "fíks", "clean": "clín", "cook": "cúk", "wear": "uér",
        "choose": "tchús", "bring": "bríng", "send": "sénd", "receive": "risív",
        "visit": "vízit", "invite": "inváit", "discuss": "discás", "argue": "árguiu",
        "agree": "agrí", "disagree": "disagrí", "complain": "comprêin",
        "apologize": "apólodjáis", "thank": "ténk", "greet": "grít", "introduce": "íntrodús",
        "interview": "íntérviu", "hire": "ráir", "fire": "fáir", "promote": "promôut",
        "sell": "sél", "pay": "pêi", "borrow": "bóro", "lend": "lénd", "owe": "ôu",
        "earn": "érn", "achieve": "atchív", "improve": "imprúv", "develop": "devélop",
        "important": "impórtant", "necessary": "nécesséri", "possible": "pósibol",
        "impossible": "impósibol", "available": "avêilibol", "comfortable": "cámfortabol",
        "uncomfortable": "áncámfortabol", "famous": "fêimos", "popular": "pópular",
        "serious": "sírius", "dangerous": "dêindjerus", "safe": "sêif", "private": "práivat",
        "public": "páblik", "special": "spéxal", "common": "cómon", "strange": "strêindj",
        "normal": "nórmal", "simple": "símpl", "complex": "cómplex", "cheap": "tchíp",
        "expensive": "ikspénsiv", "rich": "rítch", "poor": "púr", "lucky": "láki",
        "unlucky": "ánláki", "wonderful": "uónderful", "terrible": "téribol",
        "lovely": "lávli", "ugly": "ágli", "clever": "kléver", "stupid": "stiúpid",
        "brave": "brêiv", "coward": "káuard", "generous": "djénerus", "mean": "mín",
        "polite": "poláit", "rude": "rúd", "honest": "ánest", "dishonest": "disánest",
        "usually": "iújuali", "sometimes": "sámtaims", "never": "néver", "always": "ólueis",
        "often": "ófen", "rarely": "rérli", "already": "olrédi", "yet": "iét", "since": "síns",
        "ago": "agôu", "morning": "mórning", "afternoon": "áfternún", "evening": "ívning",
        "night": "náit", "today": "tudêi", "tomorrow": "tumóro", "yesterday": "iésterdêi",
        "week": "uík", "month": "mánth", "weather": "uédar", "rain": "rêin", "snow": "snôu",
        "sun": "sán", "wind": "uínd", "cloud": "kláud", "storm": "stôrm", "flood": "flád",
        "earthquake": "értquêik", "fire": "fáir", "animal": "énimal", "dog": "dóg",
        "cat": "két", "bird": "bérd", "fish": "fích", "tree": "trí", "flower": "fláuer",
        "fruit": "frúit", "vegetable": "védjtabol", "meat": "mít", "breakfast": "brékfast",
        "lunch": "lántch", "dinner": "díner", "snack": "snék", "dessert": "dizért",
        "coffee": "cófi", "tea": "tí", "juice": "djús", "milk": "míuk", "bread": "bréd",
        "job": "djób", "career": "caríer", "office": "ófis", "manager": "ménédjer",
        "employee": "emplói", "colleague": "cólíg", "client": "cláient", "customer": "cástomer",
        "project": "pródjét", "deadline": "dédlain", "meeting": "míting", "conference": "cónferens",
        "presentation": "prézantêixon", "report": "ripórt", "budget": "bádjét",
        "profit": "prófit", "loss": "lós", "success": "sucés", "failure": "fêiliur",
        "skill": "skíl", "knowledge": "nólédj", "experience": "ikspíriens",
        "lesson": "lésen", "exercise": "éxersáis", "question": "quéstchen",
        "answer": "énser", "solution": "sulúxen", "problem": "próblen",
        "challenge": "tchélendj", "opportunity": "oportuníti", "degree": "digrí",
        "course": "kórs", "subject": "sábjét", "exam": "igzám", "grade": "grêid",
        "scholarship": "scólarship", "graduation": "grdjueixon", "science": "sáiens",
        "history": "hístri", "math": "mét", "health": "rélt", "disease": "dizís",
        "pain": "pêin", "cure": "ciúr", "medicine": "médsin", "heart": "rárt",
        "mind": "máind", "soul": "sôul", "spirit": "spírit", "energy": "énédji",
        "strength": "strénkth", "courage": "cáridj", "trust": "trást", "faith": "fêith",
        "peace": "pís", "war": "uór", "angry": "éngri", "calm": "cám",
        "excited": "isáited", "bored": "bórd", "tired": "táired", "hungry": "hángri",
        "thirsty": "térsti", "sick": "sík", "healthy": "rélti", "fit": "fít",
        "body": "bódi", "hair": "rér", "face": "fêis", "nose": "nôus", "mouth": "máuth",
        "ear": "ír", "neck": "nék", "shoulder": "xôlder", "government": "gávernement",
        "president": "prézident", "congress": "cóngress", "law": "ló", "right": "ráit",
        "freedom": "frídem", "justice": "djástis", "crime": "cráim", "court": "córt",
        "army": "ármi", "nation": "nêixon", "culture": "cáltcher", "art": "árt",
        "film": "fílm", "theater": "tíater", "language": "lánguídj", "literature": "líteratcher",
        "poem": "pôem", "novel": "nóvel", "magazine": "mégazín", "newspaper": "niúzpeiper",
        "radio": "rêidiou", "television": "télevízen", "social": "sôuxal",
        "economic": "icnômic", "political": "politícal", "religious": "rilídjous",
        "historical": "histórical", "cultural": "cáltchural", "modern": "módérn",
        "traditional": "tradíxenal", "international": "internáxenal", "national": "nêxenal",
        "local": "lócal", "global": "glóbal", "technology": "tecnólodji", "device": "diváis",
        "screen": "scrín", "keyboard": "kíboard", "mouse": "máus", "software": "sóftuér",
        "hardware": "rárd-uér", "data": "dêita", "network": "nét-uórk", "security": "seciúriti",
        "privacy": "práivasi", "account": "acáunt", "password": "pás-uórd",
        "username": "iúzer-nêim", "website": "uéb-sáit", "application": "áplicêixon",
        "download": "dáun-lôud", "upload": "áp-lôud", "stream": "strím",
        "connect": "conéct", "disconnect": "discónect", "update": "áp-dêit",
        "delete": "dilít", "copy": "cópi", "paste": "pêist", "undo": "ándu",
        "redo": "ridú", "search": "sértch", "replace": "riplêis", "future": "fiútcher",
        "past": "pést", "present": "prézént", "create": "criêit", "destroy": "distrói",
        "protect": "protéct", "support": "supórt", "oppose": "opôus", "accept": "acsépt",
        "belong": "bilóng", "contain": "contêin", "represent": "réprizént",
        "consult": "consált", "publish": "páblix", "broadcast": "bród-cást",
        "celebrate": "sélebrêit", "commemorate": "comémorêit", "memorize": "mémoráiz",
        "practice": "práktis"
    };

    const lowerText = text.toLowerCase().trim();
    if (exceptions[lowerText]) return exceptions[lowerText];

    let phon = text
        .toLowerCase()
        .replace(/th/g, 'd')
        .replace(/oo/g, 'u')
        .replace(/ee/g, 'i')
        .replace(/ea/g, 'i')
        .replace(/ai/g, 'êi')
        .replace(/ay/g, 'êi')
        .replace(/ou/g, 'ôu')
        .replace(/ow/g, 'ôu')
        .replace(/igh/g, 'ái')
        .replace(/are/g, 'ér')
        .replace(/ere/g, 'ír')
        .replace(/tion/g, 'xen')
        .replace(/sion/g, 'zen')
        .replace(/ch/g, 'tch')
        .replace(/sh/g, 'x')
        .replace(/ph/g, 'f')
        .replace(/gh/g, '')
        .replace(/ck/g, 'k')
        .replace(/ng/g, 'n')
        .replace(/qu/g, 'ku')
        .replace(/x/g, 'ks')
        .replace(/c([ei])/g, 's$1')
        .replace(/g([ei])/g, 'dj$1')
        .replace(/a/g, 'é')
        .replace(/e/g, 'i')
        .replace(/i/g, 'í')
        .replace(/o/g, 'ô')
        .replace(/u/g, 'ú')
        .replace(/r/g, 'r')
        .replace(/l/g, 'l')
        .replace(/m/g, 'm')
        .replace(/n/g, 'n')
        .replace(/s/g, 's')
        .replace(/v/g, 'v')
        .replace(/y/g, 'i')
        .replace(/w/g, 'u')
        .replace(/j/g, 'dj')
        .replace(/z/g, 'z');

    phon = phon.replace(/([aeiou])\1/g, '$1');
    return phon;
}

// Aplicar fonética para todos os itens
WORDS.forEach(w => { if (!w.phonetic) w.phonetic = generateBrazilianPhonetic(w.en); });
CLOZE_SENTENCES.forEach(s => { if (!s.phonetic) s.phonetic = generateBrazilianPhonetic(s.en); });
SCRAMBLE_SENTENCES.forEach(s => { if (!s.phonetic) s.phonetic = generateBrazilianPhonetic(s.en); });

// ============================================================
// 3. CONFIGURAÇÕES
// ============================================================
const WORDS_PER_LEVEL = 100;
const TOTAL_LEVELS = 10;
const CARDS_PER_SESSION = 12;
const DOMINATION_THRESHOLD = 4;
const UNLOCK_THRESHOLD = 0.8;
const MIX_RATIO = 3;

let currentMode = 'click';
let currentContent = 'vocabulary';

// ============================================================
// 4. ESTADO
// ============================================================
const DEFAULT_STATE = () => ({
    currentLevel: 0,
    progress: {},
    sessionStats: { correct: 0, wrong: 0, total: 0, lastSessionDate: null },
    config: { mode: 'click', content: 'vocabulary' },
    theme: 'light'
});

function loadState() {
    try {
        const raw = localStorage.getItem('flashcards_state');
        if (!raw) return DEFAULT_STATE();
        const parsed = JSON.parse(raw);
        if (!parsed.progress) parsed.progress = {};
        if (!parsed.sessionStats) parsed.sessionStats = { correct: 0, wrong: 0, total: 0, lastSessionDate: null };
        if (!parsed.config) parsed.config = { mode: 'click', content: 'vocabulary' };
        if (!parsed.theme) parsed.theme = 'light';
        return parsed;
    } catch { return DEFAULT_STATE(); }
}

function saveState(state) {
    localStorage.setItem('flashcards_state', JSON.stringify(state));
}

// ============================================================
// 5. FUNÇÕES DE ACESSO
// ============================================================
function getLevelWords(levelIndex) {
    const start = levelIndex * WORDS_PER_LEVEL;
    const end = Math.min(start + WORDS_PER_LEVEL, WORDS.length);
    return WORDS.slice(start, end).map((w, idx) => ({ ...w, index: start + idx, type: 'word' }));
}

function getClozeQuestions() {
    return CLOZE_SENTENCES.map((s, idx) => ({ ...s, index: `cloze_${idx}`, type: 'cloze' }));
}

function getGrammarQuestions() {
    return GRAMMAR_QUESTIONS.map((q, idx) => ({ ...q, index: `grammar_${idx}`, type: 'grammar' }));
}

function getScrambleQuestions() {
    return SCRAMBLE_SENTENCES.map((s, idx) => ({ ...s, index: `scramble_${idx}`, type: 'scramble' }));
}

function getItemProgress(state, itemIndex) {
    return state.progress[itemIndex] || { counter: 0, nextReview: 0, level: state.currentLevel };
}

function updateItemProgress(state, itemIndex, newCounter) {
    state.progress[itemIndex] = {
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

function isItemDominant(progress) {
    return progress.counter >= DOMINATION_THRESHOLD;
}

function getLevelDominance(state, levelIndex) {
    const words = getLevelWords(levelIndex);
    let dominated = 0;
    words.forEach(w => {
        const p = getItemProgress(state, w.index);
        if (isItemDominant(p)) dominated++;
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

// ============================================================
// 6. SELEÇÃO DE CARDS
// ============================================================
function buildSelection(priority, newItems, stable, count) {
    let selected = [];
    const countPriority = Math.min(Math.round(count * 0.6), priority.length);
    const countNew = Math.min(count - countPriority, newItems.length);
    const countStable = count - countPriority - countNew;

    selected.push(...priority.slice(0, countPriority));
    selected.push(...newItems.slice(0, countNew));
    selected.push(...stable.slice(0, countStable));

    if (selected.length < count) {
        const rest = [...priority.slice(countPriority), ...newItems.slice(countNew), ...stable.slice(countStable)];
        selected.push(...rest.slice(0, count - selected.length));
    }
    shuffle(selected);
    return selected;
}

function selectCardsForSession(state) {
    const level = state.currentLevel;
    const words = getLevelWords(level);
    const cloze = getClozeQuestions();
    const grammar = getGrammarQuestions();
    const scramble = getScrambleQuestions();
    const now = Date.now();

    function preparePool(items) {
        const priority = [], newItems = [], stable = [];
        items.forEach(item => {
            const prog = getItemProgress(state, item.index);
            if (prog.counter === 0) newItems.push(item);
            else if (prog.counter < DOMINATION_THRESHOLD && now >= prog.nextReview) priority.push(item);
            else stable.push(item);
        });
        shuffle(priority); shuffle(newItems); shuffle(stable);
        return { priority, new: newItems, stable };
    }

    const wordPool = preparePool(words);
    const clozePool = preparePool(cloze);
    const grammarPool = preparePool(grammar);
    const scramblePool = preparePool(scramble);

    let selected = [];
    const totalSlots = CARDS_PER_SESSION;

    if (currentContent === 'vocabulary') {
        selected = buildSelection(wordPool.priority, wordPool.new, wordPool.stable, totalSlots);
    } else if (currentContent === 'cloze') {
        selected = buildSelection(clozePool.priority, clozePool.new, clozePool.stable, totalSlots);
    } else if (currentContent === 'grammar') {
        selected = buildSelection(grammarPool.priority, grammarPool.new, grammarPool.stable, totalSlots);
    } else if (currentContent === 'scramble') {
        selected = buildSelection(scramblePool.priority, scramblePool.new, scramblePool.stable, totalSlots);
    } else { // mixed
        const perType = Math.floor(totalSlots / 4);
        const rest = totalSlots - (perType * 4);
        let parts = [];
        parts.push(buildSelection(wordPool.priority, wordPool.new, wordPool.stable, perType + (rest > 0 ? 1 : 0)));
        parts.push(buildSelection(clozePool.priority, clozePool.new, clozePool.stable, perType + (rest > 1 ? 1 : 0)));
        parts.push(buildSelection(grammarPool.priority, grammarPool.new, grammarPool.stable, perType + (rest > 2 ? 1 : 0)));
        parts.push(buildSelection(scramblePool.priority, scramblePool.new, scramblePool.stable, perType));
        selected = parts.flat();
        shuffle(selected);
    }
    return selected;
}

// ============================================================
// 7. UI
// ============================================================
let state = loadState();
let currentSession = [];
let sessionIndex = 0;
let sessionCorrect = 0;
let sessionWrong = 0;
let sessionStartTime = 0;
let timerInterval = null;
let isAnswering = false;
let currentCardType = 'word';
let isFeedbackShowing = false;

// Aplicar tema
if (state.theme === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('themeToggle').textContent = '☀️';
} else {
    document.body.classList.remove('dark');
    document.getElementById('themeToggle').textContent = '🌙';
}

if (state.config) {
    currentMode = state.config.mode || 'click';
    currentContent = state.config.content || 'vocabulary';
}

// ============================================================
// 8. RENDERIZAÇÃO
// ============================================================
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

    document.querySelectorAll('#modeToggle .config-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === currentMode);
    });
    document.querySelectorAll('#contentToggle .config-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.content === currentContent);
    });

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
    isFeedbackShowing = false;

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
    currentCardType = card.type || 'word';
    isFeedbackShowing = false;
    document.getElementById('cardCounter').textContent = `Card ${sessionIndex + 1} / ${currentSession.length}`;
    document.getElementById('feedbackOverlay').classList.remove('show');
    document.getElementById('feedbackJustification').style.display = 'none';

    document.getElementById('scrambleArea').style.display = 'none';
    document.getElementById('optionsContainer').style.display = 'none';
    document.getElementById('typeArea').style.display = 'none';

    if (currentCardType === 'scramble') {
        document.getElementById('wordDisplay').textContent = '🧩 Monte a frase:';
    } else {
        document.getElementById('wordDisplay').textContent = card.en;
    }

    const phoneticEl = document.getElementById('phoneticDisplay');
    if (card.phonetic && currentCardType !== 'scramble') {
        phoneticEl.textContent = `🔊 ${card.phonetic}`;
        phoneticEl.style.display = 'block';
    } else {
        phoneticEl.style.display = 'none';
    }

    const translationEl = document.getElementById('translationDisplay');
    if (currentCardType === 'cloze' && card.pt) {
        translationEl.textContent = `📖 ${card.pt}`;
        translationEl.style.display = 'block';
    } else {
        translationEl.style.display = 'none';
    }

    if (currentCardType === 'scramble') {
        document.getElementById('scrambleArea').style.display = 'block';
        renderScramble(card);
        return;
    }

    const isTypeMode = (currentMode === 'type');
    document.getElementById('optionsContainer').style.display = 'flex';
    document.getElementById('typeArea').style.display = isTypeMode ? 'flex' : 'none';

    const isCloze = (card.type === 'cloze');
    const isGrammar = (card.type === 'grammar');
    let correctAnswer, options = [], pool;

    if (isGrammar) {
        correctAnswer = card.correct;
        options = [...card.options];
    } else if (isCloze) {
        correctAnswer = card.answer;
        pool = WORDS.filter(w => w.en !== correctAnswer && w.en !== card.en);
        shuffle(pool);
        options = [correctAnswer];
        for (let i = 0; i < 3 && i < pool.length; i++) options.push(pool[i].en);
    } else {
        correctAnswer = card.pt;
        pool = WORDS.filter(w => w.pt !== correctAnswer && w.en !== card.en);
        shuffle(pool);
        options = [correctAnswer];
        for (let i = 0; i < 3 && i < pool.length; i++) options.push(pool[i].pt);
    }

    options = [...new Set(options)];
    while (options.length < 4) options.push('---');
    shuffle(options);

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.dataset.correct = (opt === correctAnswer) ? 'true' : 'false';
        btn.addEventListener('click', () => {
            if (isTypeMode) {
                document.getElementById('typeInput').value = opt;
                document.getElementById('typeInput').focus();
            } else {
                handleClickAnswer(btn, correctAnswer, card.justification || null);
            }
        });
        container.appendChild(btn);
    });

    if (isTypeMode) {
        const input = document.getElementById('typeInput');
        input.value = '';
        input.disabled = false;
        input.focus();
        document.getElementById('typeSubmit').disabled = false;
        const newSubmit = document.getElementById('typeSubmit').cloneNode(true);
        document.getElementById('typeSubmit').replaceWith(newSubmit);
        newSubmit.addEventListener('click', () => handleTypeAnswer(correctAnswer, card));
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleTypeAnswer(correctAnswer, card);
        });
        newSubmit.dataset.answer = correctAnswer;
    }
}

// ============================================================
// 9. LÓGICA DE SCRAMBLE
// ============================================================
let scrambleSelected = [];
let scrambleCorrect = [];

function renderScramble(card) {
    const words = card.words;
    scrambleCorrect = words.slice();
    let shuffled = words.slice();
    do { shuffle(shuffled); } while (shuffled.join('') === words.join('') && words.length > 1);
    scrambleSelected = [];

    const optionsContainer = document.getElementById('scrambleOptions');
    const buildContainer = document.getElementById('scrambleBuild');
    const feedbackEl = document.getElementById('scrambleFeedback');

    optionsContainer.innerHTML = '';
    shuffled.forEach((word, idx) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn';
        btn.textContent = word;
        btn.dataset.index = idx;
        btn.addEventListener('click', () => {
            if (btn.classList.contains('used')) return;
            btn.classList.add('used');
            scrambleSelected.push(word);
            renderScrambleBuild();
        });
        optionsContainer.appendChild(btn);
    });

    renderScrambleBuild();

    document.getElementById('scrambleClear').onclick = () => {
        scrambleSelected = [];
        document.querySelectorAll('.word-btn').forEach(b => b.classList.remove('used'));
        renderScrambleBuild();
        feedbackEl.style.display = 'none';
    };

    document.getElementById('scrambleCheck').onclick = () => {
        const userPhrase = scrambleSelected.join(' ');
        const correctPhrase = scrambleCorrect.join(' ');
        if (userPhrase === correctPhrase) {
            feedbackEl.textContent = '✅ Correto!';
            feedbackEl.style.color = '#10B981';
            feedbackEl.style.display = 'block';
            sessionCorrect++;
            const prog = getItemProgress(state, card.index);
            const newCounter = Math.min(prog.counter + 1, 5);
            updateItemProgress(state, card.index, newCounter);
            saveState(state);
            setTimeout(() => {
                sessionIndex++;
                renderCard();
            }, 1500);
        } else {
            feedbackEl.innerHTML = `❌ Errado! A frase correta é: <strong>"${correctPhrase}"</strong>`;
            feedbackEl.style.color = '#EF4444';
            feedbackEl.style.display = 'block';
            sessionWrong++;
            updateItemProgress(state, card.index, 0);
            saveState(state);
            document.querySelectorAll('.word-btn').forEach(b => b.style.pointerEvents = 'none');
            document.getElementById('scrambleClear').style.pointerEvents = 'none';
            document.getElementById('scrambleCheck').style.pointerEvents = 'none';
            setTimeout(() => {
                sessionIndex++;
                renderCard();
            }, 2500);
        }
    };
}

function renderScrambleBuild() {
    const buildContainer = document.getElementById('scrambleBuild');
    buildContainer.innerHTML = '';
    scrambleSelected.forEach((word, idx) => {
        const span = document.createElement('span');
        span.className = 'word-placed';
        span.textContent = word;
        span.addEventListener('click', () => {
            scrambleSelected.splice(idx, 1);
            const options = document.querySelectorAll('.word-btn');
            options.forEach(btn => {
                if (btn.textContent === word && btn.classList.contains('used')) {
                    btn.classList.remove('used');
                }
            });
            renderScrambleBuild();
        });
        buildContainer.appendChild(span);
    });
    if (scrambleSelected.length === 0) {
        const placeholder = document.createElement('span');
        placeholder.textContent = 'Clique nas palavras abaixo para montar a frase...';
        placeholder.style.color = 'var(--text-muted)';
        placeholder.style.fontSize = '0.9rem';
        buildContainer.appendChild(placeholder);
    }
}

// ============================================================
// 10. RESPOSTAS (Clique e Digitação)
// ============================================================
function handleClickAnswer(clickedBtn, correctAnswer, justification) {
    if (isAnswering || isFeedbackShowing) return;
    isAnswering = true;

    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.add('disabled'));

    const isCorrect = clickedBtn.dataset.correct === 'true';
    const card = currentSession[sessionIndex];
    const itemIndex = card.index;

    if (isCorrect) {
        clickedBtn.classList.add('correct');
        sessionCorrect++;
        const prog = getItemProgress(state, itemIndex);
        const newCounter = Math.min(prog.counter + 1, 5);
        updateItemProgress(state, itemIndex, newCounter);
        showFeedback(true, null);
    } else {
        clickedBtn.classList.add('wrong');
        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') b.classList.add('correct');
        });
        sessionWrong++;
        updateItemProgress(state, itemIndex, 0);
        if (card.type === 'grammar' && card.justification) {
            showFeedback(false, card.justification);
        } else {
            showFeedback(false, null);
        }
    }
    saveState(state);
}

function handleTypeAnswer(correctAnswer, card) {
    if (isAnswering || isFeedbackShowing) return;
    const input = document.getElementById('typeInput');
    if (input.disabled) return;
    const userAnswer = input.value.trim().toLowerCase();
    if (!userAnswer) return;

    isAnswering = true;
    input.disabled = true;
    document.getElementById('typeSubmit').disabled = true;

    const isCorrect = (userAnswer === correctAnswer.toLowerCase());
    const itemIndex = card.index;

    if (isCorrect) {
        sessionCorrect++;
        const prog = getItemProgress(state, itemIndex);
        const newCounter = Math.min(prog.counter + 1, 5);
        updateItemProgress(state, itemIndex, newCounter);
        showFeedback(true, null);
    } else {
        sessionWrong++;
        updateItemProgress(state, itemIndex, 0);
        input.value = correctAnswer;
        input.style.borderColor = '#EF4444';
        setTimeout(() => { input.style.borderColor = ''; }, 2000);
        if (card.type === 'grammar' && card.justification) {
            showFeedback(false, card.justification);
        } else {
            showFeedback(false, null);
        }
    }
    saveState(state);
}

// ============================================================
// 11. FEEDBACK COM BOTÃO OK
// ============================================================
function showFeedback(isCorrect, justification) {
    const overlay = document.getElementById('feedbackOverlay');
    document.getElementById('feedbackIcon').textContent = isCorrect ? '✅' : '❌';
    document.getElementById('feedbackText').textContent = isCorrect ? 'Correto!' : 'Errado!';
    
    const justEl = document.getElementById('feedbackJustification');
    if (justification) {
        justEl.textContent = justification;
        justEl.style.display = 'block';
    } else {
        justEl.style.display = 'none';
    }
    overlay.classList.add('show');
    isFeedbackShowing = true;

    const okBtn = document.getElementById('feedbackOkBtn');
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);
    newOkBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
        isFeedbackShowing = false;
        sessionIndex++;
        isAnswering = false;
        renderCard();
    });
}

// ============================================================
// 12. FIM DE SESSÃO
// ============================================================
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
// 13. CONFIGURAÇÕES E TEMAS
// ============================================================
document.querySelectorAll('#modeToggle .config-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentMode = btn.dataset.mode;
        state.config.mode = currentMode;
        saveState(state);
        document.querySelectorAll('#modeToggle .config-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

document.querySelectorAll('#contentToggle .config-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentContent = btn.dataset.content;
        state.config.content = currentContent;
        saveState(state);
        document.querySelectorAll('#contentToggle .config-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

document.getElementById('themeToggle').addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    state.theme = isDark ? 'dark' : 'light';
    saveState(state);
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
});

// ============================================================
// 14. EVENTOS PRINCIPAIS
// ============================================================
document.getElementById('startSessionBtn').addEventListener('click', startSession);
document.getElementById('quitSessionBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    renderDashboard();
});
document.getElementById('endGoDashboardBtn').addEventListener('click', renderDashboard);

renderDashboard();
