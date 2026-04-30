# Economia Avançada — Trilha de Pesquisa

Site estático com trilha de pesquisa em economia avançada, organizada em 6 temas progressivos baseados nos currículos de Harvard, MIT, Chicago e LSE.

## Estrutura

```
economia-site/
├── index.html        # Estrutura e conteúdo principal
├── css/
│   └── styles.css    # Temas claro e escuro + componentes
└── js/
    └── main.js       # Toggle de tema, acordeão e navegação
```

## Funcionalidades

- **Tema claro e escuro** — alternância via botão na nav, com persistência em `localStorage` e detecção automática da preferência do sistema
- **Trilha interativa** — 6 temas organizados em 3 fases progressivas, cada um com roteiro semanal, fontes primárias e caixa de insight
- **Navegação suave** — cards da visão geral levam diretamente ao tema na trilha, abrindo o acordeão automaticamente
- **Responsivo** — adaptado para mobile e desktop

## Temas

| # | Tema | Área | Fase |
|---|------|------|------|
| 01 | Expectativas Racionais e Formação de Preços | Macro | 1 |
| 02 | Assimetria de Informação e Design de Mecanismos | Micro | 1 |
| 03 | Modelos DSGE e Ciclos Econômicos | Macro | 2 |
| 04 | Economia Comportamental e Nudges | Comportamental | 3 |
| 05 | Hipótese de Mercados Eficientes e Anomalias | Finanças | 2 |
| 06 | Crescimento Endógeno e Armadilha de Renda Média | Crescimento | 3 |

## Como usar

Abra o `index.html` diretamente no navegador — não requer servidor ou dependências externas.

### Publicar no GitHub Pages

1. Suba os arquivos na raiz do repositório
2. Vá em **Settings → Pages**
3. Selecione a branch `main` e salve

### Publicar no Netlify ou Vercel

Arraste a pasta `economia-site/` para o painel de deploy — funciona direto.

## Fontes

Os conteúdos são baseados em papers originais, Nobel Lectures e relatórios institucionais, incluindo:

- Muth (1961), Lucas (1976), Sargent — expectativas racionais
- Akerlof (1970), Spence (1973) — assimetria de informação
- Woodford (2003), Galí — modelos DSGE
- Kahneman & Tversky (1979), Thaler & Sunstein — economia comportamental
- Fama (1970), Shiller (1981) — mercados eficientes
- Romer (1990), Acemoglu & Robinson — crescimento endógeno
- World Development Report 2024 — Banco Mundial