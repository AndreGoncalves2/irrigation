from flask import Flask, render_template

## Função que busca a umidade no arquivo .txt (simulação de dados que seria fornecido pelo Arduino)
def getNewMoisture():
    moisture = open('umidade.txt', 'r')
    for line in moisture:
        newMoisture = line
        
    return newMoisture

## Inicio do aplicativo 
app = Flask(__name__)

##  Inserção de dados lida
@app.route('/')
def index():
    return render_template('index.html', name = getNewMoisture())

## Simulação da ativação da bomba (Criação do arquivo txt)
@app.route("/open", methods=["POST"])
def closeButton():
    with open("at.txt", "w") as arquivo:
        arquivo.write("ativado")
        
    return render_template('index.html', name = getNewMoisture())

## Simulação da desativação da bomba (Criação do arquivo txt)
@app.route("/close", methods=["POST"])
def openButton():
    with open("at.txt", "w") as arquivo:
        arquivo.write("desativado")
   
    return render_template('index.html', name = getNewMoisture())

app.run(debug=True)
    
