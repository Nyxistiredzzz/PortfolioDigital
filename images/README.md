# Carpeta d'Imatges del Portfolio

Aquesta carpeta està destinada a guardar les captures de pantalla dels teus projectes.

## 📸 Com afegir les teves captures:

### 1. Formats recomanats:
- **Formats**: JPG, PNG, WebP
- **Mides**: 800x600px o superiors
- **Qualitat**: Alta resolució per a millor visualització

### 2. Nomenclatura suggerida:
- `project1-screenshot.jpg` - Pàgina Web Corporativa
- `project2-screenshot.jpg` - Sistema de Gestió d'Inventari  
- `project3-screenshot.jpg` - App de Gestió de Tasques
- `project4-screenshot.jpg` - Dashboard d'Analítica

### 3. Optimització:
- Comprimeix les imatges per reduir la mida dels fitxers
- Utilitza eines com TinyPNG o similars
- Mantén una bona qualitat visual

### 4. Substitució als fitxers HTML:

Quan tinguis les imatges, substitueix els placeholders a `index.html`:

**Canvia això:**
```html
<div class="screenshot-placeholder">
    <i class="fas fa-image"></i>
    <p>Afegeix captura del projecte 1</p>
    <span class="screenshot-hint">Substitueix per la teva imatge</span>
</div>
```

**Per això:**
```html
<img src="images/project1-screenshot.jpg" alt="Captura del Projecte 1" class="screenshot-image">
```

### 5. Tipus de captures recomanades:
- **Vista principal** de l'aplicació o web
- **Funcionalitats clau** en acció
- **Interfície d'usuari** més destacada
- **Resultats** o output del projecte

### 6. Exemples de bones captures:
- Pàgina d'inici de la web corporativa
- Dashboard principal del sistema d'inventari
- Interfície de gestió de tasques
- Gràfics i visualitzacions del dashboard d'analítica

## 💡 Consells addicionals:

- Fes captures en resolució completa
- Assegura't que es vegi bé el contingut
- Evita captures amb dades sensibles
- Utilitza dades d'exemple o de demostració
- Les captures han de representar el millor del teu treball

## 🔄 Actualització automàtica:

Un cop afegeixis les imatges i actualitzis l'HTML, es veuran automàticament al portfolio sense necessitat de canvis addicionals al CSS o JavaScript.