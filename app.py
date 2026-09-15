from flask import Flask, render_template

app = Flask(__name__)

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