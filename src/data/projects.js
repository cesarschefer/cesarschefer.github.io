export const projects = [
    {
        id: 'memora',
        title: 'Memora',
        description: 'AI-powered notebook and journaling platform that serves as a neural second brain for personal knowledge, powered by semantic search and RAG.',
        stack: [
            'Laravel', 'React', 'TypeScript', 'Inertia.js', 'PostgreSQL', 'Laravel Queues & Workers', 'Laravel AI SDK',
            'Gemini API', 'pgvector', 'Spatie PDF'
        ],
        features: [
            'Chat with AI about uploaded documents using RAG and pgvector',
            'AI-powered daily journal with generated titles and images',
            'Background document processing and vector embedding generation',
        ],
        image: '/images/memora.webp',
        github: 'https://github.com/cesarschefer/memora',
        size: 'project-hero',
        contextTag: 'RAG Application'
    },
    {
        id: 'chatbot-ai',
        title: 'AI Chatbots',
        description: 'Platform for building and managing AI-powered chatbots with custom knowledge bases.',
        stack: ['Laravel', 'Laravel Queues & Workers', 'React', 'MySQL', 'Inertia.js',
            'Spatie PDF', 'DomCrawler', 'Groq API', 'OpenAI API', 'TypeScript'],
        features: [
            'Multi-agent management: custom system prompts, model selection (OpenAI / Groq), and temperature control',
            'PDF and web scraping ingestion via async background queues',
            'Real-time SSE response streaming for fluid, low-latency conversations',
            'Live knowledge base processing status and per-chatbot conversation history',
        ],
        image: '/images/chatbots.webp',
        github: 'https://github.com/cesarschefer/chatbots',
        size: 'project-hero',
        contextTag: 'AI Integration'
    },
    {
        id: 'inventory-pro',
        title: 'StockFlow',
        description: 'Inventory management system built around transactional consistency and concurrency safety.',
        stack: ['Laravel', 'Spatie Permissions', 'Maatwebsite Excel',
            'DomPDF', 'Inertia.js', 'React', 'TypeScript'],
        features: [
            'Full invoicing — purchases & sales auto-generate immutable stock movement records',
            'Reporting — purchase, sales and profit reports exportable as Excel or PDF',
            'Role-Based Access Control with database-driven permissions via Gates, Policies, and a <Gate> component',
            'Concurrency-safe stock validation with DB-level row locking to prevent overselling',
        ],
        image: '/images/inventory.webp',
        github: 'https://github.com/cesarschefer/inventory',
        size: 'compact',
        contextTag: 'Full Stack Project'
    },
    {
        id: 'brewery-ops',
        title: 'Brewery Management System',
        description: 'Full-featured brewery management platform built with vanilla PHP OOP/MVC — no frameworks.',
        stack: ['PHP 7', 'OOP/MVC', 'MySQL', 'jQuery', 'jQuery UI', 'SweetAlert', 'CSS'],
        features: [
            'Keg and tap stock tracking with liter-level control per beer line',
            'Fully responsive POS interface — desktop, tablet, and mobile',
            'Role-based access control separating staff and admin views',
            'Beer, tap, and order CRUD management',
        ],
        image: '/images/cerveceria.webp',
        size: 'compact',
        contextTag: 'Legacy Full Stack Project',
    },
]