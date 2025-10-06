#!/usr/bin/env python3
"""
Script per convertir el CV HTML a PDF
Requereix: pip install weasyprint
"""

import os
from pathlib import Path

try:
    from weasyprint import HTML, CSS
    from weasyprint.text.fonts import FontConfiguration
except ImportError:
    print("ERROR: weasyprint no està instal·lat.")
    print("Instal·la'l amb: pip install weasyprint")
    exit(1)


def convert_html_to_pdf():
    """Converteix el CV HTML a PDF"""

    # Paths
    html_file = Path(__file__).parent / "CV_Arnau_Barcelo.html"
    pdf_file = Path(__file__).parent / "CV_Arnau_Barcelo.pdf"

    if not html_file.exists():
        print(f"ERROR: No s'ha trobat {html_file}")
        return False

    try:
        # CSS addicional per a la impressió
        print_css = CSS(
            string="""
            @page {
                size: A4;
                margin: 0;
            }
            body {
                margin: 0;
                background: white !important;
            }
            .cv-container {
                width: 210mm;
                height: 297mm;
                margin: 0;
                background: white;
            }
        """
        )

        print("Convertint HTML a PDF...")

        # Font configuration
        font_config = FontConfiguration()

        # Converteix HTML a PDF
        html_doc = HTML(filename=str(html_file))
        html_doc.write_pdf(
            str(pdf_file), stylesheets=[print_css], font_config=font_config
        )

        print(f"✅ PDF creat correctament: {pdf_file}")
        print(f"📄 Mida del fitxer: {pdf_file.stat().st_size / 1024:.1f} KB")

        return True

    except Exception as e:
        print(f"❌ Error convertint a PDF: {e}")
        return False


if __name__ == "__main__":
    print("🔄 Generador de CV PDF - Arnau Barceló")
    print("=" * 40)

    success = convert_html_to_pdf()

    if success:
        print("\n🎉 CV generat correctament!")
        print("📍 Ubicació: documents/CV_Arnau_Barcelo.pdf")
        print("🔗 Ja pots descarregar-lo des del portfolio!")
    else:
        print("\n❌ No s'ha pogut generar el PDF")
        print("💡 Comprova que weasyprint estigui instal·lat:")
        print("   pip install weasyprint")
