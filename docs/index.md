---
# https://www.mkdocs.org/user-guide/writing-your-docs/#meta-data
title: mkdocs
authors:
- Andrés Tonejito
---

# mkdocs

Este sitio es una plantilla de `mkdocs` en GitLab Pages

- <https://www.mkdocs.org/>
- <https://pages.gitlab.io/>
- <https://about.gitlab.com/stages-devops-lifecycle/pages/>
- <https://gitlab.com/help/user/project/pages/index>
- <https://gitlab.com/help/user/project/pages/getting_started/pages_ci_cd_template.html>

## Componentes

Existen varios archivos en este repositorio

```text
$ tree -a .
.
├── .gitignore
├── .gitlab-ci.yml
├── mkdocs.yml
├── requirements.txt
├── Makefile
├── css
│   └── extra.css
├── js
│   └── extra.js
└── docs
    ├── .gitkeep
    ├── .index.md.swp
    └── index.md
```

| Archivo / Directorio | Descripción |
|:--------------------:|:------------|
| `.gitlab-ci.yml`     | Configuración de CI/CD para GitLab
| `Makefile`           | Ejecuta la construcción y pruebas del sitio usando `make`
| `mkdocs.yml`         | Configuración de `mkdocs`
| `requirements.txt`   | Dependencias de Python para `mkdocs`
| `css/`               | Archivos CSS extra
| `js/`                | Archivos JS extra
| `docs/`              | En este directorio van los documentos Markdown

## Uso de la plantilla

- Hacer _fork_ de este repositorio y nombrarlo como `NOMBRE.gitlab.io`
- Habilitar [GitLab Pages] en el repositorio
- Cambiar los datos en `mkdocs.yml`
- Cambiar el contenido en `README.md` y `docs/index.md`
    - Opcionalmente crear mas carpetas dentro de `docs/`, cada una con su archivo `index.md`
    - Cada carpeta hará que se muestre una entrada adicional en el menú
- Hacer commit y push al repositorio
    - Revisar si en el último _pipeline_ hay un par de tareas llamadas `pages` y `pages:deploy`
    - <https://gitlab.com/tonejito/mkdocs.gitlab.io/-/pipelines/>
- Revisar que GitLab haya reconocido la configuración de Pages
    - <https://gitlab.com/tonejito/mkdocs.gitlab.io/pages>
- Esperar a ver el sitio en `https://NOMBRE.gitlab.io/`
    - Este proceso toma aproximadamente 30 minutos

--------------------------------------------------------------------------------
