# Website für Larisa Martynova - Dolmetscherin

Professionelle Website für Dolmetscherdienste in Leipzig, erstellt mit Eleventy (11ty) und Tailwind CSS.

## Für nicht-technische Benutzer: Website-Inhalte bearbeiten

### Was Sie bearbeiten können

Sie können alle Texte auf der Website bearbeiten, indem Sie die Markdown-Dateien (`.md`) im Ordner `content/` ändern:

- **`content/index.md`** - Deutsche Hauptseite
- **`content/index_ru.md`** - Russische Hauptseite
- **`content/impressum.md`** - Impressum
- **`content/datenschutz.md`** - Datenschutzerklärung

### Wie Sie Texte bearbeiten

1. Öffnen Sie die gewünschte `.md`-Datei mit einem Texteditor (z.B. TextEdit, Notepad, oder besser: VS Code)
2. Ändern Sie nur den Text, **NICHT** die Zeilen zwischen `---` am Anfang der Datei
3. Behalten Sie die HTML-Tags wie `<section>`, `<div>` usw. bei - ändern Sie nur den Text dazwischen
4. Speichern Sie die Datei
5. Führen Sie `npm run build` aus (siehe unten)

### Beispiel für eine einfache Textänderung

**Vorher:**
```markdown
<h1 class="text-4xl">Beeidigte Dolmetscherin für die russische Sprache in Leipzig</h1>
```

**Nachher (nur den Text ändern):**
```markdown
<h1 class="text-4xl">Ihr neuer Text hier</h1>
```

### Foto hinzufügen

1. Speichern Sie Ihr Profilfoto als `larisa.jpg` im Ordner `src/assets/`
2. Empfohlene Größe: 400x400 Pixel oder ähnliches quadratisches Format
3. Das Foto wird automatisch auf der Website angezeigt

## Erstmalige Einrichtung

### Voraussetzungen

- **Node.js** muss installiert sein (Version 14 oder höher)
  - Download: https://nodejs.org/

### Installation

1. Öffnen Sie das Terminal/Eingabeaufforderung
2. Navigieren Sie zu diesem Projektordner:
   ```bash
   cd /pfad/zu/larisa
   ```
3. Installieren Sie die benötigten Pakete:
   ```bash
   npm install
   ```

## Website erstellen und veröffentlichen

### Website bauen (HTML erstellen)

```bash
npm run build
```

Dies erstellt die fertige Website im Ordner `_site/`.

### Website lokal ansehen (Vorschau)

```bash
npm run serve
```

Öffnen Sie dann http://localhost:8080 in Ihrem Browser.

### Website veröffentlichen

1. Führen Sie `npm run build` aus
2. Laden Sie den **gesamten Inhalt** des `_site/` Ordners auf Ihren Webserver hoch
3. Fertig!

## Projektstruktur

```
larisa/
├── content/              # Ihre bearbeitbaren Inhaltsdateien
│   ├── index.md         # Deutsche Hauptseite
│   ├── index_ru.md      # Russische Hauptseite
│   ├── impressum.md     # Impressum
│   └── datenschutz.md   # Datenschutz
├── src/
│   ├── _includes/       # HTML-Vorlagen (normalerweise nicht bearbeiten)
│   │   └── base.njk
│   └── assets/          # Bilder und Dateien
│       └── larisa.jpg   # Ihr Profilfoto hier hinzufügen
├── _site/               # Fertige Website (wird automatisch erstellt)
├── .eleventy.js         # 11ty Konfiguration
├── package.json         # Projekteinstellungen
└── README.md           # Diese Datei
```

## Häufige Aufgaben

### Text auf der deutschen Hauptseite ändern

1. Öffnen Sie `content/index.md`
2. Suchen Sie den Text, den Sie ändern möchten
3. Ändern Sie ihn
4. Führen Sie `npm run build` aus
5. Laden Sie `_site/` auf Ihren Server hoch

### Text auf der russischen Seite ändern

1. Öffnen Sie `content/index_ru.md`
2. Folgen Sie den gleichen Schritten wie oben

### Kontaktdaten aktualisieren

Ändern Sie die Kontaktdaten in **beiden** Dateien:
- `content/index.md` (Deutsch)
- `content/index_ru.md` (Russisch)

Suchen Sie nach dem Abschnitt "Kontakt" / "Контакты" und aktualisieren Sie:
- Telefonnummer
- E-Mail-Adresse
- Anschrift

### Impressum oder Datenschutz ändern

Bearbeiten Sie:
- `content/impressum.md` für Impressum
- `content/datenschutz.md` für Datenschutzerklärung

## Technische Details

### Verwendete Technologien

- **Eleventy (11ty)** - Static Site Generator
- **Tailwind CSS** - CSS Framework (über CDN)
- **Nunjucks** - Template Engine
- **Markdown** - Content-Format

### Befehle

- `npm install` - Installiert Abhängigkeiten
- `npm run build` - Erstellt die Website
- `npm run serve` - Startet lokalen Server zur Vorschau
- `npm start` - Alias für `npm run serve`

## Hilfe und Support

Bei Fragen oder Problemen:

1. Überprüfen Sie, ob Node.js korrekt installiert ist: `node --version`
2. Stellen Sie sicher, dass Sie `npm install` ausgeführt haben
3. Löschen Sie den `_site/` Ordner und führen Sie `npm run build` erneut aus

## Design-Anpassungen

Die Website verwendet Tailwind CSS. Farben und Stile können in den `.md`-Dateien angepasst werden, indem Sie die `class`-Attribute ändern. Beispiele:

- `bg-blue-600` - Hintergrundfarbe
- `text-white` - Textfarbe
- `py-16` - Padding (Abstand)
- `text-3xl` - Textgröße

Weitere Informationen: https://tailwindcss.com/docs

## Lizenz

Alle Rechte vorbehalten © Larisa Martynova
