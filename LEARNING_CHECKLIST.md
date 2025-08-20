# 🎯 Checklist de Aprendizado - Chamfrado.dev

## 📋 Fase 0 — Setup e Fundamentos (1–2 dias)
**Objetivo:** ter o projeto rodando bonitinho, com padrão de código e tema base.

### Bootstrap
- [ ] Vite + React + TypeScript
- [ ] Tailwind + shadcn/ui
- [ ] ESLint + Prettier + Husky + lint-staged
- [ ] React Router + alias @/*
- [ ] TanStack Query + Zustand
- [ ] Framer Motion

### Design tokens (neon 80s/90s)
- [ ] Cores-base definidas
- [ ] Gradientes configurados
- [ ] Tipografia estabelecida
- [ ] Espaçamentos padronizados
- [ ] Button component
- [ ] Card component
- [ ] Badge component
- [ ] Navbar component
- [ ] Section component

### CI/CD + Observabilidade
- [ ] Deploy no Vercel
- [ ] GitHub Actions: lint → typecheck → build → tests
- [ ] PostHog/Plausible (pageviews + evento: "lesson_completed")

### Definition of Done (DoD)
- [ ] `npm run typecheck` OK
- [ ] `npm run lint` OK
- [ ] Build e deploy "Hello, Neon" online
- [ ] Lighthouse ≥ 90 (desktop e mobile) para Home

---

## 🏗️ Fase 1 — Arquitetura da "Jornada" (1 semana)
**Objetivo:** esqueleto de rotas e navegação com player de conteúdo simples.

### Páginas
- [ ] Home (Hero neon, call-to-action "Iniciar Jornada")
- [ ] Journey (lista de trilhas)
- [ ] Track/:slug (roadmap com marcos)
- [ ] Lesson/:id (conteúdo + progresso local)
- [ ] About (sobre você — mostrar "Lohran" aqui)
- [ ] Projects (cases com writeups)
- [ ] Profile (mock inicial)

### Funcionais
- [ ] Layout responsivo
- [ ] Navbar/Sidebar
- [ ] Footer
- [ ] Estado global: tema
- [ ] Estado global: menu
- [ ] Estado global: progresso local (localStorage)
- [ ] Carregar conteúdo MDX (MVP) para 1 trilha demo

### DoD
- [ ] Navegação completa c/ lazy routes
- [ ] 1 trilha demo com 3 lições (MDX)
- [ ] Progresso persiste ao recarregar

---

## 💼 Fase 2 — Portfólio Profissional (1–2 semanas)
**Objetivo:** transformar o site em vitrine de skills e resultados.

### Seções
- [ ] Skills Map: grid interativo por categoria (FE/BE/DevOps/Testing/UX)
- [ ] Projects/Case Studies:
  - [ ] Problema → Processo → Solução → Impacto
  - [ ] Screenshots, snippets, métricas
- [ ] Tech Radar: domínios com nível e exemplos reais
- [ ] Timeline: jornada/experiências, cursos, certificações

### DoD
- [ ] Pelo menos 3 cases completos (com números e decisões técnicas)
- [ ] A11y: navegação por teclado + ARIA nos componentes-chave
- [ ] Lighthouse ≥ 95 e CLS ~0 em Home e Projects

---

## 📚 Fase 3 — Aprendizado e Conteúdo (contínuo)
**Objetivo:** usar o site pra te ensinar (e mostrar isso).

### Conteúdo
- [ ] Blog/Notes com MDX (short posts, "building in public")
- [ ] Labs/Playground: mini-demos
- [ ] Badges/XP: quando concluir lições/labs
- [ ] Analytics que ensina: eventos para entender obstáculos

### DoD
- [ ] 5 posts (200–500 palavras)
- [ ] 2 labs interativos
- [ ] Página de Profile exibindo últimas conquistas

---

## 🎓 Trilha de Aprendizado Embutida

### React + TS sólido
- [ ] Padrões de props
- [ ] Discriminated unions
- [ ] Generics simples
- [ ] useRef/useMemo na medida
- [ ] **Exercício:** transformar 3 componentes em headless components

### Estado & Data
- [ ] Zustand para UI state
- [ ] Query para server state
- [ ] **Exercício:** invalidations, optimistic updates, "retry" inteligente

### Acessibilidade & UX
- [ ] Focus management
- [ ] Labelling
- [ ] Contrast
- [ ] **Exercício:** refatorar Modal e Combobox p/ A11y

### Animações & Microinterações
- [ ] Framer Motion básico (entradas, hover, layout)
- [ ] **Exercício:** 3 microinterações (menu, cards, progress)

### Testing
- [ ] Vitest + Testing Library
- [ ] Playwright (1 fluxo e2e crítico)
- [ ] **Exercício:** teste de Lesson Player

### Performance
- [ ] Code-splitting
- [ ] Prefetch
- [ ] Imagens otimizadas
- [ ] Memos cirúrgicos
- [ ] **Exercício:** reduzir TTI e melhorar LCP

---

## 📝 Conteúdo do Portfólio

### Cases para escrever
- [ ] **Case 1:** "Neon UI System" - tokens, acessibilidade, componentes
- [ ] **Case 2:** "Lesson Player" - UX vs performance, decisões técnicas
- [ ] **Case 3:** "SEO e Performance" - Lighthouse e Core Web Vitals
- [ ] **Bônus:** "Falhas que me ensinaram" - 3 erros e soluções

---

## 📊 Métricas (para provar competência)

### Performance
- [ ] Lighthouse por página
- [ ] Core Web Vitals (LCP, CLS, INP)
- [ ] Tamanho do bundle por rota

### Qualidade
- [ ] % cobertura de testes em módulos críticos
- [ ] A11y checklist completo
- [ ] DORA-like pessoal: lead time e frequência de deploy

---

## ✅ Checklists de Qualidade

### PR Checklist
- [ ] Lint/Typecheck/Tests ok
- [ ] A11y básico (teclado/aria/contraste)
- [ ] Animações respeitam prefers-reduced-motion
- [ ] Documentação do componente/página
- [ ] Screenshot/Video curto no PR

### Página/Feature DoD
- [ ] Responsivo (≤360px a ≥1440px)
- [ ] Lighthouse ≥ 90, sem regressão
- [ ] Telemetria de eventos
- [ ] Texto revisado (tom consistente)

---

## 📈 Progresso Geral

**Fase 0:** ⬜ 0% (0/X tarefas)
**Fase 1:** ⬜ 0% (0/X tarefas)  
**Fase 2:** ⬜ 0% (0/X tarefas)
**Fase 3:** ⬜ 0% (0/X tarefas)

**Total:** ⬜ 0% completo

---

*Última atualização: ${new Date().toLocaleDateString('pt-BR')}*