# Udemy.Angular.Avanzado.Lleva.tus.bases.al.siguiente.nivel

# SECCION 02
  ## Clase 08
    1. Se genera componente con estilo inline usando el comando
        `ng g c home -is`
      y se elimina el archivo de test manualmente
    
    2. Se crea una carpeta /pages, se mueve el componente home a la nuevae de carpeta y se actualiza el path del app.module

    2. Se crea un componente sin el arhivo de test en otra carpeta usando el comando
        `ng g c pages/about/about .flat --skip-tests`

    3. Se cea un nuevo componente con el comando
        `ng g c contact --flat --inline-style --skip-tests`

        ### Tareas
          1. Mover los dos archivos en  la carpeta Contact dentro de pages
  
  ## Clase 09
    1. Creacion de un servicio con
        `ng g s auth`
      y se elimina el archivo de test manualmente

    2. Se mueve el servicio a una nueva carpeta services

    3. Se inyecta en home.compnent el servicio creado

    4. Se simula que s va a crear un servicio, para ver que archivos crea con
        `ng g s services/user --dry-run`

    5. Se crea el servicio sin el archivo de test
        `ng g s services/user --skip-tests`

    6. Se genera un guard (con simulacion)
        `ng g guard guard/auth -d`

    7. Se genera un guard sin el archivo de test
        `ng g guard guard/auth --skip-tests`

  ## Clase 12

    1. Se resuelven los path de la tarea

# Seccion 03

  - Uso del template administrativo
  - Código fuente del template
  - Uso de librerías externas
  - Creación de los primeros componentes
  - Separar el Login del template administrativo, ya que tienen estructuras diferentes
  - Animaciones por CSS
  - Respaldos en GitHub
  - Preparar el proyecto que usaremos a lo largo del curso

# Seccion 04

  - Crear un módulo personalizado
  - Crear rutas hijas
  - Comenzaremos a crear módulos para agrupar tareas específicas
  - Realizar cambios en GitHub
  - Crear Release Tags que nos permitan descargar el código fácilmente, en caso de que necesitemos volver a comenzar donde nos quedemos.

# Seccion 05

  - Buckup en GitHub

# Seccion 06

  - Trabajaremos con Outputs, Inputs y ViewChild
  - Aprenderemos como utilizar atributos personalizados
  - Crearemos un componente re utilizable con una funcionalidad en especifico
  - Aprenderemos a tener referencias a elementos HTML
  - Tips de JavaScript puro: colocar el foco en elementos
  - Uso de gráficas como componentes personalizados

# Seccion 07

  - Crearemos un módulo para agrupar todos nuestros servicios
  - Aprenderemos a ejecutar scripts en archivos de JavaScript puros, en TypeScript
  - LocalStorage
  - Cambiar CSS de forma dinámica
  - Crear un componente para los ajustes del tema
  - Tips de JavaScript que se pueden usar en TypeScript
  - Preparar el servicio del Sidebar, el cual usaremos más adelante para crear nuestro menú dinámico en base a las respuestas de nuestro backend server

# Seccion 08

  - Tendremos una introducción ilustrativa para explicar estos dos temas
  - Trabajaremos con promesas y funciones que retornan promesas
  - Aprenderemos a crear un observable manualmente
  - Trabajaremos con operadores de los observables como:
    - Retry
    - Map
    - Filter
    - Next
  - Funciones que retornan observables
  - Usaremos el conocimiento aprendido para crear un componente de seguimiento de la página actual
  - Usaremos observables para leer parámetros de configuración de las rutas que son diferentes a los parámetros de las rutas por url
  - Cambiaremos los metatags dependiendo de la página donde nos encontremos
  - Cambiar el titulo de la página actual

# Seccion 09

  - Configuración de Mongo
  - Robo 3T
  - Conexión entre Mongo y Node
  - Tip sobre colores de consola
  - Aprender un poco sobre los errores de respuestas HTTP
  - Configuración inicial de Express
  - Establecer las bases de nuestros RESTful services

# Seccion 10

  ## Esta sección tiene por objetivo trabajar fuertemente con Express, Mongo y Node:

  - Explicación general y alcances del Backend
  - Crear colección de Usuarios
  - Crear modelos en Node
  - POST
  - Validaciones automáticas mediante Mongoose
  - Encriptar contraseñas
  - PUT
  - Delete
  - Get
  - Login de Usuario
  - Generación de un JWT
  - Middlewares
  - Optimizar Middlewares
