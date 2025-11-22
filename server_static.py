from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = 8000

with HTTPServer(("localhost", PORT), SimpleHTTPRequestHandler) as server:
    print(f"Servidor corriendo en http://localhost:{PORT}")
    server.serve_forever()
