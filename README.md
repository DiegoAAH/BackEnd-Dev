# BackEnd-Dev — Tarea 2: Introducción a Git y Control de Versiones

Repositorio de práctica para aprender los conceptos y operaciones básicas de Git: commits, ramas, merges y publicación en GitHub.

## Investigación

### ¿Qué problema resuelve un sistema de control de versiones?

Un sistema de control de versiones (VCS) resuelve el problema de llevar un registro confiable de los cambios que sufre un proyecto a lo largo del tiempo. Sin él, es común terminar con archivos como `proyecto_final.js`, `proyecto_final_v2.js` o `proyecto_final_v2_bueno.js`, sin saber qué cambió entre versiones, quién lo hizo o por qué. Un VCS permite:

- Guardar el historial completo de cambios, con la posibilidad de volver a cualquier punto anterior.
- Saber quién hizo cada cambio y cuándo.
- Trabajar en paralelo sin sobrescribir el trabajo de otras personas (varias personas editando el mismo código a la vez).
- Experimentar con nuevas ideas (ramas) sin arriesgar el código que ya funciona.

### ¿Qué es Git?

Git es un sistema de control de versiones **distribuido**, creado por **Linus Torvalds en 2005** (el mismo creador de Linux), originalmente para administrar el desarrollo del kernel de Linux. Que sea "distribuido" significa que cada persona que clona un repositorio tiene una copia completa de todo el historial del proyecto en su propia máquina, no solo una copia de los archivos actuales. Esto permite trabajar sin conexión a internet y hace que el proyecto no dependa de un único servidor central.

### Diferencia entre Git y GitHub

Esta es una de las confusiones más comunes al empezar:

- **Git** es la herramienta (el software) que corre en tu computadora y se encarga de registrar el historial de cambios, crear ramas, hacer commits, etc. Es local y funciona sin internet.
- **GitHub** es una plataforma web que aloja repositorios de Git en la nube y agrega funcionalidades sociales/colaborativas: interfaz visual, Pull Requests, Issues, control de acceso, integración con CI/CD, etc.

En otras palabras: Git es el motor, GitHub es uno de varios lugares donde puedes estacionar el auto (existen alternativas como GitLab o Bitbucket, que también usan Git por debajo).

## Estructura del proyecto

```
BackEnd-Dev/
├── .gitignore
├── README.md
└── app.js
```

## Preguntas de reflexión

**1. ¿Cuál es la diferencia entre `git add` y `git commit`?**

`git add` mueve los cambios del *Working Directory* al *Staging Area* (índice): es como preparar y seleccionar exactamente qué cambios quieres incluir en la próxima "foto" del proyecto. `git commit` toma lo que está en el Staging Area y lo guarda de forma permanente en el historial del repositorio, con un mensaje que describe qué se hizo. `add` prepara, `commit` guarda.

**2. ¿Qué ventaja tiene hacer varios commits pequeños en lugar de uno grande?**

Los commits pequeños y enfocados en un solo cambio son más fáciles de entender, revisar y revertir si algo sale mal. Si un commit grande introduce un bug, hay que revisar cientos de líneas mezcladas de varios cambios distintos para encontrarlo; con commits pequeños, `git log` y `git diff` se vuelven una bitácora clara del "por qué" de cada cambio, y se puede deshacer solo la parte problemática sin perder el resto del trabajo.

**3. ¿Cuáles son las diferencias entre Git y GitHub?**

(Ver sección de investigación arriba). En resumen: Git = herramienta local de control de versiones; GitHub = servicio en la nube que aloja repositorios Git y añade colaboración, interfaz web y herramientas extra.

**4. ¿Qué problema resuelven las ramas (branches)?**

Las ramas permiten desarrollar una nueva funcionalidad, corregir un bug o experimentar, todo de forma aislada del código estable en `main`. Mientras trabajas en una rama, el resto del equipo puede seguir usando `main` sin que tus cambios a medio terminar los afecten. Cuando la funcionalidad está lista y probada, se fusiona (`merge`) de vuelta. Esto evita que el código roto o incompleto llegue a la rama principal.

**5. ¿Qué tipo de información NO debería almacenarse en un repositorio Git?**

- Contraseñas, API keys, tokens de acceso o cualquier credencial.
- Archivos de configuración con datos sensibles (`.env`).
- Carpetas de dependencias generadas automáticamente (`node_modules/`), ya que se pueden regenerar con `npm install` y solo ocupan espacio.
- Archivos temporales o de log (`*.log`).
- Información personal identificable de terceros.

Por eso existe el archivo `.gitignore`, que le dice a Git qué archivos/carpetas ignorar y nunca subir al historial.

**6. Si borro mi proyecto local por accidente, ¿cómo lo recupero?**

Si el proyecto ya fue publicado (con `git push`) a un repositorio remoto como GitHub, basta con volver a clonarlo con `git clone <url>` para recuperar todo el código y el historial de commits. Esto demuestra el valor de un VCS distribuido: el repositorio remoto actúa como respaldo completo del proyecto, no solo de los archivos sino de toda su historia.

**7. ¿Por qué es importante Git en equipos de trabajo colaborativos?**

Permite que varias personas trabajen en el mismo proyecto al mismo tiempo sin pisarse el trabajo: cada quien puede trabajar en su propia rama, y Git se encarga de fusionar los cambios (y avisar si hay conflictos que deben resolverse manualmente). Además, el historial de commits sirve como documentación de quién hizo qué y por qué, lo cual es clave para revisar código (code review) y para rastrear el origen de un bug.

**8. ¿Cuáles son las diferencias entre `clone`, `pull` y `push`?**

- `git clone <url>`: descarga por primera vez una copia completa de un repositorio remoto (incluyendo todo su historial) a tu máquina. Se usa una sola vez, al empezar a trabajar con ese repositorio.
- `git pull`: trae los cambios nuevos que existen en el repositorio remoto y los mezcla con tu rama local (es un `fetch` + `merge`). Se usa para mantenerte actualizado con lo que otros ya subieron.
- `git push`: sube tus commits locales al repositorio remoto para que otros (y tú desde otra máquina) puedan verlos.

En resumen: `clone` es "bajar el proyecto por primera vez", `pull` es "traer lo nuevo", `push` es "subir lo mío".

**9. ¿Por qué mis commits no aparecen automáticamente en GitHub?**

Porque `git commit` solo guarda los cambios en el historial **local** de tu computadora; en ningún momento se comunica con el servidor remoto. Para que esos commits sean visibles en GitHub hace falta un paso adicional explícito: `git push`, que sube el historial local al repositorio remoto. Esta separación es intencional: te permite hacer commits, corregirlos o reorganizarlos localmente antes de decidir qué compartir con los demás.

## Comandos usados en esta práctica

```bash
git init
git add <archivo>
git commit -m "mensaje descriptivo"
git status
git log --oneline
git branch
git switch -c feature/calculadora
git switch main
git merge --no-ff feature/calculadora
git remote add origin <url>
git push -u origin main
git clone <url>
```
