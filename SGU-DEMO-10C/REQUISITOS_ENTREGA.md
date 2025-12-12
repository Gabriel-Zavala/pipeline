# Requisitos para la Entrega - Actividad 05

## 📋 Lo que necesitas entregar:

1. ✅ **Captura de Docker Desktop** - Stack desglosado con contenedores
2. ✅ **Captura del Pipeline Jenkins** - Despliegue reciente y exitoso
3. ✅ **Video Demo** - Funcionamiento completo del CRUD

---

## 📸 1. Captura de Docker Desktop

### Pasos para obtenerla:

1. **Asegúrate de que los contenedores estén corriendo:**
   ```bash
   cd SGU-DEMO-10C
   docker-compose up -d
   ```

2. **Verifica que los 3 contenedores estén activos:**
   ```bash
   docker ps
   ```
   Debes ver:
   - `sgu-database`
   - `sgu-backend`
   - `sgu-frontend`

3. **Abre Docker Desktop:**
   - Abre la aplicación Docker Desktop en tu computadora
   - Ve a la pestaña **"Containers"** o **"Contenedores"**

4. **Busca tu compose stack:**
   - Busca el grupo/compose llamado `SGU-DEMO-10C` o `sgu-demo-10c`
   - Debe mostrar los 3 contenedores desglosados

5. **Toma la captura:**
   - Presiona `Windows + Shift + S` (Windows) o `Cmd + Shift + 4` (Mac)
   - Captura toda la ventana de Docker Desktop
   - Asegúrate de que se vean:
     - ✅ El nombre del compose stack
     - ✅ Los 3 contenedores: `sgu-database`, `sgu-backend`, `sgu-frontend`
     - ✅ El estado "Running" en cada uno
     - ✅ Los puertos mapeados

### Ejemplo de lo que debe verse:
```
📦 SGU-DEMO-10C (compose)
  ├── 🟢 sgu-database (Running) - Port: 3306
  ├── 🟢 sgu-backend (Running) - Port: 8080
  └── 🟢 sgu-frontend (Running) - Port: 3000
```

---

## 📊 2. Captura del Pipeline Jenkins

### Pasos para obtenerla:

1. **Ejecuta el pipeline en Jenkins:**
   - Abre Jenkins en tu navegador
   - Ve al pipeline `SGU-DEMO-10C`
   - Haz clic en **"Build Now"** o **"Construir ahora"**
   - Espera a que termine (debe ser exitoso ✅)

2. **Abre el build más reciente:**
   - Haz clic en el número del build más reciente (ej: #1, #2, etc.)
   - O ve directamente a la página del build

3. **Toma la captura:**
   - Captura la pantalla completa mostrando:
     - ✅ El estado **"Success"** (verde) o **"Éxito"**
     - ✅ La fecha y hora reciente (debe ser de hoy o ayer)
     - ✅ Todos los stages completados:
       - Checkout
       - Build Backend
       - Build Frontend
       - Stop Previous Containers
       - Start Services
       - Wait for Services
       - Health Check
     - ✅ El tiempo de ejecución

### Ejemplo de lo que debe verse:
```
Pipeline: SGU-DEMO-10C
Build #3 - Success ✅
Fecha: [Fecha reciente]

Stages:
✅ Checkout
✅ Build Backend
✅ Build Frontend
✅ Stop Previous Containers
✅ Start Services
✅ Wait for Services
✅ Health Check

Tiempo: 2 min 15 seg
```

---

## 🎥 3. Video Demo del Frontend

### Pasos para grabarlo:

1. **Prepara el entorno:**
   ```bash
   # Asegúrate de que todo esté corriendo
   docker-compose ps
   ```

2. **Abre el frontend:**
   - Abre tu navegador
   - Ve a: http://localhost:3000

3. **Herramientas para grabar:**
   - **Windows:** 
     - `Windows + G` (Game Bar) → Botón de grabar
     - OBS Studio (gratis)
     - ShareX (gratis)
   - **Mac:**
     - `Cmd + Shift + 5` (Grabación de pantalla)
   - **Linux:**
     - OBS Studio
     - SimpleScreenRecorder

4. **Inicia la grabación antes de hacer las acciones**

5. **Demuestra el CRUD completo (en este orden):**

   **a) Mostrar la tabla inicial:**
   - Muestra la página principal
   - Muestra la tabla (puede estar vacía o con datos)
   
   **b) Crear un usuario:**
   - Haz clic en "Nuevo Usuario"
   - Llena el formulario:
     - Nombre Completo: "Juan Pérez"
     - Correo Electrónico: "juan@example.com"
     - Número de Teléfono: "555-1234"
   - Haz clic en "Crear"
   - Verifica que aparece en la tabla
   
   **c) Crear otro usuario (opcional pero recomendado):**
   - Crea un segundo usuario para tener más datos
   
   **d) Editar un usuario:**
   - Haz clic en "Editar" en uno de los usuarios
   - Modifica algún campo (ej: cambia el nombre)
   - Haz clic en "Actualizar"
   - Verifica que los cambios se reflejan en la tabla
   
   **e) Eliminar un usuario:**
   - Haz clic en "Eliminar" en uno de los usuarios
   - Confirma la eliminación
   - Verifica que el usuario desaparece de la tabla
   
   **f) Verificar persistencia:**
   - Recarga la página (F5)
   - Verifica que los datos siguen ahí (los que no eliminaste)

6. **Duración recomendada:** 1-2 minutos máximo

7. **Detén la grabación**

8. **Guarda el video:**
   - Formato: MP4 (preferible)
   - Nombre sugerido: `SGU-DEMO-10C-Demo.mp4`

---

## ✅ Checklist Final

Antes de entregar, verifica:

- [ ] La captura de Docker Desktop muestra los 3 contenedores corriendo
- [ ] La captura de Jenkins muestra un build exitoso y reciente
- [ ] El video muestra todas las operaciones CRUD funcionando
- [ ] El video es claro y se entiende lo que estás haciendo
- [ ] Los nombres de los contenedores coinciden con los requeridos:
  - `sgu-database`
  - `sgu-backend`
  - `sgu-frontend`

---

## 🚨 Solución Rápida de Problemas

### Si Docker Desktop no muestra el compose stack:
```bash
# Asegúrate de estar en la carpeta correcta
cd SGU-DEMO-10C

# Levanta los servicios
docker-compose up -d

# Verifica
docker-compose ps
```

### Si el pipeline falla:
1. Revisa los logs en Jenkins
2. Verifica que Docker esté corriendo
3. Prueba ejecutar manualmente:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

### Si el frontend no carga:
1. Verifica que los contenedores estén corriendo:
   ```bash
   docker ps
   ```
2. Verifica los logs:
   ```bash
   docker-compose logs frontend
   docker-compose logs backend
   ```

---

## 📝 Notas Adicionales

- **Fecha del pipeline:** Debe ser reciente (hoy o máximo ayer)
- **Calidad del video:** No necesita ser 4K, pero debe ser claro
- **Duración del video:** 1-2 minutos es suficiente
- **Formato de entrega:** Puedes subir las capturas y el video a Google Drive, OneDrive, o directamente a la plataforma de entrega
