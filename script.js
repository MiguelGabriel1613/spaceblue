// 🎮 ROYAL BLUE: MISSÃO CÓSMICA - SISTEMA COMPLETO
// Versão 2.0 - Todos os sistemas integrados e funcionais

// =============================================================================
// CONFIGURAÇÕES GLOBAIS DO JOGO
// =============================================================================

const GameConfig = {
    // Sistema de Universo
    UNIVERSE_SIZE: 20000,
    STAR_COUNT: 5000,
    PLANET_COUNT: 8,
    
    // Física do Jogo
    MOVEMENT_SPEED: 100,
    ROTATION_SPEED: 2,
    BOOST_MULTIPLIER: 3,
    MOUSE_SENSITIVITY: 1,
    
    // Recursos do Jogador
    MAX_HEALTH: 100,
    MAX_OXYGEN: 100,
    OXYGEN_DRAIN_RATE: 0.1,
    HEALTH_DRAIN_RATE: 0.05,
    
    // Sistema de Progressão
    BASE_XP: 100,
    XP_MULTIPLIER: 1.5,
    MAX_LEVEL: 50,
    
    // Missões
    INITIAL_MISSIONS: ['exploration', 'samples', 'photography', 'complete'],
    
    // Audio
    MASTER_VOLUME: 0.7,
    MUSIC_VOLUME: 0.3,
    SFX_VOLUME: 0.6
};

// =============================================================================
// BANCO DE DADOS DOS PLANETAS (DADOS REAIS DA NASA)
// =============================================================================

const PlanetData = {
    mercury: {
        name: "Mercúrio",
        type: "Planeta Rochoso",
        size: 12,
        distance: 800,
        color: 0x8C7853,
        description: "O menor e mais próximo do Sol. Superfície craterizada marcada por impactos de asteroides. Temperaturas variam de -173°C à noite até 427°C durante o dia.",
        habitat: "Inabitável",
        funFact: "Um ano em Mercúrio dura apenas 88 dias terrestres!",
        temperature: "427°C (dia) / -173°C (noite)",
        gravity: "3.7 m/s² (0.38x Terra)",
        composition: "70% Metal, 30% Silicato",
        atmosphere: "Traços de Oxigênio, Sódio, Hidrogênio",
        rings: "Não",
        moons: "0",
        rotationSpeed: 0.004,
        orbitSpeed: 0.01,
        hasAtmosphere: false,
        texture: 'mercury',
        missionRelevant: true
    },
    venus: {
        name: "Vênus",
        type: "Planeta Vulcânico",
        size: 18,
        distance: 1200,
        color: 0xE39E54,
        description: "O planeta mais quente do sistema solar com uma atmosfera densa de dióxido de carbono e nuvens de ácido sulfúrico. Pressão atmosférica 92 vezes maior que a Terra.",
        habitat: "Inabitável",
        funFact: "Vênus gira ao contrário em relação aos outros planetas! Um dia venusiano é mais longo que seu ano!",
        temperature: "462°C",
        gravity: "8.87 m/s² (0.91x Terra)",
        composition: "Núcleo de Ferro, Manto Rochoso",
        atmosphere: "96.5% CO₂, 3.5% Nitrogênio",
        rings: "Não",
        moons: "0",
        rotationSpeed: 0.002,
        orbitSpeed: 0.008,
        hasAtmosphere: true,
        texture: 'venus',
        missionRelevant: true
    },
    earth: {
        name: "Terra",
        type: "Planeta Oceânico",
        size: 20,
        distance: 1600,
        color: 0x1E90FF,
        description: "Nosso lar! O único planeta conhecido com vida. Composto por 71% de água, com atmosfera rica em nitrogênio e oxigênio. Possui um forte campo magnético que protege da radiação solar.",
        habitat: "Habitável",
        funFact: "A Terra é o planeta mais denso do sistema solar!",
        temperature: "15°C (média)",
        gravity: "9.8 m/s²",
        composition: "Núcleo Ferro-Níquel, Crosta Sólida",
        atmosphere: "78% Nitrogênio, 21% Oxigênio",
        rings: "Não",
        moons: "1 (Lua)",
        rotationSpeed: 0.01,
        orbitSpeed: 0.006,
        hasAtmosphere: true,
        hasClouds: true,
        texture: 'earth',
        missionRelevant: true,
        hasMoon: true
    },
    mars: {
        name: "Marte",
        type: "Planeta Desértico",
        size: 16,
        distance: 2200,
        color: 0xFF6B6B,
        description: "O Planeta Vermelho, com evidências de água líquida no passado. Possui os maiores vulcões do sistema solar e calotas polares de gelo seco.",
        habitat: "Potencialmente Habitável",
        funFact: "Marte tem duas luas pequenas e irregulares: Fobos e Deimos!",
        temperature: "-63°C (média)",
        gravity: "3.7 m/s² (0.38x Terra)",
        composition: "Basalto, Óxidos de Ferro",
        atmosphere: "95% CO₂, 2.7% Nitrogênio",
        rings: "Não",
        moons: "2 (Fobos e Deimos)",
        rotationSpeed: 0.008,
        orbitSpeed: 0.005,
        hasAtmosphere: true,
        texture: 'mars',
        missionRelevant: true,
        hasMoon: true
    },
    jupiter: {
        name: "Júpiter",
        type: "Gigante Gasoso",
        size: 50,
        distance: 3500,
        color: 0xDAA520,
        description: "O maior planeta do sistema solar, uma esfera massiva de hidrogênio e hélio. Sua Grande Mancha Vermelha é uma tempestade anticiclônica que dura séculos.",
        habitat: "Inabitável",
        funFact: "Júpiter tem 79 luas conhecidas, incluindo Ganimedes - a maior lua do sistema solar!",
        temperature: "-108°C",
        gravity: "24.8 m/s² (2.53x Terra)",
        composition: "90% Hidrogênio, 10% Hélio",
        atmosphere: "Hidrogênio, Hélio, Metano",
        rings: "Sim (fracos)",
        moons: "79 (Ganimedes, Calisto, Io, Europa)",
        rotationSpeed: 0.02,
        orbitSpeed: 0.003,
        hasAtmosphere: true,
        texture: 'jupiter',
        missionRelevant: true,
        hasMoon: true
    },
    saturn: {
        name: "Saturno",
        type: "Gigante Gasoso",
        size: 45,
        distance: 4500,
        color: 0xF0E68C,
        description: "Conhecido por seus espetaculares anéis compostos de gelo, rocha e poeira. É o planeta menos denso do sistema solar - flutuaria na água!",
        habitat: "Inabitável",
        funFact: "Os anéis de Saturno se estendem por 282.000 km mas têm apenas 10 metros de espessura!",
        temperature: "-138°C",
        gravity: "10.4 m/s² (1.06x Terra)",
        composition: "96% Hidrogênio, 3% Hélio",
        atmosphere: "Hidrogênio, Hélio, Metano",
        rings: "Sim (extensos)",
        moons: "82 (Titã, Encélado, Mimas)",
        rotationSpeed: 0.018,
        orbitSpeed: 0.002,
        hasRings: true,
        texture: 'saturn',
        missionRelevant: true,
        hasMoon: true
    },
    uranus: {
        name: "Urano",
        type: "Gigante de Gelo",
        size: 35,
        distance: 5500,
        color: 0x87CEEB,
        description: "Um planeta único que gira de lado, com seu eixo de rotação quase paralelo ao plano orbital. Composto principalmente de gelo, água, amônia e metano.",
        habitat: "Inabitável",
        funFact: "Urano tem anéis verticais e gira de lado como uma bola rolando!",
        temperature: "-195°C",
        gravity: "8.7 m/s² (0.89x Terra)",
        composition: "Gelo, Metano, Amônia",
        atmosphere: "83% Hidrogênio, 15% Hélio, 2% Metano",
        rings: "Sim (13 anéis)",
        moons: "27 (Titânia, Oberon)",
        rotationSpeed: 0.012,
        orbitSpeed: 0.0015,
        hasRings: true,
        texture: 'uranus',
        missionRelevant: true,
        hasMoon: true
    },
    neptune: {
        name: "Netuno",
        type: "Gigante de Gelo",
        size: 34,
        distance: 6500,
        color: 0x4169E1,
        description: "O planeta mais ventoso do sistema solar, com ventos que atingem 2.100 km/h. Sua cor azul profunda vem do metano em sua atmosfera.",
        habitat: "Inabitável",
        funFact: "Netuno foi o primeiro planeta encontrado por cálculo matemático antes de ser observado!",
        temperature: "-201°C",
        gravity: "11.2 m/s² (1.14x Terra)",
        composition: "Gelo, Rocha, Metano",
        atmosphere: "80% Hidrogênio, 19% Hélio, 1% Metano",
        rings: "Sim (5 anéis)",
        moons: "14 (Tritão, Nereida)",
        rotationSpeed: 0.011,
        orbitSpeed: 0.001,
        hasAtmosphere: true,
        texture: 'neptune',
        missionRelevant: true,
        hasMoon: true
    }
};

// =============================================================================
// SISTEMA DE MISSÕES COMPLETO
// =============================================================================

