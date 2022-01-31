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
