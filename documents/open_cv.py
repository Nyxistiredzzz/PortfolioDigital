#!/usr/bin/env python3
"""
Script alternatiu per obrir el CV HTML al navegador
L'usuari pot després fer "Imprimir > Guardar com PDF"
"""

import webbrowser
from pathlib import Path


def open_cv_in_browser():
    """Obra el CV HTML al navegador per a conversió manual a PDF"""

    html_file = Path(__file__).parent / "CV_Arnau_Barcelo.html"

    if not html_file.exists():
        print(f"❌ ERROR: No s'ha trobat {html_file}")
        return False

    # Converteix a URL absoluta
    file_url = html_file.as_uri()

    print("🌐 Obrint el CV al navegador...")
    print(f"📄 Fitxer: {html_file}")
    print(f"🔗 URL: {file_url}")
    print()
    print("📝 INSTRUCCIONS PER GENERAR EL PDF:")
    print("=" * 50)
    print("1. El navegador s'obrirà amb el teu CV")
    print("2. Fes clic dret > 'Imprimir' (o Ctrl+P)")
    print("3. Canvia el destí a 'Guardar com PDF'")
    print("4. Configura:")
    print("   - Mida: A4")
    print("   - Marges: Cap (None)")
    print("   - Més opcions > Gràfics de fons: ACTIVAT")
    print("5. Fes clic a 'Guardar'")
    print("6. Anomena'l: 'CV_Arnau_Barcelo.pdf'")
    print("7. Guarda'l a la carpeta 'documents'")
    print()

    try:
        webbrowser.open(file_url)
        print("✅ Navegador obert correctament!")
        return True
    except Exception as e:
        print(f"❌ Error obrint el navegador: {e}")
        return False


if __name__ == "__main__":
    print("🎨 Generador de CV HTML - Arnau Barceló")
    print("=" * 45)
    open_cv_in_browser()
