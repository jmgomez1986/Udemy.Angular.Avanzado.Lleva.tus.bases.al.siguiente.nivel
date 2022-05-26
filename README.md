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

# Seccion 11

  - CRUD de médicos y hospitales
  - Una tarea robusta con su respectivo documento y resolución
  - Códigos útiles de Mongoose
  - Populate
  - Gets
  - Paginar resultados
  - Búsquedas específicas y globales
  - Subida de archivos al servidor
  - Asignación de imagen a un hospital, medico o usuario
  - Formas de exponer archivos a la web
  - Manejo del FileSystem
  - Proteger imágenes
  - Generar imagen por defecto

# Seccion 12

  ## Esta sección esta especializada en implementar el Google Sign-in en nuestro backend server:

  - Crear una aplicación en Google Developer Console
  - Generar el ID de nuestra aplicación y un ID Secreto de servidor
  - Crear un login básico de pruebas usando el API de Google
  - Generar un Token desde el front-end
  - Validar el Token en nuestro back-end
  - Tip para generar la documentación de nuestros servicios automáticamente

  # Seccion 13

  En esta sección continuaremos el CRUD faltante de los médicos y hospitales, puntualmente seguiremos con los temas de:

  - Modelos
  - Grabaciones
  - Queries
  - Endpoints faltantes

# Seccion 14

  - Conectar el Front-end con el Back-end (login)
  - Usar Sweet Alert para mostrar mensajes
  - Login normal de usuario
  - Login de Google
  - LocalStorage para almacenar tokens
  - Protección básica de rutas
  - Logout

# Seccion 15

  - Módulo de pipes 
  - Pipe para controlar la imagen a desplegar
  - Subida de imagen desde el Front-end hasta el Back-end
  - Crear el componente del perfil del usuario
  - Notificar actualización de imagen
  - Vista previa de la imagen seleccionada en tiempo real (sin subirla al backend)

# Seccion 16

  Esta sección tiene 2 objetivos generales, el primero es crear un mantenimiento de usuarios completo y el segundo, es crear un componente re utilizable que nos permita subir fácilmente imágenes de Hospitales, Usuarios y Médicos.

  - Crear componente de usuarios
  - Búsqueda de usuarios
  - Borrar usuario
  - Actualizar Rol del usuario
  - Crear un modal para la subida de la imagen
  - Emitir notificaciones de cambio en imagenes

# Seccion 17

  - Explicación de la tarea
  - Documentos de la tarea
  - Detalles sobre el pipe de las imagenes
  - Resolución de la tarea
  - Componente de Médico y Médicos
  - Borrar médicos
  - Crear nuevo médico
  - Mostrar información en base a una selección de un hospital
  - Cargar médico
  - Actualizar registro de un médico

# Seccion 18

  - Componente de búsqueda global
  - Menú del lado del servidor
  - AdminGuard - Un guard para verificar si es administrador
  - Recuperar información del TOKEN desde el front-end sin comunicación intermedia
  - Página 404
  - Manejo de errores

# Seccion 19

  - Lazyload
  - Función para renovar el token
  - Guard de renovación de token
  - Leer el token localmente sin comunicación con el servidor
  - Optimizar el tiempo de renovación de token
  - Resolver problema con las imágenes mal ubicadas en la versión de distribución
  - Crear la versión de distribución

# Seccion 20

  - Interceptores
  - Operadores de RXJS como map, catchError
  - Objetos propios de RXJS como el throwError
  - Explicaremos el por qué de los interceptores y cómo usarlos

# Seccion 21

  - Inicio en pruebas

# Seccion 22

  - Probaremos Strings
  - Números
  - Booleanos
  - Arreglos
  - Clases
  - Cobertura de nuestras pruebas.

# Seccion 23

  - Pruebas sobre Event Emitter
  - Formularios
  - Validaciones
  - Saltar pruebas
  - Espías
  - Simular retornos de servicios
  - Simular llamado de funciones

# Seccion 24

  - Aprender la configuración básica de una prueba de integración
  - Comprobación básica de un componente
  - TestingModule
  - Archivos SPEC generados automáticamente por el AngularCLI
  - Pruebas en el HTML
  - Revisar inputs y elementos HTML
  - Separación entre pruebas unitarias y pruebas de integración

# Seccion 25

  - Revisar la existencia de una ruta
  - Confirmar una directiva de Angular (router-outlet y routerLink)
  - Errores por selectores desconocidos
  - Reemplazar servicios de Angular por servicios falsos controlados
  - Comprobar parámetros de elementos que retornen observables
  - Subject
  - Gets
