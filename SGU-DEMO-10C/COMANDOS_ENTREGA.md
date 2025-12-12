# Comandos para la Entrega - Paso a Paso

## 📸 1. CAPTURA DE DOCKER DESKTOP

### Paso 1: Abre una terminal
- Presiona `Windows + R`
- Escribe `cmd` o `powershell` y presiona Enter

### Paso 2: Ve a la carpeta del proyecto
```bash
cd d:\pipeline\SGU-DEMO-10C
```

### Paso 3: Levanta los contenedores
```bash
docker-compose up -d
```

### Paso 4: Verifica que estén corriendo
```bash
docker ps
```
**Debes ver 3 contenedores:**
- sgu-database
- sgu-backend  
- sgu-frontend

### Paso 5: Abre Docker Desktop
1. Busca "Docker Desktop" en el menú de inicio de Windows
2. Ábrelo
3. Ve a la pestaña **"Containers"** (Contenedores)
4. Busca el grupo llamado `sgu-demo-10c` o `SGU-DEMO-10C`
5. Debe mostrar los 3 contenedores desglosados

### Paso 6: Toma la captura
- Presiona `Windows + Shift + S`
- Selecciona toda la ventana de Docker Desktop
- La captura se guarda en el portapapeles
- Pégalo en Paint o cualquier editor y guárdalo como imagen

---

## 📊 2. CAPTURA DEL PIPELINE JENKINS

### Paso 1: Abre Jenkins en tu navegador
- Ve a: `http://localhost:8080` (o la URL de tu Jenkins)

### Paso 2: Ve al pipeline
- Busca y haz clic en el pipeline llamado `SGU-DEMO-10C`

### Paso 3: Ejecuta el pipeline
- Haz clic en el botón **"Build Now"** o **"Construir ahora"**
- Espera a que termine (puede tardar 2-5 minutos)

### Paso 4: Abre el build más reciente
- Una vez terminado, haz clic en el número del build más reciente (ej: #1, #2, etc.)
- O busca en la lista de builds y haz clic en el más reciente

### Paso 5: Toma la captura
- Presiona `Windows + Shift + S`
- Captura toda la pantalla del build
- Debe mostrar:
  - Estado "Success" (verde) ✅
  - Fecha reciente
  - Todos los stages completados

---

## 🎥 3. VIDEO DEMO DEL FRONTEND

### Paso 1: Asegúrate de que todo esté corriendo
```bash
cd d:\pipeline\SGU-DEMO-10C
docker-compose ps
```
**Debe mostrar los 3 contenedores como "Up"**

### Paso 2: Abre el navegador
- Abre Chrome, Firefox o Edge
- Ve a: `http://localhost:3000`

### Paso 3: Inicia la grabación
**En Windows:**
- Presiona `Windows + G` (Game Bar)
- Haz clic en el botón de grabar (círculo rojo)
- O usa OBS Studio si lo tienes instalado

**Alternativa (Windows 10/11):**
- Presiona `Windows + Alt + R` para empezar a grabar

### Paso 4: Graba estas acciones (en orden):

1. **Muestra la página inicial:**
   - Muestra la tabla (puede estar vacía)

2. **Crear un usuario:**
   - Haz clic en "Nuevo Usuario"
   - Llena:
     - Nombre: "Juan Pérez"
     - Correo: "juan@example.com"
     - Teléfono: "555-1234"
   - Haz clic en "Crear"
   - Muestra que aparece en la tabla

3. **Crear otro usuario:**
   - Haz clic en "Nuevo Usuario" otra vez
   - Llena:
     - Nombre: "María García"
     - Correo: "maria@example.com"
     - Teléfono: "555-5678"
   - Haz clic en "Crear"
   - Muestra que aparece en la tabla

4. **Editar un usuario:**
   - Haz clic en "Editar" del primer usuario (Juan)
   - Cambia el nombre a "Juan Carlos Pérez"
   - Haz clic en "Actualizar"
   - Muestra que el cambio se refleja en la tabla

5. **Eliminar un usuario:**
   - Haz clic en "Eliminar" del segundo usuario (María)
   - Confirma en el diálogo
   - Muestra que desaparece de la tabla

6. **Verificar persistencia:**
   - Presiona `F5` para recargar la página
   - Muestra que el usuario que quedó (Juan) sigue ahí

### Paso 5: Detén la grabación
- Presiona `Windows + Alt + R` otra vez para detener
- O haz clic en el botón de detener en Game Bar

### Paso 6: Encuentra el video
- Los videos de Game Bar se guardan en:
  - `C:\Users\TU_USUARIO\Videos\Captures`
- O busca en "Videos" → "Captures"

---

## ✅ VERIFICACIÓN FINAL

### Verifica que tienes todo:

1. **Captura Docker Desktop:**
   ```bash
   # Verifica que los contenedores estén corriendo
   docker ps
   ```
   - [ ] Muestra 3 contenedores
   - [ ] Tienes la captura guardada

2. **Captura Jenkins:**
   - [ ] El pipeline terminó exitosamente
   - [ ] Tienes la captura del build guardada

3. **Video Demo:**
   - [ ] El video muestra crear, editar y eliminar
   - [ ] El video muestra la recarga de página
   - [ ] El video está guardado

---

## 🚨 SI ALGO NO FUNCIONA

### Si los contenedores no inician:
```bash
cd d:\pipeline\SGU-DEMO-10C
docker-compose down
docker-compose up -d
```

### Si el frontend no carga:
```bash
# Verifica los logs
docker-compose logs frontend
docker-compose logs backend

# Reinicia todo
docker-compose restart
```

### Si el pipeline falla:
1. Revisa los logs en Jenkins
2. Verifica que Docker esté corriendo:
   ```bash
   docker --version
   docker-compose --version
   ```

### Si no puedes grabar con Game Bar:
- Descarga OBS Studio: https://obsproject.com/
- O usa la herramienta de grabación de Windows:
  - Presiona `Windows + S`
  - Busca "Grabación de pantalla"

---

## 📝 RESUMEN DE COMANDOS PRINCIPALES

```bash
# 1. Ir a la carpeta del proyecto
cd d:\pipeline\SGU-DEMO-10C

# 2. Levantar los contenedores
docker-compose up -d

# 3. Verificar que estén corriendo
docker ps

# 4. Ver logs si hay problemas
docker-compose logs

# 5. Detener todo
docker-compose down

# 6. Reiniciar todo
docker-compose restart
```

---

## 🎯 CHECKLIST RÁPIDO

- [ ] Ejecuté `docker-compose up -d`
- [ ] Verifiqué con `docker ps` que hay 3 contenedores
- [ ] Tomé captura de Docker Desktop
- [ ] Ejecuté el pipeline en Jenkins
- [ ] Tomé captura del build exitoso
- [ ] Grabé el video del CRUD completo
- [ ] Guardé todos los archivos