const MissionSystem = {
    missions: {
        exploration: {
            id: "exploration",
            title: "🌍 Exploração Inicial",
            description: "Visite e descubra 5 planetas diferentes do Sistema Solar",
            target: 5,
            reward: 150,
            type: "visit",
            xp: 100,
            icon: "globe-americas",
            completed: false,
            progress: 0
        },
        samples: {
            id: "samples",
            title: "🧪 Coleta Científica",
            description: "Colete amostras de 7 corpos celestes diferentes",
            target: 7,
            reward: 300,
            type: "collect",
            xp: 200,
            icon: "vial",
            completed: false,
            progress: 0
        },
        photography: {
            id: "photography",
            title: "📸 Fotógrafo Espacial",
            description: "Capture fotos de todos os 8 planetas do sistema solar",
            target: 8,
            reward: 500,
            type: "photo",
            xp: 300,
            icon: "camera",
            completed: false,
            progress: 0
        },
        complete: {
            id: "complete",
            title: "🚀 Explorador Mestre",
            description: "Descubra todos os planetas e complete sua missão principal",
            target: 8,
            reward: 1000,
            type: "discover",
            xp: 500,
            icon: "trophy",
            completed: false,
            progress: 0
        }
    },

    // Inicializar sistema de missões
    initialize() {
        console.log("🎯 Sistema de Missões Inicializado");
        this.loadProgress();
    },

    // Atualizar progresso da missão
    updateProgress(missionId, amount = 1) {
        if (this.missions[missionId] && !this.missions[missionId].completed) {
            this.missions[missionId].progress += amount;
            
            // Verificar se missão foi completada
            if (this.missions[missionId].progress >= this.missions[missionId].target) {
                this.completeMission(missionId);
            }
            
            this.saveProgress();
            this.updateUI();
            return true;
        }
        return false;
    },

    // Completar missão
    completeMission(missionId) {
        const mission = this.missions[missionId];
        if (mission && !mission.completed) {
            mission.completed = true;
            mission.progress = mission.target;
            
            // Conceder recompensa
            GameState.player.xp += mission.xp;
            GameState.player.credits += mission.reward;
            
            // Mostrar notificação
            this.showMissionComplete(mission);
            
            // Verificar level up
            this.checkLevelUp();
            
            this.saveProgress();
            this.updateUI();
            
            console.log(`🎉 Missão completada: ${mission.title}`);
            return true;
        }
        return false;
    },

    // Mostrar notificação de missão completa
    showMissionComplete(mission) {
        const notification = {
            type: "success",
            title: "🎊 Missão Concluída!",
            message: `${mission.title}\nRecompensa: +${mission.reward} créditos\nXP: +${mission.xp}`,
            duration: 5000
        };
        NotificationSystem.add(notification);
        
        // Mostrar diálogo do Royal Blue
        DialogueSystem.showDialogue(
            `Incrível! Você completou a missão "${mission.title}"!\n\n` +
            `Sua dedicação à exploração espacial é inspiradora! ` +
            `Continue assim, explorador! 🚀`,
            [
                { text: "Ver Recompensas", action: () => this.showRewards(mission) },
                { text: "Próxima Missão", action: () => DialogueSystem.closeDialogue() }
            ]
        );
    },

    // Mostrar recompensas
    showRewards(mission) {
        DialogueSystem.showDialogue(
            `🏆 Recompensas da Missão:\n\n` +
            `💰 Créditos: +${mission.reward}\n` +
            `⭐ XP: +${mission.xp}\n` +
            `📈 Progresso: ${this.getOverallProgress()}%\n\n` +
            `Seu nível atual: ${GameState.player.level}`,
            [
                { text: "Continuar Explorando", action: () => DialogueSystem.closeDialogue() }
            ]
        );
    },

    // Verificar level up
    checkLevelUp() {
        const xpNeeded = GameState.player.level * GameConfig.BASE_XP;
        if (GameState.player.xp >= xpNeeded) {
            GameState.player.level++;
            GameState.player.xp -= xpNeeded;
            
            NotificationSystem.add({
                type: "success",
                title: "⭐ Level Up!",
                message: `Parabéns! Você alcançou o nível ${GameState.player.level}!`,
                duration: 4000
            });
        }
    },

    // Obter progresso geral
    getOverallProgress() {
        const totalMissions = Object.keys(this.missions).length;
        const completedMissions = Object.values(this.missions).filter(m => m.completed).length;
        return Math.round((completedMissions / totalMissions) * 100);
    },

    // Atualizar interface
    updateUI() {
        // Atualizar HUD
        const overallProgress = this.getOverallProgress();
        document.getElementById('mission-progress').textContent = `${overallProgress}% Completo`;
        document.getElementById('mission-progress-bar').style.width = `${overallProgress}%`;
        
        // Atualizar menu principal
        const discoveredCount = GameState.discoveredPlanets.size;
        document.getElementById('menu-discovered').textContent = `${discoveredCount}/8`;
        
        const completedMissions = Object.values(this.missions).filter(m => m.completed).length;
        document.getElementById('menu-missions').textContent = `${completedMissions}/4`;
    },

    // Salvar progresso
    saveProgress() {
        const saveData = {
            missions: this.missions,
            timestamp: Date.now()
        };
        localStorage.setItem('royalBlue_missions', JSON.stringify(saveData));
    },

    // Carregar progresso
    loadProgress() {
        try {
            const saved = localStorage.getItem('royalBlue_missions');
            if (saved) {
                const data = JSON.parse(saved);
                Object.keys(data.missions).forEach(missionId => {
                    if (this.missions[missionId]) {
                        Object.assign(this.missions[missionId], data.missions[missionId]);
                    }
                });
                console.log("📁 Progresso de missões carregado");
            }
        } catch (error) {
            console.error("Erro ao carregar missões:", error);
        }
    }
};

// =============================================================================
// SISTEMA DE DIÁLOGOS E ASSISTENTE ROYAL BLUE
// =============================================================================

const DialogueSystem = {
    currentDialogue: null,
    isActive: false,

    dialogues: {
        greetings: [
            "Olá, explorador! Bem-vindo ao nosso sistema solar completo! 🌟",
            "Pronto para explorar todos os 8 planetas? Vamos começar! 🚀",
            "Nossa missão: descobrir os segredos de Mercúrio até Netuno! ✨",
            "O universo é vasto e cheio de maravilhas. Vamos explorar juntos! 🌌"
        ],
        
        planetDiscovery: [
            "Uau! Mais um planeta descoberto! Vamos estudá-lo! 🔍",
            "Incrível! O sistema solar está se revelando para nós! 🌍",
            "Descoberta fantástica! Cada planeta é único e especial! 📖",
            "Maravilhoso! Mais um mundo para nosso diário de bordo! 🪐"
        ],
        
        missionProgress: [
            "Excelente trabalho! Estamos mais perto de completar nossa missão! 🎯",
            "Cada descoberta nos aproxima do conhecimento total do sistema solar! 🔭",
            "Sua dedicação à ciência é admirável! Continue assim! 👨‍🚀"
        ],
        
        encouragement: [
            "Não desista! O universo tem muitos segredos para revelar! 💫",
            "Lembre-se: cada grande explorador começou com uma única descoberta! 🌠",
            "Sua curiosidade é sua maior ferramenta! Use-a bem! 🧠"
        ]
    },

    // Mostrar diálogo
    showDialogue(message, options = []) {
        this.isActive = true;
        this.currentDialogue = { message, options };
        
        document.getElementById('dialogue-text').textContent = message;
        const optionsContainer = document.getElementById('dialogue-options');
        optionsContainer.innerHTML = '';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'dialogue-option';
            button.textContent = option.text;
            button.addEventListener('click', () => {
                AudioManager.playSound('click');
                if (option.action) option.action();
                this.closeDialogue();
            });
            optionsContainer.appendChild(button);
        });
        
        document.getElementById('dialogue-box').classList.remove('hidden');
        AudioManager.playSound('click');
    },

    // Fechar diálogo
    closeDialogue() {
        this.isActive = false;
        this.currentDialogue = null;
        document.getElementById('dialogue-box').classList.add('hidden');
    },

    // Mostrar diálogo aleatório
    showRandomDialogue(type) {
        const messages = this.dialogues[type];
        if (!messages || messages.length === 0) return;
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        this.showDialogue(randomMessage, [
            { text: "Entendido!", action: () => {} }
        ]);
    },

    // Diálogo educativo sobre planeta
    showPlanetEducation(planetData) {
        const educationalFacts = [
            `Sabia que ${planetData.funFact}`,
            `Curiosidade: ${planetData.funFact}`,
            `Fato interessante: ${planetData.funFact}`
        ];
        
        const randomFact = educationalFacts[Math.floor(Math.random() * educationalFacts.length)];
        
        this.showDialogue(
            `📚 Educação Cósmica - ${planetData.name}\n\n` +
            `${randomFact}\n\n` +
            `Deseja aprender mais sobre ${planetData.name}?`,
            [
                { 
                    text: "Estudar Planeta", 
                    action: () => this.showPlanetAnalysis(planetData) 
                },
                { 
                    text: "Quiz do Planeta", 
                    action: () => QuizSystem.startPlanetQuiz(planetData) 
                },
                { 
                    text: "Continuar Explorando", 
                    action: () => {} 
                }
            ]
        );
    },

    // Análise detalhada do planeta
    showPlanetAnalysis(planetData) {
        this.showDialogue(
            `🔍 Análise Científica - ${planetData.name}\n\n` +
            `Tipo: ${planetData.type}\n` +
            `Diâmetro: ${(planetData.size * 2).toFixed(0)} unidades\n` +
            `Temperatura: ${planetData.temperature}\n` +
            `Gravidade: ${planetData.gravity}\n` +
            `Atmosfera: ${planetData.atmosphere}\n\n` +
            `${planetData.description}`,
            [
                { text: "Coletar Amostras", action: () => ScienceSystem.collectSample(planetData) },
                { text: "Fotografar", action: () => PhotoSystem.takePhoto(planetData) },
                { text: "Voltar", action: () => this.showPlanetEducation(planetData) }
            ]
        );
    }
};

// =============================================================================
// SISTEMA DE NOTIFICAÇÕES
// =============================================================================

const NotificationSystem = {
    notifications: [],
    container: null,

    initialize() {
        this.container = document.getElementById('notification-center');
        if (!this.container) {
            console.error("Container de notificações não encontrado!");
            return;
        }
    },

    add(notification) {
        const id = Date.now();
        const notificationElement = document.createElement('div');
        notificationElement.className = `notification ${notification.type || 'info'}`;
        notificationElement.innerHTML = `
            <div class="notification-header">
                <i class="fas fa-${this.getIcon(notification.type)}"></i>
                <span>${notification.title}</span>
            </div>
            <div class="notification-message">${notification.message}</div>
        `;

        this.container.appendChild(notificationElement);
        
        // Remover automaticamente após o tempo especificado
        setTimeout(() => {
            if (notificationElement.parentNode) {
                notificationElement.remove();
            }
        }, notification.duration || 3000);

        // Efeito sonoro
        AudioManager.playSound('discovery');
    },

    getIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            danger: 'exclamation-circle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
};

// =============================================================================
// SISTEMA CIENTÍFICO E COLETA
// =============================================================================

