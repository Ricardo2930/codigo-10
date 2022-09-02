# Primer dia con Git/Github
Comando para configurar el usuario y el correo
Lista de comandos de Git

* Para poder ver la version de GIT
```bash
git --version
```

* Para configurar el correo
```bash (tipo de codigo)
git config --global user.email "email"
```

* Para configuara el UserName
```bash (tipo de codigo)
git config --global user.name "username"
```

* Sirve para poder empezar a usar el control de versiones (git) en nuestra carpeta
* Ademas crea el .git
* Solo se hace una vez al inicio para cada carpeta
```bash (tipo de codigo)
git init
```

* Para ver el estado de los cambios
```bash
git status
```

* Para agregar los archivos a la memoria de la pc
```bash
git add .
```

* Crea el registro de los cambios realizados
```bash
git commit -m "comentario"
```

* Para ver el historial de lo realizado (commits)
```bash
git log
```

* Para ver el detalle de commit
```bash
git show ID del commit
```
se coloca el git show + ID del commit

* Para llevar de forma local a forma Remota (GitHub)
```bash
git push origin main
```
