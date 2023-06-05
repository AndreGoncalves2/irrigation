from flask import Flask, render_template
import time

umidade = open('umidade.txt', 'r')
for linha in umidade:
    print(linha)

app = Flask(__name__)

@app.route('/')
def index():
    umidade = open('umidade.txt', 'r')
    for linha in umidade:
        print(linha)
    nome = linha
    return render_template('index.html', name=nome)

@app.route("/open", methods=["POST"])
def closeButton():
    with open("at.txt", "w") as arquivo:
        arquivo.write("ativado")
    nome = linha
    return render_template('index.html', name=nome)

@app.route("/close", methods=["POST"])
def openButton():
    with open("at.txt", "w") as arquivo:
        arquivo.write("desativado")
    nome = linha
    return render_template('index.html', name=nome)

if __name__ == '__main__':
    app.run(debug=True)
    