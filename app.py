from flask import Flask, render_template, make_response

app = Flask(__name__)

@app.after_request
def add_header(response):
    # Instruí a Vercel a criar cache na borda (Edge Network) por 1h
    response.cache_control.s_maxage = 3600
    # Instruí o navegador do usuário a guardar o cache por 5 minutos
    response.cache_control.max_age = 300
    return response
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/vendas')
def vendas():
    return render_template('vendas.html')

@app.route('/locacoes')
def locacoes():
    return render_template('locacoes.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

if __name__ == "__main__":
    app.run(debug=True)