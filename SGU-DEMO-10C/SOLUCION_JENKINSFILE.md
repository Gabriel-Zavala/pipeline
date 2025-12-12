# Solución: Jenkins no encuentra el Jenkinsfile

## 🔍 Problema
Jenkins dice: `ERROR: Unable to find Jenkinsfile from git https://github.com/Gabriel-Zavala/pipeline.git`

## ✅ Solución Rápida (Opción 1)

### Cambiar el Script Path en Jenkins:

1. Abre Jenkins → Ve al pipeline `SGU-DEMO-10C`
2. Haz clic en **"Configure"** (Configurar)
3. Scroll hacia abajo hasta **"Pipeline"**
4. Busca el campo **"Script Path"**
5. Cambia de `Jenkinsfile` a: `SGU-DEMO-10C/Jenkinsfile`
6. Haz clic en **"Save"**
7. Ejecuta el pipeline de nuevo

---

## ✅ Solución Correcta (Opción 2 - Recomendada)

### Reorganizar el Repositorio:

Si subiste toda la carpeta `pipeline` a GitHub, necesitas reorganizar para que el `Jenkinsfile` esté en la raíz.

### Opción 2A: Crear un nuevo repositorio solo con SGU-DEMO-10C

1. **Crea un nuevo repositorio en GitHub:**
   - Ve a https://github.com/new
   - Nombre: `SGU-DEMO-10C`
   - NO marques README, .gitignore, ni licencia
   - Clic en "Create repository"

2. **En la terminal, ejecuta:**
```bash
cd d:\pipeline\SGU-DEMO-10C
git init
git add .
git commit -m "Initial commit: Proyecto SGU"
git remote add origin https://github.com/Gabriel-Zavala/SGU-DEMO-10C.git
git branch -M main
git push -u origin main
```

3. **Actualiza Jenkins:**
   - Ve a la configuración del pipeline
   - Cambia la **Repository URL** a: `https://github.com/Gabriel-Zavala/SGU-DEMO-10C.git`
   - Cambia el **Script Path** de vuelta a: `Jenkinsfile`
   - Guarda y ejecuta

---

### Opción 2B: Mover el contenido a la raíz del repositorio actual

Si quieres usar el repositorio `pipeline` que ya creaste:

1. **En la terminal, ejecuta:**
```bash
cd d:\pipeline
git init
git add SGU-DEMO-10C/
git commit -m "Move SGU-DEMO-10C to root"
git remote add origin https://github.com/Gabriel-Zavala/pipeline.git
git branch -M main
git push -u origin main --force
```

2. **En Jenkins:**
   - Cambia el **Script Path** a: `SGU-DEMO-10C/Jenkinsfile`
   - O mejor aún, mueve el contenido:
     - Copia todo de `SGU-DEMO-10C/` a la raíz de `pipeline/`
     - Sube de nuevo

---

## 🎯 Solución Más Simple (Recomendada)

**Crea un repositorio nuevo solo para este proyecto:**

```bash
# 1. Ve a la carpeta del proyecto
cd d:\pipeline\SGU-DEMO-10C

# 2. Inicializa Git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Proyecto SGU"

# 3. Crea un repositorio nuevo en GitHub llamado "SGU-DEMO-10C"
# (Ve a github.com y créalo)

# 4. Conecta y sube
git remote add origin https://github.com/Gabriel-Zavala/SGU-DEMO-10C.git
git branch -M main
git push -u origin main
```

**Luego en Jenkins:**
- Repository URL: `https://github.com/Gabriel-Zavala/SGU-DEMO-10C.git`
- Script Path: `Jenkinsfile` (sin la carpeta)
- Guarda y ejecuta

---

## ✅ Verificación

Después de aplicar la solución, verifica:

1. Ve a tu repositorio en GitHub
2. Debe mostrar el `Jenkinsfile` en la raíz (no dentro de una carpeta)
3. En Jenkins, el Script Path debe coincidir con la ubicación del archivo

---

## 🚨 Si sigue fallando:

1. Verifica que el Jenkinsfile esté en GitHub:
   - Ve a: https://github.com/Gabriel-Zavala/pipeline (o tu repo)
   - Debe verse el archivo `Jenkinsfile` en la lista

2. Verifica el nombre exacto:
   - Debe ser exactamente `Jenkinsfile` (sin extensión)
   - No `jenkinsfile` ni `JenkinsFile`

3. Prueba clonar el repositorio:
   ```bash
   git clone https://github.com/Gabriel-Zavala/pipeline.git
   cd pipeline
   ls -la Jenkinsfile  # Debe existir
   ```