const ScienceSystem = {
    samples: [],
    analyzedPlanets: new Set(),

    initialize() {
        this.loadSamples();
    },

    // Coletar amostra de planeta
    collectSample(planetData) {
        if (this.analyzedPlanets.has(planetData.name)) {
            NotificationSystem.add({
                type: "warning",
                title: "🧪 Amostra Já Coletada",
                message: `Você já coletou amostras de ${planetData.name}`,
                duration: 3000
            });
            return;
        }

        // Adicionar amostra
        const sample = {
            id: Date.now(),
            planet: planetData.name,
            type: planetData.type,
            composition: planetData.composition,
            timestamp: Date.now()
        };

        this.samples.push(sample);
        this.analyzedPlanets.add(planetData.name);

        // Atualizar missão
        MissionSystem.updateProgress('samples');

        // Mostrar notificação
        NotificationSystem.add({
            type: "success",
            title: "🧪 Amostra Coletada",
            message: `Amostra de ${planetData.name} adicionada ao banco de dados`,
            duration: 4000
        });

        // Atualizar UI
        this.updateUI();

        // Salvar progresso
        this.saveSamples();

        // Diálogo do Royal Blue
        DialogueSystem.showDialogue(
            `Amostra coletada com sucesso! 🧪\n\n` +
            `Material de ${planetData.name} está sendo analisado...\n` +
            `Composição: ${planetData.composition}`,
            [
                { text: "Ver Amostras", action: () => this.showSamples() },
                { text: "Continuar", action: () => DialogueSystem.closeDialogue() }
            ]
        );
    },

    // Mostrar amostras coletadas
    showSamples() {
        if (this.samples.length === 0) {
            DialogueSystem.showDialogue(
                "Você ainda não coletou nenhuma amostra.\n\nExplore os planetas e use o coletor para obter amostras científicas!",
                [{ text: "Entendido", action: () => DialogueSystem.closeDialogue() }]
            );
            return;
        }

        let samplesText = "🧪 Suas Amostras Científicas:\n\n";
        this.samples.forEach((sample, index) => {
            samplesText += `${index + 1}. ${sample.planet} - ${sample.type}\n`;
        });

        DialogueSystem.showDialogue(
            samplesText,
            [
                { text: "Análise Avançada", action: () => this.showAdvancedAnalysis() },
                { text: "Fechar", action: () => DialogueSystem.closeDialogue() }
            ]
        );
    },

    // Análise avançada
    showAdvancedAnalysis() {
        const analysis = this.performAdvancedAnalysis();
        
        DialogueSystem.showDialogue(
            `🔬 Análise Científica Avançada\n\n` +
            `Total de Amostras: ${this.samples.length}\n` +
            `Planetas Analisados: ${this.analyzedPlanets.size}\n` +
            `Dados Coletados: ${this.getDataQuality()}%\n\n` +
            `Sua contribuição para a ciência é valiosa! 🌟`,
            [
                { text: "Relatório Completo", action: () => this.showFullReport() },
                { text: "Voltar", action: () => this.showSamples() }
            ]
        );
    },

    // Relatório completo
    showFullReport() {
        let report = "📊 Relatório Científico Completo\n\n";
        
        // Agrupar por tipo de planeta
        const byType = {};
        this.samples.forEach(sample => {
            if (!byType[sample.type]) byType[sample.type] = [];
            byType[sample.type].push(sample.planet);
        });

        Object.keys(byType).forEach(type => {
            report += `${type}: ${byType[type].length} amostras\n`;
            report += `  → ${byType[type].join(', ')}\n\n`;
        });

        DialogueSystem.showDialogue(
            report,
            [{ text: "Excelente!", action: () => DialogueSystem.closeDialogue() }]
        );
    },

    // Qualidade dos dados
    getDataQuality() {
        const totalPlanets = Object.keys(PlanetData).length;
        return Math.round((this.analyzedPlanets.size / totalPlanets) * 100);
    },

    // Análise avançada
    performAdvancedAnalysis() {
        return {
            totalSamples: this.samples.length,
            uniquePlanets: this.analyzedPlanets.size,
            dataQuality: this.getDataQuality(),
            scientificValue: this.samples.length * 100
        };
    },

    // Atualizar UI
    updateUI() {
        document.getElementById('resource-count').textContent = `Amostras: ${this.samples.length}`;
    },

    // Salvar amostras
    saveSamples() {
        const saveData = {
            samples: this.samples,
            analyzedPlanets: Array.from(this.analyzedPlanets),
            timestamp: Date.now()
        };
        localStorage.setItem('royalBlue_samples', JSON.stringify(saveData));
    },

    // Carregar amostras
    loadSamples() {
        try {
            const saved = localStorage.getItem('royalBlue_samples');
            if (saved) {
                const data = JSON.parse(saved);
                this.samples = data.samples || [];
                this.analyzedPlanets = new Set(data.analyzedPlanets || []);
                this.updateUI();
            }
        } catch (error) {
            console.error("Erro ao carregar amostras:", error);
        }
    }
};

// =============================================================================
// SISTEMA DE FOTOGRAFIA
// =============================================================================

