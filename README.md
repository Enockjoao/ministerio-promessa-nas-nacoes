# ⛪ Ministério Promessa nas Nações

![Ruby](https://img.shields.io/badge/Ruby-3.2.3-red?style=flat-square&logo=ruby)
![Rails](https://img.shields.io/badge/Rails-8.1.1-red?style=flat-square&logo=rubyonrails)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Site institucional da igreja **Ministério Promessa nas Nações**, desenvolvido com Ruby on Rails seguindo as melhores práticas de organização e estrutura de código.

---

## 📸 Preview

<p align="center">
  <img src="app/assets/images/globo-mpn.png" alt="Logo MPN" width="200">
</p>

---

## 🚀 Tecnologias Utilizadas

- **Ruby** 3.2.3
- **Rails** 8.1.1
- **Bootstrap** 5.3
- **Sass/SCSS**
- **MySQL**
- **Propshaft** (Asset Pipeline)
- **Puma** (Web Server)

---

## 📁 Estrutura do Projeto

```
app/
├── assets/
│   ├── images/                    # Imagens do site
│   └── stylesheets/
│       ├── base/                  # Estilos base
│       │   ├── _variables.scss    # Variáveis (cores, fontes)
│       │   ├── _reset.scss        # Reset CSS
│       │   ├── _typography.scss   # Tipografia
│       │   ├── _animations.scss   # Animações
│       │   └── _responsive.scss   # Media queries
│       ├── layout/                # Layout do site
│       │   ├── _header.scss       # Cabeçalho
│       │   └── _footer.scss       # Rodapé
│       ├── components/            # Componentes reutilizáveis
│       │   ├── _buttons.scss      # Botões
│       │   ├── _cards.scss        # Cards
│       │   └── _back_to_top.scss  # Botão voltar ao topo
│       ├── pages/                 # Estilos por página
│       │   └── _home.scss         # Página inicial
│       └── application.bootstrap.scss  # Arquivo principal
│
└── views/
    ├── layouts/
    │   └── application.html.erb   # Layout base
    ├── shared/                    # Partials compartilhados
    │   ├── _header.html.erb
    │   ├── _footer.html.erb
    │   └── _back_to_top.html.erb
    ├── components/                # Componentes por página
    │   └── home/
    │       ├── _hero.html.erb
    │       ├── _about.html.erb
    │       ├── _ministries.html.erb
    │       ├── _schedule.html.erb
    │       └── _cta.html.erb
    └── home/
        └── index.html.erb         # Página inicial
```

---

## 🎨 Seções do Site

| Seção | Descrição |
|-------|-----------|
| **Hero** | Banner principal com animação de partículas |
| **About** | Pilares da igreja (Adoração, Palavra, Comunhão) |
| **Ministérios** | Cards dos ministérios (Nação Praise, Braseiros, Kids, etc) |
| **Agenda** | Horários dos cultos semanais |
| **CTA** | Chamada para ação |
| **Footer** | Rodapé com links e redes sociais |

---

## ⚙️ Como Executar

### Pré-requisitos

- Ruby 3.2.3
- Rails 8.1.1
- MySQL
- Node.js
- Yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Enockjoao/ministerio-promessa-nas-nacoes.git

# Acesse a pasta
cd ministerio-promessa-nas-nacoes

# Instale as dependências Ruby
bundle install

# Instale as dependências JavaScript
yarn install

# Configure o banco de dados
rails db:create
rails db:migrate

# Compile os assets
rails assets:precompile

# Inicie o servidor
rails s
```

### Acesse no navegador

```
http://localhost:3000
```

---

## 🎯 Funcionalidades

- [x] Landing page responsiva
- [x] Animação de partículas no hero
- [x] Cards interativos dos ministérios
- [x] Agenda de cultos
- [x] Botão voltar ao topo
- [x] Design dark theme elegante
- [ ] Sistema de login (em desenvolvimento)
- [ ] Painel administrativo (em desenvolvimento)
- [ ] Galeria de fotos (em desenvolvimento)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Joao Victor Enock**

- GitHub: [@Enockjoao](https://github.com/Enockjoao)

---

## 🙏 Agradecimentos

- Ministério Promessa nas Nações
- Comunidade Ruby on Rails

---

<p align="center">
  Feito com ❤️ para a glória de Deus
</p>
