from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
import urllib.parse
BASE=Path(__file__).parent
class H(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin','*')
        self.send_header('Access-Control-Allow-Methods','POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers','content-type')
        self.end_headers()
    def do_POST(self):
        n=int(self.headers.get('content-length','0'))
        data=self.rfile.read(n)
        name=urllib.parse.urlparse(self.path).path.strip('/') or 'dump'
        safe=''.join(c if c.isalnum() or c in '-_.' else '_' for c in name)
        (BASE/f'{safe}.md').write_bytes(data)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin','*')
        self.end_headers()
        self.wfile.write(b'ok')
    def log_message(self, fmt, *args):
        print(self.address_string(), fmt%args, flush=True)
HTTPServer(('127.0.0.1', 8877), H).serve_forever()