const PhotoSystem = {
    photos: [],
    photographedPlanets: new Set(),

    initialize() {
        this.loadPhotos();
    },

    // Tirar foto
    takePhoto(planetData) {
        if (this.photographedPlanets.has(planetData.name)) {
            NotificationSystem.add({
                type: "warning",
                title: "📸 Foto Já Capturada",
                message: `Você já fotografou ${planetData.name}`,
                duration: 3000
            });
            return;
        }

        // Criar foto
        const photo = {
            id: Date.now(),
            planet: planetData.name,
            type: planetData.type,
            timestamp: Date.now(),
            quality: this.calculatePhotoQuality(),
            angle: this.getRandomAngle()
        };

        this.photos.push(photo);
        this.photographedPlanets.add(planetData.name);

        // Atualizar missão
        MissionSystem.updateProgress('photography');

        // Efeitos visuais e sonoros
        AudioManager.playSound('photo-sound');
        this.createPhotoEffect();

        // Notificação
        NotificationSystem.add({
            type: "success",
            title: "📸 Foto Capturada",
            message: `Belíssima foto de ${planetData.name}!`,
            duration: 4000
        });

        // Atualizar UI
        this.updateUI();

        // Salvar
        this.savePhotos();

        // Diálogo
        DialogueSystem.showDialogue(
            `Foto espacial incrível! 📸\n\n` +
            `${planetData.name} em todo seu esplendor!\n` +
            `Qualidade da foto: ${photo.quality}%\n` +
            `Ângulo: ${photo.angle}`,
            [
                { text: "Ver Álbum", action: () => this.showAlbum() },
                { text: "Continuar", action: () => DialogueSystem.closeDialogue() }
            ]
        );
    },

    // Mostrar álbum
    showAlbum() {
        const albumElement = document.getElementById('photo-album');
        const photoGrid = document.getElementById('photo-grid');
        
        if (!albumElement || !photoGrid) return;

        photoGrid.innerHTML = '';

        if (this.photos.length === 0) {
            photoGrid.innerHTML = '<div class="no-photos">Nenhuma foto capturada ainda</div>';
        } else {
            this.photos.forEach(photo => {
                const photoElement = document.createElement('div');
                photoElement.className = 'photo-item';
                photoElement.innerHTML = `
                    <div class="photo-icon">🪐</div>
                    <div class="photo-info">
                        <strong>${photo.planet}</strong>
                        <small>${new Date(photo.timestamp).toLocaleDateString()}</small>
                    </div>
                `;
                photoGrid.appendChild(photoElement);
            });
        }

        albumElement.classList.remove('hidden');
    },

    // Fechar álbum
    closeAlbum() {
        document.getElementById('photo-album').classList.add('hidden');
    },

    // Calcular qualidade da foto
    calculatePhotoQuality() {
        return Math.floor(Math.random() * 30) + 70; // 70-100%
    },

    // Obter ângulo aleatório
    getRandomAngle() {
        const angles = ["Panorâmica", "Close-up", "Vista Orbital", "Detalhe de Superfície"];
        return angles[Math.floor(Math.random() * angles.length)];
    },

    // Efeito visual de foto
    createPhotoEffect() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: white;
            opacity: 0.8;
            z-index: 1000;
            pointer-events: none;
        `;
        document.body.appendChild(flash);

        setTimeout(() => {
            flash.style.transition = 'opacity 0.3s ease';
            flash.style.opacity = '0';
            setTimeout(() => flash.remove(), 300);
        }, 100);
    },

    // Atualizar UI
    updateUI() {
        document.getElementById('photo-count').textContent = `Fotos: ${this.photos.length}`;
    },

    // Salvar fotos
    savePhotos() {
        const saveData = {
            photos: this.photos,
            photographedPlanets: Array.from(this.photographedPlanets),
            timestamp: Date.now()
        };
        localStorage.setItem('royalBlue_photos', JSON.stringify(saveData));
    },

    // Carregar fotos
    loadPhotos() {
        try {
            const saved = localStorage.getItem('royalBlue_photos');
            if (saved) {
                const data = JSON.parse(saved);
                this.photos = data.photos || [];
                this.photographedPlanets = new Set(data.photographedPlanets || []);
                this.updateUI();
            }
        } catch (error) {
            console.error("Erro ao carregar fotos:", error);
        }
    }
};

// =============================================================================
// SISTEMA DE QUIZ EDUCATIVO
// =============================================================================

const QuizSystem = {
    currentQuiz: null,
    currentQuestion: 0,
    score: 0,

    quizzes: {
        solar_system: [
            {
                question: "Qual é o maior planeta do sistema solar?",
                options: ["Terra", "Júpiter", "Saturno", "Netuno"],
                correct: 1,
                explanation: "Júpiter é o maior planeta, com diâmetro de 142.984 km!"
            },
            {
                question: "Qual planeta é conhecido como 'Planeta Vermelho'?",
                options: ["Vênus", "Marte", "Júpiter", "Mercúrio"],
                correct: 1,
                explanation: "Marte é chamado de Planeta Vermelho devido ao óxido de ferro em sua superfície."
            }
        ]
    },

    // Iniciar quiz do planeta
    startPlanetQuiz(planetData) {
        const planetQuiz = this.generatePlanetQuiz(planetData);
        this.currentQuiz = planetQuiz;
        this.currentQuestion = 0;
        this.score = 0;
        
        this.showQuizScreen();
        this.showQuestion();
    },

    // Gerar quiz específico do planeta
    generatePlanetQuiz(planetData) {
        return [
            {
                question: `Qual é o tipo de ${planetData.name}?`,
                options: ["Planeta Rochoso", "Gigante Gasoso", "Gigante de Gelo", "Planeta Anão"],
                correct: this.getPlanetTypeIndex(planetData.type),
                explanation: `${planetData.name} é classificado como ${planetData.type}.`
            },
            {
                question: `Quantas luas ${planetData.name} possui?`,
                options: ["0", "1", "2", planetData.moons.split(" ")[0]],
                correct: 3,
                explanation: `${planetData.name} possui ${planetData.moons}.`
            },
            {
                question: `Qual é a temperatura média em ${planetData.name}?`,
                options: ["15°C", "-63°C", planetData.temperature, "-200°C"],
                correct: 2,
                explanation: `A temperatura em ${planetData.name} é ${planetData.temperature}.`
            }
        ];
    },

    getPlanetTypeIndex(type) {
        const types = ["Planeta Rochoso", "Gigante Gasoso", "Gigante de Gelo"];
        if (type.includes("Rochoso")) return 0;
        if (type.includes("Gasoso")) return 1;
        if (type.includes("Gelo")) return 2;
        return 0;
    },

    // Mostrar tela de quiz
    showQuizScreen() {
        document.getElementById('quiz-screen').classList.remove('hidden');
    },

    // Mostrar questão
    showQuestion() {
        if (!this.currentQuiz || this.currentQuestion >= this.currentQuiz.length) {
            this.finishQuiz();
            return;
        }

        const question = this.currentQuiz[this.currentQuestion];
        const progress = `Pergunta ${this.currentQuestion + 1}/${this.currentQuiz.length}`;

        document.getElementById('quiz-progress').textContent = progress;
        document.getElementById('quiz-question').textContent = question.question;

        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'quiz-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.checkAnswer(index));
            optionsContainer.appendChild(optionElement);
        });

        // Esconder botões de navegação
        document.getElementById('next-question').classList.add('hidden');
        document.getElementById('finish-quiz').classList.add('hidden');
    },

    // Verificar resposta
    checkAnswer(selectedIndex) {
        const question = this.currentQuiz[this.currentQuestion];
        const options = document.querySelectorAll('.quiz-option');

        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
            option.style.pointerEvents = 'none';
        });

        if (selectedIndex === question.correct) {
            this.score++;
            AudioManager.playSound('discovery');
        } else {
            AudioManager.playSound('click');
        }

        // Mostrar botão de próxima pergunta
        const nextButton = document.getElementById('next-question');
        nextButton.classList.remove('hidden');
        nextButton.onclick = () => this.nextQuestion();
    },

    // Próxima questão
    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < this.currentQuiz.length) {
            this.showQuestion();
        } else {
            this.finishQuiz();
        }
    },

    // Finalizar quiz
    finishQuiz() {
        const scorePercent = Math.round((this.score / this.currentQuiz.length) * 100);
        
        let message, title;
        if (scorePercent >= 80) {
            title = "🎉 Excelente!";
            message = `Você acertou ${this.score} de ${this.currentQuiz.length} questões!\nSeu conhecimento é impressionante!`;
        } else if (scorePercent >= 60) {
            title = "👍 Bom Trabalho!";
            message = `Você acertou ${this.score} de ${this.currentQuiz.length} questões!\nContinue aprendendo!`;
        } else {
            title = "📚 Continue Estudando!";
            message = `Você acertou ${this.score} de ${this.currentQuiz.length} questões.\nA prática leva à perfeição!`;
        }

        DialogueSystem.showDialogue(
            `${title}\n\n${message}\n\nPontuação: ${scorePercent}%`,
            [
                { 
                    text: "Ver Explicações", 
                    action: () => this.showExplanations() 
                },
                { 
                    text: "Novo Quiz", 
                    action: () => {
                        this.closeQuiz();
                        DialogueSystem.closeDialogue();
                    }
                }
            ]
        );

        this.closeQuiz();
    },

    // Mostrar explicações
    showExplanations() {
        let explanations = "📚 Explicações das Respostas:\n\n";
        
        this.currentQuiz.forEach((question, index) => {
            explanations += `Pergunta ${index + 1}: ${question.explanation}\n\n`;
        });

        DialogueSystem.showDialogue(
            explanations,
            [{ text: "Obrigado!", action: () => DialogueSystem.closeDialogue() }]
        );
    },

    // Fechar quiz
    closeQuiz() {
        document.getElementById('quiz-screen').classList.add('hidden');
        this.currentQuiz = null;
        this.currentQuestion = 0;
        this.score = 0;
    }
};

// =============================================================================
// SISTEMA DE ÁUDIO
// =============================================================================

const AudioManager = {
    sounds: {},
    musicEnabled: true,
    sfxEnabled: true,
    masterVolume: 1.0,

    async loadSounds() {
        this.sounds = {
            background: document.getElementById('background-music'),
            discovery: document.getElementById('discovery-sound'),
            click: document.getElementById('click-sound'),
            boost: document.getElementById('boost-sound'),
            scan: document.getElementById('scan-sound'),
            photo: document.getElementById('photo-sound')
        };

        // Configurar volumes iniciais
        this.sounds.background.volume = GameConfig.MUSIC_VOLUME * this.masterVolume;
        this.sounds.discovery.volume = GameConfig.SFX_VOLUME * this.masterVolume;
        this.sounds.click.volume = GameConfig.SFX_VOLUME * this.masterVolume;
        this.sounds.boost.volume = GameConfig.SFX_VOLUME * this.masterVolume;
        this.sounds.scan.volume = GameConfig.SFX_VOLUME * this.masterVolume;
        this.sounds.photo.volume = GameConfig.SFX_VOLUME * this.masterVolume;

        console.log("🔊 Sistema de Áudio Carregado");
    },

    playSound(soundName, volume = null) {
        if (!this.sfxEnabled || !this.sounds[soundName]) return;
        
        try {
            const sound = this.sounds[soundName].cloneNode();
            if (volume !== null) {
                sound.volume = volume * this.masterVolume;
            }
            sound.play().catch(e => {
                // Ignorar erros de autoplay
                if (e.name !== 'NotAllowedError') {
                    console.log('Audio play failed:', e);
                }
            });
        } catch (error) {
            console.log('Audio error:', error);
        }
    },

    playBackgroundMusic() {
        if (!this.musicEnabled || !this.sounds.background) return;
        
        try {
            this.sounds.background.play().catch(e => {
                console.log('Background music failed:', e);
            });
        } catch (error) {
            console.log('Music error:', error);
        }
    },

    stopBackgroundMusic() {
        if (this.sounds.background) {
            this.sounds.background.pause();
            this.sounds.background.currentTime = 0;
        }
    },

    toggleMusic() {
        this.musicEnabled = !this.musicEnabled;
        if (this.musicEnabled) {
            this.playBackgroundMusic();
        } else {
            this.stopBackgroundMusic();
        }
        this.saveSettings();
        return this.musicEnabled;
    },

    toggleSFX() {
        this.sfxEnabled = !this.sfxEnabled;
        this.saveSettings();
        return this.sfxEnabled;
    },

    setMasterVolume(volume) {
        this.masterVolume = volume / 100;
        
        // Atualizar volumes de todos os sons
        Object.values(this.sounds).forEach(sound => {
            if (sound) {
                const baseVolume = sound === this.sounds.background ? 
                    GameConfig.MUSIC_VOLUME : GameConfig.SFX_VOLUME;
                sound.volume = baseVolume * this.masterVolume;
            }
        });
        
        this.saveSettings();
    },

    saveSettings() {
        const settings = {
            musicEnabled: this.musicEnabled,
            sfxEnabled: this.sfxEnabled,
            masterVolume: this.masterVolume * 100
        };
        localStorage.setItem('royalBlue_audio', JSON.stringify(settings));
    },

    loadSettings() {
        try {
            const saved = localStorage.getItem('royalBlue_audio');
            if (saved) {
                const settings = JSON.parse(saved);
                this.musicEnabled = settings.musicEnabled !== undefined ? settings.musicEnabled : true;
                this.sfxEnabled = settings.sfxEnabled !== undefined ? settings.sfxEnabled : true;
                this.masterVolume = settings.masterVolume ? settings.masterVolume / 100 : 1.0;
                
                // Aplicar configurações carregadas
                if (!this.musicEnabled) {
                    this.stopBackgroundMusic();
                }
            }
        } catch (error) {
            console.error("Erro ao carregar configurações de áudio:", error);
        }
    }
};

// CONTINUA NO PRÓXIMO COMENTÁRIO...
// =============================================================================
// ESTADO GLOBAL DO JOGO
// =============================================================================

class GameState {
    constructor() {
        this.currentScreen = 'loading';
        this.player = {
            position: { x: 0, y: 0, z: 3000 },
            rotation: { x: 0, y: 0, z: 0 },
            health: GameConfig.MAX_HEALTH,
            oxygen: GameConfig.MAX_OXYGEN,
            velocity: { x: 0, y: 0, z: 0 },
            isBoosting: false,
            xp: 0,
            level: 1,
            credits: 0
        };
        this.missions = {};
        this.discoveredPlanets = new Set();
        this.currentTool = 'scanner';
        this.isInDialogue = false;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.textureLoader = new THREE.TextureLoader();
        this.planets = {};
    }

    // Salvar estado do jogo
    save() {
        const saveData = {
            player: this.player,
            discoveredPlanets: Array.from(this.discoveredPlanets),
            missions: MissionSystem.missions,
            samples: ScienceSystem.samples,
            photos: PhotoSystem.photos,
            analyzedPlanets: Array.from(ScienceSystem.analyzedPlanets),
            photographedPlanets: Array.from(PhotoSystem.photographedPlanets),
            timestamp: Date.now(),
            version: '2.0'
        };
        
        localStorage.setItem('royalBlue_save', JSON.stringify(saveData));
        console.log('💾 Jogo salvo com sucesso!');
        return true;
    }

    // Carregar estado do jogo
    load() {
        try {
            const saved = localStorage.getItem('royalBlue_save');
            if (!saved) return false;

            const data = JSON.parse(saved);
            
            // Carregar dados básicos
            this.player = { ...this.player, ...data.player };
            this.discoveredPlanets = new Set(data.discoveredPlanets || []);
            
            // Carregar sistemas
            if (data.missions) {
                Object.keys(data.missions).forEach(missionId => {
                    if (MissionSystem.missions[missionId]) {
                        Object.assign(MissionSystem.missions[missionId], data.missions[missionId]);
                    }
                });
            }
            
            if (data.samples) ScienceSystem.samples = data.samples;
            if (data.photos) PhotoSystem.photos = data.photos;
            if (data.analyzedPlanets) ScienceSystem.analyzedPlanets = new Set(data.analyzedPlanets);
            if (data.photographedPlanets) PhotoSystem.photographedPlanets = new Set(data.photographedPlanets);
            
            // Atualizar UIs
            MissionSystem.updateUI();
            ScienceSystem.updateUI();
            PhotoSystem.updateUI();
            
            console.log('📁 Jogo carregado com sucesso!');
            return true;
        } catch (error) {
            console.error('Erro ao carregar jogo:', error);
            return false;
        }
    }

    // Resetar jogo
    reset() {
        if (confirm('Tem certeza que deseja reiniciar o jogo? Todo o progresso será perdido!')) {
            localStorage.removeItem('royalBlue_save');
            localStorage.removeItem('royalBlue_missions');
            localStorage.removeItem('royalBlue_samples');
            localStorage.removeItem('royalBlue_photos');
            location.reload();
        }
    }
}

// Instância global do estado do jogo
const gameState = new GameState();

// =============================================================================
// SISTEMA DE TEXTURAS DOS PLANETAS
// =============================================================================

const PlanetTextures = {
    mercury: {
        surface: 'https://threejs.org/examples/textures/planets/mercurymap.jpg',
    },
    venus: {
        surface: 'https://threejs.org/examples/textures/planets/venusmap.jpg',
        clouds: 'https://threejs.org/examples/textures/planets/venus_atmosphere.jpg'
    },
    earth: {
        surface: 'https://threejs.org/examples/textures/planets/earthmap1k.jpg',
        clouds: 'https://threejs.org/examples/textures/planets/earthcloudmap.jpg',
        bump: 'https://threejs.org/examples/textures/planets/earthbump1k.jpg'
    },
    mars: {
        surface: 'https://threejs.org/examples/textures/planets/marsmap1k.jpg',
        bump: 'https://threejs.org/examples/textures/planets/marsbump1k.jpg'
    },
    jupiter: {
        surface: 'https://threejs.org/examples/textures/planets/jupitermap.jpg'
    },
    saturn: {
        surface: 'https://threejs.org/examples/textures/planets/saturnmap.jpg',
        rings: 'https://threejs.org/examples/textures/planets/saturnring.png'
    },
    uranus: {
        surface: 'https://threejs.org/examples/textures/planets/uranusmap.jpg'
    },
    neptune: {
        surface: 'https://threejs.org/examples/textures/planets/neptunemap.jpg'
    }
};

// =============================================================================
// JOGO PRINCIPAL - CLASSE SpaceGame
// =============================================================================

class SpaceGame {
    constructor() {
        this.animationId = null;
        this.clock = new THREE.Clock();
        this.init();
    }

    async init() {
        console.log('🚀 Inicializando Royal Blue: Missão Cósmica...');
        
        // Inicializar sistemas
        this.setupEventListeners();
        NotificationSystem.initialize();
        MissionSystem.initialize();
        ScienceSystem.initialize();
        PhotoSystem.initialize();
        await AudioManager.loadSounds();
        AudioManager.loadSettings();
        
        // Iniciar tela de loading
        this.startLoadingScreen();
    }

    setupEventListeners() {
        // Navegação entre telas
        document.getElementById('start-game').addEventListener('click', () => this.showScreen('game-screen'));
        document.getElementById('continue-game').addEventListener('click', () => this.continueGame());
        document.getElementById('missions-btn').addEventListener('click', () => this.showScreen('missions-screen'));
        document.getElementById('settings-btn').addEventListener('click', () => this.showScreen('settings-screen'));
        document.getElementById('back-to-menu').addEventListener('click', () => this.showScreen('main-menu'));
        document.getElementById('back-to-menu-from-settings').addEventListener('click', () => this.showScreen('main-menu'));
        
        // Configurações
        document.getElementById('toggle-music').addEventListener('click', (e) => this.toggleMusic(e.target));
        document.getElementById('toggle-sfx').addEventListener('click', (e) => this.toggleSFX(e.target));
        document.getElementById('save-game-btn').addEventListener('click', () => this.saveGame());
        document.getElementById('load-game-btn').addEventListener('click', () => this.loadGame());
        document.getElementById('reset-game-btn').addEventListener('click', () => this.resetGame());
        
        // Ferramentas
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectTool(e.target.closest('.tool-btn').dataset.tool));
        });
        
        // Diálogos e interfaces
        document.getElementById('close-dialogue').addEventListener('click', () => this.closeDialogue());
        document.getElementById('map-btn').addEventListener('click', () => this.showSolarSystemMap());
        document.getElementById('close-map').addEventListener('click', () => this.closeMap());
        document.getElementById('close-album').addEventListener('click', () => PhotoSystem.closeAlbum());
        document.getElementById('menu-btn').addEventListener('click', () => this.showScreen('main-menu'));
        
        // Ações científicas
        document.getElementById('collect-sample')?.addEventListener('click', () => this.collectSample());
        document.getElementById('take-photo')?.addEventListener('click', () => this.takePhoto());
        
        // Controles de jogo
        this.setupGameControls();
        this.setupKeyboardControls();
        
        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Prevenir contexto menu
        document.addEventListener('contextmenu', (e) => e.preventDefault());
        
        console.log('🎮 Event listeners configurados');
    }

    setupGameControls() {
        const controls = {
            'move-forward': { axis: 'z', direction: -1 },
            'move-back': { axis: 'z', direction: 1 },
            'move-left': { axis: 'x', direction: -1 },
            'move-right': { axis: 'x', direction: 1 },
            'move-up': { axis: 'y', direction: 1 },
            'move-down': { axis: 'y', direction: -1 }
        };

        Object.entries(controls).forEach(([id, config]) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('mousedown', () => this.startMovement(config));
                btn.addEventListener('mouseup', () => this.stopMovement(config));
                btn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    this.startMovement(config);
                });
                btn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    this.stopMovement(config);
                });
            }
        });

        document.getElementById('boost-btn').addEventListener('click', () => this.toggleBoost());
        document.getElementById('interact-btn').addEventListener('click', () => this.interact());
    }

    setupKeyboardControls() {
        document.addEventListener('keydown', (e) => {
            if (gameState.isInDialogue) return;
            
            switch(e.key.toLowerCase()) {
                case 'w':
                case 'arrowup':
                    this.startMovement({ axis: 'z', direction: -1 });
                    break;
                case 's':
                case 'arrowdown':
                    this.startMovement({ axis: 'z', direction: 1 });
                    break;
                case 'a':
                case 'arrowleft':
                    this.startMovement({ axis: 'x', direction: -1 });
                    break;
                case 'd':
                case 'arrowright':
                    this.startMovement({ axis: 'x', direction: 1 });
                    break;
                case 'q':
                    this.startMovement({ axis: 'y', direction: 1 });
                    break;
                case 'e':
                    this.startMovement({ axis: 'y', direction: -1 });
                    break;
                case ' ':
                    e.preventDefault();
                    this.toggleBoost();
                    break;
                case 'f':
                    this.interact();
                    break;
                case 'm':
                    this.showSolarSystemMap();
                    break;
                case '1':
                    this.selectTool('scanner');
                    break;
                case '2':
                    this.selectTool('collector');
                    break;
                case '3':
                    this.selectTool('camera');
                    break;
                case '4':
                    this.selectTool('analyzer');
                    break;
                case 'escape':
                    this.showScreen('main-menu');
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch(e.key.toLowerCase()) {
                case 'w':
                case 'arrowup':
                case 's':
                case 'arrowdown':
                    this.stopMovement({ axis: 'z', direction: 0 });
                    break;
                case 'a':
                case 'arrowleft':
                case 'd':
                case 'arrowright':
                    this.stopMovement({ axis: 'x', direction: 0 });
                    break;
                case 'q':
                case 'e':
                    this.stopMovement({ axis: 'y', direction: 0 });
                    break;
            }
        });
    }

    startLoadingScreen() {
        let progress = 0;
        const loadingSteps = [
            "Carregando universo...",
            "Inicializando sistemas...",
            "Preparando planetas...",
            "Configurando missões...",
            "Quase pronto..."
        ];

        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                
                document.getElementById('loading-text').textContent = "Missão Pronta!";
                setTimeout(() => {
                    this.showScreen('main-menu');
                    AudioManager.playBackgroundMusic();
                }, 1000);
            }
            
            document.getElementById('loading-progress').style.width = `${progress}%`;
            
            // Atualizar texto a cada 20%
            const stepIndex = Math.floor(progress / 20);
            if (stepIndex < loadingSteps.length) {
                document.getElementById('loading-text').textContent = loadingSteps[stepIndex];
            }
        }, 200);
    }

    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        
        document.getElementById(screenName).classList.remove('hidden');
        gameState.currentScreen = screenName;
        
        if (screenName === 'game-screen') {
            this.initGame();
        }
        
        if (screenName === 'main-menu') {
            this.updateMenuStats();
            DialogueSystem.showRandomDialogue('greetings');
        }
        
        if (screenName === 'missions-screen') {
            this.updateMissionsScreen();
        }
        
        AudioManager.playSound('click');
    }

    updateMenuStats() {
        const discoveredCount = gameState.discoveredPlanets.size;
        document.getElementById('menu-discovered').textContent = `${discoveredCount}/8`;
        
        const completedMissions = Object.values(MissionSystem.missions).filter(m => m.completed).length;
        document.getElementById('menu-missions').textContent = `${completedMissions}/4`;
        
        // Atualizar diálogo baseado no progresso
        const dialogueElement = document.getElementById('menu-dialogue');
        if (discoveredCount === 8) {
            dialogueElement.textContent = "Incrível! Você descobriu todos os planetas! Você é um verdadeiro explorador espacial! 🎉";
        } else if (discoveredCount > 0) {
            dialogueElement.textContent = `Voltou, explorador! Já descobrimos ${discoveredCount} de 8 planetas. Vamos continuar! 🚀`;
        } else {
            dialogueElement.textContent = "Olá, explorador! Pronto para nossa aventura cósmica? O universo nos espera!";
        }
    }

    continueGame() {
        if (gameState.load()) {
            this.showScreen('game-screen');
            DialogueSystem.showDialogue(
                "Missão retomada! Continuemos nossa exploração cósmica!",
                [{ text: "Vamos lá!", action: () => DialogueSystem.closeDialogue() }]
            );
        } else {
            DialogueSystem.showDialogue(
                "Nenhum jogo salvo encontrado. Inicie uma nova missão!",
                [{ text: "Iniciar Nova Missão", action: () => this.showScreen('game-screen') }]
            );
        }
    }

    initGame() {
        console.log('🎮 Inicializando jogo...');
        
        this.initThreeJS();
        this.createCompleteSolarSystem();
        this.startGameLoop();
        
        // Diálogo de boas-vindas
        DialogueSystem.showDialogue(
            "Bem-vindo ao Sistema Solar Completo! 🌌\n\n" +
            "Sua missão: explorar todos os 8 planetas, coletar amostras científicas e " +
            "documentar suas descobertas através de fotos.\n\n" +
            "Use as setas para navegar, ferramentas para interagir e descubra as " +
            "maravilhas do nosso sistema solar!",
            [
                { text: "Iniciar Exploração", action: () => DialogueSystem.closeDialogue() },
                { text: "Ver Tutorial", action: () => this.showTutorial() }
            ]
        );
    }

    showTutorial() {
        DialogueSystem.showDialogue(
            "🎓 Tutorial Rápido:\n\n" +
            "🕹️ Controles:\n" +
            "• WASD/Setas: Mover nave\n" +
            "• Mouse: Olhar ao redor\n" +
            "• Espaço: Propulsão\n" +
            "• F: Interagir\n" +
            "• M: Mapa\n" +
            "• 1-4: Ferramentas\n\n" +
            "🛠️ Ferramentas:\n" +
            "• Scanner: Informações planetárias\n" +
            "• Coletor: Amostras científicas\n" +
            "• Câmera: Fotos espaciais\n" +
            "• Analisador: Dados detalhados",
            [
                { text: "Pronto para Explorar!", action: () => DialogueSystem.closeDialogue() }
            ]
        );
    }

    initThreeJS() {
        try {
            // Cena
            gameState.scene = new THREE.Scene();
            gameState.scene.background = new THREE.Color(0x000011);
            gameState.scene.fog = new THREE.Fog(0x000011, 10000, 20000);
            
            // Câmera
            gameState.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
            gameState.camera.position.set(0, 1000, 5000);
            
            // Renderer
            gameState.renderer = new THREE.WebGLRenderer({ 
                antialias: true,
                alpha: true
            });
            gameState.renderer.setSize(window.innerWidth, window.innerHeight);
            gameState.renderer.shadowMap.enabled = true;
            gameState.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            gameState.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            document.getElementById('universe-3d').appendChild(gameState.renderer.domElement);
            
            // Controles
            gameState.controls = new THREE.OrbitControls(gameState.camera, gameState.renderer.domElement);
            gameState.controls.enableDamping = true;
            gameState.controls.dampingFactor = 0.05;
            gameState.controls.minDistance = 50;
            gameState.controls.maxDistance = 20000;
            gameState.controls.autoRotate = false;
            gameState.controls.screenSpacePanning = false;
            
            // Luzes
            const ambientLight = new THREE.AmbientLight(0x333333, 0.6);
            gameState.scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
            directionalLight.position.set(1000, 1000, 1000);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            gameState.scene.add(directionalLight);
            
            const sunLight = new THREE.PointLight(0xFFD700, 3, 50000);
            sunLight.position.set(0, 0, 0);
            gameState.scene.add(sunLight);
            
            console.log('✨ Engine 3D inicializada');
        } catch (error) {
            console.error('Erro ao inicializar Three.js:', error);
        }
    }

    async createCompleteSolarSystem() {
        console.log('🌌 Criando sistema solar...');
        
        this.createStars();
        this.createSun();
        await this.createAllPlanetsWithOrbits();
        this.createAsteroidBelt();
        this.createDistantStars();
        
        console.log('✅ Sistema solar criado com sucesso!');
    }

    createStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = [];
        const starColors = [];
        
        for (let i = 0; i < GameConfig.STAR_COUNT; i++) {
            const x = (Math.random() - 0.5) * GameConfig.UNIVERSE_SIZE * 2;
            const y = (Math.random() - 0.5) * GameConfig.UNIVERSE_SIZE;
            const z = (Math.random() - 0.5) * GameConfig.UNIVERSE_SIZE * 2;
            starPositions.push(x, y, z);
            
            const color = new THREE.Color();
            color.setHSL(Math.random() * 0.1 + 0.9, 0.3, Math.random() * 0.5 + 0.5);
            starColors.push(color.r, color.g, color.b);
        }
        
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            size: 2,
            sizeAttenuation: true,
            vertexColors: true,
            transparent: true
        });
        
        const stars = new THREE.Points(starGeometry, starMaterial);
        gameState.scene.add(stars);
    }

    createSun() {
        // Sol principal
        const sunGeometry = new THREE.SphereGeometry(100, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFD700,
            emissive: 0xFF4500,
            emissiveIntensity: 1.0
        });
        
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.position.set(0, 0, 0);
        gameState.scene.add(sun);
        
        // Efeito de corona solar
        const coronaGeometry = new THREE.SphereGeometry(110, 32, 32);
        const coronaMaterial = new THREE.MeshBasicMaterial({
            color: 0xFF4500,
            transparent: true,
            opacity: 0.3,
            side: THREE.BackSide
        });
        
        const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);
        sun.add(corona);
        
        // Erupções solares
        this.createSolarFlares(sun);
    }

    createSolarFlares(sun) {
        const flareCount = 12;
        for (let i = 0; i < flareCount; i++) {
            const angle = (i / flareCount) * Math.PI * 2;
            const flareLength = 60 + Math.random() * 60;
            const flareGeometry = new THREE.ConeGeometry(25, flareLength, 8);
            const flareMaterial = new THREE.MeshBasicMaterial({
                color: 0xFF6347,
                transparent: true,
                opacity: 0.4
            });
            
            const flare = new THREE.Mesh(flareGeometry, flareMaterial);
            flare.rotation.x = Math.PI / 2;
            flare.position.set(
                Math.cos(angle) * 95,
                Math.sin(angle) * 95,
                0
            );
            flare.rotation.z = angle;
            
            sun.add(flare);
        }
    }

    async createAllPlanetsWithOrbits() {
        const planetOrder = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        
        for (const planetId of planetOrder) {
            const data = PlanetData[planetId];
            await this.createPlanetWithOrbit(planetId, data);
        }
    }

    async createPlanetWithOrbit(planetId, data) {
        return new Promise((resolve) => {
            // Criar órbita visual
            this.createOrbitRing(data.distance);
            
            // Criar planeta
            this.createPlanet(planetId, data).then(() => {
                resolve();
            });
        });
    }

    createOrbitRing(distance) {
        const orbitGeometry = new THREE.RingGeometry(distance - 5, distance + 5, 128);
        const orbitMaterial = new THREE.MeshBasicMaterial({
            color: 0x444444,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.1
        });
        
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 2;
        gameState.scene.add(orbit);
    }

    async createPlanet(planetId, data) {
        return new Promise((resolve) => {
            const textureData = PlanetTextures[data.texture];
            
            // Material fallback
            const fallbackMaterial = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.8,
                metalness: 0.2,
                emissive: data.hasAtmosphere ? new THREE.Color(data.color).multiplyScalar(0.1) : 0x000000
            });
            
            if (textureData && textureData.surface) {
                gameState.textureLoader.load(textureData.surface, (texture) => {
                    const materialConfig = {
                        map: texture,
                        roughness: 0.8,
                        metalness: 0.2
                    };
                    
                    this.finishPlanetCreation(planetId, data, materialConfig, resolve);
                }, undefined, () => {
                    // Fallback se textura não carregar
                    this.finishPlanetCreation(planetId, data, {}, resolve, fallbackMaterial);
                });
            } else {
                this.finishPlanetCreation(planetId, data, {}, resolve, fallbackMaterial);
            }
        });
    }

    finishPlanetCreation(planetId, data, materialConfig, resolve, fallbackMaterial = null) {
        const geometry = new THREE.SphereGeometry(data.size, 64, 64);
        let material;
        
        if (fallbackMaterial) {
            material = fallbackMaterial;
        } else if (Object.keys(materialConfig).length > 0) {
            material = new THREE.MeshStandardMaterial(materialConfig);
        } else {
            material = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.8,
                metalness: 0.2
            });
        }
        
        const planet = new THREE.Mesh(geometry, material);
        
        // Posicionar na órbita
        const angle = Math.random() * Math.PI * 2;
        planet.position.set(
            Math.cos(angle) * data.distance,
            (Math.random() - 0.5) * 50,
            Math.sin(angle) * data.distance
        );
        
        planet.castShadow = true;
        planet.receiveShadow = true;
        
        // Dados do planeta
        planet.userData = {
            type: 'planet',
            id: planetId,
            name: data.name,
            rotationSpeed: data.rotationSpeed,
            orbitSpeed: data.orbitSpeed,
            orbitDistance: data.distance,
            initialAngle: angle,
            ...data
        };
        
        gameState.scene.add(planet);
        gameState.planets[planetId] = planet;
        
        // Adicionar características especiais
        this.addPlanetFeatures(planet, data);
        
        resolve();
    }

    addPlanetFeatures(planet, data) {
        // Anéis para Saturno e Urano
        if (data.hasRings) {
            this.createPlanetRings(planet, data);
        }
        
        // Nuvens para Terra e Vênus
        if (data.hasClouds) {
            this.createCloudLayer(planet, data);
        }
        
        // Atmosfera
        if (data.hasAtmosphere) {
            this.createAtmosphere(planet, data);
        }
        
        // Luas
        if (data.hasMoon) {
            this.createMoons(planet, data);
        }
    }

    createPlanetRings(planet, data) {
        const ringGeometry = new THREE.RingGeometry(data.size * 1.4, data.size * 2.5, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0xF0E68C,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6
        });
        
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        rings.rotation.y = Math.random() * Math.PI;
        planet.add(rings);
    }

    createCloudLayer(planet, data) {
        const cloudGeometry = new THREE.SphereGeometry(data.size * 1.02, 64, 64);
        const cloudMaterial = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });
        
        const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
        planet.add(clouds);
        
        clouds.userData = {
            type: 'clouds',
            rotationSpeed: data.rotationSpeed * 1.5
        };
    }

    createAtmosphere(planet, data) {
        const atmosphereGeometry = new THREE.SphereGeometry(data.size * 1.1, 64, 64);
        const atmosphereMaterial = new THREE.MeshBasicMaterial({
            color: data.color,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide
        });
        
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        planet.add(atmosphere);
    }

    createMoons(planet, data) {
        const moonCount = data.size > 30 ? 4 : (data.size > 20 ? 2 : 1);
        
        for (let i = 0; i < moonCount; i++) {
            const moonSize = data.size * (0.03 + Math.random() * 0.05);
            const moonDistance = data.size * (1.5 + Math.random() * 1.0);
            const moonGeometry = new THREE.SphereGeometry(moonSize, 16, 16);
            const moonMaterial = new THREE.MeshStandardMaterial({
                color: 0x888888,
                roughness: 0.9,
                metalness: 0.1
            });
            
            const moon = new THREE.Mesh(moonGeometry, moonMaterial);
            
            const angle = (i / moonCount) * Math.PI * 2;
            moon.position.set(
                Math.cos(angle) * moonDistance,
                (Math.random() - 0.5) * moonDistance * 0.5,
                Math.sin(angle) * moonDistance
            );
            
            moon.userData = {
                type: 'moon',
                rotationSpeed: 0.005 + Math.random() * 0.01,
                orbitSpeed: 0.003 + Math.random() * 0.005,
                orbitDistance: moonDistance,
                orbitAngle: angle
            };
            
            planet.add(moon);
        }
    }

    createAsteroidBelt() {
        const asteroidCount = 1000;
        const asteroidGeometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        
        const beltDistance = 2800;
        const beltWidth = 500;
        
        for (let i = 0; i < asteroidCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = beltDistance + (Math.random() - 0.5) * beltWidth;
            const height = (Math.random() - 0.5) * 100;
            
            positions.push(
                Math.cos(angle) * distance,
                height,
                Math.sin(angle) * distance
            );
            
            const color = new THREE.Color();
            color.setHSL(0.1, 0.3, 0.3 + Math.random() * 0.4);
            colors.push(color.r, color.g, color.b);
        }
        
        asteroidGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        asteroidGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const asteroidMaterial = new THREE.PointsMaterial({
            size: 2,
            sizeAttenuation: true,
            vertexColors: true
        });
        
        const asteroids = new THREE.Points(asteroidGeometry, asteroidMaterial);
        gameState.scene.add(asteroids);
    }

    createDistantStars() {
        const distantStarGeometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        
        for (let i = 0; i < 2000; i++) {
            const distance = 8000 + Math.random() * 12000;
            const angle = Math.random() * Math.PI * 2;
            const height = (Math.random() - 0.5) * 3000;
            
            positions.push(
                Math.cos(angle) * distance,
                height,
                Math.sin(angle) * distance
            );
            
            const color = new THREE.Color();
            color.setHSL(Math.random(), 0.5, 0.2 + Math.random() * 0.3);
            colors.push(color.r, color.g, color.b);
        }
        
        distantStarGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        distantStarGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const distantStarMaterial = new THREE.PointsMaterial({
            size: 3,
            sizeAttenuation: true,
            vertexColors: true
        });
        
        const distantStars = new THREE.Points(distantStarGeometry, distantStarMaterial);
        gameState.scene.add(distantStars);
    }

    startGameLoop() {
        const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            
            const delta = this.clock.getDelta();
            
            if (gameState.controls) {
                gameState.controls.update();
            }
            
            this.updatePlayerPhysics(delta);
            this.updateSolarSystem(delta);
            this.updateResources(delta);
            this.checkInteractions();
            
            if (gameState.renderer && gameState.scene && gameState.camera) {
                gameState.renderer.render(gameState.scene, gameState.camera);
            }
        };
        
        animate();
        console.log('🎬 Game loop iniciado');
    }

    updateSolarSystem(delta) {
        gameState.scene.children.forEach(object => {
            if (object.userData) {
                // Rotacionar planetas
                if (object.userData.type === 'planet') {
                    // Rotação do planeta
                    object.rotation.y += object.userData.rotationSpeed * delta;
                    
                    // Órbita ao redor do sol
                    if (object.userData.orbitSpeed) {
                        object.userData.initialAngle += object.userData.orbitSpeed * delta;
                        object.position.x = Math.cos(object.userData.initialAngle) * object.userData.orbitDistance;
                        object.position.z = Math.sin(object.userData.initialAngle) * object.userData.orbitDistance;
                    }
                }
                
                // Rotacionar nuvens
                if (object.userData.type === 'clouds') {
                    object.rotation.y += object.userData.rotationSpeed * delta;
                }
                
                // Animar luas
                if (object.userData.type === 'moon') {
                    object.userData.orbitAngle += object.userData.orbitSpeed * delta;
                    object.position.x = Math.cos(object.userData.orbitAngle) * object.userData.orbitDistance;
                    object.position.z = Math.sin(object.userData.orbitAngle) * object.userData.orbitDistance;
                    object.rotation.y += object.userData.rotationSpeed * delta;
                }
            }
        });
    }

    updatePlayerPhysics(delta) {
        const speed = gameState.player.isBoosting ? 
            GameConfig.MOVEMENT_SPEED * GameConfig.BOOST_MULTIPLIER : 
            GameConfig.MOVEMENT_SPEED;
        
        gameState.camera.position.x += gameState.player.velocity.x * speed * delta * 60;
        gameState.camera.position.y += gameState.player.velocity.y * speed * delta * 60;
        gameState.camera.position.z += gameState.player.velocity.z * speed * delta * 60;
        
        gameState.player.position.x = gameState.camera.position.x;
        gameState.player.position.y = gameState.camera.position.y;
        gameState.player.position.z = gameState.camera.position.z;
    }

    updateResources(delta) {
        // Atualizar oxigênio (drena mais rápido com boost)
        const oxygenDrain = gameState.player.isBoosting ? 
            GameConfig.OXYGEN_DRAIN_RATE * 2 : 
            GameConfig.OXYGEN_DRAIN_RATE;
        
        gameState.player.oxygen = Math.max(0, gameState.player.oxygen - oxygenDrain * delta);
        
        // Atualizar saúde (drena se oxigênio baixo)
        if (gameState.player.oxygen <= 20) {
            gameState.player.health = Math.max(0, gameState.player.health - GameConfig.HEALTH_DRAIN_RATE * delta);
        }
        
        // Atualizar UI
        document.getElementById('oxygen-fill').style.width = `${(gameState.player.oxygen / GameConfig.MAX_OXYGEN) * 100}%`;
        document.getElementById('health-fill').style.width = `${(gameState.player.health / GameConfig.MAX_HEALTH) * 100}%`;
        document.getElementById('xp-fill').style.width = `${(gameState.player.xp / (gameState.player.level * GameConfig.BASE_XP)) * 100}%`;
        
        // Game over se saúde zerar
        if (gameState.player.health <= 0) {
            this.gameOver();
        }
    }

    gameOver() {
        DialogueSystem.showDialogue(
            "💀 Game Over\n\n" +
            "Sua saúde chegou a zero devido à falta de oxigênio.\n\n" +
            "Não desista! A exploração espacial requer cuidado e preparo.",
            [
                { 
                    text: "Reiniciar Missão", 
                    action: () => {
                        gameState.player.health = GameConfig.MAX_HEALTH;
                        gameState.player.oxygen = GameConfig.MAX_OXYGEN;
                        DialogueSystem.closeDialogue();
                    }
                },
                { 
                    text: "Voltar ao Menu", 
                    action: () => this.showScreen('main-menu')
                }
            ]
        );
    }

    checkInteractions() {
        let nearestPlanet = null;
        let nearestDistance = Infinity;
        let nearestPlanetData = null;

        gameState.scene.children.forEach(object => {
            if (object.userData && object.userData.type === 'planet') {
                const distance = gameState.camera.position.distanceTo(object.position);
                
                if (distance < object.userData.size * 15) {
                    if (!gameState.discoveredPlanets.has(object.userData.id)) {
                        this.discoverPlanet(object.userData.id, object.userData);
                    }
                    
                    if (distance < nearestDistance) {
                        nearestDistance = distance;
                        nearestPlanet = object;
                        nearestPlanetData = object.userData;
                    }
                }
            }
        });

        // Atualizar scanner se um planeta está próximo
        if (nearestPlanet && nearestDistance < nearestPlanetData.size * 25) {
            this.showPlanetScanner(nearestPlanetData, nearestDistance);
            
            // Mostrar analisador se ferramenta ativa
            if (gameState.currentTool === 'analyzer') {
                this.showScienceAnalyzer(nearestPlanetData);
            } else {
                document.getElementById('science-analyzer').classList.add('hidden');
            }
        } else {
            document.getElementById('planet-scanner').classList.add('hidden');
            document.getElementById('science-analyzer').classList.add('hidden');
        }
    }

    discoverPlanet(planetId, planetData) {
        gameState.discoveredPlanets.add(planetId);
        
        // Atualizar missões
        MissionSystem.updateProgress('exploration');
        MissionSystem.updateProgress('complete');
        
        // Efeitos visuais
        this.createDiscoveryEffect(planetData);
        
        // Notificação
        NotificationSystem.add({
            type: "success",
            title: "🪐 Novo Planeta Descoberto!",
            message: `${planetData.name} foi adicionado ao seu diário!`,
            duration: 5000
        });
        
        // Diálogo educativo
        setTimeout(() => {
            DialogueSystem.showPlanetEducation(planetData);
        }, 1000);
        
        // Salvar progresso
        gameState.save();
        
        console.log(`🌍 Planeta descoberto: ${planetData.name}`);
    }

    createDiscoveryEffect(planetData) {
        const planet = gameState.planets[planetData.name.toLowerCase()];
        if (!planet) return;

        // Flash do planeta
        const originalEmissive = planet.material.emissive ? planet.material.emissive.clone() : new THREE.Color();
        const originalEmissiveIntensity = planet.material.emissiveIntensity || 0;
        
        planet.material.emissive.set(0xFFFFFF);
        planet.material.emissiveIntensity = 0.8;
        
        setTimeout(() => {
            planet.material.emissive.copy(originalEmissive);
            planet.material.emissiveIntensity = originalEmissiveIntensity;
        }, 1000);
        
        AudioManager.playSound('discovery');
    }

    showPlanetScanner(planetData, distance) {
        const scanner = document.getElementById('planet-scanner');
        scanner.classList.remove('hidden');
        
        document.getElementById('scan-name').textContent = planetData.name;
        document.getElementById('scan-distance').textContent = `${Math.round(distance)} unidades`;
        document.getElementById('scan-type').textContent = planetData.type;
        document.getElementById('scan-habitat').textContent = planetData.habitat;
        document.getElementById('scan-temp').textContent = planetData.temperature;
        document.getElementById('scan-gravity').textContent = planetData.gravity;
        
        // Status do scanner
        const status = document.getElementById('scan-status');
        if (distance < planetData.size * 10) {
            status.textContent = "⭐ Proximidade Ótima";
            status.style.color = "#10b981";
        } else if (distance < planetData.size * 20) {
            status.textContent = "📡 Boa Conexão";
            status.style.color = "#3b82f6";
        } else {
            status.textContent = "📶 Sinal Fraco";
            status.style.color = "#f59e0b";
        }
    }

    showScienceAnalyzer(planetData) {
        const analyzer = document.getElementById('science-analyzer');
        analyzer.classList.remove('hidden');
        
        document.getElementById('analyzer-composition').textContent = planetData.composition;
        document.getElementById('analyzer-atmosphere').textContent = planetData.atmosphere;
        document.getElementById('analyzer-rings').textContent = planetData.rings;
        document.getElementById('analyzer-moons').textContent = planetData.moons;
        document.getElementById('analyzer-funfact').textContent = planetData.funFact;
        
        // Verificar se já coletou amostra
        const collectBtn = document.getElementById('collect-sample');
        if (ScienceSystem.analyzedPlanets.has(planetData.name)) {
            collectBtn.innerHTML = '<i class="fas fa-check"></i> Amostra Coletada';
            collectBtn.disabled = true;
            collectBtn.style.opacity = '0.6';
        } else {
            collectBtn.innerHTML = '<i class="fas fa-vial"></i> Coletar Amostra';
            collectBtn.disabled = false;
            collectBtn.style.opacity = '1';
        }
        
        // Verificar se já fotografou
        const photoBtn = document.getElementById('take-photo');
        if (PhotoSystem.photographedPlanets.has(planetData.name)) {
            photoBtn.innerHTML = '<i class="fas fa-check"></i> Foto Capturada';
            photoBtn.disabled = true;
            photoBtn.style.opacity = '0.6';
        } else {
            photoBtn.innerHTML = '<i class="fas fa-camera"></i> Fotografar';
            photoBtn.disabled = false;
            photoBtn.style.opacity = '1';
        }
    }

    collectSample() {
        const nearestPlanet = this.getNearestPlanet();
        if (nearestPlanet) {
            ScienceSystem.collectSample(nearestPlanet.userData);
        }
    }

    takePhoto() {
        const nearestPlanet = this.getNearestPlanet();
        if (nearestPlanet) {
            PhotoSystem.takePhoto(nearestPlanet.userData);
        }
    }

    getNearestPlanet() {
        let nearestPlanet = null;
        let nearestDistance = Infinity;

        gameState.scene.children.forEach(object => {
            if (object.userData && object.userData.type === 'planet') {
                const distance = gameState.camera.position.distanceTo(object.position);
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestPlanet = object;
                }
            }
        });

        return nearestPlanet;
    }

    startMovement(config) {
        gameState.player.velocity[config.axis] = config.direction;
        AudioManager.playSound('click', 0.3);
    }

    stopMovement(config) {
        gameState.player.velocity[config.axis] = 0;
    }

    toggleBoost() {
        gameState.player.isBoosting = !gameState.player.isBoosting;
        const boostBtn = document.getElementById('boost-btn');
        
        if (gameState.player.isBoosting) {
            boostBtn.classList.add('active');
            AudioManager.playSound('boost');
        } else {
            boostBtn.classList.remove('active');
        }
        
        AudioManager.playSound('click');
    }

    interact() {
        const nearestPlanet = this.getNearestPlanet();
        if (nearestPlanet && gameState.camera.position.distanceTo(nearestPlanet.position) < nearestPlanet.userData.size * 20) {
            DialogueSystem.showPlanetEducation(nearestPlanet.userData);
        } else {
            DialogueSystem.showDialogue(
                "Nada interessante para interagir aqui. Aproxime-se de um planeta para estudá-lo!",
                [{ text: "Entendido", action: () => DialogueSystem.closeDialogue() }]
            );
        }
    }

    selectTool(tool) {
        gameState.currentTool = tool;
        
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tool="${tool}"]`).classList.add('active');
        
        AudioManager.playSound('click');
        
        // Feedback da ferramenta
        const toolNames = {
            scanner: "Scanner Planetário",
            collector: "Coletor de Amostras",
            camera: "Câmera Espacial",
            analyzer: "Analisador Científico"
        };
        
        NotificationSystem.add({
            type: "info",
            title: "🛠️ Ferramenta Selecionada",
            message: toolNames[tool],
            duration: 2000
        });
    }

    showSolarSystemMap() {
        const planetList = document.getElementById('planet-list');
        planetList.innerHTML = '';

        Object.values(PlanetData).forEach(planet => {
            const isDiscovered = gameState.discoveredPlanets.has(planet.name.toLowerCase());
            const planetElement = document.createElement('div');
            planetElement.className = `scan-item ${isDiscovered ? 'discovered' : ''}`;
            planetElement.innerHTML = `
                <span>${planet.name}</span>
                <strong>${isDiscovered ? '✓ Descoberto' : '❓ Não Descoberto'}</strong>
            `;
            planetList.appendChild(planetElement);
        });

        document.getElementById('discovered-count').textContent = 
            `${gameState.discoveredPlanets.size}/${Object.keys(PlanetData).length}`;
        
        document.getElementById('solar-map').classList.remove('hidden');
    }

    closeMap() {
        document.getElementById('solar-map').classList.add('hidden');
    }

    closeDialogue() {
        DialogueSystem.closeDialogue();
    }

    updateMissionsScreen() {
        const missionsList = document.getElementById('missions-list-container');
        const overallProgress = MissionSystem.getOverallProgress();
        const totalXP = gameState.player.xp;
        const playerLevel = gameState.player.level;

        // Atualizar estatísticas
        document.getElementById('overall-progress').textContent = `${overallProgress}%`;
        document.getElementById('total-xp').textContent = totalXP;
        document.getElementById('player-level').textContent = playerLevel;

        // Atualizar lista de missões
        missionsList.innerHTML = '';

        Object.values(MissionSystem.missions).forEach(mission => {
            const progressPercent = Math.round((mission.progress / mission.target) * 100);
            
            const missionCard = document.createElement('div');
            missionCard.className = `mission-card ${mission.completed ? 'completed' : ''} ${mission.progress > 0 ? 'active' : ''}`;
            missionCard.innerHTML = `
                <div class="mission-icon">
                    <i class="fas fa-${mission.icon}"></i>
                </div>
                <div class="mission-info">
                    <h4>${mission.title}</h4>
                    <p>${mission.description}</p>
                    <div class="mission-progress">
                        <span>Progresso: ${mission.progress}/${mission.target}</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                </div>
                <div class="mission-reward">
                    <span class="reward">+${mission.reward} créditos</span>
                    ${mission.completed ? '<div class="completed-badge">✓</div>' : ''}
                </div>
            `;
            
            missionsList.appendChild(missionCard);
        });
    }

    toggleMusic(button) {
        const isEnabled = AudioManager.toggleMusic();
        button.classList.toggle('active', isEnabled);
        button.innerHTML = isEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
    }

    toggleSFX(button) {
        const isEnabled = AudioManager.toggleSFX();
        button.classList.toggle('active', isEnabled);
        button.innerHTML = isEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
    }

    saveGame() {
        if (gameState.save()) {
            NotificationSystem.add({
                type: "success",
                title: "💾 Jogo Salvo",
                message: "Seu progresso foi salvo com sucesso!",
                duration: 3000
            });
        } else {
            NotificationSystem.add({
                type: "danger",
                title: "❌ Erro ao Salvar",
                message: "Não foi possível salvar o jogo.",
                duration: 3000
            });
        }
    }

    loadGame() {
        if (gameState.load()) {
            NotificationSystem.add({
                type: "success",
                title: "📁 Jogo Carregado",
                message: "Progresso restaurado com sucesso!",
                duration: 3000
            });
        } else {
            NotificationSystem.add({
                type: "warning",
                title: "📭 Nenhum Save",
                message: "Nenhum jogo salvo encontrado.",
                duration: 3000
            });
        }
    }

    resetGame() {
        gameState.reset();
    }

    onWindowResize() {
        if (gameState.camera && gameState.renderer) {
            gameState.camera.aspect = window.innerWidth / window.innerHeight;
            gameState.camera.updateProjectionMatrix();
            gameState.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

    // Destruir jogo (para cleanup)
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (gameState.renderer) {
            gameState.renderer.dispose();
        }
        
        AudioManager.stopBackgroundMusic();
    }
}

// =============================================================================
// INICIALIZAÇÃO DO JOGO
// =============================================================================

// Inicializar quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    // Prevenir zoom com gestos em dispositivos móveis
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('gesturechange', (e) => e.preventDefault());
    document.addEventListener('gestureend', (e) => e.preventDefault());
    
    // Iniciar jogo
    window.spaceGame = new SpaceGame();
});

// Prevenir F5 e Ctrl+R
window.addEventListener('beforeunload', (e) => {
    // Salvar automaticamente antes de sair
    if (gameState && typeof gameState.save === 'function') {
        gameState.save();
    }
});

// Exportar para uso global (para debugging)
window.GameState = gameState;
window.MissionSystem = MissionSystem;
window.ScienceSystem = ScienceSystem;
window.PhotoSystem = PhotoSystem;
window.DialogueSystem = DialogueSystem;
window.QuizSystem = QuizSystem;
window.AudioManager = AudioManager;

console.log('🎮 Royal Blue: Missão Cósmica - Sistema Carregado!');