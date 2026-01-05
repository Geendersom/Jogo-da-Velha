#!/usr/bin/env python3
"""
Servidor HTTP simples para executar o jogo da velha no navegador.
Execute este arquivo e acesse http://localhost:8000 no navegador.
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Servidor iniciado em http://localhost:{PORT}")
        print(f"📂 Servindo arquivos de: {os.getcwd()}")
        print(f"🌐 Abrindo navegador automaticamente...")
        print(f"⏹️  Pressione Ctrl+C para parar o servidor\n")
        
        # Abrir navegador automaticamente
        webbrowser.open(f'http://localhost:{PORT}/index.html')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Servidor encerrado.")

if __name__ == "__main__":
    main()
